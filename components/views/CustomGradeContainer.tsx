import { useAppContext } from "@/hooks/useContextHook";
import { useProgress } from "@/hooks/useProgress";
import { IUnits } from "@/interfaces/units/IUnit";
import React, { JSX, useState } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import CustomText from "../customs/CustomText";
import CustomContent from "../customs/CustomContent";
import UnitNavbar from "../navbar/UnitNavbar";
import { PlanSelector } from "@/payments/PlanSelector";
import { palette, radius, spacing, typography } from "@/constants/designTokens";

type Props = {
  units: { [key: string]: IUnits };
  unitTitle: string;
  setUnitTitle: (title: string) => void;
  gradeSlug: string;
  /** Subject slug used for progress tracking. Defaults to "pe". */
  subjectSlug?: string;
};

export default function CustomGradeContainer({
  units,
  unitTitle,
  setUnitTitle,
  gradeSlug,
  subjectSlug = "pe",
}: Props) {
  const { isAuthenticated, canAccessUnit } = useAppContext();
  const { isComplete, markComplete, markIncomplete } = useProgress();
  const [showPaywall, setShowPaywall] = useState(false);

  const hasGradeAccess = canAccessUnit(gradeSlug);
  const accessToUnits = Object.fromEntries(
    Object.keys(units).map((k) => [k, hasGradeAccess])
  );

  const completed = unitTitle
    ? isComplete(gradeSlug, subjectSlug, unitTitle)
    : false;

  const handleToggleComplete = async () => {
    if (!unitTitle) return;
    if (completed) {
      await markIncomplete(gradeSlug, subjectSlug, unitTitle);
    } else {
      await markComplete(gradeSlug, subjectSlug, unitTitle);
    }
  };

  const renderContent = (): JSX.Element | null => {
    if (!unitTitle) {
      return (
        <CustomText value="Please select a unit" center big color="#ff0000" />
      );
    }
    if (!hasGradeAccess) {
      return (
        <View style={styles.lockedContainer}>
          <Feather name="lock" size={40} color={palette.accent} />
          <Text style={styles.lockedTitle}>This grade is locked</Text>
          <Text style={styles.lockedSubtitle}>
            Upgrade your plan to access all units in this grade level.
          </Text>
          <Pressable
            onPress={() => setShowPaywall(true)}
            style={({ pressed }) => [
              styles.upgradeBtn,
              pressed && styles.upgradeBtnPressed,
            ]}
          >
            <Text style={styles.upgradeBtnText}>Upgrade plan</Text>
          </Pressable>
        </View>
      );
    }

    if (!units[unitTitle]) return null;

    return (
      <ScrollView
        style={styles.contentScroll}
        contentContainerStyle={styles.contentScrollInner}
        showsVerticalScrollIndicator={false}
      >
        <CustomContent {...units[unitTitle]} />
        {/* Mark complete button */}
        <Pressable
          onPress={handleToggleComplete}
          style={({ pressed }) => [
            styles.completeBtn,
            completed ? styles.completeBtnDone : styles.completeBtnPending,
            pressed && styles.completeBtnPressed,
          ]}
          accessibilityRole="button"
          accessibilityLabel={
            completed ? "Completed — tap to undo" : "Mark unit as completed"
          }
        >
          <Feather
            name="check-circle"
            size={18}
            color={completed ? palette.success : palette.textInverse}
          />
          <Text
            style={[
              styles.completeBtnText,
              completed
                ? styles.completeBtnTextDone
                : styles.completeBtnTextPending,
            ]}
          >
            {completed ? "Completed — Tap to undo" : "Mark unit as completed"}
          </Text>
        </Pressable>
      </ScrollView>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Modal
        visible={showPaywall}
        animationType="slide"
        onRequestClose={() => setShowPaywall(false)}
      >
        <PlanSelector onClose={() => setShowPaywall(false)} />
      </Modal>

      <UnitNavbar
        list={Object.keys(units)}
        setUnitTitle={setUnitTitle}
        unitTitle={unitTitle}
        accessToUnits={accessToUnits}
      />
      <View style={styles.contentArea}>
        {isAuthenticated ? (
          renderContent()
        ) : (
          <View style={styles.lockedContainer}>
            <Feather name="user" size={40} color={palette.textMuted} />
            <Text style={styles.lockedTitle}>Sign in to view content</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  contentArea: { flex: 1 },
  contentScroll: { flex: 1 },
  contentScrollInner: {
    padding: spacing.lg,
    paddingBottom: spacing["4xl"],
  },
  lockedContainer: {
    padding: spacing.xl,
    alignItems: "center",
    gap: spacing.md,
  },
  lockedTitle: {
    ...typography.h2,
    color: palette.textPrimary,
    textAlign: "center",
    marginTop: spacing.sm,
  },
  lockedSubtitle: {
    ...typography.body,
    color: palette.textSecondary,
    textAlign: "center",
  },
  upgradeBtn: {
    marginTop: spacing.sm,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing["2xl"],
    backgroundColor: palette.accent,
    borderRadius: radius.md,
  },
  upgradeBtnPressed: {
    backgroundColor: palette.accentHover,
  },
  upgradeBtnText: {
    ...typography.bodyStrong,
    color: palette.textInverse,
  },
  // Completion button
  completeBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    marginTop: spacing.xl,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md,
    minHeight: 48,
  },
  completeBtnPending: {
    backgroundColor: palette.accent,
  },
  completeBtnDone: {
    backgroundColor: palette.successSubtle,
    borderWidth: 1,
    borderColor: palette.success,
  },
  completeBtnPressed: {
    opacity: 0.75,
  },
  completeBtnText: {
    ...typography.bodyStrong,
  },
  completeBtnTextPending: {
    color: palette.textInverse,
  },
  completeBtnTextDone: {
    color: palette.success,
  },
});
