/**
 * sampleMathUnit.ts — Generic Math unit examples following ISubjectUnit.
 * These are structural placeholders to be replaced with real curriculum.
 */

import { ISubjectUnit } from "@/interfaces/subjects/ISubjectUnit";

export const IntroToNumberSense: ISubjectUnit = {
  unitTitle: "Introduction to Number Sense",
  subject: "Mathematics",
  gradeLevel: "1st Grade",
  duration: "4 weeks (8 sessions)",
  bigIdea:
    "Numbers represent quantities and relationships that help us describe and make sense of the world.",
  essentialQuestions: [
    "What does a number represent?",
    "How do we use numbers in everyday life?",
    "How can we compare and order quantities?",
  ],
  learningObjectives: [
    "Count and write numbers from 0 to 20",
    "Compare two groups of objects using greater than, less than, or equal to",
    "Understand place value for tens and ones",
    "Solve simple addition and subtraction problems within 10",
  ],
  lessons: [
    {
      lessonNumber: 1,
      title: "Counting and Representing Numbers",
      objective: "Students can count objects up to 20 and write the corresponding numeral.",
      duration: "45 minutes",
      activities: [
        {
          name: "Number Talk Warm-Up",
          description: "Teacher shows a quick image of dots; students share how many they saw and how they counted.",
          duration: "5 min",
        },
        {
          name: "Counting Collections",
          description: "Students count collections of small objects, record the total, and share strategies with a partner.",
          duration: "20 min",
        },
        {
          name: "Number Writing Practice",
          description: "Students trace and write numerals 0–20 on mini whiteboards, checking each other's work.",
          duration: "15 min",
        },
        {
          name: "Reflection",
          description: "Class discusses: 'What strategy helped you count accurately?'",
          duration: "5 min",
        },
      ],
      resources: ["Counting manipulatives", "Mini whiteboards", "Markers"],
    },
    {
      lessonNumber: 2,
      title: "Comparing Quantities",
      objective: "Students compare two groups and use greater than / less than / equal to vocabulary.",
      duration: "45 minutes",
      activities: [
        {
          name: "Story Problem Introduction",
          description: "Teacher reads a story involving two characters collecting objects; class discusses who has more.",
          duration: "10 min",
        },
        {
          name: "Comparing Towers",
          description: "Partners build two towers of cubes and compare heights using comparison vocabulary.",
          duration: "20 min",
        },
        {
          name: "Symbol Practice",
          description: "Students use >, <, = symbols on number cards to record comparisons.",
          duration: "10 min",
        },
        {
          name: "Exit Ticket",
          description: "Students complete two comparison problems independently.",
          duration: "5 min",
        },
      ],
    },
  ],
  assessment: {
    formative: [
      "Observation of counting strategies during Counting Collections",
      "Exit ticket: compare two numbers using >, <, =",
      "Partner sharing during Number Talk",
    ],
    summative:
      "End-of-unit task: students count two sets of objects, compare them, and explain their reasoning in writing or verbally.",
    rubric: [
      {
        criterion: "Counting Accuracy",
        excellent: "Counts all objects accurately up to 20 with no errors.",
        proficient: "Counts objects up to 15 with at most 1 error.",
        developing: "Counts objects up to 10 with support.",
        beginning: "Counts fewer than 10 objects with frequent errors.",
      },
      {
        criterion: "Comparison Vocabulary",
        excellent: "Consistently uses greater than, less than, and equal to correctly.",
        proficient: "Uses comparison vocabulary correctly most of the time.",
        developing: "Uses comparison vocabulary with prompting.",
        beginning: "Rarely uses comparison vocabulary independently.",
      },
    ],
  },
  materials: ["Counting manipulatives", "Number cards 0–20", "Cube towers", "Mini whiteboards"],
  vocabulary: ["number", "count", "more", "less", "equal", "greater than", "less than"],
};

export const PatternsPowerOfRepetition: ISubjectUnit = {
  unitTitle: "Patterns: The Power of Repetition",
  subject: "Mathematics",
  gradeLevel: "1st Grade",
  duration: "3 weeks (6 sessions)",
  bigIdea: "Patterns are predictable sequences that repeat — recognizing them builds mathematical thinking.",
  essentialQuestions: [
    "What makes something a pattern?",
    "How do patterns help us predict what comes next?",
    "Where do we find patterns in the real world?",
  ],
  learningObjectives: [
    "Identify, describe, and extend repeating patterns",
    "Create original patterns using colors, shapes, or sounds",
    "Translate patterns from one form to another (e.g., AB pattern → clap/snap)",
  ],
  lessons: [
    {
      lessonNumber: 1,
      title: "Discovering Patterns Around Us",
      objective: "Students identify repeating patterns in the classroom and environment.",
      duration: "45 minutes",
      activities: [
        {
          name: "Pattern Hunt",
          description: "Students walk around the classroom and identify patterns on clothing, tiles, and materials.",
          duration: "15 min",
        },
        {
          name: "Pattern Sort",
          description: "Groups sort a set of image cards into 'pattern' and 'not a pattern'.",
          duration: "20 min",
        },
        {
          name: "Whole-Class Share",
          description: "Groups share their sorts and the class agrees or disagrees with reasoning.",
          duration: "10 min",
        },
      ],
    },
  ],
  assessment: {
    formative: [
      "Pattern Hunt observation checklist",
      "Thumbs up/down: does this show a pattern?",
    ],
    summative: "Students create and label their own pattern, then explain it to a partner.",
  },
  materials: ["Pattern blocks", "Colored cubes", "Image card sets"],
  vocabulary: ["pattern", "repeat", "core", "extend", "predict"],
};
