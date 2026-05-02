import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAppContext } from "@/hooks/useContextHook";
import { getGradeSubjects } from "@/constants/subjects";
import { palette, spacing, radius, typography, shadow } from "@/constants/designTokens";

interface Props {
  /** URL param value passed to /data route, e.g. "PK-3" */
  gradeParam: string;
  /** Short display label, e.g. "PK-3" */
  label: string;
  /** Full name, e.g. "Pre-Kindergarten 3" */
  fullName: string;
  /** Entitlement slug used for access check, e.g. "pk3" */
  gradeSlug: string;
}

export default function GradeCard({ gradeParam, label, fullName, gradeSlug }: Props) {
  const { canAccessUnit, isAuthenticated } = useAppContext();
  const hasAccess = canAccessUnit(gradeSlug);
  const subjects = getGradeSubjects(gradeSlug);
  const subjectCount = subjects.length;

  const handlePress = () => {
    router.push({ pathname: "/data", params: { grade: gradeParam } });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {/* Left: grade label circle */}
      <View style={[styles.labelCircle, hasAccess && isAuthenticated && styles.labelCircleActive]}>
        <Text style={[styles.labelText, hasAccess && isAuthenticated && styles.labelTextActive]}>
          {label}
        </Text>
      </View>

      {/* Center: grade info */}
      <View style={styles.info}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.meta}>
          {subjectCount} subject{subjectCount !== 1 ? "s" : ""}
        </Text>

        {/* Subject dots */}
        <View style={styles.dotsRow}>
          {subjects.slice(0, 6).map((s) => (
            <View
              key={s.slug}
              style={[styles.dot, { backgroundColor: s.iconColor + "33" }]}
            />
          ))}
          {subjectCount > 6 && (
            <Text style={styles.moreDots}>+{subjectCount - 6}</Text>
          )}
        </View>
      </View>

      {/* Right: access indicator + arrow */}
      <View style={styles.right}>
        {isAuthenticated ? (
          hasAccess ? (
            <View style={styles.unlockedBadge}>
              <View style={styles.unlockedDot} />
            </View>
          ) : (
            <View style={styles.lockedBadge}>
              <Feather name="lock" size={12} color={palette.textMuted} />
            </View>
          )
        ) : null}
        <Feather name="chevron-right" size={18} color={palette.textMuted} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.bgCanvas,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    padding: spacing.md,
    gap: spacing.md,
    ...shadow.card,
  },
  cardPressed: {
    backgroundColor: palette.bgSubtle,
    borderColor: palette.borderStrong,
  },

  // Grade label pill
  labelCircle: {
    width: 52,
    height: 52,
    borderRadius: radius.md,
    backgroundColor: palette.bgMuted,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  labelCircleActive: {
    backgroundColor: "#F0FDFA",
  },
  labelText: {
    ...typography.label,
    color: palette.textMuted,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "700",
  },
  labelTextActive: {
    color: "#0D9488",
  },

  // Info
  info: {
    flex: 1,
    gap: 3,
  },
  fullName: {
    ...typography.bodyStrong,
    color: palette.textPrimary,
  },
  meta: {
    ...typography.caption,
    color: palette.textSecondary,
  },
  dotsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  moreDots: {
    ...typography.caption,
    color: palette.textMuted,
    marginLeft: 2,
  },

  // Right side
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    flexShrink: 0,
  },
  unlockedBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#F0FDFA",
    alignItems: "center",
    justifyContent: "center",
  },
  unlockedDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0D9488",
  },
  lockedBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: palette.bgMuted,
    alignItems: "center",
    justifyContent: "center",
  },
});
