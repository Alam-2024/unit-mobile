import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";
import { IUnits } from "../../interfaces/IUnits";

const gymnasticsFourth: IUnits = {
  unitTitle: "Gymnastics",
  unitDBTitle: "Gymnastics",
  title:
    "Building Flexibility, Strength, and Control Through Gymnastics Movements and Routines",
  gradeLevel: GradeLevel.Fourth,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will learn and refine more advanced floor and vault gymnastics movements, including full turns in the air, jump combinations, advanced rolls, and round-offs. They will develop flexibility, strength, and control, and create both individual and group sequences, fostering creativity, teamwork, and confidence.",
  essentialQuestions: [
    "What are the key components of flexibility, strength, and control in gymnastics movements?",
    "How do different gymnastics movements, such as jumps, turns, rolls, and round-offs, contribute to overall physical fitness?",
    "What techniques can be used to improve balance and coordination in gymnastics?",
    "How can students effectively choreograph and perform a gymnastics routine both individually and in groups?",
    "Why is it important to practice safety and proper form when performing gymnastics movements?",
  ],
  skills: [
    "Developing flexibility and control through advanced dynamic stretches and movements.",
    "Strengthening core and stabilizer muscles to perform more complex movements.",
    "Learning key floor and vault movements: full turns, jump combinations, round-offs, and advanced flexibility work.",
    "Encouraging creativity through individual and group choreography.",
    "Practicing safety and proper form.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Review of Safety and Advanced Basic Techniques",
          objective:
            "Review safety and practice basic movements with a focus on advanced control.",
          activities: [
            {
              details: ["Dynamic stretches and basic jumps."],
              description: "Warm-up",
            },
            {
              details: [
                "Review of straight jumps and full turns. Introduction to rolls with turns.",
              ],
              description: "Skills Practice",
            },
            { details: ["Static stretches."], description: "Cool-down" },
          ],
        },
        {
          sessionNumber: 2,
          title: "Flexibility and Balance in Advanced Movements",
          objective:
            "Improve flexibility and balance in more advanced movements.",
          activities: [
            {
              details: ["Deep leg and hip stretches."],
              description: "Warm-up",
            },
            {
              details: [
                "Balance on one foot with arm movements. Introduction to round-offs.",
              ],
              description: "Skills Practice",
            },
            { details: ["Partner stretching."], description: "Cool-down" },
          ],
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          sessionNumber: 3,
          title: "Jump and Turn Combinations",
          objective: "Learn combinations of jumps with full and half turns.",
          activities: [
            {
              details: ["Jump and agility exercises."],
              description: "Warm-up",
            },
            {
              details: [
                "Straight jumps with a full turn.",
                "Focus on control and alignment.",
                "Jump combinations.",
              ],
              description: "Skills Practice",
            },
            { details: ["Flexibility exercises."], description: "Cool-down" },
          ],
        },
        {
          sessionNumber: 4,
          title: "Round-offs and Advanced Rolls",
          objective: "Practice round-offs and advanced rolls with turns.",
          activities: [
            {
              details: ["Dynamic shoulder and back movements."],
              description: "Warm-up",
            },
            {
              details: [
                "Forward roll with a turn. Backward roll with more control. Focus on round-off alignment.",
              ],
              description: "Skills Practice",
            },
            { details: ["Static stretching."], description: "Cool-down" },
          ],
        },
      ],
    },
    {
      week: 3,
      sessions: [
        {
          sessionNumber: 5,
          title: "Individual Choreography",
          objective:
            "Students will create individual sequences combining the learned movements.",
          activities: [
            {
              details: ["Stretches to prepare the body."],
              description: "Warm-up",
            },
            {
              details: [
                "Students combine jumps, round-offs, and rolls into a routine of 4-5 movements.",
              ],
              description: "Choreography",
            },
            { details: ["Gentle stretches."], description: "Cool-down" },
          ],
        },
        {
          sessionNumber: 6,
          title: "Group Choreography",
          objective: "Work in groups to create choreographed routines.",
          activities: [
            {
              details: ["Teamwork-focused stretching activities."],
              description: "Warm-up",
            },
            {
              details: [
                "In groups, create routines combining movements like round-offs, turns, and rolls.",
              ],
              description: "Choreography",
            },
            {
              details: ["Reflection on teamwork and creativity."],
              description: "Cool-down",
            },
          ],
        },
      ],
    },
    {
      week: 4,
      sessions: [
        {
          sessionNumber: 7,
          title: "Full Rehearsal and Refinement",
          objective: "Refine individual and group routines.",
          activities: [
            {
              details: ["Quick review of key skills."],
              description: "Warm-up",
            },
            {
              details: [
                "Students practice their routines with teacher feedback.",
              ],
              description: "Skills Practice",
            },
            {
              details: ["Stretching and relaxation."],
              description: "Cool-down",
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Presentations and Evaluation",
          objective: "Present choreographed routines and receive evaluation.",
          activities: [
            { details: ["Light stretching."], description: "Warm-up" },
            {
              details: [
                "Students perform their individual and group routines. Evaluation based on control, creativity, and teamwork.",
              ],
              description: "Performance",
            },
            {
              details: ["Group reflection on performance."],
              description: "Cool-down",
            },
          ],
        },
      ],
    },
  ],
};

export default gymnasticsFourth;
