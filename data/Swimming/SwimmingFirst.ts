import { IUnits } from "../../interfaces/IUnits";
import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";

const SwimmingUnit1stGrade: IUnits = {
  unitTitle: "Swimming - Basics",
  unitDBTitle: "Swimming",
  title: "Swimming for 1st Grade (Ages 5-6, Beginners)",
  gradeLevel: GradeLevel.First,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Building water confidence and basic floating skills.",
  overallExpectation:
    "Students will gain comfort and confidence in the water while learning basic floating and kicking techniques.",
  essentialQuestions: [
    "How can we stay safe in and around the water?",
    "Why is it important to learn basic swimming skills?",
  ],
  skills: [
    "Water confidence",
    "floating on front and back",
    "flutter kicks with support",
  ],
  weeklyPlan: [
    {
      week: 1,
      focus: "Introduction to water safety and basic water confidence.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Water Safety Basics",
          objective:
            "Introduce students to water safety and help them become comfortable in the pool.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Practice entering and exiting the pool safely; splashing and playing games to reduce fear of water.",
              ],
            },
            {
              description: "Water Familiarization",
              details: [
                "Blowing Bubbles: Submerge mouth and blow bubbles in the water; progress to submerging entire face.",
              ],
            },
          ],
          reflection: "What did you enjoy most about being in the water today?",
        },
        {
          sessionNumber: 2,
          title: "Building Water Confidence",
          objective:
            "Teach students how to float on their front and back with support.",
          activities: [
            {
              description: "Front Float Practice",
              details: [
                "Use a kickboard to support the arms while floating face down; encourage relaxation and proper posture.",
              ],
            },
            {
              description: "Back Float Practice",
              details: [
                "With teacher support, practice floating on the back.",
                "Focus on body alignment and breathing calmly.",
              ],
            },
          ],
          reflection: "How did it feel to float on your back?",
        },
      ],
    },
    {
      week: 2,
      focus: "Introduction to flutter kicks and basic kicking skills.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Flutter Kicks Basics",
          objective: "Introduce students to flutter kicks using a kickboard.",
          activities: [
            {
              description: "Kickboard Kicks",
              details: [
                "Hold the kickboard and practice flutter kicks while maintaining a horizontal body position.",
              ],
            },
            {
              description: "Partner-Assisted Kicking",
              details: [
                "In pairs, one student supports the other while they practice flutter kicks.",
                "Encourage students to practice in pairs to build confidence and coordination.",
              ],
            },
          ],
          reflection: "What do you think about when practicing your kicks?",
        },
        {
          sessionNumber: 4,
          title: "Kicking Basics",
          objective:
            "Reinforce kicking skills and introduce basic coordination.",
          activities: [
            // "Relay Kicks: Students practice kicking in small groups, taking turns to kick across the pool.",
            // "Kickboard Challenges: Challenge students to kick while balancing a toy on the kickboard."
            {
              description: "Relay Kicks",
              details: [
                "Students practice kicking in small groups, taking turns to kick across the pool.",
              ],
            },
            {
              description: "Kickboard Challenges",
              details: [
                "Challenge students to kick while balancing a toy on the kickboard.",
              ],
            },
          ],
          reflection: "What helps you stay balanced when kicking?",
        },
      ],
    },
    {
      week: 3,
      focus: "Combining floating and kicking techniques.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Combining Floating and Kicking",
          objective:
            "Develop floating confidence by combining kicking with floating techniques.",
          activities: [
            {
              description: "Front Float and Kick",
              details: [
                "Combine front floating with flutter kicks using a kickboard.",
              ],
            },
            {
              description: "Back Float Progression",
              details: [
                "Practice transitioning from supported to independent back floating.",
              ],
            },
          ],
          reflection:
            "How does combining floating and kicking help you feel more confident?",
        },
        {
          sessionNumber: 6,
          title: "Streamlining Gliding and Kicking",
          objective: "Introduce students to gliding and streamline position.",
          activities: [
            {
              description: "Streamline Glides",
              details: [
                "Push off the wall in a streamlined position and glide across the pool.",
              ],
            },
            {
              description: "Streamline Kicks",
              details: [
                "Combine glides with flutter kicks to maintain momentum.",
              ],
            },
          ],
          reflection: "What helps you stay streamlined in the water?",
        },
      ],
    },
    {
      week: 4,
      focus: "Combining all learned skills in simple swimming drills.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Combining All Skills",
          objective: "Combine all learned skills in simple swimming drills.",
          activities: [
            {
              description: "Kickboard Races",
              details: [
                "Practice swimming across the pool using flutter kicks and a kickboard.",
              ],
            },
            {
              description: "Floating Challenges",
              details: [
                "Transition between front and back floating without support.",
              ],
            },
          ],
          reflection: "Which skill do you feel you have improved the most?",
        },
        {
          sessionNumber: 8,
          title: "Skill Showcase and Water Safety Games",
          objective: "Celebrate progress and reinforce water safety awareness.",
          activities: [
            {
              description: "Skill Showcase",
              details: [
                "Demonstrate floating, kicking, and gliding skills to the class.",
              ],
            },
            {
              description: "Water Safety Games",
              details: ["Play games that emphasize pool rules and safety."],
            },
          ],
          reflection: "Why is it important to practice water safety?",
        },
      ],
    },
  ],
};

export default SwimmingUnit1stGrade;
