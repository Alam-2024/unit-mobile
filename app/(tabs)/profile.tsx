import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAppContext } from "@/hooks/useContextHook";
import DynamicModal from "../modal";
import Login from "../Login";
import Logout from "../Logout";
import CustomView from "@/components/customs/CustomView";
import UserDetails from "../Profile";
import { profileStyles } from "@/styles/profile";
import { PlanSelector } from "@/payments/PlanSelector";
import {
  palette,
  radius,
  spacing,
  typography,
  shadow,
} from "@/constants/designTokens";
import DashboardScreen from "@/components/dashboard/DashboardScreen";

const PLAN_LABELS: Record<string, string> = {
  free: "Free",
  basic: "Basic",
  pro: "Pro",
  institution: "Institution",
};

const PLAN_COLORS: Record<string, string> = {
  free: palette.textMuted,
  basic: palette.accent,
  pro: "#7C3AED",
  institution: palette.success,
};

function getInitials(email?: string | null, displayName?: string | null) {
  if (displayName) {
    const parts = displayName.trim().split(" ");
    return parts.length >= 2
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : parts[0].slice(0, 2).toUpperCase();
  }
  if (email) return email.slice(0, 2).toUpperCase();
  return "U";
}

const ProfileView = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"login" | "logout" | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);

  const { isAuthenticated, user, userDoc, effectivePlan, effectiveEntitlements, effectiveRole } = useAppContext();
  const router = useRouter();
  const initials = getInitials(user?.email, user?.displayName);

  const closeModal = () => {
    setModalVisible(false);
    setModalType(null);
  };

  const openModal = (type: "login" | "logout") => {
    setModalType(type);
    setModalVisible(true);
  };

  const currentPlan = effectivePlan;
  const isPaidPlan = currentPlan !== "free";

  return (
    <CustomView style={profileStyles.container} bgColor="#F8FAFC">
      {/* Auth modal (login/logout) */}
      <DynamicModal visible={isModalVisible} onClose={closeModal}>
        {modalType === "login" && <Login onCloseModal={closeModal} />}
        {modalType === "logout" && <Logout onCloseModal={closeModal} />}
      </DynamicModal>

      {/* Paywall modal */}
      <Modal
        visible={showPaywall}
        animationType="slide"
        onRequestClose={() => setShowPaywall(false)}
      >
        <PlanSelector onClose={() => setShowPaywall(false)} />
      </Modal>

      {isAuthenticated ? (
        <>
          {/* Hero card with avatar */}
          <View style={styles.heroCard}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
            <Text style={styles.heroName}>
              {userDoc?.name ?? user?.displayName ?? user?.email ?? "User"}
            </Text>
            <Text style={styles.heroEmail}>{user?.email}</Text>

            {/* Stats row */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: PLAN_COLORS[currentPlan] ?? palette.textMuted }]}>
                  {PLAN_LABELS[currentPlan] ?? currentPlan}
                </Text>
                <Text style={styles.statLabel}>Plan</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statValue}>{effectiveEntitlements.length}</Text>
                <Text style={styles.statLabel}>Grades</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={[styles.statValue, { color: palette.accent }]}>
                  {effectiveRole}
                </Text>
                <Text style={styles.statLabel}>Role</Text>
              </View>
            </View>

            {/* Action buttons */}
            <View style={styles.heroActions}>
              {!isPaidPlan ? (
                <Pressable
                  onPress={() => setShowPaywall(true)}
                  style={({ pressed }) => [styles.upgradeBtn, pressed && styles.upgradeBtnPressed]}
                >
                  <Feather name="zap" size={14} color={palette.textInverse} />
                  <Text style={styles.upgradeBtnText}>Upgrade Plan</Text>
                </Pressable>
              ) : (
                <Pressable onPress={() => setShowPaywall(true)} style={styles.manageBtn}>
                  <Text style={styles.manageBtnText}>Manage Plan</Text>
                </Pressable>
              )}
              <Pressable
                onPress={() => openModal("logout")}
                style={styles.logoutBtn}
              >
                <Feather name="log-out" size={14} color={palette.danger} />
                <Text style={styles.logoutBtnText}>Sign out</Text>
              </Pressable>
            </View>
          </View>

          {/* Progress dashboard */}
          <DashboardScreen />

          {/* Profile details */}
          <View style={{ marginBottom: 20 }}>
            {userDoc ? (
              <UserDetails userAccessData={userDoc} updateUserName={() => {}} />
            ) : null}
          </View>

          {/* Dev Simulator shortcut */}
          {__DEV__ && (
            <Pressable
              onPress={() => router.push("/devtools")}
              style={({ pressed }) => [styles.devBtn, pressed && { opacity: 0.7 }]}
            >
              <Feather name="zap" size={14} color="#fbbf24" />
              <Text style={styles.devBtnText}>Open Dev Simulator</Text>
            </Pressable>
          )}
        </>
      ) : (
        /* Not authenticated — login prompt */
        <View style={styles.guestCard}>
          <View style={styles.guestIconWrap}>
            <Feather name="user" size={32} color={palette.textMuted} />
          </View>
          <Text style={styles.guestTitle}>Welcome to Units</Text>
          <Text style={styles.guestSubtitle}>
            Sign in to track your progress, manage your plan, and unlock grade content.
          </Text>
          <Pressable
            onPress={() => openModal("login")}
            style={({ pressed }) => [styles.upgradeBtn, pressed && styles.upgradeBtnPressed, { marginTop: 0 }]}
          >
            <Feather name="log-in" size={14} color={palette.textInverse} />
            <Text style={styles.upgradeBtnText}>Sign in</Text>
          </Pressable>
        </View>
      )}
    </CustomView>
  );
};

const styles = StyleSheet.create({
  heroCard: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: palette.bgCanvas,
    padding: spacing.xl,
    alignItems: "center",
    ...shadow.card,
    borderWidth: 1,
    borderColor: palette.borderDefault,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: palette.accentSubtle,
    borderWidth: 3,
    borderColor: palette.accent,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "700",
    color: palette.accent,
  },
  heroName: {
    ...typography.h2,
    color: palette.textPrimary,
    marginBottom: 2,
    textAlign: "center",
  },
  heroEmail: {
    ...typography.caption,
    color: palette.textMuted,
    marginBottom: spacing.lg,
    textAlign: "center",
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: palette.bgSubtle,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: palette.borderDefault,
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statValue: {
    ...typography.bodyStrong,
    color: palette.textPrimary,
    textTransform: "capitalize",
  },
  statLabel: {
    ...typography.caption,
    color: palette.textMuted,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: palette.borderDefault,
  },
  heroActions: {
    flexDirection: "row",
    gap: spacing.sm,
    width: "100%",
  },
  upgradeBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    backgroundColor: palette.accent,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.pill,
  },
  upgradeBtnPressed: {
    backgroundColor: palette.accentHover,
  },
  upgradeBtnText: {
    ...typography.label,
    color: palette.textInverse,
  },
  manageBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: palette.borderDefault,
  },
  manageBtnText: {
    ...typography.label,
    color: palette.textSecondary,
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: palette.dangerSubtle,
    backgroundColor: palette.dangerSubtle,
  },
  logoutBtnText: {
    ...typography.label,
    color: palette.danger,
  },
  guestCard: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl * 2,
    borderRadius: radius.lg,
    backgroundColor: palette.bgCanvas,
    padding: spacing.xl,
    alignItems: "center",
    gap: spacing.md,
    ...shadow.card,
    borderWidth: 1,
    borderColor: palette.borderDefault,
  },
  guestIconWrap: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: palette.bgMuted,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  guestTitle: {
    ...typography.h2,
    color: palette.textPrimary,
    textAlign: "center",
  },
  guestSubtitle: {
    ...typography.body,
    color: palette.textSecondary,
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  devBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    backgroundColor: "#1e1b4b",
    marginHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    padding: spacing.md,
    borderRadius: radius.md,
  },
  devBtnText: {
    ...typography.label,
    color: "#fbbf24",
  },
});

export default ProfileView;
