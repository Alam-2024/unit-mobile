import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { IBtn, StoredUsers } from "@/interfaces/user/IUser";
import { userProfileStyles } from "@/styles/profile";
import CustomIcon from "@/components/customs/CustomIcon";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/fireConfig";
import {
  CustomRenderButtons,
  CustomRenderMsg,
} from "@/components/customs/Profile/Profile";
import CustomText from "@/components/customs/CustomText";
import { authStyles } from "@/components/auth/authStyles";
import { useAppContext } from "@/hooks/useContextHook";
import { palette, radius, spacing, typography } from "@/constants/designTokens";

const SLUG_LABELS: Record<string, string> = {
  pk3: "PK-3",
  pk4: "PK-4",
  kg: "Kindergarten",
  first: "1st Grade",
  second: "2nd Grade",
  third: "3rd Grade",
  fourth: "4th Grade",
  fifth: "5th Grade",
  sixth: "6th Grade",
  seventh: "7th Grade",
  eighth: "8th Grade",
  ninth: "9th Grade",
  tenth: "10th Grade",
  eleventh: "11th Grade",
  twelfth: "12th Grade",
};

interface UserDetailsProps {
  userAccessData: StoredUsers;
  updateUserName: React.Dispatch<React.SetStateAction<StoredUsers>>;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  userAccessData,
  updateUserName,
}) => {
  console.log("🚀 ~ UserDetails ~ userAccessData:", userAccessData);
  const { effectiveRole, effectiveEntitlements, isAdmin: ctxIsAdmin } = useAppContext();
  const [showFields, setShowFields] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState({
    name: "",
    errorMsg: "",
    infoMsg: "",
    loading: false,
  });
  const [newPassword, setNewPassword] = useState({
    password: "",
    errorMsg: "",
    infoMsg: "",
    loading: false,
  });

  React.useEffect(() => {
    if (!updateName.loading && !newPassword.loading) {
      const timeoutId = setTimeout(() => {
        setUpdateName((prev) => ({ ...prev, errorMsg: "", infoMsg: "" }));
        setNewPassword((prev) => ({ ...prev, errorMsg: "", infoMsg: "" }));
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [updateName.loading, newPassword.loading]);

  const btnName: IBtn[] = [
    { iconName: "close", action: () => cancelUpdatingName() },
    { iconName: "check", action: () => updatingName() },
  ];

  const updatingName = async (): Promise<void> => {
    if (!updateName.name.trim()) {
      setUpdateName((prev) => ({
        ...prev,
        errorMsg: "Name cannot be empty if you want to update it",
      }));
      return;
    }
    setUpdateName((prev) => ({ ...prev, loading: true }));
    try {
      const userDocRef = doc(db, "users-data", userAccessData.id);
      await updateDoc(userDocRef, { name: updateName.name });
      updateUserName((prev) => ({ ...prev, name: updateName.name }));
    } catch (error) {
      console.error("Error updating name:", error);
      setUpdateName((prev) => ({
        ...prev,
        errorMsg: "Error updating name",
      }));
    } finally {
      setUpdateName((prev) => ({
        ...prev,
        infoMsg: "Name updated successfully",
        loading: false,
      }));
      setShowFields(false);
    }
  };

  const cancelUpdatingName = async (): Promise<void> => {
    setUpdateName((prev) => ({ ...prev, name: "", errorMsg: "", infoMsg: "" }));
    setShowFields(false);
  };

  const btnPassword: IBtn[] = [
    { iconName: "close", action: () => cancelUpdatingPassword() },
    { iconName: "inbox", action: () => updatingPassword() },
  ];

  const updatingPassword = () => {
    console.log("Updating password to:", newPassword.password);
  };

  const cancelUpdatingPassword = () => {
    setNewPassword((prev) => ({
      ...prev,
      password: "",
      errorMsg: "",
      infoMsg: "",
    }));
    setShowFields(false);
    setShowPassword(false);
  };

  const handleFieldsToggle = () => {
    setShowFields(!showFields);
    setUpdateName((prev) => ({ ...prev, name: "", errorMsg: "", infoMsg: "" }));
    setNewPassword((prev) => ({
      ...prev,
      password: "",
      errorMsg: "",
      infoMsg: "",
    }));
  };

  const renderFields = () => {
    if (!showFields) return null;
    return (
      <View style={userProfileStyles.renderFields}>
        <View style={authStyles.inputGroup}>
          <CustomText
            value="Name"
            style={authStyles.label}
            color="#e5e7eb"
            bold
          />
          <TextInput
            placeholder="Type your name..."
            value={updateName.name}
            autoCapitalize="none"
            onChangeText={(text) =>
              setUpdateName((prev) => ({ ...prev, name: text }))
            }
            style={authStyles.input}
            placeholderTextColor="#9ca3af"
          />
          {CustomRenderButtons(btnName)}
        </View>
        <View style={authStyles.inputGroup}>
          <CustomText
            value="Your new password"
            style={authStyles.label}
            color="#e5e7eb"
            bold
          />
          <View style={authStyles.passwordWrap}>
            <TextInput
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              value={newPassword.password}
              onChangeText={(text) =>
                setNewPassword((prev) => ({ ...prev, password: text }))
              }
              style={authStyles.input}
              placeholderTextColor="#9ca3af"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={authStyles.passwordToggle}
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <Feather
                name={showPassword ? "eye-off" : "eye"}
                size={20}
                color={palette.textSecondary}
              />
            </TouchableOpacity>
          </View>
          {CustomRenderButtons(btnPassword)}
        </View>
      </View>
    );
  };

  const entitlements: string[] = effectiveEntitlements;
  const isAdmin = ctxIsAdmin;

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={userProfileStyles.container}
      contentContainerStyle={userProfileStyles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header card */}
      <View style={userProfileStyles.profileCard}>
        {updateName.loading
          ? CustomRenderMsg("Updating name...", updateName.loading, "#259200")
          : null}
        {updateName.errorMsg
          ? CustomRenderMsg(updateName.errorMsg, false, "#ff0000")
          : null}
        {updateName.infoMsg
          ? CustomRenderMsg(updateName.infoMsg, false, "#34d399")
          : null}

        <TouchableOpacity
          onPress={handleFieldsToggle}
          style={userProfileStyles.editButton}
        >
          <CustomIcon
            iconName="edit"
            iconSize={42}
            iconColor={showFields ? "#ffdfdf" : "#ffffff"}
          />
        </TouchableOpacity>

        <CustomText
          value={userAccessData.name}
          style={userProfileStyles.name}
          big
          bold
          color="#fff"
        />
        <Text style={userProfileStyles.email}>{userAccessData.email}</Text>

        <View style={userProfileStyles.row}>
          <Text style={userProfileStyles.badgeRole}>
            {effectiveRole}
          </Text>
          <View
            style={[
              userProfileStyles.badgeStatus,
              userAccessData.baned
                ? userProfileStyles.badgeBanned
                : userProfileStyles.badgeActive,
            ]}
          >
            <View
              style={[
                userProfileStyles.statusDot,
                {
                  backgroundColor: userAccessData.baned ? "#f97373" : "#22c55e",
                },
              ]}
            />
            <Text style={userProfileStyles.badgeStatusText}>
              {userAccessData.baned ? "Banned" : "Active"}
            </Text>
          </View>
        </View>

        {showFields && renderFields()}
      </View>

      {/* Entitlements section */}
      <CustomText
        value="Grades you have access to"
        style={userProfileStyles.sectionTitle}
        center
        bold
        big
      />

      {isAdmin ? (
        <View style={styles.adminBadge}>
          <Feather name="shield" size={16} color={palette.accent} />
          <Text style={styles.adminBadgeText}>
            Admin — access to all grades
          </Text>
        </View>
      ) : entitlements.length === 0 ? (
        <View style={styles.emptyEntitlements}>
          <Text style={styles.emptyText}>
            No grades unlocked yet. Upgrade your plan to get access.
          </Text>
        </View>
      ) : (
        <View style={styles.entitlementsGrid}>
          {entitlements.map((slug) => (
            <View key={slug} style={styles.entitlementChip}>
              <View style={styles.chipDot} />
              <Text style={styles.chipText}>{SLUG_LABELS[slug] ?? slug}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  adminBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    backgroundColor: palette.accentSubtle,
    borderRadius: radius.md,
    padding: spacing.md,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  adminBadgeText: {
    ...typography.bodyStrong,
    color: palette.accent,
  },
  emptyEntitlements: {
    padding: spacing.xl,
    alignItems: "center",
  },
  emptyText: {
    ...typography.body,
    color: palette.textSecondary,
    textAlign: "center",
  },
  entitlementsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: spacing.lg,
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  entitlementChip: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
    backgroundColor: palette.accentSubtle,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  chipDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: palette.accent,
  },
  chipText: {
    ...typography.label,
    color: palette.accent,
  },
});

export default UserDetails;
