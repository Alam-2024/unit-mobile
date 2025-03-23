import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const soccerFifth: IUnits = {
  unitTitle: "Soccer",
  unitDBTitle: "Soccer",
  title: "Soccer",
  gradeLevel: GradeLevel.Fifth,
  lengthOfUnit: LengthInWeeks.EightWeeks,
  overallExpectation: `Students will develop advanced soccer skills, focusing on precision, strategy, and team play. Emphasis will be placed on ball control under pressure, quick decision-making, strategic passing, and shooting in competitive scenarios.`,
  essentialQuestions: [
    "How can I enhance my decision-making in game scenarios?",
    "What strategies can I use to pass effectively in tight situations?",
    "How does teamwork and communication influence success on the field?",
    "How can I improve the accuracy and power of my shooting?",
  ],
  skills: [
    "Advanced ball control under pressure",
    "Strategic passing in dynamic situations",
    "Dribbling and shielding",
    "Shooting with precision and power",
    "Team positioning and communication",
    "Application of strategies in game play",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Advanced Ball Control and Dribbling",
          objective:
            "Focus on ball control and dribbling while being defended, introducing shielding techniques.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Dynamic stretches and jogging with ball control drills.",
              ],
            },
            {
              description: "Dribbling drills",
              details: [
                "Dribbling in tight spaces, focusing on shielding the ball from defenders.",
              ],
            },
            {
              description: "1v1 Dribbling",
              details: [
                "Students practice dribbling against a defender, focusing on shielding and controlling the ball under pressure.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Ball Control and Passing",
          objective:
            "Improve ball control and introduce passing while under pressure from defenders.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Jogging with the ball, incorporating changes in speed and direction.",
              ],
            },
            {
              description: "Passing drills",
              details: [
                "Passing under pressure in pairs and small groups, working on accuracy and speed.",
              ],
            },
            {
              description: "Passing game",
              details: [
                "4v2 passing drill where four players try to pass while two defenders attempt to intercept.",
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
          title: "Passing Under Pressure and Dribbling",
          objective:
            "Continue improving passing and dribbling in more complex scenarios with defenders.",
          activities: [
            {
              description: "Warm-up",
              details: ["Passing and receiving while jogging in pairs."],
            },
            {
              description: "Pressure passing drill",
              details: [
                "2v2 passing with defenders applying pressure, focusing on quick decision-making.",
              ],
            },
            {
              description: "Small-sided games",
              details: ["3v3 games focusing on passing and creating space."],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Shooting and Game Play",
          objective:
            "Develop shooting techniques and apply passing and dribbling in a competitive game setting.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dribbling drills incorporating shooting at the end."],
            },
            {
              description: "Shooting drills",
              details: [
                "Shooting under pressure from defenders, focusing on power and accuracy.",
              ],
            },
            {
              description: "4v4 Game",
              details: [
                "Small-sided game focusing on integrating all learned skills in a competitive setting.",
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
          title: "Advanced Dribbling and Passing",
          objective:
            "Focus on advanced dribbling and passing, using space and movement to create opportunities.",
          activities: [
            {
              description: "Warm-up",
              details: ["Ball control exercises with increasing pressure."],
            },
            {
              description: "Dribbling and passing",
              details: [
                "Combining dribbling with quick passes to break through defense.",
              ],
            },
            {
              description: "Game Play",
              details: [
                "4v4 game focusing on breaking defensive lines through passing and dribbling.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Shooting for Precision",
          objective:
            "Improve shooting accuracy, focusing on different angles and distances.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shooting practice with a focus on technique."],
            },
            {
              description: "Shooting drills",
              details: [
                "Shooting from various angles and distances, with defenders applying pressure.",
              ],
            },
            {
              description: "Game Play",
              details: [
                "5v5 game focusing on creating shooting opportunities.",
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
          title: "Defending and Transition Play",
          objective:
            "Introduce defending principles and quick transitions from defense to attack.",
          activities: [
            {
              description: "Warm-up",
              details: ["Defensive footwork and positioning."],
            },
            {
              description: "Defensive drills",
              details: [
                "1v1 and 2v2 defending, focusing on positioning and anticipation.",
              ],
            },
            {
              description: "Transition drills",
              details: [
                "Small-sided games (3v3) focusing on quick transitions from defense to attack.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Shooting Under Pressure",
          objective:
            "Improve shooting under pressure from defenders and in game scenarios.",
          activities: [
            {
              description: "Warm-up",
              details: ["Shooting drills focusing on accuracy and power."],
            },
            {
              description: "Shooting game",
              details: ["Students compete to score in 2v2 shooting scenarios."],
            },
            {
              description: "Game Play",
              details: [
                "5v5 game where students focus on creating and taking shooting opportunities.",
              ],
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
          title: "Advanced Passing and Communication",
          objective:
            "Enhance team communication and passing in more complex team setups.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging with passing and receiving in groups of 3."],
            },
            {
              description: "Passing drills",
              details: [
                "Passing in triangles, focusing on communication and movement off the ball.",
              ],
            },
            {
              description: "Small-sided game",
              details: [
                "4v4 game focusing on team communication and quick passing.",
              ],
            },
          ],
        },
        {
          sessionNumber: 10,
          title: "Attacking Principles",
          objective:
            "Introduce attacking strategies, including off-the-ball movement and positioning.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Ball control and dribbling with movement off the ball.",
              ],
            },
            {
              description: "Attacking drills",
              details: [
                "3v3 attacking, focusing on creating space and positioning.",
              ],
            },
            {
              description: "Game Play",
              details: [
                "5v5 game focusing on attacking strategies and positioning.",
              ],
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
          title: "Team Play and Strategy",
          objective:
            "Refine team strategies, focusing on communication and transitions.",
          activities: [
            {
              description: "Warm-up",
              details: ["Team passing drills with focus on communication."],
            },
            {
              description: "Strategy drills",
              details: [
                "Small team drills (4v4) focusing on transitions and positioning.",
              ],
            },
            {
              description: "Game Play",
              details: ["6v6 game focusing on team strategy and transitions."],
            },
          ],
        },
        {
          sessionNumber: 12,
          title: "Attacking and Defending",
          objective:
            "Integrate attacking and defending strategies in a competitive game environment.",
          activities: [
            {
              description: "Warm-up",
              details: ["Attacking vs defending drills in 1v1 and 2v2 setups."],
            },
            {
              description: "Attacking vs defending",
              details: [
                "Small-sided games focusing on both attacking and defending principles.",
              ],
            },
            {
              description: "Game Play",
              details: [
                "7v7 game focusing on both attacking and defending strategies.",
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
          title: "Final Preparations and Strategy",
          objective:
            "Prepare for the final weeks by refining team play and strategies.",
          activities: [
            {
              description: "Warm-up",
              details: ["Team communication drills focusing on positioning."],
            },
            {
              description: "Strategy drills",
              details: [
                "4v4 games focusing on refining team strategy and positioning.",
              ],
            },
            {
              description: "Game Play",
              details: [
                "6v6 game focusing on final preparations for team strategy.",
              ],
            },
          ],
        },
        {
          sessionNumber: 14,
          title: "Final Game Preparations",
          objective: "Refine all skills in preparation for the final game.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Dribbling and passing with focus on quick decision-making.",
              ],
            },
            {
              description: "Game Play",
              details: ["7v7 game focusing on applying all learned skills."],
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
          title: "Final Games Part 1",
          objective: "Apply all skills in a competitive game environment.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Passing and dribbling with focus on quick decision-making.",
              ],
            },
            {
              description: "Game Play",
              details: [
                "Full game (7v7 or 9v9) focusing on teamwork and communication.",
              ],
            },
          ],
        },
        {
          sessionNumber: 16,
          title: "Final Games Part 2",
          objective:
            "Conclude the unit with competitive games, celebrating growth and teamwork.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light drills focusing on ball control and team communication.",
              ],
            },
            {
              description: "Final Game",
              details: [
                "Full competitive game with teams applying all skills and strategies learned.",
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
        level: "Beginner",
        ballControl: "Struggles to maintain control under pressure.",
        passing: "Inconsistent accuracy when passing under pressure.",
        dribbling: "Limited ability to dribble while defended.",
        shooting: "Inaccurate or weak shooting.",
        teamwork: "Limited communication and positioning.",
      },
      {
        level: "Intermediate",
        ballControl: "Maintains control under moderate pressure.",
        passing: "Accurate passing in most situations.",
        dribbling: "Can dribble effectively when lightly defended.",
        shooting: "Shoots with some accuracy and power.",
        teamwork:
          "Communicates well with teammates, generally positioned correctly.",
      },
      {
        level: "Advanced",
        ballControl: "Consistently controls the ball under heavy pressure.",
        passing: "Accurate and quick passing even under high pressure.",
        dribbling: "Dribbles confidently against defenders.",
        shooting: "Shoots with accuracy and power from various positions.",
        teamwork:
          "Highly communicative and always well-positioned, leads team plays.",
      },
    ],
  },
};

export default soccerFifth;
