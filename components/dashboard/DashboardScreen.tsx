/**
 * DashboardScreen.tsx
 *
 * Displays a progress summary for the current user:
 *  - Greeting + total units completed
 *  - Per-subject progress bars
 *  - Last 3 recently completed units
 *  - Empty state when no units are complete
 */

import React, { useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppContext } from "@/hooks/useContextHook";
import { useProgress } from "@/hooks/useProgress";
import { SUBJECT_DEFS } from "@/constants/subjects";
import {
  palette,
  spacing,
  typography,
  radius,
  shadow,
} from "@/constants/designTokens";

/** Rough unit count per subject used as the denominator in progress bars. */
const SUBJECT_TOTAL: Record<string, number> = {
  math: 6,
  ela: 6,
  science: 6,
  pe: 6,
  social: 4,
  art: 4,
  music: 4,
  sel: 4,
  health: 4,
  tech: 4,
};

/** Parse a progress key "gradeSlug:subjectSlug:unitDBTitle" */
function parseKey(key: string): { gradeSlug: string; subjectSlug: string; unitDBTitle: string } {
  const idx1 = key.indexOf(":");
  const idx2 = key.indexOf(":", idx1 + 1);
  if (idx1 === -1 || idx2 === -1) {
    return { gradeSlug: key, subjectSlug: "unknown", unitDBTitle: key };
  }
  return {
    gradeSlug: key.slice(0, idx1),
    subjectSlug: key.slice(idx1 + 1, idx2),
    unitDBTitle: key.slice(idx2 + 1).replace(/_/g, " "),
  };
}

export default function DashboardScreen() {
  const { user, userDoc } = useAppContext();
  const { completedUnits, loading } = useProgress();

  const displayName =
    userDoc?.name ?? user?.displayName ?? user?.email ?? "there";

  const completedKeys = Object.keys(completedUnits);
  const totalCompleted = completedKeys.length;

  /** Per-subject completion counts */
  const subjectCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const key of completedKeys) {
      const { subjectSlug } = parseKey(key);
      counts[subjectSlug] = (counts[subjectSlug] ?? 0) + 1;
    }
    return counts;
  }, [completedKeys]);

  /** Last 3 completed units sorted by ISO timestamp descending */
  const recentCompletions = useMemo(() => {
    return completedKeys
      .map((key) => ({ key, iso: completedUnits[key] }))
      .sort((a, b) => b.iso.localeCompare(a.iso))
      .slice(0, 3);
  }, [completedKeys, completedUnits]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading progress…</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerCard}>
        <Text style={styles.greeting}>
          {"👋 Hello, "}
          <Text style={styles.greetingName}>{displayName}</Text>
        </Text>
        <Text style={styles.completedCount}>
          {totalCompleted === 0
            ? "No units completed yet"
            : `${totalCompleted} unit${totalCompleted !== 1 ? "s" : ""} completed`}
        </Text>
      </View>

      {totalCompleted === 0 ? (
        /* Empty state */
        <View style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>📚</Text>
          <Text style={styles.emptyTitle}>No units completed yet</Text>
          <Text style={styles.emptySubtitle}>
            Start exploring — tap a unit and mark it complete!
          </Text>
        </View>
      ) : (
        <>
          {/* Progress bars by subject */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Progress by subject</Text>
            {Object.values(SUBJECT_DEFS).map((subject) => {
              const count = subjectCounts[subject.slug] ?? 0;
              const total = SUBJECT_TOTAL[subject.slug] ?? 4;
              const pct = Math.min(count / total, 1);
              if (count === 0) return null;
              return (
                <View key={subject.slug} style={styles.progressRow}>
                  <Text style={styles.progressLabel}>{subject.shortLabel}</Text>
                  <View style={styles.barTrack}>
                    <View
                      style={[
                        styles.barFill,
                        {
                          width: `${Math.round(pct * 100)}%` as any,
                          backgroundColor: subject.iconColor,
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.progressCount}>
                    {count}/{total}
                  </Text>
                </View>
              );
            })}
          </View>

          {/* Recent completions */}
          {recentCompletions.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Recently completed</Text>
              {recentCompletions.map(({ key, iso }) => {
                const { gradeSlug, subjectSlug, unitDBTitle } = parseKey(key);
                const subject = SUBJECT_DEFS[subjectSlug as keyof typeof SUBJECT_DEFS];
                const dateStr = iso
                  ? new Date(iso).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                    })
                  : "";
                return (
                  <View key={key} style={styles.recentCard}>
                    <View
                      style={[
                        styles.recentDot,
                        {
                          backgroundColor: subject?.iconColor ?? palette.accent,
                        },
                      ]}
                    />
                    <View style={styles.recentInfo}>
                      <Text style={styles.recentTitle} numberOfLines={1}>
                        {unitDBTitle}
                      </Text>
                      <Text style={styles.recentMeta}>
                        {subject?.shortLabel ?? subjectSlug} · {gradeSlug}
                        {dateStr ? `  ·  ${dateStr}` : ""}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xl,
  },
  loadingContainer: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    alignItems: "center",
  },
  loadingText: {
    ...typography.body,
    color: palette.textMuted,
  },

  // Header
  headerCard: {
    backgroundColor: palette.accentSubtle,
    borderRadius: radius.lg,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: palette.borderFocus,
    gap: spacing.xs,
    ...shadow.card,
  },
  greeting: {
    ...typography.h2,
    color: palette.textPrimary,
  },
  greetingName: {
    color: palette.accent,
  },
  completedCount: {
    ...typography.body,
    color: palette.textSecondary,
  },

  // Empty state
  emptyCard: {
    backgroundColor: palette.bgCanvas,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    gap: spacing.sm,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    ...shadow.card,
  },
  emptyIcon: {
    fontSize: 40,
    marginBottom: spacing.xs,
  },
  emptyTitle: {
    ...typography.bodyStrong,
    color: palette.textPrimary,
    textAlign: "center",
  },
  emptySubtitle: {
    ...typography.body,
    color: palette.textSecondary,
    textAlign: "center",
  },

  // Section
  section: {
    backgroundColor: palette.bgCanvas,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.md,
    borderWidth: 1,
    borderColor: palette.borderDefault,
    ...shadow.card,
  },
  sectionTitle: {
    ...typography.label,
    color: palette.textMuted,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },

  // Progress rows
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  progressLabel: {
    ...typography.label,
    color: palette.textSecondary,
    width: 52,
  },
  barTrack: {
    flex: 1,
    height: 8,
    backgroundColor: palette.bgMuted,
    borderRadius: radius.pill,
    overflow: "hidden",
  },
  barFill: {
    height: 8,
    borderRadius: radius.pill,
  },
  progressCount: {
    ...typography.caption,
    color: palette.textMuted,
    width: 32,
    textAlign: "right",
  },

  // Recent completions
  recentCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: palette.borderDefault,
  },
  recentDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    flexShrink: 0,
  },
  recentInfo: {
    flex: 1,
    gap: 2,
  },
  recentTitle: {
    ...typography.label,
    color: palette.textPrimary,
  },
  recentMeta: {
    ...typography.caption,
    color: palette.textMuted,
    textTransform: "capitalize",
  },
});
