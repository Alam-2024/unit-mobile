/**
 * useContextHook.tsx
 *
 * Auth + entitlements context.
 *
 * Source-of-truth changes:
 *   • `onAuthStateChanged` from firebase/auth is the ONLY source for whether
 *     the user is signed in. We never derive auth state from AsyncStorage.
 *   • Role and entitlements are read from the user's ID token CLAIMS — never
 *     from Firestore document fields written by the client. Claims are signed
 *     by Firebase and tamper-proof.
 *   • The user document (display fields, name, etc.) is subscribed to via
 *     `onSnapshot` and merged into the context. We DO NOT merge sensitive
 *     fields — only the public profile.
 *   • Sensitive tokens (refresh token never leaves Firebase SDK; ID token
 *     refreshed automatically). For any extra data we keep on disk we use
 *     expo-secure-store, not AsyncStorage.
 *   • Sign out clears Firebase session + local cache + secure store.
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  onAuthStateChanged,
  onIdTokenChanged,
  signOut as fbSignOut,
  User as FirebaseUser,
  getIdTokenResult,
} from "firebase/auth";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import * as SecureStore from "expo-secure-store";

import { authFirebase, db } from "@/firebase/fireConfig";
import { PublicProfile, StoredUsers } from "@/interfaces/user/IUser";

// ---------------------------- Types ----------------------------

export type Role = "student" | "teacher" | "admin" | "superadmin";
export type Plan = "free" | "basic" | "pro" | "institution";

export interface AuthClaims {
  role: Role;
  plan: Plan;
  entitlements: string[]; // e.g. ["pk3","pk4","kg",...]
  manualOverride?: string[]; // optional admin grant
}

interface AuthContextValue {
  initializing: boolean;
  /** Auth identity (immutable, from Firebase). Use this for auth checks. */
  user: PublicProfile | null;
  /**
   * Firestore /users-data doc for the signed-in user.
   * Authorization should NOT depend on this directly — use the `effective*`
   * fields or `canAccessUnit()` which merge both sources.
   */
  userDoc: StoredUsers | null;
  /**
   * Raw JWT custom claims — set by Firebase Admin SDK (Cloud Functions).
   * May lag behind Firestore while Cloud Functions aren't deployed or until
   * the token rotates (~1 h). Prefer `effective*` fields for UI display.
   */
  claims: AuthClaims | null;
  /**
   * Effective role: JWT claims take priority; falls back to Firestore doc.
   * This is what the UI should display and business logic should use.
   */
  effectiveRole: Role;
  /**
   * Effective plan: JWT claims take priority; falls back to Firestore doc.
   */
  effectivePlan: Plan;
  /**
   * Effective entitlements: union of JWT claims + Firestore doc entitlements.
   * Deduplicated. Safe to use even when Cloud Functions aren't deployed.
   */
  effectiveEntitlements: string[];
  /** True when there's a Firebase user AND email is verified. */
  isAuthenticated: boolean;
  isAdmin: boolean;
  /** Forces a refresh of the ID token (e.g. after a Stripe webhook updates claims). */
  refreshClaims: () => Promise<void>;
  signOut: () => Promise<void>;
  /** True if the user has access to the given unit slug. */
  canAccessUnit: (unitSlug: string) => boolean;
}

const DEFAULT_CLAIMS: AuthClaims = {
  role: "student",
  plan: "free",
  entitlements: [],
};

const AuthContext = createContext<AuthContextValue>({
  initializing: true,
  user: null,
  userDoc: null,
  claims: null,
  effectiveRole: "student",
  effectivePlan: "free",
  effectiveEntitlements: [],
  isAuthenticated: false,
  isAdmin: false,
  refreshClaims: async () => {},
  signOut: async () => {},
  canAccessUnit: () => false,
});

// ---------------------------- Helpers ----------------------------

async function readClaims(
  fbUser: FirebaseUser,
  force = false,
): Promise<AuthClaims> {
  const tokenResult = await getIdTokenResult(fbUser, force);
  const c = tokenResult.claims as Record<string, unknown>;
  return {
    role: (c.role as Role) ?? "student",
    plan: (c.plan as Plan) ?? "free",
    entitlements: Array.isArray(c.entitlements)
      ? (c.entitlements as string[])
      : [],
    manualOverride: Array.isArray(c.manualOverride)
      ? (c.manualOverride as string[])
      : undefined,
  };
}

function toPublicProfile(u: FirebaseUser): PublicProfile {
  return {
    uid: u.uid,
    email: u.email,
    emailVerified: u.emailVerified,
    displayName: u.displayName,
    photoUrl: u.photoURL,
  };
}

// ---------------------------- Provider ----------------------------

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [initializing, setInitializing] = useState(true);
  console.log("🚀 ~ AppProvider ~ initializing:", initializing);
  const [user, setUser] = useState<PublicProfile | null>(null);
  console.log("🚀 ~ AppProvider ~ user:", user);
  const [userDoc, setUserDoc] = useState<StoredUsers | null>(null);
  console.log("🚀 ~ AppProvider ~ userDoc:", userDoc);
  const [claims, setClaims] = useState<AuthClaims | null>(null);
  console.log("🚀 ~ AppProvider ~ claims:", claims);

  // Single source of truth: Firebase auth.
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(authFirebase, async (fbUser) => {
      if (!fbUser) {
        setUser(null);
        setClaims(null);
        setInitializing(false);
        return;
      }
      try {
        const [profile, c] = await Promise.all([
          Promise.resolve(toPublicProfile(fbUser)),
          readClaims(fbUser, /* force */ true),
        ]);
        console.log("🚀 ~ AppProvider ~ profile:", profile);
        setUser(profile);
        setClaims(c);
      } catch {
        setUser(toPublicProfile(fbUser));
        setClaims(DEFAULT_CLAIMS);
      } finally {
        setInitializing(false);
      }
    });
    return unsubAuth;
  }, []);

  // Re-read claims every time Firebase rotates the ID token (~1h or after
  // setCustomUserClaims + getIdToken(true) is requested elsewhere).
  useEffect(() => {
    const unsub = onIdTokenChanged(authFirebase, async (fbUser) => {
      if (!fbUser) return;
      try {
        const c = await readClaims(fbUser, false);
        setClaims(c);
      } catch {
        /* keep current claims */
      }
    });
    return unsub;
  }, []);

  // Subscribe to the public profile doc (display name, photo, etc.) and the
  // Firestore user record. The doc is informational; authorization uses
  // claims. We also expose the doc as `userDoc` for legacy components that
  // still read pk3/pk4/etc. directly.
  useEffect(() => {
    if (!user?.uid) {
      setUserDoc(null);
      return;
    }
    const ref = doc(db, "users-data", user.uid);
    const unsub = onSnapshot(ref, async (snap) => {
      const data = snap.data();
      if (!data) {
        // Document doesn't exist — user was created before Cloud Functions
        // were deployed (or registered directly via Auth).
        // Seed a minimal profile so the rest of the app works correctly.
        try {
          const fbUser = authFirebase.currentUser;
          await setDoc(ref, {
            userUid: user.uid,
            email: user.email ?? "",
            name: fbUser?.displayName ?? user.email ?? "",
            role: "student",
            plan: "free",
            entitlements: [],
            baned: false,
          });
          // The above write triggers onSnapshot again with the new data.
        } catch {
          setUserDoc(null);
        }
        return;
      }
      setUserDoc({ id: snap.id, ...(data as Omit<StoredUsers, "id">) });
      setUser((prev) =>
        prev
          ? {
              ...prev,
              displayName: (data.name as string) ?? prev.displayName,
              photoUrl: (data.photoUrl as string) ?? prev.photoUrl,
            }
          : prev,
      );
    });
    return unsub;
  }, [user?.uid]);

  const refreshClaims = useCallback(async () => {
    const fbUser = authFirebase.currentUser;
    if (!fbUser) return;
    const c = await readClaims(fbUser, true);
    setClaims(c);
  }, []);

  const signOut = useCallback(async () => {
    try {
      await fbSignOut(authFirebase);
    } finally {
      // Clean any auxiliary data we might have stashed.
      try {
        await SecureStore.deleteItemAsync("stripe-customer-id");
      } catch {
        /* noop */
      }
      setUser(null);
      setUserDoc(null);
      setClaims(null);
    }
  }, []);

  const canAccessUnit = useCallback(
    (unitSlug: string) => {
      if (!user) return false;
      // JWT claims take priority (signed by Firebase, tamper-proof).
      if (claims) {
        if (claims.role === "admin" || claims.role === "superadmin") return true;
        const grants = new Set([
          ...claims.entitlements,
          ...(claims.manualOverride ?? []),
        ]);
        if (grants.has(unitSlug)) return true;
      }
      // Firestore fallback — works in dev simulation (no Cloud Functions deployed)
      // and bridges the gap until the JWT cache refreshes (~1 h).
      if (userDoc) {
        if (userDoc.role === "admin" || userDoc.role === "superadmin") return true;
        const firestoreGrants = new Set(userDoc.entitlements ?? []);
        if (firestoreGrants.has(unitSlug)) return true;
      }
      return false;
    },
    [user, claims, userDoc],
  );

  // ── Effective values: JWT claims are source-of-truth in production.
  //    Firestore doc is the fallback for dev simulation and the ~1 h window
  //    after a Cloud Function updates claims but before the JWT rotates.
  //    Rule: claims win if they were actually set (non-default values);
  //    otherwise Firestore wins. This prevents the JWT default "student/free"
  //    from overriding a Firestore "admin/pro" set via Dev Simulator.

  const effectiveRole: Role = (() => {
    // JWT has a real (non-default) role → use it
    if (claims?.role && claims.role !== "student") return claims.role;
    // Firestore has a promoted role → use it (dev sim or manual Console edit)
    const fsRole = userDoc?.role as Role | undefined;
    if (fsRole && (fsRole === "admin" || fsRole === "superadmin" || fsRole === "teacher"))
      return fsRole;
    return claims?.role ?? "student";
  })();

  const effectivePlan: Plan = (() => {
    if (claims?.plan && claims.plan !== "free") return claims.plan;
    const fsPlan = userDoc?.plan as Plan | undefined;
    if (fsPlan && fsPlan !== "free") return fsPlan;
    return claims?.plan ?? "free";
  })();

  const effectiveEntitlements: string[] = (() => {
    // Union of both sources — no duplicates.
    const set = new Set<string>([
      ...(claims?.entitlements ?? []),
      ...(claims?.manualOverride ?? []),
      ...(userDoc?.entitlements ?? []),
    ]);
    return [...set];
  })();

  const isAdmin =
    effectiveRole === "admin" || effectiveRole === "superadmin";

  const value = useMemo<AuthContextValue>(
    () => ({
      initializing,
      user,
      userDoc,
      claims,
      effectiveRole,
      effectivePlan,
      effectiveEntitlements,
      isAuthenticated: !!user && user.emailVerified,
      isAdmin,
      refreshClaims,
      signOut,
      canAccessUnit,
    }),
    [
      initializing,
      user,
      userDoc,
      claims,
      effectiveRole,
      effectivePlan,
      effectiveEntitlements,
      isAdmin,
      refreshClaims,
      signOut,
      canAccessUnit,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAppContext = () => useContext(AuthContext);
