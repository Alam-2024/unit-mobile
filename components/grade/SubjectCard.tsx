import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { SubjectDef } from "@/constants/subjects";
import { palette, spacing, radius, typography, shadow } from "@/constants/designTokens";

interface Props {
  subject: SubjectDef;
  isLocked: boolean;
  onPress: () => void;
}

export default function SubjectCard({ subject, isLocked, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      {/* Icon block */}
      <View style={[styles.iconWrap, { backgroundColor: subject.bgColor }]}>
        <Feather
          name={subject.icon as any}
          size={22}
          color={isLocked ? palette.textMuted : subject.iconColor}
        />
        {isLocked && (
          <View style={styles.lockDot}>
            <Feather name="lock" size={9} color={palette.textMuted} />
          </View>
        )}
      </View>

      {/* Text */}
      <Text style={[styles.label, isLocked && styles.labelLocked]} numberOfLines={2}>
        {subject.label}
      </Text>
      <Text style={styles.desc} numberOfLines={2}>
        {subject.description}
      </Text>

      {/* Status pill */}
      {subject.hasContent ? (
        <View style={styles.pillAvailable}>
          <View style={styles.pillDot} />
          <Text style={styles.pillAvailableText}>Available</Text>
        </View>
      ) : (
        <View style={styles.pillSoon}>
          <Text style={styles.pillSoonText}>Coming soon</Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    backgroundColor: palette.bgCanvas,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    gap: spacing.sm,
    ...shadow.card,
  },
  cardPressed: {
    backgroundColor: palette.bgSubtle,
    borderColor: palette.borderStrong,
  },
  iconWrap: {
    width: 48,
    height: 48,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  lockDot: {
    position: "absolute",
    bottom: -5,
    right: -5,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: palette.bgMuted,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    ...typography.bodyStrong,
    color: palette.textPrimary,
  },
  labelLocked: {
    color: palette.textMuted,
  },
  desc: {
    ...typography.caption,
    color: palette.textMuted,
    lineHeight: 16,
  },
  pillAvailable: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    backgroundColor: "#F0FDFA",
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },
  pillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#0D9488",
  },
  pillAvailableText: {
    ...typography.caption,
    color: "#0D9488",
    fontWeight: "600",
  },
  pillSoon: {
    backgroundColor: palette.bgMuted,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: radius.pill,
  },
  pillSoonText: {
    ...typography.caption,
    color: palette.textMuted,
  },
});
