/**
 * designTokens.ts
 * Single source of truth for the design system.
 * Never hardcode hex/spacing values in components — always import from here.
 */

export const palette = {
  // Surfaces
  bgCanvas: "#FFFFFF",
  bgSubtle: "#F8FAFC",
  bgMuted: "#F1F5F9",

  // Borders
  borderDefault: "#E2E8F0",
  borderStrong: "#CBD5E1",
  borderFocus: "#14B8A6",

  // Text
  textPrimary: "#0F172A",
  textSecondary: "#475569",
  textMuted: "#94A3B8",
  textInverse: "#FFFFFF",

  // Brand accent (single accent across the app)
  accent: "#14B8A6",
  accentHover: "#0D9488",
  accentSubtle: "#F0FDFA",

  // Feedback
  success: "#059669",
  successSubtle: "#ECFDF5",
  warning: "#D97706",
  warningSubtle: "#FFFBEB",
  danger: "#DC2626",
  dangerSubtle: "#FEF2F2",
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 48,
  "4xl": 64,
} as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const typography = {
  display: { fontSize: 32, lineHeight: 40, fontWeight: "700" as const },
  h1: { fontSize: 24, lineHeight: 32, fontWeight: "700" as const },
  h2: { fontSize: 20, lineHeight: 28, fontWeight: "600" as const },
  body: { fontSize: 16, lineHeight: 24, fontWeight: "400" as const },
  bodyStrong: { fontSize: 16, lineHeight: 24, fontWeight: "600" as const },
  label: { fontSize: 14, lineHeight: 20, fontWeight: "500" as const },
  caption: { fontSize: 12, lineHeight: 16, fontWeight: "500" as const },
} as const;

export const shadow = {
  card: {
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  elevated: {
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 6,
  },
} as const;

/** Helper for hit-target compliance (≥44pt). */
export const minHitTarget = 44;

/** Animation durations in ms. */
export const motion = {
  fast: 120,
  base: 200,
  slow: 320,
} as const;

export type Palette = typeof palette;
export type Spacing = typeof spacing;
