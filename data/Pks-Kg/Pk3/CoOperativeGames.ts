interface CurriculumData {
  TheBigIdea: {
    description: string;
  };
  SocialInteraction: {
    activities: string[];
  };
  LanguageUse: {
    activities: string[];
  };
  SelfRegulation: {
    activities: string[];
  };
  AgreedRules: {
    activities: string[];
  };
  EssentialQuestions: {
    questions: string[];
  };
  DASLearningGoals: string[];
  InstructionAndLearningPlan: {
    knowledgeAndVocabulary: string[];
  };
}

export const CoOperativeGamesThirdData: CurriculumData = {
  TheBigIdea: {
    description: "During cooperative play, every child has a role to play to get the desired results. As children divide the roles and set the rules, they learn to think from each other's perspective to ensure everyone enjoys the game. The lesson that every child experiences a similar situation differently is the first lesson of empathy."
  },
  SocialInteraction: {
    activities: [
      "Negotiating",
      "Compromising",
      "Assigning each other roles",
      "Working together as a group",
      "Shared goals",
      "Children using blocks or sticks to build a structure together",
      "Children playing board games where players are on the same side",
      "Children deciding what game to play and agree on what defines success",
      "Children working on different tasks for a common goal",
      "Children playing together in turns"
    ]
  },
  LanguageUse: {
    activities: [
      "Practicing new words",
      "Answering questions in complete sentences",
      "Asking questions from their friends for clarification",
      "Children demonstrating and describing what they're doing to their peers"
    ]
  },
  SelfRegulation: {
    activities: [
      "Delayed gratification as they wait for their turn to play",
      "Absorbing disappointment after losing",
      "Allowing other children to take up roles they like for the game to continue"
    ]
  },
  AgreedRules: {
    activities: [
      "Children amending rules or following the rules",
      "Children coming together to set rules for a game",
      "Children agreeing to follow the rules"
    ]
  },
  EssentialQuestions: {
    questions: [
      // You can add specific essential questions here if needed
    ]
  },
  DASLearningGoals: [
    "Collaboration, Interaction, and Cultural Competence",
    "Care, Community, and the World Around Me",
    "Open-Minded",
    "Balanced",
    "Knowledgeable"
  ],
  InstructionAndLearningPlan: {
    knowledgeAndVocabulary: [
      "Duck Duck Goose",
      "Stuck in the mud",
      "Clean the gym (throw different balls in the gym), at the start children run to clean the ball and bring back in the bucket (different instructions take one ball take two balls... or by color)",
      "The color hoops (in the beginning, the teacher says the colors but after the children take turns saying a color. When they hear the color they need to go to the hoop with that color)"
    ]
  },
};
