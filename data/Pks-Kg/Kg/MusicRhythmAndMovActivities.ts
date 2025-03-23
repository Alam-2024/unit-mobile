// Definición de interfaces para la estructura del contenido

import { Pk3ShortTitlesTypes } from "../../../interfaces/pk3/pkTypes";

const harmonyOfMovementAndMusicUnit: Pk3ShortTitlesTypes = {
  unitTitle: "Harmony of Movement and Music",
  TheBigIdea: {
    description:
      "Kindergarten students embark on an enriching journey where music, rhythm, and movement intertwine to create a harmonious experience. Through joyful exploration and creative expression, students develop coordination, creativity, and a deeper appreciation for the connection between music and movement. This journey fosters a love for active play and lays a strong foundation for lifelong physical and artistic development.",
  },

  EssentialQuestions: {
    questions: [
      "How does music inspire and influence our movements?",

      "What different movements can we explore and express through music and rhythm?",

      "How does matching our movements to the rhythm of the music enhance our coordination and timing?",
      "What feelings and emotions do we experience when moving to different types of music?",
      "How can we use our bodies to interpret and respond to different rhythms and melodies?",
      "What role does creativity play in combining music and movement to create expressive performances?",
      "How do we collaborate and communicate with others when creating group movements to music?",
      "What cultural traditions and styles of music can we explore through movement?",
      "How can we use music and movement to tell stories or convey messages?",
      "What are some ways we can share our love for music and movement with others?",
    ],
  },
  // the5Cs: ["Creativity and Entrepreneurial Mindset"],
  // learningGoals: [
  //   {
  //     goal: "Students will develop coordination through movement activities related to music.",
  //   },
  //   {
  //     goal: "Students will explore creativity in expressing themselves through dance.",
  //   },
  //   {
  //     goal: "Students will learn about the connection between music and movement.",
  //   },
  // ],
  LearningGoals: {
    GrossMotorSkills: [],
    NonLocomotorSkills: [],
    LocomotorSkills: [],
    ObjectControlSkills: [
      "Develop coordination through movement activities related to music.",
      "Explore creativity in expressing themselves through dance.",
      "Learn about the connection between music and movement.",
    ],
  },
  assessmentPlan:
    // {
    //   method:
    //     "Learning ladders / rubrics for assessing participation in activities.",
    // },
    // { method: "Other evidence through observation during group performances." },
    {
      assessments: [
        {
          type: "rubric",
          description: "Participation in music and movement activities.",
        },
        {
          type: "observation",
          description: "Observation during group performances.",
        },
      ],
      otherEvidence: ["Student reflections on their experiences."],
      instructionalStrategies: {
        strategies: [
          "Exploring Different Music Genres from around the world.",
          "Creative Movement Sessions with props like scarves and ribbons.",
          "Rhythm and Movement Games matching movements to musical cues.",
          "Music and Storytelling using narratives with accompanying movements.",
          "Group Choreography Projects encouraging teamwork in creating routines.",
          "Outdoor Music and Movement Sessions exploring natural sounds.",
          "Guest Musician or Dancer Visits for inspiration.",
          "Community Performances showcasing skills learned.",
          "Reflection and Discussion after activities for self-assessment.",
          "Integration with Other Subjects connecting music with literacy, math, etc.",
        ],
      },
    },
  resourcesForEducators: [
    "Materials for exploring different music genres.",
    "Props for creative movement sessions like scarves or instruments.",
  ],
};

// Exportar el contenido para su uso en otros módulos
export default harmonyOfMovementAndMusicUnit;
