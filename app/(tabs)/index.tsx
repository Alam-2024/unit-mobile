import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradeCard from "@/components/grade/GradeCard";
import { palette, spacing, radius, typography } from "@/constants/designTokens";

const EARLY_GRADES = [
  { gradeParam: "PK-3", label: "PK-3", fullName: "Pre-Kindergarten 3", gradeSlug: "pk3" },
  { gradeParam: "PK-4", label: "PK-4", fullName: "Pre-Kindergarten 4", gradeSlug: "pk4" },
  { gradeParam: "KG",   label: "KG",   fullName: "Kindergarten",        gradeSlug: "kg"  },
];

export default function EarlyLearningTab() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        styles.content,
        { paddingTop: insets.top + spacing.lg },
      ]}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Feather name="star" size={20} color="#F59E0B" />
        </View>
        <View>
          <Text style={styles.title}>Early Learning</Text>
          <Text style={styles.subtitle}>Ages 3–6 · Foundational development</Text>
        </View>
      </View>

      {/* Info chip */}
      <View style={styles.infoChip}>
        <Feather name="info" size={12} color={palette.accent} />
        <Text style={styles.infoText}>
          Select a grade to explore subjects and units
        </Text>
      </View>

      {/* Grade list */}
      <View style={styles.list}>
        {EARLY_GRADES.map((g) => (
          <GradeCard key={g.gradeSlug} {...g} />
        ))}
      </View>

      {/* Focus area chips */}
      <Text style={styles.sectionLabel}>Focus areas</Text>
      <View style={styles.chipRow}>
        {["Movement", "Art", "Music", "Social Skills", "Language"].map((tag) => (
          <View key={tag} style={styles.chip}>
            <Text style={styles.chipText}>{tag}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bgSubtle,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 120,
    gap: spacing.md,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    marginBottom: spacing.xs,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    backgroundColor: "#FFFBEB",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...typography.h1,
    color: palette.textPrimary,
  },
  subtitle: {
    ...typography.caption,
    color: palette.textSecondary,
    marginTop: 2,
  },
  infoChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: palette.accentSubtle,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    alignSelf: "flex-start",
  },
  infoText: {
    ...typography.caption,
    color: palette.accent,
  },
  list: {
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  sectionLabel: {
    ...typography.label,
    color: palette.textMuted,
    marginTop: spacing.md,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  chip: {
    backgroundColor: palette.bgCanvas,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  chipText: {
    ...typography.caption,
    color: palette.textSecondary,
  },
});
