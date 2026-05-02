/**
 * subjects.ts — Subject definitions and grade-level mapping.
 * Single source of truth for what subjects each grade offers.
 */

export type SubjectSlug =
  | "pe"
  | "art"
  | "music"
  | "sel"
  | "ela"
  | "math"
  | "science"
  | "social"
  | "health"
  | "tech";

export interface SubjectDef {
  slug: SubjectSlug;
  label: string;
  shortLabel: string;
  /** Feather icon name */
  icon: string;
  /** Card background tint */
  bgColor: string;
  /** Icon & accent color */
  iconColor: string;
  description: string;
  /** true = real unit data exists; false = coming soon */
  hasContent: boolean;
}

const SUBJECT_DEFS: Record<SubjectSlug, SubjectDef> = {
  pe: {
    slug: "pe",
    label: "Physical Education",
    shortLabel: "PE",
    icon: "activity",
    bgColor: "#F0FDFA",
    iconColor: "#0D9488",
    description: "Movement, sports & fitness",
    hasContent: true,
  },
  math: {
    slug: "math",
    label: "Mathematics",
    shortLabel: "Math",
    icon: "hash",
    bgColor: "#F0FDF4",
    iconColor: "#16A34A",
    description: "Numbers, logic & problem-solving",
    hasContent: true,
  },
  ela: {
    slug: "ela",
    label: "Language Arts",
    shortLabel: "ELA",
    icon: "book-open",
    bgColor: "#EFF6FF",
    iconColor: "#2563EB",
    description: "Reading, writing & language",
    hasContent: true,
  },
  science: {
    slug: "science",
    label: "Science",
    shortLabel: "Science",
    icon: "zap",
    bgColor: "#FEFCE8",
    iconColor: "#CA8A04",
    description: "Exploration, experiments & discovery",
    hasContent: true,
  },
  social: {
    slug: "social",
    label: "Social Studies",
    shortLabel: "Social",
    icon: "globe",
    bgColor: "#F0F9FF",
    iconColor: "#0284C7",
    description: "History, geography & culture",
    hasContent: true,
  },
  art: {
    slug: "art",
    label: "Art",
    shortLabel: "Art",
    icon: "pen-tool",
    bgColor: "#FDF4FF",
    iconColor: "#9333EA",
    description: "Visual arts & creativity",
    hasContent: true,
  },
  music: {
    slug: "music",
    label: "Music",
    shortLabel: "Music",
    icon: "music",
    bgColor: "#FFF7ED",
    iconColor: "#EA580C",
    description: "Rhythm, melody & performance",
    hasContent: true,
  },
  sel: {
    slug: "sel",
    label: "Social Skills",
    shortLabel: "SEL",
    icon: "heart",
    bgColor: "#FFF1F2",
    iconColor: "#E11D48",
    description: "Emotions, empathy & communication",
    hasContent: true,
  },
  health: {
    slug: "health",
    label: "Health",
    shortLabel: "Health",
    icon: "shield",
    bgColor: "#FFF0F0",
    iconColor: "#DC2626",
    description: "Wellness, nutrition & body systems",
    hasContent: true,
  },
  tech: {
    slug: "tech",
    label: "Technology",
    shortLabel: "Tech",
    icon: "cpu",
    bgColor: "#F5F3FF",
    iconColor: "#7C3AED",
    description: "Digital literacy & computer science",
    hasContent: true,
  },
};

/**
 * Subjects available per grade slug, ordered by display priority.
 * Subjects grow in number as grade level increases.
 */
export const GRADE_SUBJECTS: Record<string, SubjectSlug[]> = {
  // Early Learning — foundational subjects
  pk3: ["pe", "art", "music", "sel"],
  pk4: ["pe", "art", "music", "sel"],
  // Kindergarten — adds early literacy
  kg: ["pe", "art", "music", "sel", "ela"],
  // Lower Elementary — adds core academics
  first:   ["pe", "math", "ela", "science", "social", "art", "music"],
  second:  ["pe", "math", "ela", "science", "social", "art", "music"],
  third:   ["pe", "math", "ela", "science", "social", "art", "music"],
  // Upper Elementary — same subjects, deeper content
  fourth: ["pe", "math", "ela", "science", "social", "art", "music"],
  fifth:  ["pe", "math", "ela", "science", "social", "art", "music"],
  // Middle School — adds health & technology
  sixth:   ["pe", "math", "ela", "science", "social", "art", "music", "health", "tech"],
  seventh: ["pe", "math", "ela", "science", "social", "art", "music", "health", "tech"],
  eighth:  ["pe", "math", "ela", "science", "social", "art", "music", "health", "tech"],
  // High School — specialized, no music by default
  ninth:   ["pe", "math", "ela", "science", "social", "health", "tech", "art"],
  tenth:   ["pe", "math", "ela", "science", "social", "health", "tech", "art"],
  eleventh: ["pe", "math", "ela", "science", "social", "health", "tech"],
  twelfth:  ["pe", "math", "ela", "science", "social", "health", "tech"],
};

export function getGradeSubjects(gradeSlug: string): SubjectDef[] {
  const slugs = GRADE_SUBJECTS[gradeSlug] ?? ["pe"];
  return slugs.map((s) => SUBJECT_DEFS[s]);
}

export { SUBJECT_DEFS };
