/**
 * devtools.tsx — Dev Simulator (visible only in __DEV__ builds).
 *
 * Lets you simulate:
 *   • Any plan (free / basic / pro / institution)
 *   • Admin role
 *   • Individual grade entitlements
 *   • Reset back to free
 *
 * All changes are written to Firestore users-data/{uid} and picked up by
 * the context's onSnapshot, so the app responds instantly.
 */

import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { doc, setDoc } from "firebase/firestore";
import { Stack } from "expo-router";

import { db } from "@/firebase/fireConfig";
import { useAppContext } from "@/hooks/useContextHook";
import { palette, radius, spacing, typography, shadow } from "@/constants/designTokens";
import { MOCK_PLAN_ENTITLEMENTS } from "@/payments/mockProducts";

const ALL_GRADES = [
  { slug: "pk3",     label: "PK-3" },
  { slug: "pk4",     label: "PK-4" },
  { slug: "kg",      label: "Kindergarten" },
  { slug: "first",   label: "1st Grade" },
  { slug: "second",  label: "2nd Grade" },
  { slug: "third",   label: "3rd Grade" },
  { slug: "fourth",  label: "4th Grade" },
  { slug: "fifth",   label: "5th Grade" },
  { slug: "sixth",   label: "6th Grade" },
  { slug: "seventh", label: "7th Grade" },
  { slug: "eighth",  label: "8th Grade" },
  { slug: "ninth",   label: "9th Grade" },
  { slug: "tenth",   label: "10th Grade" },
  { slug: "eleventh","label": "11th Grade" },
  { slug: "twelfth", label: "12th Grade" },
] as const;

const PLAN_PRESETS = ["free", "basic", "pro", "institution"] as const;

export default function DevTools() {
  const {
    user,
    userDoc,
    claims,
    isAuthenticated,
    effectiveRole,
    effectivePlan,
    effectiveEntitlements,
    isAdmin,
  } = useAppContext();
  const [busy, setBusy] = useState(false);

  if (!__DEV__) {
    return (
      <View style={styles.center}>
        <Text style={styles.muted}>Dev tools are disabled in production.</Text>
      </View>
    );
  }

  if (!isAuthenticated || !user?.uid) {
    return (
      <View style={styles.center}>
        <Feather name="user" size={32} color={palette.textMuted} />
        <Text style={styles.muted}>Sign in to use the Dev Simulator.</Text>
      </View>
    );
  }

  // Firestore (writable by Dev Simulator)
  const currentEntitlements: string[] = userDoc?.entitlements ?? [];
  const currentPlan: string = userDoc?.plan ?? "free";
  const currentRole: string = userDoc?.role ?? "student";

  // ── Helpers ──────────────────────────────────────────────────────────────

  const write = async (data: Record<string, any>) => {
    setBusy(true);
    try {
      // setDoc with merge:true creates the document if it doesn't exist yet
      // (handles users registered before Cloud Functions were deployed).
      await setDoc(doc(db, "users-data", user.uid), {
        userUid: user.uid,
        email: user.email ?? "",
        name: user.displayName ?? user.email ?? "",
        baned: false,
        ...data,
      }, { merge: true });
    } catch (e: any) {
      Alert.alert("Error", e?.message ?? "Firestore write failed");
    } finally {
      setBusy(false);
    }
  };

  const setPlan = (plan: string) => {
    const entitlements = MOCK_PLAN_ENTITLEMENTS[plan] ?? [];
    write({ plan, entitlements });
  };

  const toggleGrade = (slug: string) => {
    const next = currentEntitlements.includes(slug)
      ? currentEntitlements.filter((e) => e !== slug)
      : [...currentEntitlements, slug];
    write({ entitlements: next, plan: "custom" });
  };

  const toggleAdmin = () => {
    const newRole = isAdmin ? "student" : "admin";
    write({ role: newRole });
  };

  const reset = () => {
    write({ plan: "free", entitlements: [], role: "student" });
  };

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      <Stack.Screen
        options={{
          title: "🧪 Dev Simulator",
          headerStyle: { backgroundColor: "#1e1b4b" },
          headerTintColor: "#fff",
        }}
      />
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
      >
        {/* Banner */}
        <View style={styles.devBanner}>
          <Feather name="zap" size={16} color="#fbbf24" />
          <Text style={styles.devBannerText}>
            DEV MODE — changes write to Firestore only (no real payments)
          </Text>
        </View>

        {/* Effective state (merged) */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Effective state (merged)</Text>
          <Row label="UID" value={user.uid} mono />
          <Row label="Email" value={user.email ?? "—"} />
          <Row label="Role" value={effectiveRole} />
          <Row label="Plan" value={effectivePlan} />
          <Row
            label="Entitlements"
            value={effectiveEntitlements.length === 0 ? "none" : `${effectiveEntitlements.length} grades`}
          />
        </View>

        {/* Source comparison — shows why claims ≠ Firestore */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Source breakdown</Text>
          <Text style={styles.sourceHeader}>🔐 JWT Claims (Firebase Auth)</Text>
          <Row label="Role"  value={claims?.role  ?? "—"} />
          <Row label="Plan"  value={claims?.plan  ?? "—"} />
          <Row label="Entitlements" value={`${claims?.entitlements?.length ?? 0} grades`} />
          <Text style={[styles.sourceHeader, { marginTop: spacing.md }]}>🗄️  Firestore (users-data)</Text>
          <Row label="Role"  value={currentRole} />
          <Row label="Plan"  value={currentPlan} />
          <Row label="Entitlements" value={`${currentEntitlements.length} grades`} />
          {(claims?.role !== currentRole || claims?.plan !== currentPlan) && (
            <View style={styles.divergenceWarning}>
              <Feather name="alert-triangle" size={14} color="#d97706" />
              <Text style={styles.divergenceText}>
                JWT ≠ Firestore — normal until the user re-logs or Cloud Functions update claims.
                The app uses Firestore values as fallback automatically.
              </Text>
            </View>
          )}
        </View>

        {/* Admin toggle */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Role</Text>
          <View style={styles.switchRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.switchLabel}>Admin access</Text>
              <Text style={styles.switchSub}>
                Grants access to all grades + admin panel
              </Text>
            </View>
            <Switch
              value={isAdmin}
              onValueChange={toggleAdmin}
              disabled={busy}
              trackColor={{ true: palette.accent }}
              thumbColor={isAdmin ? palette.bgCanvas : palette.textMuted}
            />
          </View>
        </View>

        {/* Plan presets */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Plan presets</Text>
          <View style={styles.pillsRow}>
            {PLAN_PRESETS.map((plan) => (
              <Pressable
                key={plan}
                disabled={busy}
                onPress={() => setPlan(plan)}
                style={[
                  styles.planPill,
                  currentPlan === plan && styles.planPillActive,
                ]}
              >
                <Text
                  style={[
                    styles.planPillText,
                    currentPlan === plan && styles.planPillTextActive,
                  ]}
                >
                  {plan}
                </Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.helpText}>
            Sets entitlements automatically based on plan tier.
          </Text>
        </View>

        {/* Individual grades */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Individual grades</Text>
          {ALL_GRADES.map(({ slug, label }) => {
            const hasAccess = currentEntitlements.includes(slug);
            return (
              <View key={slug} style={styles.gradeRow}>
                <View
                  style={[
                    styles.gradeDot,
                    { backgroundColor: hasAccess ? palette.success : palette.bgMuted },
                  ]}
                />
                <Text style={[styles.gradeLabel, { flex: 1 }]}>{label}</Text>
                <Switch
                  value={hasAccess}
                  onValueChange={() => toggleGrade(slug)}
                  disabled={busy || isAdmin}
                  trackColor={{ true: palette.success }}
                  thumbColor={hasAccess ? palette.bgCanvas : palette.textMuted}
                />
              </View>
            );
          })}
          {isAdmin && (
            <Text style={styles.helpText}>
              Admin role grants all grades — disable admin to toggle individually.
            </Text>
          )}
        </View>

        {/* Reset */}
        <Pressable
          onPress={reset}
          disabled={busy}
          style={({ pressed }) => [
            styles.resetBtn,
            pressed && { backgroundColor: palette.danger },
          ]}
        >
          <Feather name="trash-2" size={16} color={palette.danger} />
          <Text style={styles.resetText}>Reset to free / student</Text>
        </Pressable>

        {busy && (
          <View style={styles.busyOverlay}>
            <ActivityIndicator color={palette.accent} />
            <Text style={styles.busyText}>Writing to Firestore…</Text>
          </View>
        )}
      </ScrollView>
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

const Row = ({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text
      style={[styles.infoValue, mono && { fontFamily: "SpaceMono" }]}
      numberOfLines={2}
    >
      {value}
    </Text>
  </View>
);

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bgCanvas },
  content: { padding: spacing.lg, paddingBottom: spacing["4xl"] },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
    gap: spacing.md,
  },
  muted: { ...typography.body, color: palette.textMuted, textAlign: "center" },

  devBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: "#1e1b4b",
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  devBannerText: {
    ...typography.caption,
    color: "#fbbf24",
    flex: 1,
  },

  card: {
    backgroundColor: palette.bgSubtle,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    ...shadow.card,
  },
  sectionTitle: {
    ...typography.h2,
    color: palette.textPrimary,
    marginBottom: spacing.md,
  },

  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: palette.borderDefault,
  },
  infoLabel: { ...typography.label, color: palette.textMuted },
  infoValue: {
    ...typography.label,
    color: palette.textPrimary,
    maxWidth: "60%",
    textAlign: "right",
  },

  switchRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  switchLabel: { ...typography.bodyStrong, color: palette.textPrimary },
  switchSub: { ...typography.caption, color: palette.textMuted, marginTop: 2 },

  pillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.sm,
  },
  planPill: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    backgroundColor: palette.bgCanvas,
  },
  planPillActive: {
    backgroundColor: palette.accent,
    borderColor: palette.accent,
  },
  planPillText: { ...typography.label, color: palette.textSecondary },
  planPillTextActive: { color: palette.textInverse },
  helpText: { ...typography.caption, color: palette.textMuted, marginTop: spacing.xs },

  gradeRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: palette.borderDefault,
    gap: spacing.sm,
  },
  gradeDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  gradeLabel: { ...typography.body, color: palette.textPrimary },

  resetBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: palette.danger,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.xl,
  },
  resetText: { ...typography.bodyStrong, color: palette.danger },

  busyOverlay: {
    position: "absolute",
    inset: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.75)",
    gap: spacing.sm,
  } as any,
  busyText: { ...typography.label, color: palette.textSecondary },
  sourceHeader: {
    ...typography.label,
    color: palette.textSecondary,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  divergenceWarning: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.xs,
    backgroundColor: palette.warningSubtle,
    borderRadius: radius.sm,
    padding: spacing.sm,
    marginTop: spacing.md,
  },
  divergenceText: {
    ...typography.caption,
    color: "#92400e",
    flex: 1,
  },
});
