import {
  Assessment,
  AssessmentCircuit,
  AssessmentCooGames,
  AssessmentDodgeball,
  AssessmentSwimming,
  AssessmentTrackAndField,
  IInvasionAssessment,
  PesapalloRubric,
  Rubric,
  WeeklyPlan,
} from "./ICommon";

export interface IUnits {
  //TODO: Add title and unit title showing them with different content
  unitTitle: string;
  unitDBTitle: string;
  title: string;
  gradeLevel: string;
  lengthOfUnit: string;
  concept?: string;
  overallExpectation: string;
  essentialQuestions: string[];
  skills: string[];
  weeklyPlan: WeeklyPlan[];
  assessment?:
    | Assessment[]
    | IInvasionAssessment
    | AssessmentCircuit
    | AssessmentTrackAndField
    | AssessmentDodgeball
    | AssessmentSwimming
    | AssessmentCooGames[];
  //TODO: check these props for all units
  learningExperiences?: string[];
  equipmentNeeded?: string[];
  differentiation?:
    | {
        beginners: string;
        advanced: string;
        inclusive: string;
      }
    | string[];
  safetyConsiderations?: string[];
  reflectionAndSummativeFeedback?: string;
  rubric?: Rubric | PesapalloRubric;
}
