import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SubjectDef } from "@/constants/subjects";
import { palette, spacing, radius, typography } from "@/constants/designTokens";

export default function ComingSoonView({ subject }: { subject: SubjectDef }) {
  return (
    <View style={styles.container}>
      <View style={[styles.iconCircle, { backgroundColor: subject.bgColor }]}>
        <Feather name={subject.icon as any} size={40} color={subject.iconColor} />
      </View>

      <Text style={styles.title}>{subject.label}</Text>
      <Text style={styles.subtitle}>Content in development</Text>

      <Text style={styles.body}>
        We're building high-quality {subject.label.toLowerCase()} curriculum
        for this grade level. Units will appear here as they're published.
      </Text>

      <View style={styles.badge}>
        <Feather name="clock" size={13} color={palette.textMuted} />
        <Text style={styles.badgeText}>Coming soon</Text>
      </View>

      {/* Placeholder lesson cards */}
      <View style={styles.placeholderGroup}>
        {["Unit 1", "Unit 2", "Unit 3"].map((u) => (
          <View key={u} style={styles.placeholderCard}>
            <View style={styles.placeholderIcon} />
            <View style={styles.placeholderLines}>
              <View style={[styles.line, { width: "60%" }]} />
              <View style={[styles.line, { width: "40%" }]} />
            </View>
            <View style={styles.placeholderBadge} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: spacing.xl,
    paddingTop: spacing["2xl"],
    gap: spacing.md,
  },
  iconCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h2,
    color: palette.textPrimary,
    textAlign: "center",
  },
  subtitle: {
    ...typography.bodyStrong,
    color: palette.textSecondary,
    textAlign: "center",
  },
  body: {
    ...typography.body,
    color: palette.textSecondary,
    textAlign: "center",
    maxWidth: 300,
    lineHeight: 22,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: palette.bgMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    marginBottom: spacing.lg,
  },
  badgeText: {
    ...typography.caption,
    color: palette.textMuted,
  },
  // Skeleton placeholder cards
  placeholderGroup: {
    width: "100%",
    gap: spacing.sm,
  },
  placeholderCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    backgroundColor: palette.bgCanvas,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    padding: spacing.md,
  },
  placeholderIcon: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: palette.bgMuted,
  },
  placeholderLines: {
    flex: 1,
    gap: 6,
  },
  line: {
    height: 10,
    borderRadius: 5,
    backgroundColor: palette.bgMuted,
  },
  placeholderBadge: {
    width: 56,
    height: 22,
    borderRadius: radius.pill,
    backgroundColor: palette.bgMuted,
  },
});
