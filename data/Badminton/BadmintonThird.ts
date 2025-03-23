import { IUnits } from "@/interfaces/units/IUnit";
import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";

const badmintonThird: IUnits = {
  unitTitle: "Badminton 3rd Grade",
  unitDBTitle: "Badminton",
  title: "Badminton",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will develop basic badminton skills such as grip, footwork, simple strokes (serve, underhand clear, and net shot), and game rules. Emphasis will be placed on coordination, enjoyment of the game, and teamwork.",
  essentialQuestions: [
    "How do I properly hold the racket to control the shuttle?",
    "How should I position my body to hit the shuttle effectively?",
    "Why is it important to follow through with my stroke?",
    "How do I play fairly and follow the basic rules of badminton?",
  ],
  skills: [
    "Basic grip (forehand grip)",
    "Simple footwork for positioning",
    "Basic strokes: underhand serve, underhand clear, and net shot",
    "Understanding of the court layout and scoring",
    "Cooperation with a partner in simple rally situations",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Badminton and Basic Grip",
          objective:
            "Introduce students to the game of badminton, focusing on how to hold the racket properly (forehand grip) and familiarize them with the shuttlecock.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light jogging around the court, followed by arm stretches.",
              ],
            },
            {
              description: "Grip drills",
              details: [
                "'Shake hands with the racket' to teach forehand grip.",
                "Practice holding the racket with the proper grip while standing still.",
                "Basic shuttle balancing: Balance the shuttle on the racket face without moving.",
              ],
            },
            {
              description: "Shuttle tosses",
              details: [
                "Toss the shuttle to a partner using underhand motions and attempt to catch it on the racket.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Footwork and Simple Strokes (Underhand Serve)",
          objective:
            "Develop simple footwork and introduce the underhand serve.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging and side steps along the court lines."],
            },
            {
              description: "Footwork drills",
              details: [
                "Movement around the court: practicing steps and lunges.",
                "Simple shadow movements with the racket.",
              ],
            },
            {
              description: "Underhand serve introduction",
              details: [
                "Demonstrate the correct position for an underhand serve.",
                "Practice serving from the baseline, focusing on gentle contact with the shuttle.",
                "Serve to a partner, aiming to land the shuttle in a specific area of the court.",
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
          title: "Control and Basic Net Shots",
          objective:
            "Improve hand-eye coordination and practice a basic net shot.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Side steps and lunges, focusing on balance and agility.",
              ],
            },
            {
              description: "Net shot drills",
              details: [
                "Demonstrate how to gently tap the shuttle over the net.",
                "Practice net shots with a partner, starting close to the net and moving backward.",
              ],
            },
            {
              description: "Control drills",
              details: [
                "Rally with a partner by tapping the shuttle back and forth.",
                "Focus on controlling the height and direction of the shuttle.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Combining Serve and Net Shots",
          objective:
            "Combine the underhand serve with net shots in simple rally situations.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Racket and shuttle control drills, like balancing the shuttle while moving.",
              ],
            },
            {
              description: "Serve and net shot drills",
              details: [
                "Serve and then move forward to the net for a simple net shot.",
                "Partner serves the shuttle, and the other player returns it with a net shot.",
              ],
            },
            {
              description: "Simple rallies",
              details: [
                "Practice short rallies focusing on maintaining control of the shuttle.",
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
          title: "Underhand Clear and Movement",
          objective:
            "Introduce the underhand clear stroke and combine it with basic footwork.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Shuttle juggling with the racket (students try to keep the shuttle in the air).",
              ],
            },
            {
              description: "Underhand clear stroke",
              details: [
                "Demonstrate the underhand clear, explaining how to send the shuttle high and deep.",
                "Practice the clear stroke, focusing on racket positioning and follow-through.",
              ],
            },
            {
              description: "Movement drills",
              details: [
                "Move forward for a net shot and back for an underhand clear.",
                "Combine footwork with different strokes in shadow play (no shuttle).",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Combining Skills (Serve, Net Shot, Clear)",
          objective:
            "Combine the underhand serve, net shot, and clear into simple rally situations.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shuttle tossing and catching with the racket."],
            },
            {
              description: "Skill combination drills",
              details: [
                "Serve to a partner, receive a net shot, and return with an underhand clear.",
                "Partners alternate between net shots and clears, focusing on movement.",
              ],
            },
            {
              description: "Short rally games",
              details: [
                "Students rally with each other, using both net shots and clears to keep the shuttle in play.",
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
          title: "Introduction to Simple Scoring and Game Play",
          objective:
            "Introduce the concept of scoring and allow students to play simple games.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Shuttle balancing drills while moving around the court.",
              ],
            },
            {
              description: "Introduction to scoring",
              details: [
                "Explain the basic scoring system (1 point per rally, play to 7 points).",
                "Practice keeping score in small groups.",
              ],
            },
            {
              description: "Game play",
              details: [
                "Play 1v1 games to 7 points, with an emphasis on using all learned skills (serve, net shot, clear).",
                "Focus on fair play and encouraging teamwork.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Game Play and Final Assessment",
          objective:
            "Assess student progress through game play and individual skill assessment.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging and stretching."],
            },
            {
              description: "Game play",
              details: [
                "Students play 1v1 or 2v2 games, applying all the skills they have learned.",
                "Teacher observes and assesses key skills (grip, footwork, serve, net shot, clear).",
              ],
            },
            {
              description: "Reflection and self-assessment",
              details: [
                "Students reflect on their own performance, identifying areas of strength and improvement.",
              ],
            },
          ],
        },
      ],
    },
  ],
  assessment: [
    {
      skill: "Grip",
      level1: "Frequently incorrect",
      level2: "Sometimes correct",
      level3: "Generally correct",
      level4: "Always correct and consistent",
    },
    {
      skill: "Footwork",
      level1: "Lacks movement",
      level2: "Moves occasionally",
      level3: "Moves effectively",
      level4: "Moves quickly and efficiently",
    },
    {
      skill: "Underhand Serve",
      level1: "Frequently misses the shuttle",
      level2: "Sometimes contacts shuttle",
      level3: "Consistently serves correctly",
      level4: "Serves with accuracy and consistency",
    },
    {
      skill: "Net Shot",
      level1: "Struggles with control",
      level2: "Occasionally controls",
      level3: "Generally controls",
      level4: "Consistently controls and places shots well",
    },
    {
      skill: "Clear Stroke",
      level1: "Lacks depth and power",
      level2: "Somewhat accurate",
      level3: "Accurate with depth",
      level4: "Consistently accurate with depth and power",
    },
    {
      skill: "Teamwork",
      level1: "Limited collaboration",
      level2: "Collaborates occasionally",
      level3: "Frequently collaborates",
      level4: "Excellent collaboration and communication",
    },
  ],
};

export { badmintonThird };
