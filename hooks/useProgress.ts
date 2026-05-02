/**
 * useProgress.ts
 *
 * Manages per-unit completion state in Firestore.
 * Key format: "gradeSlug:subjectSlug:unitDBTitle"
 * Firestore path: users/{uid}/progress (single document, one field per unit key)
 * Field value: ISO timestamp string when completed, or absent if not.
 */

import { useEffect, useState, useCallback } from "react";
import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  deleteField,
  Timestamp,
} from "firebase/firestore";
import { db, authFirebase } from "@/firebase/fireConfig";

/** key → ISO timestamp string */
type CompletedUnits = Record<string, string>;

interface UseProgressReturn {
  completedUnits: CompletedUnits;
  markComplete: (
    gradeSlug: string,
    subjectSlug: string,
    unitDBTitle: string
  ) => Promise<void>;
  markIncomplete: (
    gradeSlug: string,
    subjectSlug: string,
    unitDBTitle: string
  ) => Promise<void>;
  isComplete: (
    gradeSlug: string,
    subjectSlug: string,
    unitDBTitle: string
  ) => boolean;
  loading: boolean;
}

function makeKey(
  gradeSlug: string,
  subjectSlug: string,
  unitDBTitle: string
): string {
  // Replace dots/slashes/colons which are invalid in Firestore field names
  const safeTitle = unitDBTitle.replace(/[./:]/g, "_");
  return `${gradeSlug}:${subjectSlug}:${safeTitle}`;
}

export function useProgress(): UseProgressReturn {
  const [completedUnits, setCompletedUnits] = useState<CompletedUnits>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const uid = authFirebase.currentUser?.uid;
    if (!uid) {
      setCompletedUnits({});
      setLoading(false);
      return;
    }

    const progressRef = doc(db, "users", uid, "progress", "completions");

    const unsub = onSnapshot(
      progressRef,
      (snap) => {
        if (!snap.exists()) {
          setCompletedUnits({});
          setLoading(false);
          return;
        }
        const data = snap.data() ?? {};
        const parsed: CompletedUnits = {};
        for (const [key, value] of Object.entries(data)) {
          if (value instanceof Timestamp) {
            parsed[key] = value.toDate().toISOString();
          } else if (typeof value === "string") {
            // already an ISO string
            parsed[key] = value;
          } else if (value instanceof Date) {
            parsed[key] = value.toISOString();
          }
        }
        setCompletedUnits(parsed);
        setLoading(false);
      },
      () => {
        // On error (e.g. no permission), return empty state silently
        setCompletedUnits({});
        setLoading(false);
      }
    );

    return unsub;
  }, []);

  const markComplete = useCallback(
    async (
      gradeSlug: string,
      subjectSlug: string,
      unitDBTitle: string
    ): Promise<void> => {
      const uid = authFirebase.currentUser?.uid;
      if (!uid) return;

      const key = makeKey(gradeSlug, subjectSlug, unitDBTitle);
      const progressRef = doc(db, "users", uid, "progress", "completions");

      try {
        // Store ISO timestamp string as value
        await setDoc(
          progressRef,
          { [key]: new Date().toISOString() },
          { merge: true }
        );
      } catch (e) {
        console.error("[useProgress] markComplete failed:", e);
      }
    },
    []
  );

  const markIncomplete = useCallback(
    async (
      gradeSlug: string,
      subjectSlug: string,
      unitDBTitle: string
    ): Promise<void> => {
      const uid = authFirebase.currentUser?.uid;
      if (!uid) return;

      const key = makeKey(gradeSlug, subjectSlug, unitDBTitle);
      const progressRef = doc(db, "users", uid, "progress", "completions");

      try {
        await updateDoc(progressRef, { [key]: deleteField() });
      } catch (e) {
        console.error("[useProgress] markIncomplete failed:", e);
      }
    },
    []
  );

  const isComplete = useCallback(
    (
      gradeSlug: string,
      subjectSlug: string,
      unitDBTitle: string
    ): boolean => {
      const key = makeKey(gradeSlug, subjectSlug, unitDBTitle);
      return key in completedUnits;
    },
    [completedUnits]
  );

  return { completedUnits, markComplete, markIncomplete, isComplete, loading };
}
