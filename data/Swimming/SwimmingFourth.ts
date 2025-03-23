import { IUnits } from "@/interfaces/units/IUnit";
import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";

export const SwimmingFor4thGrade: IUnits = {
  unitTitle: "Swimming",
  unitDBTitle: "Swimming",
  title: "Swimming for 4th Grade (Ages 9-10, 4 Weeks, 8-9 Sessions)",
  gradeLevel: GradeLevel.Fourth,
  lengthOfUnit: LengthInWeeks.FourFiveWeeks,
  concept: "Building Confidence and Mastery in Swimming Techniques",
  overallExpectation:
    "Students will develop confidence and competence in swimming techniques, focusing on teamwork, resilience, and personal goal-setting while improving safety knowledge.",
  essentialQuestions: [
    "How can we refine our swimming techniques to be more efficient and confident in the water?",
    "Why is water safety important, and how can we ensure it for ourselves and others?",
    "How can we support each other in improving our swimming skills?",
  ],
  skills: [
    "Perform basic swimming strokes (freestyle, backstroke, breaststroke) with improved technique.",
    "Tread water and demonstrate floating techniques for safety.",
    "Swim continuously for extended distances to build endurance.",
    "Understand and apply key water safety principles.",
    "Engage in team-based water activities with cooperation and encouragement.",
  ],
  weeklyPlan: [
    {
      week: 1,
      focus: "Revisiting Fundamentals and Water Safety",
      sessions: [
        {
          sessionNumber: 1,
          title: "Reviewing Basic Strokes and Water Safety",
          objective:
            "Students will revisit basic swimming strokes and understand key water safety principles.",
          activities: [
            {
              description: "Warm-up",
              details: ["Stretching and light aerobic exercises on deck."],
            },
            {
              description: "Swimming drills",
              details: ["Freestyle and backstroke practice with feedback."],
            },
            {
              description: "Safety activity",
              details: ["Demonstrating proper entry and exit from the pool."],
            },
            {
              description: "Cool-down",
              details: ["Floating on the back with controlled breathing."],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Introduction to Treading Water and Floating Techniques",
          objective:
            "Students will learn treading water and floating techniques to build confidence.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light swimming laps using kickboards."],
            },
            {
              description: "Treading water drills",
              details: ["Practice in pairs with instructor guidance."],
            },
            {
              description: "Group activity",
              details: ["Floating relay races to enhance confidence."],
            },
            {
              description: "Cool-down",
              details: ["Gentle stretches while seated poolside."],
            },
          ],
        },
      ],
    },
    {
      week: 2,
      focus: "Refining Swimming Strokes",
      sessions: [
        {
          sessionNumber: 3,
          title: "Freestyle and Backstroke Refinement",
          objective:
            "Students will refine their freestyle and backstroke techniques.",
          activities: [
            {
              description: "Warm-up",
              details: ["Breathing control exercises with short laps."],
            },
            {
              description: "Technique drills",
              details: ["Focus on arm movements and kicking efficiency."],
            },
            {
              description: "Partner feedback",
              details: ["Observing and correcting each other’s strokes."],
            },
            {
              description: "Cool-down",
              details: ["Slow laps with emphasis on form."],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Breaststroke Basics and Endurance Building",
          objective:
            "Students will learn the basics of breaststroke and build swimming endurance.",
          activities: [
            {
              description: "Warm-up",
              details: ["Breaststroke kick practice using kickboards."],
            },
            {
              description: "Technique drills",
              details: ["Coordinating arm and leg movements."],
            },
            {
              description: "Endurance activity",
              details: ["Timed laps with rest intervals."],
            },
            {
              description: "Cool-down",
              details: ["Floating and breathing exercises."],
            },
          ],
        },
      ],
    },
    {
      week: 3,
      focus: "Integrating Skills in Team Activities",
      sessions: [
        {
          sessionNumber: 5,
          title: "Combining Strokes in Relay Races",
          objective:
            "Students will combine strokes in relay races to develop teamwork and stamina.",
          activities: [
            {
              description: "Warm-up",
              details: ["Freestyle and backstroke practice laps."],
            },
            {
              description: "Relay races",
              details: ["Teams alternate strokes for cumulative distance."],
            },
            {
              description: "Cooperative challenge",
              details: ["Retrieve objects from shallow and deep ends."],
            },
            {
              description: "Cool-down",
              details: ["Group breathing exercises."],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Safety Drills and Building Endurance",
          objective:
            "Students will practice safety drills and improve swimming endurance.",
          activities: [
            {
              description: "Warm-up",
              details: ["Practice treading water with rhythmic breathing."],
            },
            {
              description: "Safety drills",
              details: ["Rescuing a partner using flotation devices."],
            },
            {
              description: "Endurance swim",
              details: ["Continuous laps for time with encouragement."],
            },
            {
              description: "Cool-down",
              details: ["Light stretches and sharing personal goals."],
            },
          ],
        },
      ],
    },
    {
      week: 4,
      focus: "Culminating Activities and Reflection",
      sessions: [
        {
          sessionNumber: 7,
          title: "Applying Skills in a Fun Swim Challenge",
          objective:
            "Students will demonstrate their skills in a fun and supportive environment.",
          activities: [
            {
              description: "Warm-up",
              details: ["Group stretches and light swimming."],
            },
            {
              description: "Swim challenge",
              details: [
                "Rotating through mini-events (sprints, relays, object retrieval).",
              ],
            },
            {
              description: "Group activity",
              details: ["Building a human chain for cooperative floating."],
            },
            {
              description: "Cool-down",
              details: ["Guided relaxation in the water."],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Reflection and Goal-Setting",
          objective:
            "Students will reflect on their progress and set future swimming goals.",
          activities: [
            {
              description: "Warm-up",
              details: ["Revisiting favorite drills."],
            },
            {
              description: "Reflection activity",
              details: ["Share individual progress and set future goals."],
            },
            {
              description: "Final game",
              details: ["Friendly competition in small groups."],
            },
            {
              description: "Cool-down",
              details: ["Group discussion and gratitude circle."],
            },
          ],
        },
      ],
    },
  ],
  assessment: {
    formative: [
      "Observation of participation and effort during activities.",
      "Progress in technique and endurance.",
      "Engagement in teamwork and safety exercises.",
    ],
    summative: [
      "Performance during the swim challenge in Week 4.",
      "Focus on improvement, cooperation, and water safety knowledge.",
    ],
  },
  differentiation: [
    "Provide individual feedback and adapt drills to skill levels.",
    "Use flotation devices for students needing additional support.",
    "Encourage peer support and collaborative learning.",
  ],
  safetyConsiderations: [
    "Ensure constant supervision with appropriate instructor-to-student ratios.",
    "Use soft-edged equipment to prevent injuries.",
    "Emphasize proper hydration and rest between activities.",
  ],
};
