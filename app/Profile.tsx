import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StoredUsers } from "@/interfaces/user/IUser";
import { userProfileStyles } from "@/styles/profile";
import CustomIcon from "@/components/customs/CustomIcon";
import { authStyles } from "@/components/auth/authStyles";
import { gradeKeys, titleMap } from "@/interfaces/constants/profile";

interface UserReadOnlyProps {
  user: StoredUsers;
}
interface IBtn {
  iconName: string;
  action: () => void;
}

const UserReadOnly: React.FC<UserReadOnlyProps> = ({ user }) => {
  if (!user) return <Text>No user data</Text>;

  const [showFields, setShowFields] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [updateName, setUpdateName] = useState({
    name: "",
    errorMsg: "",
    infoMsg: "",
    loading: "",
  });
  const [newPassword, setNewPassword] = useState({
    password: "",
    errorMsg: "",
    infoMsg: "",
    loading: "",
  });

  const buttons: IBtn[] = [
    { iconName: "pause", action: () => console.log("Cancel") },
    { iconName: "check", action: () => console.log("Save") },
  ];
  const btnPassword: IBtn[] = [
    { iconName: "pause", action: () => console.log("Cancel password") },
    { iconName: "inbox", action: () => console.log("Save password") },
  ];

  const resetMessages = () =>
    setUpdateName((prev) => ({
      ...prev,
      errorMsg: "",
      infoMsg: "",
    }));

  const renderGrade = (gradeKey: (typeof gradeKeys)[number]) => {
    const section = (user as StoredUsers)[gradeKey];
    if (!section || typeof section !== "object") return null;

    const units = Object.entries(section) as [string, boolean][];

    if (units.length === 0) return null;

    return (
      <View key={gradeKey} style={userProfileStyles.gradeCard}>
        <View style={userProfileStyles.gradeHeader}>
          <Text style={userProfileStyles.gradeTitle}>
            {titleMap[gradeKey] || gradeKey}
          </Text>
          <Text style={userProfileStyles.gradeSubTitle}>
            Units: {units.length} · Active: {units.filter(([, v]) => v).length}
          </Text>
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
              <Text
                style={[
                  userProfileStyles.unitText,
                  active
                    ? userProfileStyles.unitTextActive
                    : userProfileStyles.unitTextInactive,
                ]}
              >
                {unitName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const handleFieldsToggle = () => {
    setShowFields(!showFields);
  };

  const renderFields = () => {
    if (!showFields) return null;
    return (
      <View style={userProfileStyles.renderFields}>
        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Name</Text>
          <TextInput
            placeholder="Type you name..."
            value={!updateName.name ? user.name : updateName.name}
            autoCapitalize="none"
            onChangeText={(text) =>
              setUpdateName((prev) => ({ ...prev, email: text }))
            }
            style={authStyles.input}
            placeholderTextColor="#9ca3af"
          />
          {renderButtons(buttons)}
        </View>
        <View style={authStyles.inputGroup}>
          <Text style={authStyles.label}>Your new password</Text>
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
              <Text style={authStyles.eyeIconText}>
                {showPassword ? "🙈" : "👁️"}
              </Text>
            </TouchableOpacity>
          </View>
          {renderButtons(btnPassword)}
        </View>
      </View>
    );
  };
  const renderButtons = (btnArray: IBtn[]) => {
    return (
      <View style={authStyles.inputGroupRow}>
        {btnArray?.map((button: IBtn) => (
          <TouchableOpacity
            key={button.iconName}
            onPress={button.action}
            style={authStyles.inputGroupRowButtons}
          >
            <CustomIcon
              iconName={button.iconName as any}
              iconSize={24}
              iconColor={button.iconName !== "Pause" ? "#259200" : "#ff0000"}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  return (
    <ScrollView
      style={userProfileStyles.container}
      contentContainerStyle={userProfileStyles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={userProfileStyles.profileCard}>
        <TouchableOpacity
          onPress={handleFieldsToggle}
          style={userProfileStyles.editButton}
        >
          <CustomIcon iconName="edit" iconSize={42} iconColor="#ffffff" />{" "}
        </TouchableOpacity>
        <Text style={userProfileStyles.name}>{user.name}</Text>
        <Text style={userProfileStyles.email}>{user.email}</Text>
        <View style={userProfileStyles.row}>
          <Text style={userProfileStyles.badgeRole}>{user.role}</Text>
          <View
            style={[
              userProfileStyles.badgeStatus,
              user.baned
                ? userProfileStyles.badgeBanned
                : userProfileStyles.badgeActive,
            ]}
          >
            <View
              style={[
                userProfileStyles.statusDot,
                { backgroundColor: user.baned ? "#f97373" : "#22c55e" },
              ]}
            />
            <Text style={userProfileStyles.badgeStatusText}>
              {user.baned ? "Banned" : "Active"}
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

export default UserReadOnly;
