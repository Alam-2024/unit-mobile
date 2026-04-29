import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 0,
    backgroundColor: "#F8FAFC",
  },
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 0,
    padding: 24,
    paddingTop: 60,
    paddingBottom: 60,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#64748B",
    marginBottom: 24,
    textAlign: "center",
  },
  errorText: {
    color: "#DC2626",
    backgroundColor: "#FEF2F2",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 14,
  },
  infoText: {
    color: "#059669",
    backgroundColor: "#ECFDF5",
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
    textAlign: "center",
    fontSize: 14,
  },
  inputGroup: {
    marginBottom: 2,
  },
  inputGroupRow: {
    maxWidth: "56%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 144,
    marginTop: 2,
  },
  inputGroupRowButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderColor: "#E2E8F0",
    paddingHorizontal: 36,
    paddingVertical: 7,
    borderWidth: 1.5,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 6,
  },
  input: {
    width: "96%",
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    backgroundColor: "#F8FAFC",
    color: "#0F172A",
    fontSize: 16,
  },
  passwordWrap: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  passwordToggle: {
    position: "absolute",
    right: 16,
    padding: 8,
  },
  inputPassword: {
    paddingRight: 60,
  },
  eyeIcon: {
    position: "absolute",
    right: 30,
    padding: 8,
  },
  eyeIconText: {
    fontSize: 22,
  },
  generateBtn: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginRight: 16,
    backgroundColor: "#F0FDFA",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#99F6E4",
    alignSelf: "flex-end",
  },
  generateBtnText: {
    color: "#0D9488",
    fontSize: 14,
    fontWeight: "600",
  },
  btn: {
    marginTop: 20,
    borderRadius: 999,
    alignItems: "center",
    backgroundColor: "#14B8A6",
    paddingVertical: 16,
  },
  btnDisabled: {
    opacity: 0.6,
  },
  linkRight: {
    marginTop: 12,
    alignSelf: "flex-end",
  },
  linkTextSmall: {
    fontSize: 13,
    color: "#14B8A6",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2E8F0",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#94A3B8",
    fontSize: 14,
    fontWeight: "500",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  switchText: {
    color: "#64748B",
    fontSize: 15,
  },
  switchLink: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: "700",
    color: "#14B8A6",
  },

  // ── Layout ────────────────────────────────────────────────────────────────
  header: {
    marginBottom: 24,
    alignItems: "center",
  },

  // ── Alert banners ─────────────────────────────────────────────────────────
  alert: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 16,
  },
  alertError: {
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FECACA",
  },
  alertSuccess: {
    backgroundColor: "#ECFDF5",
    borderWidth: 1,
    borderColor: "#A7F3D0",
  },
  alertText: {
    fontSize: 14,
    textAlign: "center",
  },
  alertTextError: {
    color: "#DC2626",
  },
  alertTextSuccess: {
    color: "#059669",
  },

  // ── Input validation ──────────────────────────────────────────────────────
  inputError: {
    borderColor: "#DC2626",
    backgroundColor: "#FEF2F2",
  },
  inputErrorText: {
    fontSize: 12,
    color: "#DC2626",
    marginTop: 4,
    marginLeft: 2,
  },

  // ── Password strength ─────────────────────────────────────────────────────
  strengthBar: {
    height: 4,
    backgroundColor: "#E2E8F0",
    borderRadius: 2,
    marginTop: 8,
    overflow: "hidden",
  },
  strengthFill: {
    height: 4,
    borderRadius: 2,
  },
  strengthLabel: {
    fontSize: 12,
    color: "#64748B",
    marginTop: 4,
  },

  // ── Generate link ─────────────────────────────────────────────────────────
  generateLink: {
    marginTop: 8,
    alignSelf: "flex-end",
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  generateLinkText: {
    fontSize: 13,
    color: "#14B8A6",
    fontWeight: "600",
  },

  // ── Primary CTA button ────────────────────────────────────────────────────
  primaryBtn: {
    height: 52,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14B8A6",
    marginTop: 20,
  },
  primaryBtnPressed: {
    backgroundColor: "#0D9488",
  },
  primaryBtnDisabled: {
    opacity: 0.6,
  },
  primaryBtnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  // ── Ghost / text link ─────────────────────────────────────────────────────
  ghostLink: {
    alignSelf: "center",
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  ghostLinkText: {
    fontSize: 14,
    color: "#64748B",
    textDecorationLine: "underline",
  },
});
