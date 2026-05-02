import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Modal,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { getGradeSubjects, SubjectDef } from "@/constants/subjects";
import { useAppContext } from "@/hooks/useContextHook";
import {
  palette,
  spacing,
  radius,
  typography,
  shadow,
} from "@/constants/designTokens";
import { PlanSelector } from "@/payments/PlanSelector";
import SubjectCard from "./SubjectCard";
import ComingSoonView from "./ComingSoonView";
import SubjectUnitsView from "./SubjectUnitsView";
import { getSubjectUnits } from "@/data/subjectIndex";

interface Props {
  gradeSlug: string;
  gradeLabel: string;
  /** The existing PE content for this grade (CustomContainer tree). */
  peContent: React.ReactNode;
}

export default function GradeScreen({ gradeSlug, gradeLabel, peContent }: Props) {
  const { canAccessUnit, isAuthenticated } = useAppContext();
  const [selected, setSelected] = useState<SubjectDef | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);

  const hasAccess = canAccessUnit(gradeSlug);
  const subjects = getGradeSubjects(gradeSlug);

  const handleSubjectPress = (subject: SubjectDef) => {
    if (!isAuthenticated || !hasAccess) {
      setShowPaywall(true);
      return;
    }
    setSelected(subject);
  };

  // ── Subject detail ──────────────────────────────────────────────────────────
  if (selected) {
    return (
      <View style={styles.detailScreen}>
        {/* Back bar */}
        <Pressable style={styles.backBar} onPress={() => setSelected(null)}>
          <Feather name="chevron-left" size={20} color={palette.accent} />
          <Text style={styles.backText}>All subjects</Text>
        </Pressable>

        {/* Subject header stripe */}
        <View style={[styles.subjectStripe, { backgroundColor: selected.bgColor }]}>
          <View style={[styles.subjectIconWrap, { backgroundColor: selected.bgColor }]}>
            <Feather name={selected.icon as any} size={20} color={selected.iconColor} />
          </View>
          <View>
            <Text style={[styles.subjectName, { color: selected.iconColor }]}>
              {selected.label}
            </Text>
            <Text style={styles.subjectDesc}>{selected.description}</Text>
          </View>
        </View>

        {/* Content */}
        <View style={styles.detailContent}>
          {selected.slug === "pe"
            ? peContent
            : (() => {
                const units = getSubjectUnits(gradeSlug, selected.slug);
                return units ? (
                  <SubjectUnitsView units={units} gradeSlug={gradeSlug} subjectSlug={selected.slug} />
                ) : (
                  <ComingSoonView subject={selected} />
                );
              })()}
        </View>
      </View>
    );
  }

  // ── Subject grid ───────────────────────────────────────────────────────────
  return (
    <>
      <Modal
        visible={showPaywall}
        animationType="slide"
        onRequestClose={() => setShowPaywall(false)}
      >
        <PlanSelector onClose={() => setShowPaywall(false)} />
      </Modal>

      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Grade header */}
        <View style={styles.gradeHeader}>
          <Text style={styles.gradeLabel}>{gradeLabel}</Text>
          <Text style={styles.gradeSubtitle}>
            {subjects.length} subject{subjects.length !== 1 ? "s" : ""}
          </Text>

          {/* Lock badge if grade is not accessible */}
          {isAuthenticated && !hasAccess && (
            <Pressable style={styles.lockBadge} onPress={() => setShowPaywall(true)}>
              <Feather name="lock" size={11} color={palette.danger} />
              <Text style={styles.lockBadgeText}>Upgrade to unlock</Text>
            </Pressable>
          )}

          {!isAuthenticated && (
            <View style={[styles.lockBadge, { backgroundColor: palette.bgMuted }]}>
              <Feather name="user" size={11} color={palette.textMuted} />
              <Text style={[styles.lockBadgeText, { color: palette.textMuted }]}>
                Sign in required
              </Text>
            </View>
          )}
        </View>

        {/* Subject grid — 2 columns */}
        <View style={styles.grid}>
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.slug}
              subject={subject}
              isLocked={!hasAccess || !isAuthenticated}
              onPress={() => handleSubjectPress(subject)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: palette.bgSubtle,
  },
  content: {
    padding: spacing.lg,
    paddingBottom: spacing["4xl"],
  },

  // Grade header
  gradeHeader: {
    marginBottom: spacing.xl,
    gap: spacing.xs,
  },
  gradeLabel: {
    ...typography.h1,
    color: palette.textPrimary,
  },
  gradeSubtitle: {
    ...typography.body,
    color: palette.textSecondary,
  },
  lockBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: palette.dangerSubtle,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    marginTop: spacing.xs,
  },
  lockBadgeText: {
    ...typography.caption,
    color: palette.danger,
    fontWeight: "600",
  },

  // Grid
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },

  // Detail screen
  detailScreen: {
    flex: 1,
    backgroundColor: palette.bgSubtle,
  },
  backBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: palette.bgCanvas,
    borderBottomWidth: 1,
    borderBottomColor: palette.borderDefault,
  },
  backText: {
    ...typography.label,
    color: palette.accent,
  },
  subjectStripe: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: palette.borderDefault,
  },
  subjectIconWrap: {
    width: 40,
    height: 40,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  subjectName: {
    ...typography.bodyStrong,
  },
  subjectDesc: {
    ...typography.caption,
    color: palette.textMuted,
    marginTop: 2,
  },
  detailContent: {
    flex: 1,
  },
});
