import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StoredUsers } from "@/interfaces/user/IUser";
import { userProfileStyles } from "@/styles/profile";

interface UserReadOnlyProps {
  user: StoredUsers;
}

const UserReadOnly: React.FC<UserReadOnlyProps> = ({ user }) => {
  const gradeKeys = [
    "pk3",
    "pk4",
    "kg",
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
  ] as const;

  const renderGrade = (gradeKey: (typeof gradeKeys)[number]) => {
    const section = (user as any)[gradeKey];
    if (!section || typeof section !== "object") return null;

    const units = Object.entries(section) as [string, boolean][];

    if (units.length === 0) return null;

    const titleMap: Record<string, string> = {
      pk3: "PK3",
      pk4: "PK4",
      kg: "Kindergarten",
      first: "1st Grade",
      second: "2nd Grade",
      third: "3rd Grade",
      fourth: "4th Grade",
      fifth: "5th Grade",
    };

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

  return (
    <ScrollView
      style={userProfileStyles.container}
      contentContainerStyle={userProfileStyles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={userProfileStyles.profileCard}>
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
      </View>

      {/* Units(just for read) */}
      <Text style={userProfileStyles.sectionTitle}>Units access overview</Text>
      {gradeKeys.map(renderGrade)}
    </ScrollView>
  );
};

export default UserReadOnly;
