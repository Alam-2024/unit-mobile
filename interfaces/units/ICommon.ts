export interface WeeklyPlan {
  week: number;
  focus?: string;
  sessions: Session[];
}

interface Session {
  sessionNumber: number;
  focus?: string;
  title: string;
  objective: string;
  activities: Activity[];
  //TODO: Add pics to 4 week sessions
  imgUrl?: string; //TODO:change to string[]
  videoUrl?: string[];
  keyConcept?: string;
  reflection?: string;
}
export interface Activity {
  description: string;
  details: string[];
}

export interface Assessment {
  skill: string;
  level1: string;
  level2: string;
  level3: string;
  level4: string;
}

export interface IInvasionAssessment {
  type: string;
  criteria: AssessmentCriteria[];
}

interface AssessmentCriteria {
  criteria: string;
  excellent: string;
  good: string;
  satisfactory: string;
  needsImprovement: string;
}

export interface AssessmentCircuit {
  participation: string;
  technique: string;
  reflection: string;
}

export interface AssessmentDodgeball {
  participation: string;
  skillExecution: string;
  teamWork: string;
  strategy: string;
}

export interface AssessmentSwimming {
  formative: string[];
  summative: string[];
}

export interface AssessmentTrackAndField {
  rubric: {
    skill: string;
    levels: {
      description: string;
      score: number;
    }[];
  }[];
}

export enum LengthInWeeks {
  FourWeeks = "4 weeks(8 sessions)",
  FourFiveWeeks = "4-5 weeks (9-10 sessions)",
  SixWeeks = "6 weeks",
  EightWeeks = "8 weeks(16 sessions)",
}

// Enum for Grade PesapalloLevel
export enum GradeLevel {
  First = "1st Grade",
  Second = "2nd Grade",
  Third = "3rd Grade ",
  Fourth = "4th Grade",
  Fifth = "5th Grade",
}

export interface Rubric {
  skills: string[];
  levels: Level[];
}

interface Level {
  level: string;
  ballControl: string;
  passing: string;
  dribbling: string;
  shooting: string;
  teamwork: string;
}

export type PesapalloRubric = {
  batting: PesapalloLevel;
  fielding: PesapalloLevel;
  teamwork: PesapalloLevel;
  sportsmanship: PesapalloLevel;
};

type PesapalloLevel = {
  level1: string;
  level2: string;
  level3: string;
  level4: string;
};
