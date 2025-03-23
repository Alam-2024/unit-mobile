import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const badmintonFourth: IUnits = {
  unitTitle: "Badminton 4th Grade",
  unitDBTitle: "Badminton",
  title: "Badminton",
  gradeLevel: GradeLevel.Fourth,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Building upon prior knowledge, students will refine their basic badminton skills (grip, footwork, strokes) and deepen their understanding of game strategies, teamwork, and fair play.",
  essentialQuestions: [
    "How can I improve my footwork to be quicker and more efficient on the court?",
    "How do I control the shuttle to aim it where I want it to go?",
    "What strategies can I use during a game to outplay my opponent?",
    "Why is it important to communicate with my partner in doubles games?",
  ],
  skills: [
    "Refine grip and footwork for better control",
    "Master basic strokes: underhand serve, clear, and net shot",
    "Introduction to the overhead clear and drop shot",
    "Improved understanding of court positions and strategy in singles and doubles play",
    "Cooperative play and sportsmanship",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Review of Basic Skills (Grip, Serve, and Footwork)",
          objective:
            "Review and refine basic badminton skills (grip, underhand serve, and footwork) to ensure a solid foundation for further development.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging and side steps along the court lines."],
            },
            {
              description: "Review of the forehand grip",
              details: [
                "Basic grip: Quick review of correct grip and how it affects control. Grip check with a partner, correcting any mistakes from the start.",
              ],
            },
            {
              description: "Footwork refinement",
              details: [
                "Lateral movement and quick steps around the court.",
                "Shadow drills, moving into proper positions as if preparing to hit the shuttle.",
              ],
            },
            {
              description: "Underhand serve practice",
              details: [
                "Serve to a partner across the court, aiming for consistency and accuracy.",
                "Shadow moves for consistency and accuracy.",
              ],
            },
          ],
        },

        {
          sessionNumber: 2,
          title: "Introduction to Overhead Clear",
          objective:
            "Introduce the overhead clear stroke, focusing on the mechanics and proper execution.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shuttle balancing and footwork drills."],
            },
            {
              description: "Overhead clear introduction",
              details: [
                "Teacher demonstration of the overhead clear, explaining its purpose (to push the opponent back).",
                "Students practice the overhead clear without the shuttle first (shadow swings).",
              ],
            },
            {
              description: "Partner practice",
              details: [
                "One student serves, the other returns with an overhead clear.",
              ],
            },
            {
              description: "Footwork integration",
              details: [
                "Combine footwork with the overhead clear to develop better court coverage.",
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
          title: "Developing Net Shots and Drop Shots",
          objective:
            "Improve consistency with net shots and introduce the drop shot.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shuttle taps and light rallying with a partner."],
            },
            {
              description: "Net shot introduction",
              details: [
                "Teacher demonstrates the net shot, explaining its use to surprise opponents.",
                "Students practice the net shot, starting close to the net and gradually moving back.",
              ],
            },
            {
              description: "Drop shot introduction",
              details: [
                "Teacher demonstrates the drop shot, explaining its use to surprise opponents.",
                "Students practice the drop shot, starting close to the net and gradually moving back.",
              ],
            },
            {
              description: "Combination drills",
              details: [
                "Practice alternating between net shots and drop shots in simple rallies.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Strategy in Singles Play",
          objective:
            "Introduce simple game strategies for singles play, focusing on movement and shot placement.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Footwork drills with shuttle tossing to emphasize movement.",
              ],
            },
            {
              description: "Singles strategy discussion",
              details: [
                "Explain how to use different strokes (clear, drop shot, net shot) to control the game.",
                "Discuss court positioning and how to recover after each shot.",
              ],
            },
            {
              description: "Rally drills",
              details: [
                "Practice 1v1 rallies with an emphasis on using different strokes to move the opponent around the court.",
                " Encourage students to think about their shot placement and positioning.",
                "Mini games: Play short singles games to 7 points, focusing on using strategy and varying strokes.",
              ],
            },
            {
              description: "Mini games",
              details: [
                "Play short singles games to 7 points, focusing on using strategy and varying strokes.",
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
          title: "Introduction to Doubles Play",
          objective:
            "Teach the basics of doubles positioning and cooperation with a partner.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shuttle juggling with a partner and footwork drills."],
            },
            {
              description: "Doubles positioning",
              details: [
                "Explain the difference between front-and-back and side-by-side formations.",
                "Practice switching positions with a partner during rallies.",
              ],
            },
            {
              description: "Partner rally drills",
              details: [
                "Partners alternate between forehand and backhand shots, aiming for consistency and communication.",
              ],
            },
            {
              description: "Doubles rallies",
              details: [
                "Explain how to use different strokes (clear, drop shot, net shot) to control the game.",
                "Play 2v2 rallies, focusing on working together and covering the court as a team.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Cooperative Play and Teamwork",
          objective: "Improve teamwork and communication during doubles play.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Partner shuttle tapping and footwork coordination exercises.",
              ],
            },
            {
              description: "Teamwork drills",
              details: [
                "Partners practice alternating shots while maintaining communication.",
                "Introduce simple signals or verbal cues to coordinate movement on the court.",
              ],
            },
            {
              description: "Doubles strategy discussion",
              details: [
                "Discuss the importance of communication and positioning during game play.",
                "Encourage students to support each other and play to their partner’s strengths.",
              ],
            },
            {
              description: "Mini doubles games",
              details: [
                "Play 2v2 games to 5 points, focusing on communication and teamwork.",
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
          title: "Game Play with a Focus on Strategy and Sportsmanship",
          objective:
            "Apply all skills and strategies learned in game play, focusing on sportsmanship and fair play.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shuttle tapping and footwork coordination exercises."],
            },
            {
              description: "Game play",
              details: [
                "Apply all skills and strategies learned in game play, focusing on sportsmanship and fair play.",
                "Encourage fair play, positive communication, and respect for opponents.",
              ],
            },
            {
              description: "Self-assessment",
              details: [
                "Assess student progress through game play and individual self-assessment.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Assessment and Reflection",
          objective:
            "Assess student progress through game play and individual self-assessment.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging and stretches."],
            },
            {
              description: "Final assessment games",
              details: [
                "Students play 1v1 or 2v2 games, applying the skills and strategies they have learned.",
                "Teacher observes and assesses key areas, including shot selection, movement, and teamwork.",
              ],
            },
            {
              description: "Self-assessment and reflection",
              details: [
                "Students reflect on their own performance, identifying areas of improvement.",
                "Group discussion on what they have learned and enjoyed about the unit.",
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
      skill: "Serve",
      level1: "Frequently misses the shuttle",
      level2: "Sometimes serves correctly",
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
      skill: "Clear",
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

export default badmintonFourth;
