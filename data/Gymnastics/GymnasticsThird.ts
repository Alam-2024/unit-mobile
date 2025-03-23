import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";
import { IUnits } from "../../interfaces/IUnits";

const gymnasticsThird: IUnits = {
  unitTitle: "Gymnastics",
  unitDBTitle: "Gymnastics",
  title:
    "Building Flexibility, Strength, and Control Through Gymnastics Movements and Routines",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will learn and refine basic floor and vault movements, including jumps, rolls, and cartwheels. They will develop flexibility, strength, and control, and choreograph gymnastics routines both individually and in groups, fostering creativity, teamwork, and confidence.",
  essentialQuestions: [
    "What are the key components of flexibility, strength, and control in gymnastics movements?",
    "How do different gymnastic movements, such as jumps, leaps, rolls, and cartwheels, contribute to overall physical fitness?",
    "What techniques can be used to improve balance and coordination in gymnastics?",
    "How can students effectively choreograph and perform a gymnastics routine both individually and in groups?",
    "Why is it important to practice safety and proper form when performing gymnastics movements?",
  ],
  skills: [
    "Develop flexibility and control through stretching and dynamic movements.",
    "Build core strength to execute basic gymnastics movements.",

    "Learn key floor and vault movements: straight jumps, cat leap half turns, straddle rolls, and cartwheels.",
    "Foster creativity through individual and group choreography.",
    "Emphasize safety and proper form.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Safety and Basic Movement Introduction",
          objective:
            "Introduce safety, flexibility, and control in basic gymnastics.",
          activities: [
            {
              description: "Warm-up",
              details: ["General stretches for legs, hips, and shoulders."],
            },
            {
              description: "Basic Skills Practice",
              details: [
                "Teach straight jumps and forward rolls with emphasis on control.",
              ],
            },
            {
              description: "Safety Guidelines",
              details: ["Focus on proper form and injury prevention."],
            },
            { description: "Cool-down", details: ["Light stretching."] },
          ],
        },
        {
          sessionNumber: 2,
          title: "Flexibility and Balance in Basic Movements",
          objective:
            "Build flexibility and balance for foundational gymnastics skills.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dynamic stretches and balance drills."],
            },
            {
              description: "Balance Exercises",
              details: ["One-legged balances and basic beam work."],
            },
            {
              description: "Flexibility Work",
              details: [
                "Stretching with emphasis on splits and shoulder flexibility.",
              ],
            },
            { description: "Cool-down", details: ["Partner stretching."] },
          ],
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          sessionNumber: 3,
          title: "Straight Jumps and Cat Leap Half Turns",
          objective: "Teach and practice jumps and leaps.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jumping drills and agility exercises."],
            },
            {
              description: "Practice",
              details: [
                "Focus on straight jump full turns and cat leap half turns.",
              ],
            },
            { description: "Cool-down", details: ["Stretching."] },
          ],
        },
        {
          sessionNumber: 4,
          title: "Forward and Straddle Rolls",
          objective: "Learn and practice rolls with proper technique.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shoulder and hamstring stretches."],
            },
            {
              description: "Roll Practice",
              details: [
                "Forward and straddle rolls with emphasis on control and alignment.",
              ],
            },
            { description: "Cool-down", details: ["Flexibility stretches."] },
          ],
        },
      ],
    },
    {
      week: 3,
      sessions: [
        {
          sessionNumber: 5,
          title: "Cartwheel Basics",
          objective: "Teach cartwheels, focusing on body alignment.",
          activities: [
            {
              description: "Warm-up",
              details: ["Lunges and dynamic stretches."],
            },
            {
              description: "Cartwheel Practice",
              details: [
                "Step-by-step breakdown, focusing on starting from a lunge.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Light stretching for flexibility."],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Introduction to Vaulting",
          objective:
            "Introduce vaulting, focusing on the straddle vault technique.",
          activities: [
            {
              description: "Warm-up",
              details: ["Agility drills and leg stretches."],
            },
            {
              description: "Vault Practice",
              details: [
                "Introduce straddle on vault with emphasis on run-up and form.",
              ],
            },
            { description: "Cool-down", details: ["Reflection on progress."] },
          ],
        },
      ],
    },
    {
      week: 4,
      sessions: [
        {
          sessionNumber: 7,
          title: "Routine Building and Group Work",
          objective:
            "Create and practice individual and group gymnastics routines.",
          activities: [
            {
              description: "Warm-up",
              details: ["Core exercises and stretches."],
            },
            {
              description: "Choreography",
              details: [
                "Students create sequences combining jumps, rolls, and cartwheels.",
              ],
            },
            {
              description: "Group Work",
              details: ["Practice synchronization and teamwork."],
            },
            { description: "Cool-down", details: ["Flexibility work."] },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Performance and Assessment",
          objective: "Perform choreographed routines and receive feedback.",
          activities: [
            { description: "Warm-up", details: ["Light stretches."] },
            {
              description: "Performance",
              details: ["Students perform individual and group routines."],
            },
            {
              description: "Teacher Evaluation",
              details: ["Based on creativity, control, and teamwork."],
            },
            {
              description: "Cool-down",
              details: ["Group reflection on performance."],
            },
          ],
        },
      ],
    },
  ],
};

export default gymnasticsThird;
