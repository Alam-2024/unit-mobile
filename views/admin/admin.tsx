/**
 * admin.tsx — refactored.
 *
 * Changes:
 *   • Removes per-unit Switch grid. Unit access is derived from the user's
 *     active Stripe plan (claims.entitlements). The admin assigns a plan or
 *     a manual entitlement override; he no longer toggles individual units.
 *   • No more `createUserWithEmailAndPassword` from the client. Admin clicks
 *     "Invite user", which calls the `inviteUser` Cloud Function.
 *   • Searchable list, filters by role and plan.
 *   • Drawer-style detail panel instead of a long form below the list.
 *   • Confirmation typed-email flow before destructive actions.
 */

import React, { useEffect, useMemo, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  collection,
  doc,
  onSnapshot,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

import { db } from "@/firebase/fireConfig";
import { useAppContext } from "@/hooks/useContextHook";
import {
  palette,
  radius,
  spacing,
  typography,
  shadow,
  minHitTarget,
} from "@/constants/designTokens";

interface AdminUser {
  id: string;
  userUid: string;
  email: string;
  name?: string;
  role: "student" | "teacher" | "admin" | "superadmin";
  plan: "free" | "basic" | "pro" | "institution";
  baned: boolean;
  manualEntitlementsOverride?: string[];
  createdAt?: string;
}

const ROLE_FILTERS = ["all", "student", "teacher", "admin"] as const;
const PLAN_FILTERS = ["all", "free", "basic", "pro", "institution"] as const;

const Admin: React.FC = () => {
  const { isAdmin } = useAppContext();
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] =
    useState<(typeof ROLE_FILTERS)[number]>("all");
  const [planFilter, setPlanFilter] =
    useState<(typeof PLAN_FILTERS)[number]>("all");
  const [selected, setSelected] = useState<AdminUser | null>(null);

  // Live subscription to users collection.
  useEffect(() => {
    // if (!isAdmin) return;
    const unsub = onSnapshot(collection(db, "users-data"), (snap) => {
      const arr: AdminUser[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<AdminUser, "id">),
      }));
      setUsers(arr);
      setLoading(false);
    });
    return unsub;
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return users.filter((u) => {
      if (roleFilter !== "all" && u.role !== roleFilter) return false;
      if (planFilter !== "all" && u.plan !== planFilter) return false;
      if (!q) return true;
      return (
        u.email.toLowerCase().includes(q) ||
        (u.name ?? "").toLowerCase().includes(q)
      );
    });
  }, [users, search, roleFilter, planFilter]);

  //!Change --> uncomment, now is just for testing purposes, but in the future we need to remove the admin view for non-admin users.
  // if (!isAdmin) {
  //   return (
  //     <View style={styles.center}>
  //       <Text style={styles.muted}>You don’t have access to this area.</Text>
  //     </View>
  //   );
  // }

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.h1}>Users</Text>
        <Pressable onPress={onInvite} style={styles.primaryBtn}>
          <Feather name="user-plus" size={16} color={palette.textInverse} />
          <Text style={styles.primaryBtnText}>Invite user</Text>
        </Pressable>
      </View>

      <View style={styles.toolbar}>
        <View style={styles.searchWrap}>
          <Feather name="search" size={16} color={palette.textMuted} />
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search by name or email"
            placeholderTextColor={palette.textMuted}
            style={styles.search}
          />
        </View>
        <FilterPills
          options={ROLE_FILTERS}
          value={roleFilter}
          onChange={setRoleFilter as (v: string) => void}
          label="Role"
        />
        <FilterPills
          options={PLAN_FILTERS}
          value={planFilter}
          onChange={setPlanFilter as (v: string) => void}
          label="Plan"
        />
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator color={palette.accent} />
        </View>
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(u) => u.id}
          contentContainerStyle={{ paddingBottom: spacing["3xl"] }}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          renderItem={({ item }) => (
            <UserRow user={item} onPress={() => setSelected(item)} />
          )}
          ListEmptyComponent={
            <Text
              style={[
                styles.muted,
                { textAlign: "center", marginTop: spacing.xl },
              ]}
            >
              No users match those filters.
            </Text>
          }
        />
      )}

      {selected && (
        <UserDetailDrawer
          user={selected}
          onClose={() => setSelected(null)}
          onUpdated={(u) => setSelected(u)}
        />
      )}
    </View>
  );
};

// ---------------- subcomponents ----------------

const FilterPills: React.FC<{
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  label: string;
}> = ({ options, value, onChange, label }) => (
  <View style={styles.pillsRow}>
    <Text style={styles.pillsLabel}>{label}:</Text>
    {options.map((opt) => (
      <Pressable
        key={opt}
        onPress={() => onChange(opt)}
        style={[styles.pill, opt === value && styles.pillActive]}
      >
        <Text style={[styles.pillText, opt === value && styles.pillTextActive]}>
          {opt}
        </Text>
      </Pressable>
    ))}
  </View>
);

const UserRow: React.FC<{ user: AdminUser; onPress: () => void }> = ({
  user,
  onPress,
}) => (
  <Pressable onPress={onPress} style={styles.row}>
    <View style={{ flex: 1 }}>
      <Text style={styles.rowName}>{user.name || "—"}</Text>
      <Text style={styles.rowEmail}>{user.email}</Text>
    </View>
    <View style={styles.rowMeta}>
      <Badge tone={user.role === "admin" ? "accent" : "neutral"}>
        {user.role}
      </Badge>
      <Badge tone={user.plan === "free" ? "neutral" : "success"}>
        {user.plan}
      </Badge>
      {user.baned && <Badge tone="danger">banned</Badge>}
    </View>
  </Pressable>
);

const Badge: React.FC<{
  tone: "neutral" | "accent" | "success" | "danger";
  children: React.ReactNode;
}> = ({ tone, children }) => {
  const palettes = {
    neutral: { bg: palette.bgMuted, fg: palette.textSecondary },
    accent: { bg: palette.accentSubtle, fg: palette.accent },
    success: { bg: palette.successSubtle, fg: palette.success },
    danger: { bg: palette.dangerSubtle, fg: palette.danger },
  }[tone];
  return (
    <View style={[styles.badge, { backgroundColor: palettes.bg }]}>
      <Text style={[styles.badgeText, { color: palettes.fg }]}>{children}</Text>
    </View>
  );
};

const UserDetailDrawer: React.FC<{
  user: AdminUser;
  onClose: () => void;
  onUpdated: (u: AdminUser) => void;
}> = ({ user, onClose, onUpdated }) => {
  const [busy, setBusy] = useState(false);

  const updateField = useCallback(
    async <K extends keyof AdminUser>(key: K, value: AdminUser[K]) => {
      setBusy(true);
      try {
        await updateDoc(doc(db, "users-data", user.id), { [key]: value });
        onUpdated({ ...user, [key]: value });
      } finally {
        setBusy(false);
      }
    },
    [user, onUpdated],
  );

  const onDelete = () => {
    Alert.prompt(
      "Type the user's email to confirm",
      user.email,
      async (typed) => {
        if (typed !== user.email) {
          Alert.alert("Email did not match. Aborted.");
          return;
        }
        setBusy(true);
        try {
          await deleteDoc(doc(db, "users-data", user.id));
          onClose();
        } finally {
          setBusy(false);
        }
      },
    );
  };

  return (
    <View style={styles.drawer}>
      <View style={styles.drawerHeader}>
        <Text style={styles.h2}>{user.name || user.email}</Text>
        <Pressable onPress={onClose} hitSlop={12}>
          <Feather name="x" size={20} color={palette.textSecondary} />
        </Pressable>
      </View>

      <ScrollView contentContainerStyle={{ padding: spacing.xl }}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}>Role</Text>
        <SegmentedControl
          options={["student", "teacher", "admin"]}
          value={user.role}
          onChange={(v) => updateField("role", v as AdminUser["role"])}
        />

        <Text style={styles.label}>Plan (manual override)</Text>
        <SegmentedControl
          options={["free", "basic", "pro", "institution"]}
          value={user.plan}
          onChange={(v) => updateField("plan", v as AdminUser["plan"])}
          help="Note: the active Stripe subscription overrides this when present."
        />

        <Text style={styles.label}>Banned</Text>
        <ToggleRow
          value={user.baned}
          onChange={(v) => updateField("baned", v)}
          label={user.baned ? "User cannot sign in." : "User can sign in."}
        />

        <Pressable
          onPress={onDelete}
          style={({ pressed }) => [
            styles.dangerBtn,
            pressed && { backgroundColor: palette.danger },
          ]}
        >
          <Feather name="trash-2" size={16} color={palette.danger} />
          <Text style={styles.dangerBtnText}>Delete user…</Text>
        </Pressable>
      </ScrollView>

      {busy && (
        <View style={styles.busyOverlay}>
          <ActivityIndicator color={palette.accent} />
        </View>
      )}
    </View>
  );
};

const SegmentedControl: React.FC<{
  options: string[];
  value: string;
  onChange: (v: string) => void;
  help?: string;
}> = ({ options, value, onChange, help }) => (
  <View>
    <View style={styles.segmented}>
      {options.map((o) => (
        <Pressable
          key={o}
          onPress={() => onChange(o)}
          style={[styles.segment, o === value && styles.segmentActive]}
        >
          <Text
            style={[
              styles.segmentText,
              o === value && styles.segmentTextActive,
            ]}
          >
            {o}
          </Text>
        </Pressable>
      ))}
    </View>
    {help && <Text style={styles.helpText}>{help}</Text>}
  </View>
);

const ToggleRow: React.FC<{
  value: boolean;
  onChange: (v: boolean) => void;
  label: string;
}> = ({ value, onChange, label }) => (
  <Pressable onPress={() => onChange(!value)} style={styles.toggleRow}>
    <Text style={[styles.value, { flex: 1 }]}>{label}</Text>
    <View style={[styles.toggle, value && styles.toggleOn]}>
      <View style={[styles.thumb, value && styles.thumbOn]} />
    </View>
  </Pressable>
);

// ---------------- Cloud Function bridge ----------------
async function onInvite() {
  Alert.prompt("Invite by email", "Enter the user's email", async (email) => {
    if (!email) return;
    try {
      const fns = getFunctions(undefined, "us-central1");
      const callable = httpsCallable<
        { email: string },
        { uid: string; invitationLink: string }
      >(fns, "inviteUser");
      const { data } = await callable({ email });
      Alert.alert(
        "Invitation created",
        `User created (uid: ${data.uid}). Share this link:\n\n${data.invitationLink}`,
      );
    } catch (e: any) {
      Alert.alert("Could not invite user", e?.message ?? "Unknown error");
    }
  });
}

// ---------------- styles ----------------

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bgCanvas },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.xl,
  },
  muted: { ...typography.body, color: palette.textMuted },

  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h1: { ...typography.h1, color: palette.textPrimary },
  h2: { ...typography.h2, color: palette.textPrimary },

  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
    height: minHitTarget,
    backgroundColor: palette.accent,
    borderRadius: radius.md,
  },
  primaryBtnText: { ...typography.bodyStrong, color: palette.textInverse },

  toolbar: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.lg,
    gap: spacing.md,
  },
  searchWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: palette.bgMuted,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
  },
  search: {
    flex: 1,
    height: minHitTarget,
    color: palette.textPrimary,
    ...typography.body,
    marginLeft: spacing.sm,
  },

  pillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: spacing.sm,
  },
  pillsLabel: {
    ...typography.caption,
    color: palette.textMuted,
    marginRight: spacing.xs,
  },
  pill: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: palette.bgMuted,
  },
  pillActive: { backgroundColor: palette.accent },
  pillText: { ...typography.caption, color: palette.textSecondary },
  pillTextActive: { color: palette.textInverse },

  divider: {
    height: 1,
    backgroundColor: palette.borderDefault,
    marginHorizontal: spacing.xl,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    gap: spacing.md,
  },
  rowName: { ...typography.bodyStrong, color: palette.textPrimary },
  rowEmail: { ...typography.caption, color: palette.textMuted, marginTop: 2 },
  rowMeta: { flexDirection: "row", alignItems: "center", gap: spacing.xs },

  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: radius.pill,
  },
  badgeText: { ...typography.caption },

  drawer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: "85%",
    maxWidth: 480,
    backgroundColor: palette.bgCanvas,
    borderLeftWidth: 1,
    borderLeftColor: palette.borderDefault,
    ...shadow.card,
  },
  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: palette.borderDefault,
  },
  label: {
    ...typography.label,
    color: palette.textSecondary,
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  value: { ...typography.body, color: palette.textPrimary },
  helpText: {
    ...typography.caption,
    color: palette.textMuted,
    marginTop: spacing.xs,
  },

  segmented: {
    flexDirection: "row",
    backgroundColor: palette.bgMuted,
    borderRadius: radius.md,
    padding: 2,
  },
  segment: {
    flex: 1,
    height: 36,
    borderRadius: radius.sm,
    alignItems: "center",
    justifyContent: "center",
  },
  segmentActive: { backgroundColor: palette.bgCanvas, ...shadow.card },
  segmentText: { ...typography.label, color: palette.textSecondary },
  segmentTextActive: { color: palette.textPrimary },

  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
  },
  toggle: {
    width: 44,
    height: 24,
    borderRadius: radius.pill,
    backgroundColor: palette.bgMuted,
    justifyContent: "center",
    padding: 2,
  },
  toggleOn: { backgroundColor: palette.accent },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: radius.pill,
    backgroundColor: palette.bgCanvas,
  },
  thumbOn: { transform: [{ translateX: 20 }] },

  dangerBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginTop: spacing["2xl"],
    padding: spacing.md,
    borderWidth: 1,
    borderColor: palette.danger,
    borderRadius: radius.md,
    alignSelf: "flex-start",
  },
  dangerBtnText: { ...typography.bodyStrong, color: palette.danger },
  busyOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.6)",
  },
});

export default Admin;
