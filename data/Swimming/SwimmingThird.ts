import { IUnits } from "../../interfaces/IUnits";
import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";

export const SwimmingForThirdGrade: IUnits = {
  unitTitle: "Swimming for 3rd Grade (Ages 8-9, 4 Weeks, 8 Sessions)",
  unitDBTitle: "Swimming",
  title: "Swimming for 3rd Grade",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept:
    "Building Confidence and Skills in Water through Structured Swimming Activities",
  overallExpectation:
    "Students will develop foundational swimming skills, including basic strokes, floating, and water safety, fostering confidence and enjoyment in the water.",
  essentialQuestions: [
    "How can we move safely and efficiently in water?",
    "What are the basic techniques for swimming and floating?",
    "Why is water safety important, and how can we practice it?",
  ],
  skills: [
    "Front crawl with basic technique over short distances",
    "Back float and basic backstroke movements",
    "Underwater exploration with controlled breathing",
    "Safe entry and exit from the pool",
    "Understanding and practicing water safety rules",
  ],
  weeklyPlan: [
    {
      week: 1,
      focus: "Introduction to Water Safety and Basic Skills",
      sessions: [
        {
          sessionNumber: 1,
          title: "Water Safety and Familiarization",
          objective:
            "Introduce water safety rules and build comfort in the water.",
          activities: [
            {
              description: "Warm-up: Splash and paddle at the pool edge.",
              details: ["Focus on getting comfortable in the water."],
            },
            {
              description: "Water safety discussion and demonstration.",
              details: ["Basic pool rules and safe behaviors."],
            },
            {
              description: "Bubble blowing and submerging face in water.",
              details: ["Practice exhaling in water."],
            },
            {
              description: "Cool-down: Gentle stretches by the poolside.",
              details: [],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Floating and Kicking Basics",
          objective:
            "Develop floating skills and introduce basic kicking techniques.",
          activities: [
            {
              description:
                "Warm-up: Gentle paddling and moving across the pool.",
              details: [],
            },
            {
              description: "Front and back float practice with support.",
              details: ["Use floatation aids as needed."],
            },
            {
              description: "Basic flutter kick practice holding the pool wall.",
              details: ["Focus on straight legs and pointed toes."],
            },
            {
              description: "Cool-down: Relaxed floating with assistance.",
              details: [],
            },
          ],
        },
      ],
    },
    {
      week: 2,
      focus: "Developing Stroke Techniques and Breathing",
      sessions: [
        {
          sessionNumber: 3,
          title: "Front Crawl Basics",
          objective: "Learn and practice basic front crawl arm movements.",
          activities: [
            {
              description: "Warm-up: Light swimming with floatation aids.",
              details: [],
            },
            {
              description: "Demonstration of front crawl arm technique.",
              details: ["Break movements into steps."],
            },
            {
              description:
                "Practice arm movements while standing and in the water.",
              details: [],
            },
            {
              description: "Cool-down: Gentle paddling with floatation aids.",
              details: [],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Breathing and Coordination in Front Crawl",
          objective: "Incorporate breathing techniques into the front crawl.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Focus on breathing and coordination.",
                "Use floatation aids as needed.",
              ],
            },
            {
              description: "Introduce side breathing technique.",
              details: [
                "Turn head to the side to breathe.",
                "Practice breathing while floating.",
              ],
            },
            {
              description:
                "Combine arm movements and breathing in short swims.",
              details: [
                "Focus on smooth arm movements and controlled breathing.",
                "Use floatation aids as needed.",
              ],
            },
            {
              description: "Cool-down: Floating and controlled breathing.",
              details: [],
            },
          ],
        },
      ],
    },
    {
      week: 3,
      focus: "Strengthening Swimming Strokes and Floating Skills",
      sessions: [
        {
          sessionNumber: 5,
          title: "Backstroke Basics",
          objective: "Introduce backstroke arm and leg movements.",
          activities: [
            {
              description: "Warm-up: Gentle back floating with support.",
              details: [],
            },
            {
              description: "Demonstration of backstroke technique.",
              details: [],
            },
            {
              description: "Practice backstroke in small, supported groups.",
              details: [],
            },
            {
              description: "Cool-down: Relaxed floating and paddling.",
              details: [],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Building Endurance and Technique",
          objective:
            "Practice swimming short distances using learned techniques.",
          activities: [
            {
              description: "Warm-up: Light swims across the pool.",
              details: [],
            },
            {
              description:
                "Rotate between front crawl and backstroke practice.",
              details: [],
            },
            {
              description: "Relay games focusing on technique and endurance.",
              details: [],
            },
            {
              description:
                "Cool-down: Gentle stretches and breathing exercises.",
              details: [],
            },
          ],
        },
      ],
    },
    {
      week: 4,
      focus: "Review, Fun Challenges, and Reflection",
      sessions: [
        {
          sessionNumber: 7,
          title: "Skill Review and Fun Challenges",
          objective: "Reinforce learned skills through games and activities.",
          activities: [
            {
              description: "Warm-up: Light swimming and floating.",
              details: [],
            },
            {
              description: "Group challenges: Timed swims, obstacle courses.",
              details: [],
            },
            {
              description:
                "Pair activities: Encourage teamwork and cooperation.",
              details: [],
            },
            {
              description: "Cool-down: Floating and gentle stretches.",
              details: [],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Reflection and Celebration",
          objective: "Celebrate progress and reflect on the unit.",
          activities: [
            {
              description: "Warm-up: Favorite activity from the unit.",
              details: [],
            },
            {
              description: "Mini swim event showcasing skills learned.",
              details: [],
            },
            {
              description: "Guided group reflection on achievements and goals.",
              details: [],
            },
            {
              description: "Cool-down: Relaxation and celebration.",
              details: [],
            },
          ],
        },
      ],
    },
  ],
  assessment: [
    {
      skill: "Front crawl technique",
      level1: "Struggles to coordinate movements.",
      level2: "Demonstrates basic technique inconsistently.",
      level3: "Swims short distances with proper form.",
      level4: "Consistently uses proper technique and breathing.",
    },
    {
      skill: "Backstroke movements",
      level1: "Unable to float or move on back.",
      level2: "Requires support for backstroke.",
      level3: "Swims short distances with basic backstroke technique.",
      level4: "Executes smooth and controlled backstroke.",
    },
  ],
  equipmentNeeded: [
    "Floatation aids",
    "Kickboards",
    "Soft pool toys",
    "Cones for marking boundaries",
  ],
  differentiation: {
    beginners:
      "Provide extra support and allow more practice time with floatation aids.",
    advanced: "Introduce longer swim distances and refine stroke techniques.",
    inclusive:
      "Ensure all students have access to floatation aids and modify activities for comfort.",
  },
  safetyConsiderations: [
    "Always have lifeguards or trained instructors present.",
    "Ensure proper supervision and spacing during activities.",
    "Use soft equipment to minimize injury risk.",
    "Emphasize listening to instructions and water safety.",
  ],
  reflectionAndSummativeFeedback:
    "Students will discuss their favorite activities, highlight what they learned, and set goals for future swimming experiences.",
};
