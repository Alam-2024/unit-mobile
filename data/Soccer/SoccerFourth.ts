import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";
import { IUnits } from "../../interfaces/IUnits";

const soccerFourth: IUnits = {
  unitTitle: "Soccer",
  unitDBTitle: "Soccer",
  title: "Soccer",
  gradeLevel: GradeLevel.Fourth,
  lengthOfUnit: LengthInWeeks.EightWeeks,
  overallExpectation: `Students will develop fundamental soccer skills, including advanced ball control, more precise passing, dribbling under pressure, and shooting with power and accuracy. They will also refine their understanding of teamwork and the rules of soccer, applying them in game situations.`,
  essentialQuestions: [
    "How can I control the ball while running at faster speeds?",
    "What techniques can I use to pass the ball more accurately to a teammate under pressure?",
    "How should my body be positioned when shooting for power and accuracy?",
    "How can teamwork improve our chances of scoring in a game?",
  ],
  skills: [
    "Advanced ball control",
    "Accurate passing under pressure",
    "Dribbling while being defended",
    "Shooting with power and accuracy",
    "Understanding roles and positions in teamwork",
    "Applying rules in a game scenario",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Soccer and Ball Control",
          objective:
            "Introduce the rules of soccer and enhance ball control, including dribbling while moving at different speeds and directions.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light jogging and dynamic stretches, then dynamic stretches focusing on the legs.",
              ],
            },
            {
              description: "Rules overview",
              details: [
                "Introduction to basic soccer rules (offside, corner kicks, throw-ins).",
              ],
            },
            {
              description: "Ball control",
              details: [
                "Dribbling through cones, focusing on keeping the ball close to the body, changing directions while dribbling, and control challenge under light pressure.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Ball Control and Passing",
          objective:
            "Refine ball control and introduce passing under pressure.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Free dribbling with short bursts of speed, followed by light jogging.",
              ],
            },
            {
              description: "Ball control drills",
              details: [
                "Zigzag dribbling through cones, ball control using different parts of the foot (inside, outside, sole).",
              ],
            },
            {
              description: "Passing",
              details: [
                "Demonstration of passing technique, passing under pressure in pairs with one applying light pressure.",
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
          title: "Passing in Teams and Under Pressure",
          objective:
            "Improve passing accuracy and introduce more challenging team collaboration.",
          activities: [
            {
              description: "Warm-up",
              details: ["Passing between pairs while jogging."],
            },
            {
              description: "Passing drills",
              details: [
                "Passing in pairs, passing through a moving target, and passing in small groups (3v3).",
              ],
            },
            {
              description: "Game",
              details: [
                "Keep Away – One player tries to intercept passes between a group of 3 or more.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Dribbling Under Pressure and Passing in Game Situations",
          objective:
            "Improve dribbling skills while being defended and apply passing techniques in dynamic game situations.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Dribbling through cones while focusing on speed and control.",
              ],
            },
            {
              description: "Dribbling drills",
              details: [
                "Dribbling in tight spaces while being lightly defended, 1v1 dribbling drill.",
              ],
            },
            {
              description: "Small-sided games",
              details: [
                "3v3 game focusing on passing and moving into space under pressure.",
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
          title: "Dribbling and Shooting",
          objective:
            "Enhance dribbling while preparing for a shot and introduce shooting with power and accuracy.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dynamic dribbling while preparing to shoot."],
            },
            {
              description: "Dribbling and shooting drills",
              details: [
                "Dribbling towards a goal, shooting from varying distances, focus on body positioning for shooting.",
              ],
            },
            {
              description: "Challenge",
              details: [
                "Target Shooting – Students aim for targets placed in different parts of the goal.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Shooting Techniques and Small-sided Game",
          objective:
            "Practice shooting techniques and apply these in a competitive game scenario.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Passing and receiving in pairs, followed by light shooting practice.",
              ],
            },
            {
              description: "Shooting drills",
              details: [
                "1v1 dribbling to shoot, shooting under pressure from a partner.",
              ],
            },
            {
              description: "Small-sided game",
              details: [
                "4v4 game focusing on shooting opportunities and quick decision-making.",
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
          title: "Full Game and Teamwork Focus",
          objective:
            "Apply all skills (dribbling, passing, shooting, and teamwork) in a larger-sided game.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Dribbling drills followed by light passing and shooting practice.",
              ],
            },
            {
              description: "Team play drills",
              details: [
                "Small-sided games (4v4) focusing on teamwork and game positioning, mini-tournament with rotating teams.",
              ],
            },
            {
              description: "Reflection",
              details: [
                "Discuss how teamwork and communication improved the game.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Assessment and Tournament",
          objective:
            "Assess students’ progress and conclude the unit with a class-wide soccer tournament.",
          activities: [
            {
              description: "Warm-up",
              details: ["Quick ball control and passing drills."],
            },
            {
              description: "Assessment stations",
              details: [
                "Stations for ball control, passing accuracy, dribbling under pressure, and shooting.",
              ],
            },
            {
              description: "Class tournament",
              details: [
                "Full game (5v5 or 6v6) where students apply all skills learned.",
              ],
            },
            {
              description: "Self-assessment",
              details: [
                "Students evaluate their own performance based on the skills covered in the unit.",
              ],
            },
          ],
        },
      ],
    },
  ],
  rubric: {
    skills: ["Ball Control", "Passing", "Dribbling", "Shooting", "Teamwork"],
    levels: [
      {
        level: "Level 1 (Needs Improvement)",
        ballControl: "Frequently loses control",
        passing: "Inaccurate and slow",
        dribbling: "Struggles when under pressure",
        shooting: "Lacks accuracy or power",
        teamwork: "Limited collaboration",
      },
      {
        level: "Level 2 (Developing)",
        ballControl: "Controls at lower speeds",
        passing: "Sometimes accurate",
        dribbling: "Can dribble in open spaces",
        shooting: "Occasionally accurate",
        teamwork: "Collaborates occasionally",
      },
      {
        level: "Level 3 (Proficient)",
        ballControl: "Controls well in most situations",
        passing: "Generally accurate",
        dribbling: "Dribbles confidently in simple situations",
        shooting: "Accurate with power in most attempts",
        teamwork: "Frequently collaborates",
      },
      {
        level: "Level 4 (Advanced)",
        ballControl: "Controls confidently at all speeds",
        passing: "Very accurate and quick",
        dribbling: "Dribbles effectively even under pressure",
        shooting: "Consistently shoots with power and precision",
        teamwork: "Excellent teamwork and positioning",
      },
    ],
  },
};

export default soccerFourth;
