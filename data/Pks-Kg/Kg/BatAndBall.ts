import { Pk3ShortTitlesTypes } from "@/interfaces/pk3/pkTypes";

export const batAndBallUnit: Pk3ShortTitlesTypes = {
  unitTitle:
    "Building Fundamental Skills and Teamwork Through Bat and Ball Activities",
  TheBigIdea: {
    description:
      "In this kindergarten unit, students will engage in bat and ball activities designed to build fundamental skills and promote teamwork. The focus will be on developing essential abilities such as striking, catching, and throwing, which are crucial for various sports and physical activities. Through a series of engaging games, children will enhance their hand-eye coordination, motor skills, and spatial awareness.",
  },
  //TODO: Check this....
  // learningObjectives: [
  //   "Skill Development: Students will learn to strike, catch, and throw effectively.",
  //   "Teamwork: Emphasis on cooperation and communication during group activities.",
  //   "Physical Activity: Foster a love for movement and sports through enjoyable games.",
  // ],
  LearningGoals: {
    GrossMotorSkills: ["striking", "catching", "throwing"],
    NonLocomotorSkills: [],
    LocomotorSkills: [],
    ObjectControlSkills: [],
  },

  EssentialQuestions: {
    questions: [
      "How do we use our hands and eyes together to successfully hit and catch a ball?",
      "What techniques help us strike a ball with a bat and catch it with our hands?",
      "Why is it important to work as a team during bat and ball activities?",
      "How can we communicate and cooperate with our classmates to play games and achieve our goals?",

      "What can we learn about movement and coordination through bat and ball games?",
      "How do different movements, such as swinging a bat or throwing a ball, help us develop our motor skills?",
      "What strategies can we use to improve our hand-eye coordination and spatial awareness?",
    ],
  },
  instructionalPlan: {
    knowledgeAndVocabulary: {
      handEyeCoordination:
        "Practicing batting and catching to improve visual perception with physical movements.",
      throwingAndCatchingTechniques:
        "Learning proper methods to enhance accuracy and control.",
      strikingSkills:
        "Developing the ability to strike a ball effectively using correct body positioning.",
      teamworkAndCooperation:
        "Understanding the importance of collaboration in achieving common goals.",
      motorSkillsAndSpatialAwareness:
        "Enhancing overall motor skills including agility, balance, and coordination.",
    },

    learningExperiences: [
      {
        activity: "Batting Practice Stations",
        objective: "Improve hand-eye coordination and striking techniques.",
      },
      {
        activity: "Catch and Throw Relay",
        objective: "Enhance throwing/catching skills while fostering teamwork.",
      },
      {
        activity: "Team-Based Bat and Ball Games",
        objective:
          "Teach fundamentals of bat-and-ball sports while emphasizing teamwork.",
      },
    ],
  },

  assessmentPlan: {
    assessments: [
      {
        type: "rubric",
        description:
          "Evaluate skill development in striking, catching, throwing, and teamwork.",
      },
      {
        type: "observation",
        description:
          "Collect evidence through observations during activities to assess student engagement.",
      },
    ],

    otherEvidence: [
      "Student reflections on teamwork experiences.",
      "Peer assessments during group activities.",
    ],
  },
};
