/**
 * sampleELAUnit.ts — Generic Language Arts unit examples following ISubjectUnit.
 * Structural placeholders to be replaced with real curriculum content.
 */

import { ISubjectUnit } from "@/interfaces/subjects/ISubjectUnit";

export const StoriesHaveStructure: ISubjectUnit = {
  unitTitle: "Stories Have Structure",
  subject: "Language Arts",
  gradeLevel: "2nd Grade",
  duration: "4 weeks (8 sessions)",
  bigIdea:
    "All stories share common elements — characters, setting, problem, and solution — that help readers understand and retell them.",
  essentialQuestions: [
    "What makes a story a story?",
    "How do characters and events connect to a theme?",
    "How can we retell a story in our own words?",
  ],
  learningObjectives: [
    "Identify and describe the main characters, setting, problem, and solution in a story",
    "Retell a story using key details in sequence",
    "Compare and contrast two stories with similar themes",
    "Write a short narrative with a beginning, middle, and end",
  ],
  lessons: [
    {
      lessonNumber: 1,
      title: "Characters and Their Traits",
      objective: "Students identify character traits and support them with evidence from the text.",
      duration: "50 minutes",
      activities: [
        {
          name: "Read Aloud",
          description: "Teacher reads a picture book aloud, pausing to think aloud about character actions and feelings.",
          duration: "15 min",
        },
        {
          name: "Character Trait Chart",
          description: "Partners complete a T-chart: 'What the character does' / 'What this tells us about them'.",
          duration: "20 min",
        },
        {
          name: "Gallery Walk",
          description: "Students post their charts and leave sticky note feedback for peers.",
          duration: "10 min",
        },
        {
          name: "Discussion",
          description: "Class discusses: 'Can a character change in a story? Why?'",
          duration: "5 min",
        },
      ],
      resources: ["Picture book selection", "T-chart template", "Sticky notes"],
    },
    {
      lessonNumber: 2,
      title: "Story Mapping: Problem and Solution",
      objective: "Students identify the central problem and solution in a narrative.",
      duration: "50 minutes",
      activities: [
        {
          name: "Quick Review",
          description: "Recall yesterday's characters; predict what problem they might face.",
          duration: "5 min",
        },
        {
          name: "Story Map",
          description: "Students complete a graphic organizer: Characters → Setting → Problem → Events → Solution.",
          duration: "25 min",
        },
        {
          name: "Partner Retell",
          description: "Using their story map, students retell the story to a partner in sequence.",
          duration: "15 min",
        },
        {
          name: "Exit Ticket",
          description: "Students write one sentence describing the story's problem and one for the solution.",
          duration: "5 min",
        },
      ],
    },
    {
      lessonNumber: 3,
      title: "Writing My Own Story",
      objective: "Students plan and draft a short narrative with a clear beginning, middle, and end.",
      duration: "50 minutes",
      activities: [
        {
          name: "Mini-Lesson: Story Planning",
          description: "Teacher models using a story map to plan before writing.",
          duration: "10 min",
        },
        {
          name: "Independent Planning",
          description: "Students complete their own story map choosing original characters and setting.",
          duration: "15 min",
        },
        {
          name: "Drafting",
          description: "Students begin writing their story using the plan.",
          duration: "20 min",
        },
        {
          name: "Share & Feedback",
          description: "Volunteers share the beginning of their story; class gives warm feedback.",
          duration: "5 min",
        },
      ],
    },
  ],
  assessment: {
    formative: [
      "Character trait T-chart observation",
      "Story map completeness check",
      "Partner retell observation (sequence and detail)",
      "Exit ticket: problem and solution identification",
    ],
    summative:
      "Published short narrative (3+ paragraphs) evaluated on: story structure, character detail, sequencing, and conventions.",
    rubric: [
      {
        criterion: "Story Structure",
        excellent: "Clear beginning, middle, and end with all story elements present.",
        proficient: "Beginning, middle, and end are present; one element may be underdeveloped.",
        developing: "Story has two of three sections; missing key element.",
        beginning: "Story lacks clear structure or key story elements.",
      },
      {
        criterion: "Character Development",
        excellent: "Character traits shown through actions, dialogue, and description.",
        proficient: "Character is described but traits mostly stated rather than shown.",
        developing: "Character is named but minimally described.",
        beginning: "No clear character development.",
      },
      {
        criterion: "Writing Conventions",
        excellent: "Consistent use of capital letters, punctuation, and readable spelling.",
        proficient: "Mostly correct conventions with minor errors that don't impede meaning.",
        developing: "Some errors; meaning is sometimes unclear.",
        beginning: "Frequent errors that impede meaning.",
      },
    ],
  },
  materials: ["Picture books", "Story map graphic organizer", "Writing notebooks", "Pencils"],
  vocabulary: [
    "character",
    "setting",
    "plot",
    "problem",
    "solution",
    "sequence",
    "narrative",
    "trait",
    "evidence",
  ],
};
