#!/usr/bin/env node
/**
 * makeAdmin.js — Promote a Firebase user to admin role.
 *
 * HOW TO USE
 * ──────────
 * 1. Download your Firebase service account key:
 *    Firebase Console → Project Settings → Service Accounts
 *    → "Generate new private key" → save as scripts/serviceAccount.json
 *    (this file is gitignored — never commit it)
 *
 * 2. Run:
 *    node scripts/makeAdmin.js <email-or-uid>
 *
 * WHAT IT DOES
 * ────────────
 * • Looks up the user by email (or UID if you pass a UID directly)
 * • Sets custom claims: { role: "admin", plan: "institution", entitlements: [all] }
 * • Updates the Firestore users-data doc with the same values
 * • Prints a summary — the user's next login will pick up the new claims
 *
 * NOTE: The user must reload / re-login for claims to take effect.
 * You can force it by calling refreshClaims() in the app or calling
 * getIdToken(true) from the Firebase console.
 */

const admin = require("firebase-admin");
const path  = require("path");

const SERVICE_ACCOUNT_PATH = path.join(__dirname, "serviceAccount.json");

// ── Validate args ────────────────────────────────────────────────────────────
const identifier = process.argv[2];
if (!identifier) {
  console.error("Usage: node scripts/makeAdmin.js <email-or-uid>");
  process.exit(1);
}

// ── Init Admin SDK ───────────────────────────────────────────────────────────
let serviceAccount;
try {
  serviceAccount = require(SERVICE_ACCOUNT_PATH);
} catch {
  console.error(
    `\n❌  Service account file not found at:\n   ${SERVICE_ACCOUNT_PATH}\n\n` +
    `Download it from:\n` +
    `  Firebase Console → Project Settings → Service Accounts\n` +
    `  → Generate new private key\n`
  );
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const auth = admin.auth();
const db   = admin.firestore();

const ALL_ENTITLEMENTS = [
  "pk3", "pk4", "kg",
  "first", "second", "third", "fourth", "fifth",
  "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth",
];

const NEW_CLAIMS = {
  role:         "admin",
  plan:         "institution",
  entitlements: ALL_ENTITLEMENTS,
};

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n🔍  Looking up user: ${identifier}`);

  let userRecord;
  try {
    // Try UID first, then email.
    if (identifier.includes("@")) {
      userRecord = await auth.getUserByEmail(identifier);
    } else {
      userRecord = await auth.getUser(identifier);
    }
  } catch (err) {
    console.error(`\n❌  User not found: ${err.message}`);
    process.exit(1);
  }

  const { uid, email, displayName } = userRecord;
  console.log(`✅  Found: ${displayName || "(no display name)"} <${email}> (uid: ${uid})`);

  // 1. Set custom claims.
  console.log("\n⚙️   Setting custom claims...");
  await auth.setCustomUserClaims(uid, NEW_CLAIMS);
  console.log(`    role: admin | plan: institution | ${ALL_ENTITLEMENTS.length} entitlements`);

  // 2. Upsert Firestore doc.
  console.log("\n📄  Updating Firestore users-data doc...");
  await db.collection("users-data").doc(uid).set(
    {
      role:         "admin",
      plan:         "institution",
      entitlements: ALL_ENTITLEMENTS,
    },
    { merge: true }
  );

  console.log(`
✅  Done!

The user now has admin access. To activate:
  • Ask them to log out and log back in, OR
  • In the app call: useAppContext().refreshClaims()
  • Or from Firebase console, revoke their refresh token.
`);

  process.exit(0);
}

main().catch((err) => {
  console.error("\n❌  Unexpected error:", err);
  process.exit(1);
});
