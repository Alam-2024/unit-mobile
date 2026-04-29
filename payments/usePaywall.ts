/**
 * usePaywall.ts
 *
 * Paywall hook. In __DEV__ mode it uses hardcoded mock products and simulates
 * checkout by writing entitlements directly to Firestore (bypassing Stripe and
 * Cloud Functions). In production it reads from the firestore-stripe-payments
 * extension and opens real Stripe Checkout.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import * as WebBrowser from "expo-web-browser";
import { Alert } from "react-native";

import { authFirebase, db } from "@/firebase/fireConfig";
import { useAppContext } from "@/hooks/useContextHook";
import {
  StripeProduct,
  StripePrice,
  ActiveSubscription,
  CheckoutSession,
} from "./types";
import { MOCK_PRODUCTS, MOCK_PLAN_ENTITLEMENTS } from "./mockProducts";

// Deep-link scheme must match app.json > expo.scheme
const SUCCESS_URL = "myapp://paywall/success";
const CANCEL_URL  = "myapp://paywall/cancel";

export function usePaywall() {
  const { user, refreshClaims, effectivePlan } = useAppContext();

  const [products, setProducts] = useState<StripeProduct[]>([]);
  const [plansLoading, setPlansLoading] = useState(true);
  const [subscription, setSubscription] = useState<ActiveSubscription | null>(null);
  const [opening, setOpening] = useState(false);

  // ─── Load products ───────────────────────────────────────────────────────
  useEffect(() => {
    if (__DEV__) {
      // Use hardcoded mock products — no Firestore read needed.
      setProducts(MOCK_PRODUCTS);
      setPlansLoading(false);
      return;
    }

    const productsQ = query(
      collection(db, "products"),
      where("active", "==", true)
    );
    const unsub = onSnapshot(productsQ, async (snap) => {
      const out: StripeProduct[] = [];
      for (const productDoc of snap.docs) {
        const pricesSnap = await getDocs(
          query(
            collection(productDoc.ref, "prices"),
            where("active", "==", true)
          )
        );
        const prices: StripePrice[] = pricesSnap.docs.map(
          (d) => ({ id: d.id, ...(d.data() as Omit<StripePrice, "id">) })
        );
        out.push({
          id: productDoc.id,
          ...(productDoc.data() as Omit<StripeProduct, "id" | "prices">),
          prices,
        });
      }
      out.sort(
        (a, b) =>
          Number(a.metadata?.order ?? 999) - Number(b.metadata?.order ?? 999)
      );
      setProducts(out);
      setPlansLoading(false);
    });
    return unsub;
  }, []);

  // ─── Subscription listener ────────────────────────────────────────────────
  useEffect(() => {
    if (__DEV__ || !user?.uid) {
      setSubscription(null);
      return;
    }
    const subsQ = query(
      collection(db, "customers", user.uid, "subscriptions"),
      where("status", "in", ["trialing", "active"])
    );
    const unsub = onSnapshot(subsQ, (snap) => {
      if (snap.empty) {
        setSubscription(null);
        return;
      }
      const first = snap.docs[0];
      setSubscription({
        id: first.id,
        ...(first.data() as Omit<ActiveSubscription, "id">),
      });
    });
    return unsub;
  }, [user?.uid]);

  // ─── Checkout ─────────────────────────────────────────────────────────────
  const openCheckout = useCallback(
    async (priceId: string) => {
      if (!user?.uid) throw new Error("Must be signed in");

      if (__DEV__) {
        return simulateCheckout(priceId, user.uid);
      }

      setOpening(true);
      try {
        const ref = await addDoc(
          collection(db, "customers", user.uid, "checkout_sessions"),
          {
            price: priceId,
            mode: "subscription",
            success_url: SUCCESS_URL,
            cancel_url: CANCEL_URL,
            allow_promotion_codes: true,
          }
        );
        const url = await waitForCheckoutUrl(user.uid, ref.id);
        const result = await WebBrowser.openAuthSessionAsync(url, SUCCESS_URL);
        if (result.type === "success") {
          await authFirebase.currentUser?.getIdToken(true);
          await refreshClaims();
        }
        return result;
      } finally {
        setOpening(false);
      }
    },
    [user?.uid, refreshClaims]
  );

  // ─── Customer portal ──────────────────────────────────────────────────────
  const openCustomerPortal = useCallback(async () => {
    if (__DEV__) {
      Alert.alert(
        "Dev mode",
        "Customer portal is not available in dev simulation. Use the Dev Simulator tab to change your plan.",
      );
      return;
    }
    const functions = getFunctions(undefined, "us-central1");
    const callable = httpsCallable<{ returnUrl: string }, { url: string }>(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );
    const { data } = await callable({ returnUrl: SUCCESS_URL });
    await WebBrowser.openAuthSessionAsync(data.url, SUCCESS_URL);
    await authFirebase.currentUser?.getIdToken(true);
    await refreshClaims();
  }, [refreshClaims]);

  // ─── Dev-only: simulate a successful checkout ─────────────────────────────
  const simulateCheckout = useCallback(
    (priceId: string, uid: string): Promise<void> => {
      return new Promise((resolve) => {
        // Find which product this price belongs to.
        const product = MOCK_PRODUCTS.find((p) =>
          p.prices.some((pr) => pr.id === priceId)
        );
        const planTier = product?.metadata?.plan ?? "basic";
        const planName = product?.name ?? "Basic";
        const price = product?.prices.find((p) => p.id === priceId);
        const amount = price ? `$${(price.unit_amount / 100).toFixed(2)}/mo` : "";

        Alert.alert(
          "🧪 DEV — Simulate Payment",
          `Plan: ${planName} (${amount})\n\nThis simulates a successful Stripe payment. Entitlements will be written directly to Firestore (no real charge).`,
          [
            {
              text: "Cancel",
              style: "cancel",
              onPress: () => resolve(),
            },
            {
              text: "✅ Confirm purchase",
              onPress: async () => {
                setOpening(true);
                try {
                  const entitlements = MOCK_PLAN_ENTITLEMENTS[planTier] ?? [];
                  await updateDoc(doc(db, "users-data", uid), {
                    plan: planTier,
                    entitlements,
                  });
                  // refreshClaims will re-read JWT (won't change in dev, but
                  // the Firestore onSnapshot already updated userDoc so
                  // canAccessUnit now returns true via the Firestore fallback).
                  await refreshClaims();
                  Alert.alert(
                    "✅ Success",
                    `You now have ${planName} access! ${entitlements.length} grade${entitlements.length !== 1 ? "s" : ""} unlocked.`
                  );
                } catch (e: any) {
                  Alert.alert("Error", e?.message ?? "Could not apply plan");
                } finally {
                  setOpening(false);
                  resolve();
                }
              },
            },
          ]
        );
      });
    },
    [refreshClaims]
  );

  // ─── Derived state ────────────────────────────────────────────────────────
  // effectivePlan already merges JWT claims + Firestore — works in both
  // dev simulation and production.
  const currentPlan = effectivePlan;

  const hasActiveSubscription = __DEV__
    ? currentPlan !== "free"
    : !!subscription;

  return useMemo(
    () => ({
      products,
      plansLoading,
      openCheckout,
      openCustomerPortal,
      opening,
      subscription,
      hasActiveSubscription,
      currentPlan,
    }),
    [
      products,
      plansLoading,
      openCheckout,
      openCustomerPortal,
      opening,
      subscription,
      hasActiveSubscription,
      currentPlan,
    ]
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function waitForCheckoutUrl(uid: string, sessionId: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const ref = doc(db, "customers", uid, "checkout_sessions", sessionId);
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data() as CheckoutSession | undefined;
      if (!data) return;
      if (data.error) {
        unsub();
        reject(new Error(data.error.message));
      }
      if (data.url) {
        unsub();
        resolve(data.url);
      }
    });
    setTimeout(() => {
      unsub();
      reject(new Error("Timed out waiting for Stripe checkout URL"));
    }, 15_000);
  });
}
