/**
 * subjectIndex.ts
 * Maps (gradeSlug + subjectSlug) → unit map ready for CustomGradeContainer.
 * Each value is Record<unitDBTitle, IUnits>.
 */

import { IUnits } from "@/interfaces/units/IUnit";

// ── Math ─────────────────────────────────────────────────────────────────────
import {
  NumberSenseElementary,
  FractionsElementary,
} from "./Math/MathElementary";
import { RatiosMiddle, AlgebraMiddle } from "./Math/MathMiddle";
import { FunctionsHigh, StatisticsHigh } from "./Math/MathHigh";

// ── ELA ──────────────────────────────────────────────────────────────────────
import {
  ReadingComprehensionElementary,
  NarrativeWritingElementary,
} from "./ELA/ELAElementary";
import {
  LiteraryAnalysisMiddle,
  ArgumentWritingMiddle,
} from "./ELA/ELAMiddle";
import { ResearchRhetoricHigh, ClosReadingHigh } from "./ELA/ELAHigh";

// ── Science ──────────────────────────────────────────────────────────────────
import {
  LifeScienceElementary,
  EarthScienceElementary,
} from "./Science/ScienceElementary";
import {
  PhysicalScienceMiddle,
  EcosystemsMiddle,
} from "./Science/ScienceMiddle";
import { GeneticsHigh, ChemistryHigh } from "./Science/ScienceHigh";

// ── Social Studies ────────────────────────────────────────────────────────────
import {
  CommunityCitizenshipElementary,
  GeographyElementary,
} from "./SocialStudies/SocialElementary";
import {
  AncientCivilizationsMiddle,
  CivicsMiddle,
} from "./SocialStudies/SocialMiddle";
import {
  WorldHistoryHigh,
  EconomicsHigh,
} from "./SocialStudies/SocialHigh";

// ── Art ──────────────────────────────────────────────────────────────────────
import { ColorsShapesEarly, StorytellingArtEarly } from "./Art/ArtEarly";
import {
  ElementsOfArtElementary,
  SculptureElementary,
} from "./Art/ArtElementary";

// ── Music ─────────────────────────────────────────────────────────────────────
import { SoundRhythmEarly, SingingSongElementary } from "./Music/MusicEarly";
import {
  ReadingMusicElementary,
  WorldMusicElementary,
} from "./Music/MusicElementary";

// ── Health ────────────────────────────────────────────────────────────────────
import {
  PersonalHealthMiddle,
  MentalHealthMiddle,
} from "./Health/HealthMiddle";
import { HealthLiteracyHigh, SexualHealthHigh } from "./Health/HealthHigh";

// ── Tech ─────────────────────────────────────────────────────────────────────
import {
  DigitalCitizenshipMiddle,
  ProgrammingMiddle,
} from "./Tech/TechMiddle";
import { WebDevHigh, DataScienceHigh } from "./Tech/TechHigh";

// ── SEL ──────────────────────────────────────────────────────────────────────
import {
  FeelingsAwarenessEarly,
  FriendshipSELElementary,
} from "./SEL/SELEarly";
import {
  EmotionalRegulationMiddle,
  ConflictResolutionMiddle,
} from "./SEL/SELMiddle";
import {
  IdentityPurposeHigh,
  LeadershipAdvocacyHigh,
} from "./SEL/SELHigh";

// ─────────────────────────────────────────────────────────────────────────────

type UnitMap = Record<string, IUnits>;

/** Pre-built unit maps per subject band */
const MATH: Record<string, UnitMap> = {
  elementary: {
    [NumberSenseElementary.unitDBTitle]: NumberSenseElementary,
    [FractionsElementary.unitDBTitle]: FractionsElementary,
  },
  middle: {
    [RatiosMiddle.unitDBTitle]: RatiosMiddle,
    [AlgebraMiddle.unitDBTitle]: AlgebraMiddle,
  },
  high: {
    [FunctionsHigh.unitDBTitle]: FunctionsHigh,
    [StatisticsHigh.unitDBTitle]: StatisticsHigh,
  },
};

const ELA: Record<string, UnitMap> = {
  elementary: {
    [ReadingComprehensionElementary.unitDBTitle]: ReadingComprehensionElementary,
    [NarrativeWritingElementary.unitDBTitle]: NarrativeWritingElementary,
  },
  middle: {
    [LiteraryAnalysisMiddle.unitDBTitle]: LiteraryAnalysisMiddle,
    [ArgumentWritingMiddle.unitDBTitle]: ArgumentWritingMiddle,
  },
  high: {
    [ResearchRhetoricHigh.unitDBTitle]: ResearchRhetoricHigh,
    [ClosReadingHigh.unitDBTitle]: ClosReadingHigh,
  },
};

const SCIENCE: Record<string, UnitMap> = {
  early: {
    [LifeScienceElementary.unitDBTitle]: LifeScienceElementary,
    [EarthScienceElementary.unitDBTitle]: EarthScienceElementary,
  },
  elementary: {
    [LifeScienceElementary.unitDBTitle]: LifeScienceElementary,
    [EarthScienceElementary.unitDBTitle]: EarthScienceElementary,
  },
  middle: {
    [PhysicalScienceMiddle.unitDBTitle]: PhysicalScienceMiddle,
    [EcosystemsMiddle.unitDBTitle]: EcosystemsMiddle,
  },
  high: {
    [GeneticsHigh.unitDBTitle]: GeneticsHigh,
    [ChemistryHigh.unitDBTitle]: ChemistryHigh,
  },
};

const SOCIAL: Record<string, UnitMap> = {
  early: {
    [CommunityCitizenshipElementary.unitDBTitle]: CommunityCitizenshipElementary,
    [GeographyElementary.unitDBTitle]: GeographyElementary,
  },
  elementary: {
    [CommunityCitizenshipElementary.unitDBTitle]: CommunityCitizenshipElementary,
    [GeographyElementary.unitDBTitle]: GeographyElementary,
  },
  middle: {
    [AncientCivilizationsMiddle.unitDBTitle]: AncientCivilizationsMiddle,
    [CivicsMiddle.unitDBTitle]: CivicsMiddle,
  },
  high: {
    [WorldHistoryHigh.unitDBTitle]: WorldHistoryHigh,
    [EconomicsHigh.unitDBTitle]: EconomicsHigh,
  },
};

const ART: Record<string, UnitMap> = {
  early: {
    [ColorsShapesEarly.unitDBTitle]: ColorsShapesEarly,
    [StorytellingArtEarly.unitDBTitle]: StorytellingArtEarly,
  },
  elementary: {
    [ElementsOfArtElementary.unitDBTitle]: ElementsOfArtElementary,
    [SculptureElementary.unitDBTitle]: SculptureElementary,
  },
  middle: {
    [ElementsOfArtElementary.unitDBTitle]: ElementsOfArtElementary,
    [SculptureElementary.unitDBTitle]: SculptureElementary,
  },
  high: {
    [ElementsOfArtElementary.unitDBTitle]: ElementsOfArtElementary,
    [SculptureElementary.unitDBTitle]: SculptureElementary,
  },
};

const MUSIC: Record<string, UnitMap> = {
  early: {
    [SoundRhythmEarly.unitDBTitle]: SoundRhythmEarly,
    [SingingSongElementary.unitDBTitle]: SingingSongElementary,
  },
  elementary: {
    [ReadingMusicElementary.unitDBTitle]: ReadingMusicElementary,
    [WorldMusicElementary.unitDBTitle]: WorldMusicElementary,
  },
  middle: {
    [ReadingMusicElementary.unitDBTitle]: ReadingMusicElementary,
    [WorldMusicElementary.unitDBTitle]: WorldMusicElementary,
  },
};

const SEL: Record<string, UnitMap> = {
  early: {
    [FeelingsAwarenessEarly.unitDBTitle]: FeelingsAwarenessEarly,
    [FriendshipSELElementary.unitDBTitle]: FriendshipSELElementary,
  },
  elementary: {
    [FeelingsAwarenessEarly.unitDBTitle]: FeelingsAwarenessEarly,
    [FriendshipSELElementary.unitDBTitle]: FriendshipSELElementary,
  },
  middle: {
    [EmotionalRegulationMiddle.unitDBTitle]: EmotionalRegulationMiddle,
    [ConflictResolutionMiddle.unitDBTitle]: ConflictResolutionMiddle,
  },
  high: {
    [IdentityPurposeHigh.unitDBTitle]: IdentityPurposeHigh,
    [LeadershipAdvocacyHigh.unitDBTitle]: LeadershipAdvocacyHigh,
  },
};

const HEALTH: Record<string, UnitMap> = {
  middle: {
    [PersonalHealthMiddle.unitDBTitle]: PersonalHealthMiddle,
    [MentalHealthMiddle.unitDBTitle]: MentalHealthMiddle,
  },
  high: {
    [HealthLiteracyHigh.unitDBTitle]: HealthLiteracyHigh,
    [SexualHealthHigh.unitDBTitle]: SexualHealthHigh,
  },
};

const TECH: Record<string, UnitMap> = {
  middle: {
    [DigitalCitizenshipMiddle.unitDBTitle]: DigitalCitizenshipMiddle,
    [ProgrammingMiddle.unitDBTitle]: ProgrammingMiddle,
  },
  high: {
    [WebDevHigh.unitDBTitle]: WebDevHigh,
    [DataScienceHigh.unitDBTitle]: DataScienceHigh,
  },
};

/** Map grade slug → band */
function gradeToBand(gradeSlug: string): string {
  if (["pk3", "pk4", "kg"].includes(gradeSlug)) return "early";
  if (["first", "second", "third", "fourth", "fifth"].includes(gradeSlug))
    return "elementary";
  if (["sixth", "seventh", "eighth"].includes(gradeSlug)) return "middle";
  return "high";
}

/**
 * Returns the unit map for a given grade + subject combination.
 * Returns null if no content is available for that pair.
 */
export function getSubjectUnits(
  gradeSlug: string,
  subjectSlug: string
): UnitMap | null {
  const band = gradeToBand(gradeSlug);

  const lookup: Record<string, Record<string, UnitMap>> = {
    math: MATH,
    ela: ELA,
    science: SCIENCE,
    social: SOCIAL,
    art: ART,
    music: MUSIC,
    sel: SEL,
    health: HEALTH,
    tech: TECH,
  };

  const subjectMap = lookup[subjectSlug];
  if (!subjectMap) return null;

  return subjectMap[band] ?? null;
}
