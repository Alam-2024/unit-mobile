import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradeCard from "@/components/grade/GradeCard";
import { palette, spacing, radius, typography } from "@/constants/designTokens";

const ELEMENTARY_GRADES = [
  { gradeParam: "1°", label: "1st",  fullName: "First Grade",  gradeSlug: "first"  },
  { gradeParam: "2°", label: "2nd",  fullName: "Second Grade", gradeSlug: "second" },
  { gradeParam: "3°", label: "3rd",  fullName: "Third Grade",  gradeSlug: "third"  },
  { gradeParam: "4°", label: "4th",  fullName: "Fourth Grade", gradeSlug: "fourth" },
  { gradeParam: "5°", label: "5th",  fullName: "Fifth Grade",  gradeSlug: "fifth"  },
];

export default function ElementaryTab() {
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
          <Feather name="book" size={20} color="#3B82F6" />
        </View>
        <View>
          <Text style={styles.title}>Elementary</Text>
          <Text style={styles.subtitle}>Ages 6–11 · Core academic skills</Text>
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
        {ELEMENTARY_GRADES.map((g) => (
          <GradeCard key={g.gradeSlug} {...g} />
        ))}
      </View>

      {/* Focus area chips */}
      <Text style={styles.sectionLabel}>Focus areas</Text>
      <View style={styles.chipRow}>
        {["PE", "Math", "Language Arts", "Science", "Social Studies", "Art", "Music"].map(
          (tag) => (
            <View key={tag} style={styles.chip}>
              <Text style={styles.chipText}>{tag}</Text>
            </View>
          )
        )}
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
    backgroundColor: "#EFF6FF",
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
