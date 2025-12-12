import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const profileStyles = StyleSheet.create({
  container: {
    paddingBottom: 90,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 16,
    marginBottom: 16,
    color: "#222",
  },
  buttonContainer: {
    paddingHorizontal: 26,
    paddingTop: 18,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(15, 23, 42, 0.363)", // slate-900
    borderWidth: 1,
    borderColor: "rgba(51,65,85,0.26)", // slate-700
    borderRadius: 8,
    marginVertical: 16,
  },
  gradeContainer: {
    marginBottom: 20,
  },
  gradeHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    justifyContent: "space-between",
    paddingRight: 26,
  },
  gradeTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 16,
    marginBottom: 12,
    color: "#333",
  },
  activeSportsText: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "500",
    color: "#444",
    fontFamily: "Roboto",
    textOverflow: "ellipsis",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    lineHeight: 20,
    backgroundColor: "#ffffff",
    padding: 6,
    borderRadius: 6,
    minWidth: 160,
    textAlign: "center",
  },
  sportItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    minWidth: windowWidth * 0.28,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  activeSport: {
    backgroundColor: "#002f02b5",
    borderColor: "#004d00b5",
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  inactiveSport: {
    backgroundColor: "#ddd",
    borderColor: "#ccc",
  },
  sportText: {
    fontSize: 14,
  },
  activeText: {
    color: "#fff",
    fontWeight: "800",
  },
  inactiveText: {
    color: "#666",
    fontWeight: "600",
  },
  emptyContainer: {
    marginTop: 40,
    alignItems: "center",
  },
});

export const userProfileStyles = StyleSheet.create({
  container: {
    backgroundColor: "#0206170", // slate-950
    width: "100%",
    borderRadius: 16,
    padding: 6,
  },
  content: {
    padding: 6,
    paddingBottom: 100,
  },
  profileCard: {
    backgroundColor: "rgba(15,23,42,0.98)",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(51,65,85,0.7)",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badgeRole: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: "rgba(56,189,248,0.2)",
    color: "#e0f2fe",
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  badgeStatus: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeActive: {
    backgroundColor: "rgba(34,197,94,0.15)",
  },
  badgeBanned: {
    backgroundColor: "rgba(248,113,113,0.15)",
  },
  badgeStatusText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#e5e7eb",
  },
  statusDot: {
    width: 9,
    height: 9,
    borderRadius: 999,
    marginRight: 6,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 10,
  },
  gradeCard: {
    backgroundColor: "rgba(15,23,42,0.95)",
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(51,65,85,0.7)",
  },
  gradeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    alignItems: "center",
  },
  gradeTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  gradeSubTitle: {
    fontSize: 12,
    color: "#9ca3af",
  },
  unitsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  unitChip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  unitChipActive: {
    backgroundColor: "rgba(56,189,248,0.16)",
    borderColor: "#38bdf8",
  },
  unitChipInactive: {
    backgroundColor: "rgba(15,23,42,1)",
    borderColor: "rgba(75,85,99,0.9)",
  },
  unitText: {
    fontSize: 12,
    fontWeight: "500",
  },
  unitTextActive: {
    color: "#e0f2fe",
  },
  unitTextInactive: {
    color: "#9ca3af",
  },
});
