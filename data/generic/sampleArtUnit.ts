/**
 * sampleArtUnit.ts — Generic Art unit example following ISubjectUnit.
 * Structural placeholder — replace with real curriculum content.
 */

import { ISubjectUnit } from "@/interfaces/subjects/ISubjectUnit";

export const LinesAndShapesAroundUs: ISubjectUnit = {
  unitTitle: "Lines and Shapes Around Us",
  subject: "Art",
  gradeLevel: "Kindergarten",
  duration: "3 weeks (6 sessions)",
  bigIdea:
    "Artists use lines and shapes as the fundamental building blocks to create works of art and communicate ideas.",
  essentialQuestions: [
    "What is a line? What is a shape?",
    "How do artists use lines and shapes to express ideas?",
    "Where do we find lines and shapes in the world around us?",
  ],
  learningObjectives: [
    "Identify and name basic lines (straight, curved, zigzag, wavy) in art and the environment",
    "Identify and draw basic geometric shapes (circle, triangle, square, rectangle)",
    "Create original artwork combining lines and shapes",
    "Describe their own artwork using art vocabulary",
  ],
  lessons: [
    {
      lessonNumber: 1,
      title: "Exploring Lines",
      objective: "Students identify and draw different types of lines.",
      duration: "40 minutes",
      activities: [
        {
          name: "Line Discovery Walk",
          description: "Students walk around the room identifying lines on furniture, floors, and windows. They share what they found.",
          duration: "10 min",
        },
        {
          name: "Line Sampler",
          description: "Students practice drawing straight, curved, zigzag, and wavy lines on large paper using markers.",
          duration: "15 min",
        },
        {
          name: "Line Collage",
          description: "Students use pre-cut yarn and string to create a 'line artwork' on cardstock.",
          duration: "12 min",
        },
        {
          name: "Artist's Chair Share",
          description: "Two students share their work and describe what types of lines they used.",
          duration: "3 min",
        },
      ],
      resources: ["Markers", "Large paper", "Yarn and string", "Cardstock", "Glue sticks"],
    },
    {
      lessonNumber: 2,
      title: "Shapes Are Everywhere",
      objective: "Students name and draw basic geometric shapes, connecting them to the real world.",
      duration: "40 minutes",
      activities: [
        {
          name: "Shape Hunt",
          description: "Teacher shows photographs of buildings, nature, and objects. Students call out shapes they see.",
          duration: "10 min",
        },
        {
          name: "Shape Drawing",
          description: "Students trace and then free-draw circles, squares, triangles, and rectangles.",
          duration: "15 min",
        },
        {
          name: "Shape City",
          description: "Students create a simple scene (city, garden, or animal) using only cut-out shapes.",
          duration: "12 min",
        },
        {
          name: "Pair Share",
          description: "Students share their scene with a partner and identify 3 shapes they used.",
          duration: "3 min",
        },
      ],
      resources: ["Pre-cut shape templates", "Construction paper", "Scissors (safety)", "Glue sticks"],
    },
    {
      lessonNumber: 3,
      title: "My Lines and Shapes Artwork",
      objective: "Students create an original artwork combining lines and shapes, then describe it using art vocabulary.",
      duration: "40 minutes",
      activities: [
        {
          name: "Inspiration Gallery",
          description: "Students briefly look at examples of abstract art featuring lines and shapes.",
          duration: "8 min",
        },
        {
          name: "Independent Creation",
          description: "Students create their own artwork freely, using any combination of lines and shapes learned.",
          duration: "25 min",
        },
        {
          name: "Artist Statement",
          description: "Students dictate or write 1–2 sentences about their artwork: what lines and shapes they used and why.",
          duration: "7 min",
        },
      ],
    },
  ],
  assessment: {
    formative: [
      "Line sampler observation: can student draw 4 types of lines?",
      "Shape Hunt participation and identification accuracy",
      "Pair share: uses shape vocabulary correctly",
    ],
    summative: "Final artwork + artist statement. Evaluated on: line variety, shape recognition, creative expression, and use of vocabulary.",
    rubric: [
      {
        criterion: "Line Variety",
        excellent: "Uses 4 or more types of lines purposefully.",
        proficient: "Uses 3 types of lines clearly.",
        developing: "Uses 2 types of lines with support.",
        beginning: "Uses only 1 type of line or lines are unrecognizable.",
      },
      {
        criterion: "Shape Recognition",
        excellent: "Names and draws 4+ shapes correctly and independently.",
        proficient: "Names and draws 3 shapes correctly.",
        developing: "Identifies shapes with prompting; drawings are approximate.",
        beginning: "Struggles to identify or draw shapes even with support.",
      },
      {
        criterion: "Creative Expression",
        excellent: "Artwork shows original composition; artist statement is descriptive.",
        proficient: "Artwork shows clear intent; artist statement names elements used.",
        developing: "Artwork is present; artist statement is minimal.",
        beginning: "Artwork is incomplete; no artist statement.",
      },
    ],
  },
  materials: [
    "Markers (thick and thin)",
    "Large white paper",
    "Construction paper",
    "Pre-cut shape templates",
    "Yarn and string",
    "Glue sticks",
    "Safety scissors",
  ],
  vocabulary: [
    "line",
    "shape",
    "straight",
    "curved",
    "zigzag",
    "wavy",
    "circle",
    "square",
    "triangle",
    "rectangle",
    "artist",
    "artwork",
  ],
};
