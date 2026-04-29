/**
 * Plan + product + subscription type definitions.
 * Mirror the firestore-stripe-payments extension's data shape.
 */

export interface StripePrice {
  id: string;
  active: boolean;
  unit_amount: number;
  currency: string;
  interval?: "day" | "week" | "month" | "year";
  interval_count?: number;
  trial_period_days?: number;
  metadata?: Record<string, string>;
}

export interface StripeProduct {
  id: string;
  active: boolean;
  name: string;
  description?: string;
  images?: string[];
  metadata: {
    /** Comma-separated unit slugs the product unlocks. */
    entitlements?: string;
    /** Plan tier identifier: "free" | "basic" | "pro" | "institution". */
    plan?: string;
    /** Sort order on the plan selector. */
    order?: string;
  };
  prices: StripePrice[];
}

export interface ActiveSubscription {
  id: string;
  status:
    | "active"
    | "trialing"
    | "past_due"
    | "canceled"
    | "incomplete"
    | "incomplete_expired"
    | "unpaid";
  product: string; // product id
  price: string;   // price id
  current_period_end: { seconds: number; nanoseconds: number };
  cancel_at_period_end: boolean;
}

export interface CheckoutSession {
  id: string;
  url?: string;       // populated by extension
  error?: { message: string };
  cancel_url: string;
  success_url: string;
  mode: "subscription" | "payment";
  price: string;
}
