/**
 * mockProducts.ts
 *
 * Hardcoded Stripe-like products for __DEV__ mode.
 * These mirror the shape of firestore-stripe-payments so PlanSelector
 * renders identically to production.
 *
 * In production, products live in Firestore /products (populated by
 * the firestore-stripe-payments extension).
 */

import { StripeProduct } from "./types";

export const MOCK_PRODUCTS: StripeProduct[] = [
  {
    id: "prod_mock_basic",
    active: true,
    name: "Basic",
    description:
      "Perfect for teachers covering early childhood and lower elementary grades.",
    metadata: {
      plan: "basic",
      entitlements: "pk3,pk4,kg,first,second,third",
      order: "1",
    },
    prices: [
      {
        id: "price_mock_basic_monthly",
        active: true,
        unit_amount: 999,
        currency: "usd",
        interval: "month",
        interval_count: 1,
      },
    ],
  },
  {
    id: "prod_mock_pro",
    active: true,
    name: "Pro",
    description:
      "Full K–12 access. All grade levels, all units, always up to date.",
    metadata: {
      plan: "pro",
      entitlements:
        "pk3,pk4,kg,first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth,eleventh,twelfth",
      order: "2",
    },
    prices: [
      {
        id: "price_mock_pro_monthly",
        active: true,
        unit_amount: 1999,
        currency: "usd",
        interval: "month",
        interval_count: 1,
      },
    ],
  },
  {
    id: "prod_mock_institution",
    active: true,
    name: "Institution",
    description:
      "Unlimited teachers, school-wide access, and priority support.",
    metadata: {
      plan: "institution",
      entitlements:
        "pk3,pk4,kg,first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth,eleventh,twelfth",
      order: "3",
    },
    prices: [
      {
        id: "price_mock_institution_monthly",
        active: true,
        unit_amount: 4999,
        currency: "usd",
        interval: "month",
        interval_count: 1,
      },
    ],
  },
];

/** Entitlements granted by each mock plan. */
export const MOCK_PLAN_ENTITLEMENTS: Record<string, string[]> = {
  basic: ["pk3", "pk4", "kg", "first", "second", "third"],
  pro: [
    "pk3", "pk4", "kg",
    "first", "second", "third", "fourth", "fifth",
    "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth",
  ],
  institution: [
    "pk3", "pk4", "kg",
    "first", "second", "third", "fourth", "fifth",
    "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth",
  ],
};
