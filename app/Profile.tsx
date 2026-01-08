import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { IBtn, StoredUsers } from "@/interfaces/user/IUser";
import { userProfileStyles } from "@/styles/profile";
import CustomIcon from "@/components/customs/CustomIcon";
import { gradeKeys, titleMap } from "@/interfaces/constants/profile";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase/fireConfig";
import {
  CustomRenderButtons,
  CustomRenderMsg,
} from "@/components/customs/Profile/Profile";
import CustomText from "@/components/customs/CustomText";
import { authStyles } from "@/components/auth/authStyles";
import { getFriendlyUnitName } from "@/utils/Navbar";

interface UserDetailsProps {
  userAccessData: StoredUsers;
  updateUserName: React.Dispatch<React.SetStateAction<StoredUsers>>;
}

const UserDetails: React.FC<UserDetailsProps> = ({
  userAccessData,
  updateUserName,
}) => {
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
      // Logic to update name
      console.log("Updating name to:", updateName.name);
      const userDocRef = doc(db, "users-data", userAccessData.id);
      // Update logic goes here
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
      }));

      setUpdateName((prev) => ({ ...prev, loading: false }));
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
    // Logic to update password
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

  const renderGrade = (gradeKey: (typeof gradeKeys)[number]) => {
    const section = (userAccessData as StoredUsers)[gradeKey];
    if (!section || typeof section !== "object") return null;

    const units = Object.entries(section) as [string, boolean][];

    if (units.length === 0) return null;

    return (
      <View key={gradeKey} style={userProfileStyles.gradeCard}>
        <View style={userProfileStyles.gradeHeader}>
          <CustomText
            value={titleMap[gradeKey] || gradeKey}
            color="#9ca3af"
            bold
          />
          <CustomText
            value={
              `Units: ${units.length}` +
              " · " +
              `Active: ${units.filter(([, v]) => v).length}`
            }
            color="#9ca3af"
            fSize={12}
          />
        </View>
        <View style={userProfileStyles.unitsContainer}>
          {units.map(([unitName, active]) => (
            <View
              key={unitName}
              style={[
                userProfileStyles.unitChip,
                active
                  ? userProfileStyles.unitChipActive
                  : userProfileStyles.unitChipInactive,
              ]}
            >
              <View
                style={[
                  userProfileStyles.statusDot,
                  { backgroundColor: active ? "#22c55e" : "#6b7280" },
                ]}
              />
              <CustomText
                value={getFriendlyUnitName(unitName)}
                style={[
                  userProfileStyles.unitText,
                  active
                    ? userProfileStyles.unitTextActive
                    : userProfileStyles.unitTextInactive,
                ]}
                color="#fff"
              />
            </View>
          ))}
        </View>
      </View>
    );
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
            placeholder="Type you name..."
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
          <View style={authStyles.passwordContainer}>
            <TextInput
              placeholder="••••••••"
              secureTextEntry={!showPassword}
              value={newPassword.password}
              onChangeText={(text) =>
                setNewPassword((prev) => ({ ...prev, password: text }))
              }
              style={[authStyles.input, authStyles.inputPassword]}
              placeholderTextColor="#9ca3af"
              autoCapitalize="none"
            />
            <TouchableOpacity
              style={authStyles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <CustomText
                value={showPassword ? "🙈" : "👁️"}
                style={authStyles.eyeIconText}
                big
              />
            </TouchableOpacity>
          </View>
          {CustomRenderButtons(btnPassword)}
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={userProfileStyles.container}
      contentContainerStyle={userProfileStyles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={userProfileStyles.profileCard}>
        {/* Loading indicator */}
        {updateName.loading
          ? CustomRenderMsg("Updating name...", updateName.loading, "#259200")
          : null}
        {/* Error */}
        {updateName.errorMsg
          ? CustomRenderMsg(updateName.errorMsg, false, "#ff0000")
          : null}
        {/* Info */}
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
          />{" "}
        </TouchableOpacity>
        <Text style={userProfileStyles.name}>{userAccessData.name}</Text>
        <Text style={userProfileStyles.email}>{userAccessData.email}</Text>
        <View style={userProfileStyles.row}>
          <Text style={userProfileStyles.badgeRole}>{userAccessData.role}</Text>
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

      {/* Units(just for read) */}
      <Text style={userProfileStyles.sectionTitle}>Units access overview</Text>
      {gradeKeys.map(renderGrade)}
    </ScrollView>
  );
};

export default UserDetails;
