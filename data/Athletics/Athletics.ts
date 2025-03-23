import { IUnits } from "@/interfaces/units/IUnit";
import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";

const athleticsThird: IUnits = {
  unitTitle: "Athletic Explorers",
  unitDBTitle: "Athletics",
  title: "Athletic Explorers",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will develop fundamental athletic skills such as running, jumping, and throwing, while emphasizing teamwork through relay activities and collaborative exercises.",
  essentialQuestions: [
    "What are the key techniques for effective running, jumping, and throwing?",
    "How can I improve my performance through practice and perseverance?",
    "Why is teamwork important in relay activities?",
    "How can I contribute to my team’s success in athletic challenges?",
  ],
  skills: [
    "Running technique (sprinting, pacing)",
    "Jumping technique (vertical and horizontal)",
    "Throwing technique (overhand, underhand)",
    "Relay race strategies",
    "Team collaboration and communication",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Running and Relay Races",
          objective: "Introduce running techniques and relay race basics.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging, dynamic stretches focusing on legs."],
            },
            {
              description: "Running drills",
              details: [
                "Practice proper running form (posture, arm movement, stride).",
                "Short sprints with focus on acceleration and deceleration.",
              ],
            },
            {
              description: "Relay race introduction",
              details: [
                "Introduce baton passing and relay race rules.",
                "Simple relay races in small groups, focusing on teamwork.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Jumping Techniques and Relay Practice",
          objective:
            "Develop jumping techniques and continue relay race practice.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging and agility ladder drills."],
            },
            {
              description: "Jumping drills",
              details: [
                "Practice vertical jumps and broad jumps.",
                "Focus on using arms to generate power during jumps.",
              ],
            },
            {
              description: "Relay practice",
              details: [
                "Continue practicing baton passing and running in relays.",
                "Introduce strategies for efficient baton passing.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 2,
      sessions: [
        {
          sessionNumber: 3,
          title: "Throwing Techniques: Overhand and Underhand",
          objective: "Introduce and practice proper throwing techniques.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging and arm stretches."],
            },
            {
              description: "Overhand throw",
              details: [
                "Demonstrate proper overhand throwing technique (stance, arm movement, follow-through).",
                "Practice throwing for distance and accuracy.",
              ],
            },
            {
              description: "Underhand throw",
              details: [
                "Practice underhand throwing with focus on accuracy.",
                "Team challenges that involve throwing at targets.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Relay Races with Baton Passing Focus",
          objective:
            "Continue developing relay race skills, focusing on baton passing.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dynamic stretches and light sprints."],
            },
            {
              description: "Baton passing drills",
              details: [
                "Practice passing the baton in a straight line, focusing on smooth transitions.",
                "Relay races with timed transitions to simulate competition.",
              ],
            },
            {
              description: "Relay races",
              details: [
                "Small group relay races, focusing on teamwork and coordination.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 3,
      sessions: [
        {
          sessionNumber: 5,
          title: "Combining Running, Jumping, and Throwing",
          objective:
            "Combine skills from previous lessons in athletic circuits.",
          activities: [
            {
              description: "Warm-up",
              details: ["Agility drills and jogging."],
            },
            {
              description: "Athletic circuit",
              details: [
                "Set up stations: sprints, jumping for distance, and throwing for accuracy.",
                "Students rotate between stations, practicing each skill.",
              ],
            },
            {
              description: "Team relay races",
              details: [
                "Combine running, jumping, and throwing in team-based relay challenges.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Team Relay Challenges",
          objective:
            "Develop teamwork and strategies in relay race competitions.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Relay baton passing in pairs, focusing on communication.",
              ],
            },
            {
              description: "Relay race strategies",
              details: [
                "Discuss different strategies for improving speed and coordination in relay races.",
                "Practice team relays with an emphasis on smooth transitions.",
              ],
            },
            {
              description: "Relay competitions",
              details: [
                "Hold team relay races, focusing on teamwork and speed.",
              ],
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
          title: "Relay Races and Team Collaboration",
          objective:
            "Assess student progress in running, jumping, throwing, and teamwork.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging and dynamic stretches."],
            },
            {
              description: "Relay practice",
              details: [
                "Review baton passing and running techniques.",
                "Practice team relay races, focusing on teamwork and communication.",
              ],
            },
            {
              description: "Athletic skills assessment",
              details: [
                "Students participate in challenges that combine running, jumping, and throwing.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Relay Competitions and Assessment",
          objective:
            "Hold final relay competitions and assess teamwork and individual progress.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Relay baton passing with focus on smooth transitions.",
              ],
            },
            {
              description: "Final relay races",
              details: [
                "Students compete in team-based relay races.",
                "Teacher observes and assesses skills learned during the unit.",
              ],
            },
            {
              description: "Self-assessment and reflection",
              details: [
                "Students reflect on their teamwork and identify areas of improvement.",
              ],
            },
          ],
        },
      ],
    },
  ],
  assessment: [
    {
      skill: "Running Technique",
      level1: "Limited control and slow pace",
      level2: "Some control but lacks consistency",
      level3: "Good control and consistent pace",
      level4: "Excellent control and speed",
    },
    {
      skill: "Jumping Technique",
      level1: "Struggles with form and coordination",
      level2: "Inconsistent form, but shows improvement",
      level3: "Generally good form and control",
      level4: "Excellent form, control, and height/distance",
    },
    {
      skill: "Throwing Technique",
      level1: "Frequently misses target or lacks power",
      level2: "Occasionally hits target but lacks consistency",
      level3: "Good accuracy and power",
      level4: "Excellent accuracy and power",
    },
    {
      skill: "Teamwork in Relay Races",
      level1: "Limited collaboration and communication",
      level2: "Occasional collaboration but inconsistent",
      level3: "Good collaboration and communication",
      level4: "Excellent collaboration and consistent communication",
    },
  ],
};

export default athleticsThird;
