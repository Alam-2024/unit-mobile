import { useAppContext } from "@/hooks/useContextHook";
import { IUnits } from "@/interfaces/units/IUnit";
import React, { JSX, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
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
};

export default function CustomGradeContainer({
  units,
  unitTitle,
  setUnitTitle,
  gradeSlug,
}: Props) {
  const { isAuthenticated, canAccessUnit } = useAppContext();
  const [showPaywall, setShowPaywall] = useState(false);

  const hasGradeAccess = canAccessUnit(gradeSlug);
  const accessToUnits = Object.fromEntries(
    Object.keys(units).map((k) => [k, hasGradeAccess])
  );

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

    return units[unitTitle] ? <CustomContent {...units[unitTitle]} /> : null;
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
});
