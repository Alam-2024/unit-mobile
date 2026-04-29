import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useAppContext } from "@/hooks/useContextHook";
import DynamicModal from "../modal";
import Login from "../Login";
import Logout from "../Logout";
import CustomButton from "@/components/customs/CustomButton";
import CustomText from "@/components/customs/CustomText";
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

const ProfileView = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<"login" | "logout" | null>(null);
  const [showPaywall, setShowPaywall] = useState(false);

  const { isAuthenticated, user, userDoc, effectivePlan, effectiveEntitlements } = useAppContext();
  const router = useRouter();

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
    <CustomView style={profileStyles.container} bgColor="#e5e5e5">
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

      <Pressable
        onPress={() => router.push("/devtools")}
        style={({ pressed }) => [styles.devBtn, pressed && { opacity: 0.7 }]}
      >
        <Feather name="zap" size={14} color="#fbbf24" />
        <Text style={styles.devBtnText}>Open Dev Simulator</Text>
      </Pressable>

      <View style={profileStyles.buttonContainer}>
        {isAuthenticated ? (
          <>
            <View>
              <CustomText value="Welcome" medium style={{ paddingBottom: 3 }} />
              <CustomText value={`${user?.email}`} bold />
            </View>
            <CustomButton onPress={() => openModal("logout")}>
              <CustomText value="Logout" big center />
            </CustomButton>
          </>
        ) : (
          <>
            <CustomText
              value="Please login to view your profile."
              medium
              bold
            />
            <CustomButton onPress={() => openModal("login")}>
              <CustomText value="Login" big center />
            </CustomButton>
          </>
        )}
      </View>

      {/* Plan card — visible only when authenticated */}
      {isAuthenticated && (
        <View style={styles.planCard}>
          <View style={styles.planRow}>
            <View style={styles.planInfo}>
              <Text style={styles.planLabel}>Current plan</Text>
              <View style={styles.planBadgeRow}>
                <View
                  style={[
                    styles.planDot,
                    {
                      backgroundColor:
                        PLAN_COLORS[currentPlan] ?? palette.textMuted,
                    },
                  ]}
                />
                <Text
                  style={[
                    styles.planName,
                    { color: PLAN_COLORS[currentPlan] ?? palette.textMuted },
                  ]}
                >
                  {PLAN_LABELS[currentPlan] ?? currentPlan}
                </Text>
              </View>
              {effectiveEntitlements.length > 0 && (
                <Text style={styles.entitlementsText}>
                  {effectiveEntitlements.length} grade
                  {effectiveEntitlements.length !== 1 ? "s" : ""} unlocked
                </Text>
              )}
            </View>

            {!isPaidPlan && (
              <Pressable
                onPress={() => setShowPaywall(true)}
                style={({ pressed }) => [
                  styles.upgradeBtn,
                  pressed && styles.upgradeBtnPressed,
                ]}
              >
                <Feather name="zap" size={14} color={palette.textInverse} />
                <Text style={styles.upgradeBtnText}>Upgrade</Text>
              </Pressable>
            )}

            {isPaidPlan && (
              <Pressable
                onPress={() => setShowPaywall(true)}
                style={styles.manageBtn}
              >
                <Text style={styles.manageBtnText}>Manage</Text>
              </Pressable>
            )}
          </View>
        </View>
      )}

      <View style={{ marginBottom: 20 }}>
        {isAuthenticated && userDoc ? (
          <UserDetails userAccessData={userDoc} updateUserName={() => {}} />
        ) : (
          <CustomText
            value="You need to be logged in to view profile details."
            medium
            center
          />
        )}
      </View>

      {/* Dev Simulator shortcut — only visible in development builds */}
      {isAuthenticated && (
        <Pressable
          onPress={() => router.push("/devtools")}
          style={({ pressed }) => [styles.devBtn, pressed && { opacity: 0.7 }]}
        >
          <Feather name="zap" size={14} color="#fbbf24" />
          <Text style={styles.devBtnText}>Open Dev Simulator</Text>
        </Pressable>
      )}
    </CustomView>
  );
};

const styles = StyleSheet.create({
  planCard: {
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: palette.bgCanvas,
    padding: spacing.lg,
    ...shadow.card,
  },
  planRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  planInfo: {
    flex: 1,
  },
  planLabel: {
    ...typography.caption,
    color: palette.textMuted,
    marginBottom: 4,
  },
  planBadgeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  planDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  planName: {
    ...typography.bodyStrong,
  },
  entitlementsText: {
    ...typography.caption,
    color: palette.textSecondary,
    marginTop: 4,
  },
  upgradeBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: palette.accent,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
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
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: palette.borderDefault,
  },
  manageBtnText: {
    ...typography.label,
    color: palette.textSecondary,
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
