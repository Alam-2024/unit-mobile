export interface Pk3ShortTitlesTypes {
  unitTitle: string;
  TheBigIdea: Idea;
  LearningGoals: {
    GrossMotorSkills: string[];
    NonLocomotorSkills: string[];
    LocomotorSkills: string[];
    ObjectControlSkills: string[];
  };
  EssentialQuestions: {
    questions: string[];
  };
  InstructionAndLearningPlan: Plan;
  //TODO: Check these two and add them to all Pks
  Resources?: string[];
  instructionalPlan?: {
    knowledgeAndVocabulary: SkillDevelopment;
    learningExperiences: LearningExperience[];
  };
  assessmentPlan?: {
    assessments: Assessment[];
    otherEvidence: string[];
    instructionalStrategies?: {
      strategies: string[];
    };
  };
  resourcesForEducators?: string[];
}

export type Plan = {
  disciplinarySkills: string[];
  knowledgeAndVocabulary: string[];
};

export type Idea = {
  description: string;
  goals: string[];
};

interface LearningExperience {
  activity: string;
  objective: string;
}

interface SkillDevelopment {
  handEyeCoordination: string;
  throwingAndCatchingTechniques: string;
  strikingSkills: string;
  teamworkAndCooperation: string;
  motorSkillsAndSpatialAwareness: string;
}

interface Assessment {
  type: string; // e.g., "rubric", "observation"
  description: string;
}
