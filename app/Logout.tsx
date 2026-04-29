import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text, ActivityIndicator } from "react-native";
import { signOut } from "firebase/auth";
import { authFirebase } from "@/firebase/fireConfig";
import { palette, radius, spacing, typography } from "@/constants/designTokens";
import { Feather } from "@expo/vector-icons";

const Logout = ({ onCloseModal }: { onCloseModal?: () => void }) => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(authFirebase);
      onCloseModal?.();
    } catch (error) {
      console.error("Error logging out:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Feather name="log-out" size={28} color={palette.danger} />
      </View>
      <Text style={styles.title}>Sign out?</Text>
      <Text style={styles.subtitle}>You can always sign back in anytime.</Text>

      <Pressable
        onPress={handleLogout}
        disabled={loading}
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed, loading && styles.btnDisabled]}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.btnText}>Sign out</Text>
        )}
      </Pressable>

      <Pressable onPress={onCloseModal} style={styles.cancelBtn}>
        <Text style={styles.cancelText}>Cancel</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    alignItems: "center",
    gap: spacing.sm,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: palette.dangerSubtle,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.h2,
    color: palette.textPrimary,
  },
  subtitle: {
    ...typography.body,
    color: palette.textSecondary,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  btn: {
    width: "100%",
    height: 48,
    borderRadius: radius.pill,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.danger,
  },
  btnPressed: {
    opacity: 0.85,
  },
  btnDisabled: {
    opacity: 0.6,
  },
  btnText: {
    ...typography.bodyStrong,
    color: "#fff",
  },
  cancelBtn: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.xl,
  },
  cancelText: {
    ...typography.label,
    color: palette.textMuted,
  },
});

export default Logout;
