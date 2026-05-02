/**
 * PlanSelector.tsx
 *
 * Shown when a user hits a paywall (locked unit) or chooses "Upgrade" from
 * their account screen. Reads products from `usePaywall` (synced from Stripe
 * via the firestore-stripe-payments extension) and triggers Stripe Checkout.
 */

import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import {
  palette,
  radius,
  spacing,
  typography,
  shadow,
} from "@/constants/designTokens";
import { usePaywall } from "./usePaywall";

export const PlanSelector: React.FC<{ onClose?: () => void }> = ({
  onClose,
}) => {
  const {
    products,
    plansLoading,
    openCheckout,
    openCustomerPortal,
    hasActiveSubscription,
    opening,
    currentPlan,
  } = usePaywall();

  if (plansLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator color={palette.accent} />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.header}>
          <Text style={styles.title}>Choose your plan</Text>
          <Text style={styles.subtitle}>
            Unlock more units and future subjects. Cancel anytime.
          </Text>
        </View>

        {products.map((product) => {
          const monthly = product.prices.find((p) => p.interval === "month");
          const planTier = product.metadata?.plan ?? "basic";
          const isCurrent = planTier === currentPlan;

          return (
            <View
              key={product.id}
              style={[styles.card, isCurrent && styles.cardCurrent]}
            >
              <View style={styles.cardHeader}>
                <Text style={styles.planName}>{product.name}</Text>
                {isCurrent && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Current</Text>
                  </View>
                )}
              </View>
              {product.description && (
                <Text style={styles.planDesc}>{product.description}</Text>
              )}
              {monthly && (
                <View style={styles.priceRow}>
                  <Text style={styles.priceMain}>
                    {formatAmount(monthly.unit_amount, monthly.currency)}
                  </Text>
                  <Text style={styles.priceSuffix}> / month</Text>
                </View>
              )}
              <View style={styles.featuresList}>
                {(product.metadata?.entitlements ?? "")
                  .split(",")
                  .filter(Boolean)
                  .slice(0, 6)
                  .map((slug) => (
                    <View key={slug} style={styles.featureRow}>
                      <Feather name="check" size={16} color={palette.success} />
                      <Text style={styles.featureText}>{slug}</Text>
                    </View>
                  ))}
              </View>

              <Pressable
                disabled={isCurrent || opening || !monthly}
                onPress={() => monthly && openCheckout(monthly.id)}
                style={({ pressed }) => [
                  styles.cta,
                  isCurrent && styles.ctaDisabled,
                  pressed && styles.ctaPressed,
                ]}
              >
                {opening ? (
                  <ActivityIndicator color={palette.textInverse} />
                ) : (
                  <Text style={styles.ctaText}>
                    {isCurrent ? "Current plan" : "Upgrade"}
                  </Text>
                )}
              </Pressable>
            </View>
          );
        })}

        {hasActiveSubscription && (
          <Pressable onPress={openCustomerPortal} style={styles.manageLink}>
            <Text style={styles.manageLinkText}>
              Manage or cancel your subscription
            </Text>
          </Pressable>
        )}

        {onClose && (
          <Pressable onPress={onClose} style={styles.dismiss}>
            <Text style={styles.dismissText}>Maybe later</Text>
          </Pressable>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

function formatAmount(unitAmount: number, currency: string) {
  const amount = unitAmount / 100;
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency.toUpperCase(),
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `${currency.toUpperCase()} ${amount.toFixed(0)}`;
  }
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  screen: {
    padding: spacing.xl,
    marginTop: spacing["2xl"],
    backgroundColor: palette.bgCanvas,
    flexGrow: 1,
  },
  header: { marginBottom: spacing.xl },
  title: {
    ...typography.h1,
    color: palette.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: { ...typography.body, color: palette.textSecondary },

  card: {
    borderRadius: radius.lg,
    backgroundColor: palette.bgSubtle,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    padding: spacing.xl,
    marginBottom: spacing.lg,
    ...shadow.card,
  },
  cardCurrent: {
    borderColor: palette.accent,
    backgroundColor: palette.accentSubtle,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  planName: { ...typography.h2, color: palette.textPrimary },
  badge: {
    backgroundColor: palette.accent,
    paddingHorizontal: spacing.md,
    paddingVertical: 2,
    borderRadius: radius.pill,
  },
  badgeText: { ...typography.caption, color: palette.textInverse },
  planDesc: {
    ...typography.body,
    color: palette.textSecondary,
    marginBottom: spacing.lg,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: spacing.lg,
  },
  priceMain: {
    fontSize: 36,
    lineHeight: 44,
    fontWeight: "700",
    color: palette.textPrimary,
  },
  priceSuffix: { ...typography.body, color: palette.textSecondary },

  featuresList: { marginBottom: spacing.xl },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  featureText: {
    ...typography.body,
    color: palette.textSecondary,
    marginLeft: spacing.sm,
  },

  cta: {
    height: 48,
    borderRadius: radius.md,
    backgroundColor: palette.accent,
    alignItems: "center",
    justifyContent: "center",
  },
  ctaPressed: { backgroundColor: palette.accentHover },
  ctaDisabled: { backgroundColor: palette.bgMuted },
  ctaText: { ...typography.bodyStrong, color: palette.textInverse },

  manageLink: {
    alignSelf: "center",
    marginTop: spacing.lg,
    padding: spacing.md,
  },
  manageLinkText: { ...typography.label, color: palette.accent },
  dismiss: { alignSelf: "center", marginTop: spacing.sm, padding: spacing.md },
  dismissText: { ...typography.label, color: palette.textMuted },
});

export default PlanSelector;
