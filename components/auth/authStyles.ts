import { StyleSheet } from "react-native";
import {
  palette,
  radius,
  spacing,
  typography,
  shadow,
  minHitTarget,
} from "@/constants/designTokens";

export const authStyles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: palette.bgCanvas,
    width: "100%",
    padding: spacing.lg,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    paddingVertical: spacing["2xl"],
  },
  header: {
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.h1,
    color: palette.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: palette.textSecondary,
  },

  // Inline alerts
  alert: {
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  alertError: {
    backgroundColor: palette.dangerSubtle,
  },
  alertSuccess: {
    backgroundColor: palette.successSubtle,
  },
  alertText: {
    ...typography.label,
  },
  alertTextError: {
    color: palette.danger,
  },
  alertTextSuccess: {
    color: palette.success,
  },

  // Inputs
  inputGroup: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.label,
    color: palette.textSecondary,
    marginBottom: spacing.xs,
  },
  input: {
    height: minHitTarget,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    backgroundColor: palette.bgCanvas,
    color: palette.textPrimary,
    paddingHorizontal: spacing.lg,
    ...typography.body,
  },
  inputFocused: {
    borderColor: palette.borderFocus,
  },
  inputError: {
    borderColor: palette.danger,
  },
  inputHelper: {
    ...typography.caption,
    color: palette.textMuted,
    marginTop: spacing.xs,
  },
  inputErrorText: {
    ...typography.caption,
    color: palette.danger,
    marginTop: spacing.xs,
  },

  passwordWrap: {
    position: "relative",
    justifyContent: "center",
  },
  passwordToggle: {
    position: "absolute",
    right: spacing.md,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    paddingHorizontal: spacing.sm,
    minWidth: minHitTarget,
    alignItems: "flex-end",
  },

  // Strength meter
  strengthBar: {
    height: 4,
    borderRadius: radius.pill,
    backgroundColor: palette.bgMuted,
    overflow: "hidden",
    marginTop: spacing.sm,
  },
  strengthFill: {
    height: "100%",
    borderRadius: radius.pill,
  },
  strengthLabel: {
    ...typography.caption,
    color: palette.textMuted,
    marginTop: spacing.xs,
  },

  // Primary CTA
  primaryBtn: {
    height: minHitTarget,
    borderRadius: radius.md,
    backgroundColor: palette.accent,
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.sm,
    ...shadow.card,
  },
  primaryBtnPressed: {
    backgroundColor: palette.accentHover,
  },
  primaryBtnDisabled: {
    opacity: 0.6,
  },
  primaryBtnText: {
    ...typography.bodyStrong,
    color: palette.textInverse,
  },

  // Secondary, ghost link styles
  ghostLink: {
    alignSelf: "flex-end",
    marginTop: spacing.sm,
    paddingVertical: spacing.xs,
  },
  ghostLinkText: {
    ...typography.label,
    color: palette.accent,
  },
  generateLink: {
    alignSelf: "flex-start",
    marginTop: spacing.xs,
    paddingVertical: spacing.xs,
  },
  generateLinkText: {
    ...typography.caption,
    color: palette.accent,
  },

  // Switch row
  switchRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: spacing.xl,
  },
  switchText: {
    ...typography.label,
    color: palette.textSecondary,
  },
  switchLink: {
    ...typography.label,
    color: palette.accent,
    marginLeft: spacing.xs,
    fontWeight: "600",
  },

  // ---------------------------------------------------------------------
  // Legacy aliases used by app/Profile.tsx and components/customs/Profile.
  // Kept here so those screens keep compiling until they're migrated to
  // the new design tokens.
  // ---------------------------------------------------------------------
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  inputPassword: {
    paddingRight: 56,
  },
  eyeIcon: {
    position: "absolute",
    right: spacing.md,
    padding: spacing.sm,
  },
  eyeIconText: {
    fontSize: 22,
  },
  inputGroupRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.xs,
  },
  inputGroupRowButtons: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radius.md,
    borderColor: palette.borderDefault,
    borderWidth: 1,
    paddingHorizontal: spacing["2xl"],
    paddingVertical: spacing.sm,
  },
});
