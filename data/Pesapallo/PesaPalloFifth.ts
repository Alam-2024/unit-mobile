import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const pesaPalloFifth: IUnits = {
  unitTitle: "Finnish Baseball",
  unitDBTitle: "PesaPallo",
  title:
    "Finnish Baseball: Mastering Skills, Strategy, and Cultural Appreciation",
  gradeLevel: GradeLevel.Fifth,
  lengthOfUnit: LengthInWeeks.EightWeeks,
  overallExpectation:
    "Students will advance their understanding of Finnish baseball, focusing on developing core skills such as throwing, catching, batting, and base running, as well as strategic understanding and teamwork. They will also deepen their appreciation for Finnish culture and the history of the sport.",
  essentialQuestions: [
    "What are the fundamental skills and strategies needed to excel in Finnish baseball?",
    "How does teamwork contribute to success in Finnish baseball?",
    "What role does sportsmanship play in Finnish baseball, and how can it be demonstrated on and off the field?",
    "How do we adapt to different roles and positions within a Finnish baseball team?",
    "What impact does practice and dedication have on improving skills and performance in Finnish baseball?",
    "How does Finnish baseball compare to other forms of baseball or softball played around the world?",
    "What are the rules and regulations specific to Finnish baseball, and how do they influence game-play?",
    "How can we demonstrate respect for opponents, teammates, coaches, and officials in Finnish baseball?",
  ],
  skills: [
    "Develop and refine throwing and catching techniques specific to Finnish baseball.",
    "Improve batting accuracy and power using the pull-throw technique.",
    "Enhance base running strategy and decision-making.",
    "Learn the specific rules and scoring system of Finnish baseball.",
    "Practice communication, teamwork, and sportsmanship in various game scenarios.",
    "Understand different field positions and adapt roles based on game situations.",
    "Foster an appreciation for Finnish culture through the sport’s traditions.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Finnish Baseball – Rules and Culture",
          objective:
            "Introduce the rules, history, and cultural significance of Finnish baseball.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging and stretching."],
            },
            {
              description: "Introduction to Finnish Baseball",
              details: [
                "Brief history and cultural relevance in Finland. Explanation of key rules and how it differs from traditional baseball.",
              ],
            },
            {
              description: "Basic skills practice",
              details: [
                "Throwing and catching drills in pairs. Basic batting form demonstration and practice.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Team discussion on the cultural significance of Finnish baseball.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Basic Throwing and Catching Techniques",
          objective: "Develop proper throwing and catching form.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dynamic stretches and light jog."],
            },
            {
              description: "Throwing drills",
              details: [
                "Focus on the overhand throw technique. Practice accuracy and distance in pairs.",
              ],
            },
            {
              description: "Catching drills",
              details: [
                "Teach proper catching technique using both hands, with focus on positioning.",
              ],
            },
            {
              description: "Game scenario drill",
              details: [
                "Small-sided catch and throw games to enhance reaction time.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Group reflection on the importance of coordination."],
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
          title: "Introduction to Batting Techniques (Pull-Throw)",
          objective:
            "Introduce and practice the pull-throw technique for batting.",
          activities: [
            {
              description: "Warm-up",
              details: ["Agility drills and reaction exercises."],
            },
            {
              description: "Batting fundamentals",
              details: [
                "Teach proper grip, stance, and swing using the pull-throw technique.",
              ],
            },
            {
              description: "Batting drills",
              details: [
                "Students practice batting in small groups, focusing on accuracy and form.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Discussion on how to improve batting accuracy and strength.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Fielding Basics – Positioning and Strategy",
          objective:
            "Develop fielding skills, focusing on positioning and teamwork.",
          activities: [
            {
              description: "Warm-up",
              details: ["Sprinting and agility drills."],
            },
            {
              description: "Fielding drills",
              details: [
                "Practice fielding ground balls and catching fly balls. Focus on body positioning and awareness on the field.",
              ],
            },
            {
              description: "Team fielding drill",
              details: [
                "Simulated game situations where players must react to different hits and work as a team to field the ball.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Reflection on teamwork in the field."],
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
          title: "Advanced Throwing – Accuracy and Power",
          objective:
            "Enhance throwing accuracy and power for long and short throws.",
          activities: [
            {
              description: "Warm-up",
              details: ["Partner passing and catching."],
            },
            {
              description: "Advanced throwing techniques",
              details: [
                "Focus on increasing distance while maintaining accuracy.",
              ],
            },
            {
              description: "Throwing drills",
              details: [
                "Target practice, using small-sided games to test accuracy.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Group discussion on improving personal performance."],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Advanced Catching and Fielding",
          objective:
            "Improve fielding through catching techniques and strategic positioning.",
          activities: [
            {
              description: "Warm-up",
              details: ["Agility ladder drills."],
            },
            {
              description: "Fielding drills",
              details: [
                "Practice fast reaction times to grounders and pop flies.",
              ],
            },
            {
              description: "Game scenarios",
              details: [
                "Students work in teams to field balls in game-like situations.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Reflection on the importance of positioning and teamwork.",
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
          title: "Batting Power and Precision",
          objective:
            "Improve batting power and precision using the pull-throw technique.",
          activities: [
            {
              description: "Warm-up",
              details: ["Batting-focused stretches."],
            },
            {
              description: "Batting drills",
              details: ["Focus on improving bat speed and control."],
            },
            {
              description: "Partner batting practice",
              details: [
                "Working on precision by targeting specific areas of the field.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Reflection on personal challenges and improvements."],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Team Fielding and Defensive Strategies",
          objective:
            "Introduce defensive strategies for effective fielding as a team.",
          activities: [
            {
              description: "Warm-up",
              details: ["Group communication exercises."],
            },
            {
              description: "Defensive drills",
              details: [
                "Practice team strategies for stopping runs and working together.",
              ],
            },
            {
              description: "Game simulation",
              details: ["Apply defensive strategies in a mini-game."],
            },
            {
              description: "Cool-down",
              details: ["Group reflection on teamwork and defensive roles."],
            },
          ],
        },
      ],
    },
    {
      week: 5,
      sessions: [
        {
          sessionNumber: 9,
          title: "Base Running Strategies",
          objective: "Develop base running techniques and strategies.",
          activities: [
            {
              description: "Warm-up",
              details: ["Quick sprint exercises."],
            },
            {
              description: "Base running drills",
              details: ["Focus on speed, decision-making, and timing."],
            },
            {
              description: "Game scenario",
              details: ["Apply base running strategies in a simulated game."],
            },
            {
              description: "Cool-down",
              details: [
                "Reflection on timing and decision-making in base running.",
              ],
            },
          ],
        },
        {
          sessionNumber: 10,
          title: "Offensive Team Strategies",
          objective:
            "Enhance offensive play through team strategy and communication.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging and dynamic stretches."],
            },
            {
              description: "Offensive drills",
              details: ["Practice team communication during offensive plays."],
            },
            {
              description: "Mini-game",
              details: ["Apply offensive strategies in a simulated game."],
            },
            {
              description: "Cool-down",
              details: ["Reflection on offensive teamwork."],
            },
          ],
        },
      ],
    },
    {
      week: 6,
      sessions: [
        {
          sessionNumber: 11,
          title: "Combining Skills – Full Game Simulation",
          objective:
            "Combine skills learned to participate in a full game simulation.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Team exercises focusing on coordination and communication.",
              ],
            },
            {
              description: "Full game simulation",
              details: [
                "Students play a full game with focus on applying skills learned in the unit.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Group reflection on game experience and areas for improvement.",
              ],
            },
          ],
        },
        {
          sessionNumber: 12,
          title: "Post-Game Analysis and Strategy Adjustment",
          objective: "Reflect on game performance and adjust strategies.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light running and discussion."],
            },
            {
              description: "Game analysis",
              details: ["Review video or verbal feedback on game performance."],
            },
            {
              description: "Team drills",
              details: [
                "Focus on areas needing improvement based on game analysis.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Individual and group reflection on improvement goals.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 7,
      sessions: [
        {
          sessionNumber: 13,
          title: "Advanced Batting and Base Running",
          objective: "Refine advanced batting and base running techniques.",
          activities: [
            {
              description: "Warm-up",
              details: ["Agility and strength exercises."],
            },
            {
              description: "Advanced batting drills",
              details: ["Focus on power hitting and precision."],
            },
            {
              description: "Base running practice",
              details: ["Emphasis on decision-making under pressure."],
            },
            {
              description: "Cool-down",
              details: ["Reflection on batting challenges and successes."],
            },
          ],
        },
        {
          sessionNumber: 14,
          title: "Advanced Defensive Play and Teamwork",
          objective: "Refine defensive skills and strategies as a team.",
          activities: [
            {
              description: "Warm-up",
              details: ["Team passing and reaction drills."],
            },
            {
              description: "Defensive drills",
              details: ["Focus on teamwork in high-pressure situations."],
            },
            {
              description: "Mini-game",
              details: [
                "Apply defensive strategies in real-time game scenarios.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Reflection on defensive performance."],
            },
          ],
        },
      ],
    },
    {
      week: 8,
      sessions: [
        {
          sessionNumber: 15,
          title: "Final Game Day – Skills Showcase",
          objective: "Showcase all skills learned in a final game.",
          activities: [
            {
              description: "Warm-up",
              details: ["Team bonding activities and light stretches."],
            },
            {
              description: "Full game",
              details: [
                "Students participate in a final full game, applying all the skills learned throughout the unit.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Celebration and group reflection on growth throughout the unit.",
              ],
            },
          ],
        },
        {
          sessionNumber: 16,
          title: "Unit Reflection and Next Steps",
          objective:
            "Reflect on personal and team growth, and plan for future skill development.",
          activities: [
            {
              description: "Warm-up",
              details: ["Discussion on key takeaways from the unit."],
            },
            {
              description: "Individual reflection",
              details: [
                "Students write about their personal progress and goals.",
              ],
            },
            {
              description: "Team reflection",
              details: [
                "Group discussion on teamwork and how to improve in future games.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Celebration of achievements and handing out feedback.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default pesaPalloFifth;
