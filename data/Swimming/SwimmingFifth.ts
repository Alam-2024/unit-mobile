import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

export const swimmingUnit: IUnits = {
  unitTitle: "Swimming for 5th Grade",
  unitDBTitle: "Swimming",
  title: "Swimming",
  gradeLevel: GradeLevel.Fifth,
  lengthOfUnit: LengthInWeeks.EightWeeks,
  concept: "Mastering the Waves: Advanced Swimming Skills and Water Safety",
  overallExpectation:
    "In this unit, students will refine and master swimming strokes, develop endurance, and enhance their understanding of water safety. This unit emphasizes self-improvement, teamwork, and confidence in the water, preparing students for advanced swimming challenges and fostering a lifelong appreciation for aquatic activities.",
  essentialQuestions: [
    "How can we improve our swimming techniques and efficiency in the water?",
    "Why is water safety important, and how can we ensure it?",
    "How do teamwork and perseverance help us succeed in aquatic activities?",
  ],
  skills: [
    "Perform freestyle, backstroke, breaststroke, and an introduction to butterfly stroke with proper technique.",
    "Tread water for extended periods and demonstrate advanced survival floating.",
    "Execute basic diving techniques safely.",
    "Understand and apply advanced water safety rules and rescue techniques.",
    "Work collaboratively in aquatic team challenges.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Confidence and Endurance Fundamentals",
          objective:
            "Students will enhance swimming techniques, build stamina, and learn foundational water safety skills.",
          focus: "Reviewing freestyle and backstroke fundamentals.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light laps alternating freestyle and backstroke."],
            },
            {
              description: "Technique drills",
              details: ["Freestyle breathing and backstroke arm movement."],
            },
            {
              description: "Endurance activity",
              details: ["Swim 100 meters continuously."],
            },
            {
              description: "Cool-down",
              details: ["Gentle kicks holding onto the pool wall."],
            },
          ],
          keyConcept: "Building confidence and endurance.",
        },
        {
          sessionNumber: 2,
          title: "Safety and Survival in the Water",
          objective:
            "Students will focus on advanced floating techniques and understand essential water safety protocols.",
          focus: "Water safety and survival floating.",
          activities: [
            {
              description: "Warm-up",
              details: ["Water safety charades (acting out scenarios)."],
            },
            {
              description: "Survival skills",
              details: [
                "Practice floating in different positions for 2 minutes.",
              ],
            },
            {
              description: "Group discussion",
              details: ["Water safety rules and emergency responses."],
            },
            {
              description: "Cool-down",
              details: ["Gentle floating with deep breathing exercises."],
            },
          ],
          keyConcept: "Prioritizing safety in the water.",
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          sessionNumber: 3,
          title: "Mastering the Breaststroke",
          objective:
            "Students will improve the efficiency and precision of their breaststroke technique.",
          focus: "Refining breaststroke technique.",
          activities: [
            {
              description: "Warm-up",
              details: ["Laps focusing on streamlined body position."],
            },
            {
              description: "Technique drills",
              details: ["Breaststroke kickboard practice and arm movements."],
            },
            {
              description: "Partner feedback",
              details: ["Peer review of stroke form."],
            },
            {
              description: "Cool-down",
              details: ["Light breaststroke laps."],
            },
          ],
          keyConcept: "Precision in stroke mechanics.",
        },
        {
          sessionNumber: 4,
          title: "Introduction to Butterfly Stroke",
          objective:
            "Students will explore the fundamentals of butterfly stroke and practice coordination of movements.",
          focus: "Introducing butterfly stroke basics.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dolphin kick drills with kickboards."],
            },
            {
              description: "Technique drills",
              details: ["Arm movement practice outside the pool."],
            },
            {
              description: "Butterfly coordination",
              details: ["Combining kicks and arm pulls in the water."],
            },
            {
              description: "Cool-down",
              details: ["Relaxed backstroke laps."],
            },
          ],
          keyConcept: "Learning new challenges.",
        },
      ],
    },
    {
      week: 3,
      sessions: [
        {
          sessionNumber: 5,
          title: "Freestyle and Backstroke Precision",
          objective:
            "Students will fine-tune their freestyle and backstroke techniques to maximize efficiency.",
          focus: "Advanced freestyle and backstroke drills.",
          activities: [
            {
              description: "Warm-up",
              details: ["Alternate freestyle and backstroke laps."],
            },
            {
              description: "Drill stations",
              details: ["Focus on turns, starts, and finishes."],
            },
            {
              description: "Endurance challenge",
              details: ["Swim 150 meters non-stop."],
            },
            {
              description: "Cool-down",
              details: ["Floating on back with slow kicks."],
            },
          ],
          keyConcept: "Strength and precision.",
        },
        {
          sessionNumber: 6,
          title: "Diving Essentials and Safety",
          objective:
            "Students will practice diving techniques with an emphasis on proper form and safety.",
          focus: "Diving basics.",
          activities: [
            {
              description: "Warm-up",
              details: ["Stretching for flexibility."],
            },
            {
              description: "Diving progressions",
              details: [
                "Start with kneeling dives, progressing to standing dives.",
              ],
            },
            {
              description: "Safety reminders",
              details: ["Proper diving depth and form."],
            },
            {
              description: "Cool-down",
              details: ["Gentle laps in freestyle."],
            },
          ],
          keyConcept: "Safe and effective diving.",
        },
      ],
    },
    {
      week: 4,
      sessions: [
        {
          sessionNumber: 7,
          title: "Butterfly Stroke Mastery",
          objective:
            "Students will refine the coordination and execution of the butterfly stroke.",
          focus: "Building strength and rhythm in butterfly stroke.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dolphin kicks and light freestyle laps."],
            },
            {
              description: "Technique stations",
              details: [
                "Focus on timing and breathing during butterfly stroke.",
              ],
            },
            {
              description: "Group relay",
              details: ["Butterfly stroke relays for speed and endurance."],
            },
            {
              description: "Cool-down",
              details: ["Relaxed backstroke or breaststroke laps."],
            },
          ],
          keyConcept: "Strengthening advanced strokes.",
        },
        {
          sessionNumber: 8,
          title: "Endurance and Team Challenges",
          objective:
            "Students will enhance their swimming endurance and teamwork skills through aquatic challenges.",
          focus: "Collaborative aquatic activities.",
          activities: [
            {
              description: "Warm-up",
              details: ["Mixed stroke laps at a steady pace."],
            },
            {
              description: "Endurance test",
              details: ["Swim 200 meters without stopping."],
            },
            {
              description: "Team relay races",
              details: ["Mixed-stroke relays in groups of four."],
            },
            {
              description: "Cool-down",
              details: ["Floating with deep breathing."],
            },
          ],
          keyConcept: "Teamwork and resilience.",
        },
      ],
    },
    {
      week: 5,
      sessions: [
        {
          sessionNumber: 9,
          title: "Diving Progressions and Challenges",
          objective:
            "Students will master advanced diving techniques and integrate them into aquatic routines.",
          focus: "Progressive diving techniques.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dynamic stretches and light freestyle laps."],
            },
            {
              description: "Advanced diving drills",
              details: ["Focus on height and distance with proper form."],
            },
            {
              description: "Routine integration",
              details: ["Combine diving starts with swimming sequences."],
            },
            {
              description: "Cool-down",
              details: ["Gentle laps with freestyle or backstroke."],
            },
          ],
          keyConcept: "Integration of diving into routines.",
        },
        {
          sessionNumber: 10,
          title: "Advanced Water Safety Drills",
          objective:
            "Students will apply water safety knowledge to simulated scenarios.",
          focus: "Practical water safety applications.",
          activities: [
            {
              description: "Warm-up",
              details: ["Role-play scenarios for water safety."],
            },
            {
              description: "Rescue techniques",
              details: ["Practice throwing flotation devices accurately."],
            },
            {
              description: "Team simulation",
              details: ["Collaborate in mock water rescue scenarios."],
            },
            {
              description: "Cool-down",
              details: ["Floating and breathing control exercises."],
            },
          ],
          keyConcept: "Practical safety skills.",
        },
      ],
    },
    {
      week: 6,
      sessions: [
        {
          sessionNumber: 1,
          title: "Stroke Perfection: Freestyle and Breaststroke",
          objective:
            "Students will refine their freestyle and breaststroke techniques for maximum efficiency and speed.",
          focus: "Improving speed and accuracy in strokes.",
          activities: [
            {
              description: "Warm-up",
              details: ["Alternate freestyle and breaststroke laps."],
            },
            {
              description: "Technique breakdown",
              details: ["Focus on starts, turns, and finishes."],
            },
            {
              description: "Timed swims",
              details: ["Track and improve lap times for both strokes."],
            },
            {
              description: "Cool-down",
              details: ["Gentle laps with relaxed strokes."],
            },
          ],
          keyConcept: "Precision and speed.",
        },
        {
          sessionNumber: 2,
          title: "Butterfly Strength and Endurance",
          objective:
            "Students will build strength and endurance specific to the butterfly stroke.",
          focus: "Sustained butterfly stroke practice.",
          activities: [
            {
              description: "Warm-up",
              details: ["Focus on dolphin kicks and butterfly drills."],
            },
            {
              description: "Stroke endurance",
              details: ["Swim butterfly stroke for extended distances."],
            },
            {
              description: "Peer feedback",
              details: ["Provide constructive critiques to teammates."],
            },
            {
              description: "Cool-down",
              details: ["Backstroke or breaststroke relaxation laps."],
            },
          ],
          keyConcept: "Strength and perseverance.",
        },
      ],
    },
    {
      week: 7,
      sessions: [
        {
          sessionNumber: 1,
          title: "Advanced Stroke Techniques",
          objective:
            "Students will refine and master swimming strokes, develop endurance, and enhance their understanding of water safety.",
          focus: "Long-distance swimming and endurance.",
          activities: [
            {
              description: "Warm-up",
              details: ["Easy laps in a preferred stroke."],
            },
            {
              description: "Distance swim",
              details: ["Swim 200 meters with consistent pacing."],
            },
            {
              description: "Breathing technique feedback",
              details: ["Individualized guidance."],
            },
            {
              description: "Cool-down",
              details: ["Relaxed floating and stretching."],
            },
          ],
          keyConcept: "Building endurance.",
        },
        {
          sessionNumber: 2,
          title: "Advanced Stroke Techniques",
          objective:
            "Students will refine and master swimming strokes, develop endurance, and enhance their understanding of water safety.",
          focus: "Aquatic games and teamwork.",
          activities: [
            {
              description: "Warm-up",
              details: ["Sharks and Minnows water tag."],
            },
            {
              description: "Team games",
              details: ["Water polo basics and modified challenges."],
            },
            {
              description: "Group discussion",
              details: ["Reflecting on team strategies."],
            },
            {
              description: "Cool-down",
              details: ["Gentle stretching in shallow water."],
            },
          ],
          keyConcept: "Fun and cooperation.",
        },
      ],
    },
    {
      week: 8,
      sessions: [
        {
          sessionNumber: 1,
          title: "Individual Showcase",
          objective:
            "Students will demonstrate their swimming skills and teamwork.",
          focus: "Showcase of individual progress.",
          activities: [
            {
              description: "Warm-up",
              details: ["Favorite stroke practice."],
            },
            {
              description: "Skills showcase",
              details: [
                "Students perform their best stroke and diving technique.",
              ],
            },
            {
              description: "Peer feedback",
              details: ["Positive comments and encouragement."],
            },
            {
              description: "Cool-down",
              details: ["Relaxing laps."],
            },
          ],
          keyConcept: "Celebrating individual growth.",
        },
        {
          sessionNumber: 2,
          title: "Team Showcase",
          objective:
            "Students will demonstrate their teamwork and collaboration.",
          focus: "Culminating water activities and reflection.",
          activities: [
            {
              description: "Warm-up",
              details: ["Group swim with light activities."],
            },
            {
              description: "Final challenges",
              details: ["Team relay and rescue scenario."],
            },
            {
              description: "Reflection",
              details: [
                "Group discussion on achievements and areas for improvement.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Stretching and relaxation."],
            },
          ],
          keyConcept: "Ending with pride and teamwork.",
        },
      ],
    },
  ],
  assessment: {
    formative: [
      "Observations during sessions for participation, effort, and safety awareness.",
      "Peer and teacher feedback on stroke technique and teamwork.",
    ],
    summative: [
      "Individual performance during skills showcase.",
      "Team performance in final challenges with an emphasis on collaboration and safety.",
    ],
  },
  differentiation: [
    "Provide extra support for students struggling with advanced strokes or endurance.",
    "Adjust difficulty in challenges and relay distances to meet varying skill levels.",
    "Offer leadership roles in team activities for advanced learners.",
  ],
  safetyConsiderations: [
    "Ensure all students understand pool rules and emergency procedures.",
    "Maintain close supervision with appropriate lifeguard support.",
    "Use age-appropriate and safe equipment.",
  ],
};

export default swimmingUnit;
