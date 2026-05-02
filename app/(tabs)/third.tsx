import React, { useEffect, useRef } from "react";
import { Animated, ScrollView, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GradeCard from "@/components/grade/GradeCard";
import { palette, spacing, radius, typography } from "@/constants/designTokens";

const SECONDARY_GRADES = [
  { gradeParam: "6°",  label: "6th",  fullName: "Sixth Grade",   gradeSlug: "sixth"    },
  { gradeParam: "7°",  label: "7th",  fullName: "Seventh Grade", gradeSlug: "seventh"  },
  { gradeParam: "8°",  label: "8th",  fullName: "Eighth Grade",  gradeSlug: "eighth"   },
  { gradeParam: "9°",  label: "9th",  fullName: "Ninth Grade",   gradeSlug: "ninth"    },
  { gradeParam: "10°", label: "10th", fullName: "Tenth Grade",   gradeSlug: "tenth"    },
  { gradeParam: "11°", label: "11th", fullName: "Eleventh Grade",gradeSlug: "eleventh" },
  { gradeParam: "12°", label: "12th", fullName: "Twelfth Grade", gradeSlug: "twelfth"  },
];

const MIDDLE = SECONDARY_GRADES.slice(0, 3);
const HIGH   = SECONDARY_GRADES.slice(3);

export default function SecondaryTab() {
  const insets = useSafeAreaInsets();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-8)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, slideAnim]);

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
      <Animated.View
        style={[
          styles.header,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={styles.headerIcon}>
          <Feather name="award" size={20} color="#8B5CF6" />
        </View>
        <View>
          <Text style={styles.title}>Secondary</Text>
          <Text style={styles.subtitle}>Ages 11–18 · Advanced curriculum</Text>
        </View>
      </Animated.View>

      {/* Info chip */}
      <View style={styles.infoChip}>
        <Feather name="info" size={12} color={palette.accent} />
        <Text style={styles.infoText}>
          Select a grade to explore subjects and units
        </Text>
      </View>

      {/* Middle School */}
      <Text style={styles.sectionLabel}>Middle School · Grades 6–8</Text>
      <View style={styles.list}>
        {MIDDLE.map((g) => (
          <GradeCard key={g.gradeSlug} {...g} />
        ))}
      </View>

      {/* High School */}
      <Text style={styles.sectionLabel}>High School · Grades 9–12</Text>
      <View style={styles.list}>
        {HIGH.map((g) => (
          <GradeCard key={g.gradeSlug} {...g} />
        ))}
      </View>

      {/* Focus area chips */}
      <Text style={[styles.sectionLabel, { marginTop: spacing.md }]}>Focus areas</Text>
      <View style={styles.chipRow}>
        {["PE", "Math", "Science", "Language Arts", "History", "Health", "Technology", "Art"].map(
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
    backgroundColor: "#F5F3FF",
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
  sectionLabel: {
    ...typography.label,
    color: palette.textMuted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  list: {
    gap: spacing.sm,
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
