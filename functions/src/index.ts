/**
 * Cloud Functions skeleton.
 *
 * If you install the official `firestore-stripe-payments` Firebase Extension
 * you can SKIP `createCheckoutSession` and `stripeWebhook` — the extension
 * already provides them. Keep:
 *
 *   • `inviteUser`       — admin creates a user without losing their session.
 *   • `beforeUserCreate` — Auth blocking trigger that enforces email allowlist
 *                         and seeds initial role/plan/entitlements as claims.
 *   • `syncClaimsOnSubChange` — re-derives `entitlements` claims when a
 *                         subscription is created/updated/deleted.
 *
 * Deploy:
 *   firebase deploy --only functions
 */

import { onCall, HttpsError } from "firebase-functions/v2/https";
import { onDocumentWritten } from "firebase-functions/v2/firestore";
import { beforeUserCreated } from "firebase-functions/v2/identity";
import * as admin from "firebase-admin";

admin.initializeApp();
const db = admin.firestore();

// ----------------------------------------------------------------------------
// 1. inviteUser — callable only by admins. Creates an Auth user + Firestore
//    profile, then sends a password-reset link as the invitation. Does NOT
//    affect the caller's session.
// ----------------------------------------------------------------------------
export const inviteUser = onCall<{
  email: string;
  displayName?: string;
  initialPlan?: "free" | "basic" | "pro" | "institution";
}>({ cors: false, region: "us-central1" }, async (req) => {
  if (!req.auth) throw new HttpsError("unauthenticated", "Sign in required.");
  const callerRole = (req.auth.token.role as string) ?? "student";
  if (callerRole !== "admin" && callerRole !== "superadmin") {
    throw new HttpsError("permission-denied", "Admin access required.");
  }

  const { email, displayName, initialPlan = "free" } = req.data;
  if (!email) throw new HttpsError("invalid-argument", "Email is required.");

  // 1. Create user
  const userRecord = await admin.auth().createUser({
    email,
    displayName,
    emailVerified: false,
    disabled: false,
  });

  // 2. Set initial claims
  await admin.auth().setCustomUserClaims(userRecord.uid, {
    role: "student",
    plan: initialPlan,
    entitlements: defaultEntitlementsForPlan(initialPlan),
  });

  // 3. Seed Firestore profile (server-side write bypasses rules)
  await db.collection("users-data").doc(userRecord.uid).set({
    userUid: userRecord.uid,
    email,
    name: displayName ?? "",
    role: "student",
    plan: initialPlan,
    entitlements: defaultEntitlementsForPlan(initialPlan),
    baned: false,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // 4. Generate a password reset link as the invitation.
  const link = await admin.auth().generatePasswordResetLink(email);

  // (Optional) email it via SendGrid / Mailgun. For now, return it to admin.
  return { uid: userRecord.uid, invitationLink: link };
});

// ----------------------------------------------------------------------------
// 2. beforeUserCreated — Auth blocking trigger. Enforces email allowlist
//    server-side and seeds default claims for self-signups.
// ----------------------------------------------------------------------------
export const beforeUserCreate = beforeUserCreated(
  { region: "us-central1" },
  async (event) => {
    const email = event.data?.email ?? "";
    const allowlist = await getAllowedDomains();
    if (allowlist.length > 0 && !allowlist.some((d) => email.endsWith(d))) {
      throw new HttpsError(
        "permission-denied",
        "Sign-ups are restricted to approved email domains."
      );
    }
    return {
      customClaims: {
        role: "student",
        plan: "free",
        entitlements: defaultEntitlementsForPlan("free"),
      },
    };
  }
);

// ----------------------------------------------------------------------------
// 3. syncClaimsOnSubChange — when a subscription is added/updated/deleted in
//    /customers/{uid}/subscriptions, recompute the user's entitlements claim
//    by reading the product's metadata.entitlements.
// ----------------------------------------------------------------------------
export const syncClaimsOnSubChange = onDocumentWritten(
  {
    region: "us-central1",
    document: "customers/{uid}/subscriptions/{subId}",
  },
  async (event) => {
    const uid = event.params.uid;
    const subsSnap = await db
      .collection("customers").doc(uid)
      .collection("subscriptions")
      .where("status", "in", ["active", "trialing"])
      .get();

    let plan = "free";
    const grants = new Set<string>();

    for (const subDoc of subsSnap.docs) {
      const productRef = subDoc.get("product") as
        | string
        | FirebaseFirestore.DocumentReference;
      const productId =
        typeof productRef === "string" ? productRef : productRef.id;
      const productSnap = await db.collection("products").doc(productId).get();
      const meta = productSnap.get("metadata") ?? {};
      if (meta.plan && rank(meta.plan) > rank(plan)) plan = meta.plan;
      const ents: string = meta.entitlements ?? "";
      ents.split(",").map((s) => s.trim()).filter(Boolean).forEach((e) => grants.add(e));
    }

    // Merge with manual override stored in profile.
    const userDoc = await db.collection("users-data").doc(uid).get();
    const manual: string[] = userDoc.get("manualEntitlementsOverride") ?? [];
    manual.forEach((e) => grants.add(e));

    // Preserve role.
    const userRecord = await admin.auth().getUser(uid);
    const role = (userRecord.customClaims?.role as string) ?? "student";

    await admin.auth().setCustomUserClaims(uid, {
      role,
      plan,
      entitlements: [...grants],
      manualOverride: manual,
    });

    await db.collection("users-data").doc(uid).set(
      { plan, entitlements: [...grants] },
      { merge: true }
    );
  }
);

// ----------------------------------------------------------------------------
// helpers
// ----------------------------------------------------------------------------

function rank(plan: string) {
  return ({ free: 0, basic: 1, pro: 2, institution: 3 } as Record<string, number>)[plan] ?? 0;
}

function defaultEntitlementsForPlan(plan: string): string[] {
  switch (plan) {
    case "pro":
      return ["pk3","pk4","kg","first","second","third","fourth","fifth","sixth",
              "seventh","eighth","ninth","tenth","eleventh","twelfth"];
    case "basic":
      return ["pk3","pk4","kg","first","second","third"];
    case "institution":
      return ["pk3","pk4","kg","first","second","third","fourth","fifth","sixth",
              "seventh","eighth","ninth","tenth","eleventh","twelfth"];
    case "free":
    default:
      return ["pk3"]; // demo unit
  }
}

async function getAllowedDomains(): Promise<string[]> {
  // Stored under /config/auth { allowedDomains: ["@das.ac.ma", ...] }
  // Empty array means "no restriction".
  const snap = await db.collection("config").doc("auth").get();
  const arr = snap.get("allowedDomains");
  return Array.isArray(arr) ? arr : [];
}
