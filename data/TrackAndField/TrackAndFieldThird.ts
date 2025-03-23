import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";
import { IUnits } from "../../interfaces/IUnits";

const trackAndFieldThird: IUnits = {
  unitTitle: "Striking and Fielding for 3rd Grade (Ages 8-9, 4 Weeks)",
  unitDBTitle: "StrikeAndField",
  title: "Striking and Fielding",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will learn basic striking and fielding skills through fun, engaging activities while developing hand-eye coordination, teamwork, and basic understanding of offensive and defensive play.",
  essentialQuestions: [
    "How can I improve my striking technique?",
    "What are the key skills needed to field a ball effectively?",
    "Why is teamwork important in striking and fielding games?",
    "How do I position myself to be successful when fielding?",
  ],
  skills: [
    "Basic striking with a bat",
    "Fielding a ground ball",
    "Throwing and catching",
    "Teamwork and communication",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Striking and Fielding",
          objective:
            "Learn the basics of striking a stationary ball and fielding ground balls.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging, dynamic stretching."],
            },
            {
              description: "Striking basics",
              details: [
                "Students practice hitting a stationary ball off a tee.",
                "Focus on proper stance and grip.",
              ],
            },
            {
              description: "Fielding basics",
              details: [
                "Students practice catching and fielding ground balls in pairs.",
                "Emphasize getting in front of the ball and proper throwing technique.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Catching and Throwing Practice",
          objective: "Develop basic throwing and catching skills.",
          activities: [
            {
              description: "Warm-up",
              details: ["Partner throwing and catching."],
            },
            {
              description: "Throwing drill",
              details: [
                "Practice throwing to a target with accuracy from different distances.",
              ],
            },
            {
              description: "Fielding drill",
              details: [
                "Students practice fielding rolling balls and making accurate throws to a partner.",
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
          title: "Hitting and Fielding Drills",
          objective:
            "Practice hitting moving balls and improve fielding techniques.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light jogging, dynamic stretches, and partner throwing.",
              ],
            },
            {
              description: "Hitting drill",
              details: [
                "Students practice hitting soft-tossed balls from a partner, focusing on hand-eye coordination.",
              ],
            },
            {
              description: "Fielding drill",
              details: [
                "Small group fielding practice with ground balls and making quick throws to bases or teammates.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Striking for Accuracy",
          objective:
            "Improve striking accuracy by hitting balls to specific areas.",
          activities: [
            {
              description: "Warm-up",
              details: ["Partner throwing and catching drills."],
            },
            {
              description: "Target hitting",
              details: [
                "Students aim to hit the ball to different targets set up around the field.",
              ],
            },
            {
              description: "Fielding game",
              details: [
                "Small-sided fielding game where students must throw to specific targets after fielding.",
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
          title: "Game Play: Offensive and Defensive Roles",
          objective:
            "Introduce basic game play and positioning for offense and defense.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light jogging, dynamic stretches, and partner throwing drills.",
              ],
            },
            {
              description: "Offensive positioning",
              details: [
                "Students learn where to stand when striking and how to run to bases after hitting.",
              ],
            },
            {
              description: "Defensive positioning",
              details: [
                "Students learn where to position themselves when fielding and how to work together with teammates.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Team-Based Fielding Challenges",
          objective:
            "Focus on teamwork and communication through fielding challenges.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dynamic stretches and catching drills in pairs."],
            },
            {
              description: "Team fielding relay",
              details: [
                "Students work in teams to field balls and make accurate throws to teammates in a relay format.",
              ],
            },
            {
              description: "Small-sided game",
              details: [
                "Teams play a simplified game focusing on working together to field and throw.",
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
          title: "Full Game Simulation",
          objective: "Apply all skills in a full game scenario.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light jogging, dynamic stretches, and group throwing practice.",
              ],
            },
            {
              description: "Game simulation",
              details: [
                "Students participate in a full game where they take turns playing offense (striking) and defense (fielding), applying skills from previous lessons.",
              ],
            },
            {
              description: "Post-game reflection",
              details: [
                "Students discuss what went well and what they could improve for next time.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Review and Assessment",
          objective: "Review key skills and assess student progress.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light jogging, dynamic stretches, and partner throwing drills.",
              ],
            },
            {
              description: "Skill stations",
              details: [
                "Students rotate through stations reviewing key skills: hitting, fielding, throwing, and teamwork.",
              ],
            },
            {
              description: "Assessment game",
              details: [
                "Students play a final game where teachers assess their skills in a real-game context.",
              ],
            },
          ],
        },
      ],
    },
  ],
  assessment: [
    {
      skill: "Striking",
      level1: "Cannot make contact with the ball.",
      level2: "Can occasionally hit a stationary ball.",
      level3: "Can hit a moving ball with some accuracy.",
      level4: "Consistently hits a moving ball with good accuracy and power.",
    },
    {
      skill: "Fielding",
      level1: "Struggles to catch or field the ball.",
      level2: "Can catch or field a stationary ball with some success.",
      level3: "Can field moving balls and throw accurately to a partner.",
      level4:
        "Consistently fields and throws accurately in game-like scenarios.",
    },
    {
      skill: "Teamwork",
      level1: "Does not communicate or work well with others.",
      level2: "Sometimes works with others, but lacks communication.",
      level3: "Works well with others and communicates effectively.",
      level4: "Leads team in communication and cooperation during game play.",
    },
  ],
};

export default trackAndFieldThird;
