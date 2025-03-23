import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";
import { IUnits } from "../../interfaces/IUnits";

// dodgeball.ts

// Interface for the rules of Dodgeball
interface Rule {
  title: string;
  description: string;
}

// Interface for the skills involved in Dodgeball
interface Skill {
  name: string;
  description: string;
}

// Game description
const gameDescriptionForDodgeball: string = `
Dodgeball is a popular team-based game where players aim to eliminate opponents by hitting them with a ball or catching a ball thrown by an opponent. 
The game is typically fast-paced, requiring agility, reflexes, and teamwork. 
It can be played with various rules depending on the version or region, but the basic concept remains the same: avoid being hit while trying to eliminate opponents. 
Here’s an overview of the game and the rules commonly followed:
`;

// Basic rules of Dodgeball
//TODO: Include rules array in all those sport units
const basicRulesOfDodgeball: Rule[] = [
  {
    title: "Teams",
    description:
      "Two teams face off, usually with equal numbers of players on each side.",
  },
  {
    title: "Objective",
    description:
      "Eliminate all players on the opposing team by hitting them with a ball or catching a ball they throw.",
  },
  {
    title: "Playing Area",
    description:
      "A court is typically divided into two halves, with each team occupying one half.",
  },
  {
    title: "Ball",
    description: "Soft rubber or foam balls are used to prevent injury.",
  },
  {
    title: "Start of the Game",
    description:
      "Balls are placed on the center line, and players rush to collect them when the game starts.",
  },
  {
    title: "Elimination",
    description: `
      - A player is eliminated if they are hit by a ball below the shoulders.
      - A player is also eliminated if the ball they threw is caught by an opponent before it hits the ground.
      - Some variations include a "return" rule, where eliminated players can return to the game if a teammate catches a ball.
    `,
  },
  {
    title: "Dodging",
    description:
      "Players must avoid being hit by moving out of the way or dodging the ball.",
  },
  {
    title: "Blocking",
    description:
      "Players can use another ball in their hands to deflect incoming throws.",
  },
  {
    title: "Winning",
    description:
      "A team wins by eliminating all players on the opposing team or by having more players remaining when time runs out.",
  },
];

// Skills involved in Dodgeball
const skillsInvolvedInDodgeball: Skill[] = [
  {
    name: "Throwing",
    description: "Accurate and powerful throws to eliminate opponents.",
  },
  {
    name: "Catching",
    description:
      "Catching thrown balls to save yourself and potentially bring back eliminated teammates.",
  },
  { name: "Dodging", description: "Quick movements to avoid being hit." },
  {
    name: "Teamwork",
    description:
      "Coordination with teammates to strategize and eliminate opponents efficiently.",
  },
];

// Data for the Dodgeball Unit Plan
const dodgeballFifth: IUnits = {
  unitTitle: "Dodgeball",
  unitDBTitle: "Dodgeball",
  title: "Dodgeball for 5th Grade (Ages 10-11, 8 Weeks)",
  gradeLevel: GradeLevel.Fifth,
  lengthOfUnit: LengthInWeeks.EightWeeks,
  overallExpectation:
    "Students will develop essential dodgeball skills such as throwing, dodging, catching, and teamwork, progressing from basic skills to advanced strategies. They will enhance agility, hand-eye coordination, and team-based strategic thinking.",
  essentialQuestions: [
    "How can we improve our throwing accuracy and speed in dodgeball?",
    "What strategies can we use as a team to win dodgeball games?",
    "Why are dodging and catching critical skills in dodgeball?",
    "How does teamwork contribute to success in dodgeball?",
  ],
  skills: [
    "Throwing",
    "Dodging",
    "Catching",
    "Teamwork",
    "Strategy",
    "Blocking",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Dodgeball Rules and Throwing",
          objective: "Introduction to Dodgeball and Throwing Techniques",
          activities: [
            {
              description: "Warm up",
              details: ["Light running and dynamic stretches."],
            },
            {
              description: "Circuit",
              details: ["Introduction to the rules and safety guidelines."],
            },
            {
              description: "Circuit",
              details: ["Throwing techniques: Focus on accuracy and speed."],
            },
            {
              description: "Circuit",
              details: [
                "Dodging practice: Simple dodging drills, moving side-to-side.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Stretching and reflection on what was learned."],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Throwing and Catching Techniques",
          objective: "Develop proper throwing and catching form.",
          activities: [
            { description: "Warm up", details: ["Agility ladder drills."] },
            {
              description: "Circuit",
              details: [
                "Throwing techniques: Partner drills to practice throwing.",
              ],
            },
            {
              description: "Circuit",
              details: [
                "Catching techniques: Partner drills to practice catching balls.",
              ],
            },
            {
              description: "Game",
              details: [
                "Mini dodgeball game: Small groups playing shortened rounds.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Light stretches and feedback."],
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
          title: "Developing Teamwork and Blocking Techniques",
          objective: "Developing Teamwork and Blocking Skills",
          activities: [
            {
              description: "Warm up",
              details: ["Running drills focusing on speed and reaction time."],
            },
            {
              description: "Circuit",
              details: [
                "Blocking technique: Learning how to block with a ball to avoid being hit.",
              ],
            },
            {
              description: "Circuit",
              details: [
                "Teamwork exercise: Practice passing balls between teammates and setting up attacks.",
              ],
            },
            {
              description: "Game",
              details: [
                "Mini dodgeball game focusing on teamwork and basic strategy.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Reflection on teamwork and blocking."],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Catching and Defensive Positioning",
          objective: "Catching and Defensive Positioning",
          activities: [
            {
              description: "Warm up",
              details: ["Agility and quick reaction drills."],
            },
            {
              description: "Circuit",
              details: [
                "Catching under pressure: Partner drills with increasing difficulty.",
              ],
            },
            {
              description: "Circuit",
              details: [
                "Defensive positioning: Learning how to position strategically on the court.",
              ],
            },
            {
              description: "Game",
              details: [
                "Mini dodgeball games with an emphasis on defense and positioning.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Feedback on strategy and positioning."],
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
          title: "Advanced Throwing Techniques",
          objective: "Advanced Throwing and Movement Skills",
          activities: [
            {
              description: "Warm up",
              details: ["Ladder drills and reaction-based games."],
            },
            {
              description: "Circuit",
              details: [
                "Advanced throwing: Aiming for specific body parts (below the waist).",
              ],
            },
            {
              description: "Circuit",
              details: [
                "Dodging practice: Moving while dodging to avoid balls.",
              ],
            },
            {
              description: "Game",
              details: [
                "Mini games focusing on advanced throwing and dodging.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Stretching and reflection on advanced skills."],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Catching While Moving",
          objective: "Catching and Movement Skills",
          activities: [
            {
              description: "Warm up",
              details: [
                "Coordination drills with focus on hand-eye coordination.",
              ],
            },
            {
              description: "Circuit",
              details: [
                "Catching while moving: Practice with partners in motion.",
              ],
            },
            {
              description: "Game",
              details: [
                "Mini games where players must catch while in constant movement.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Reflection on catching and movement."],
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
          title: "Developing Full-Team Strategy",
          objective: "Working with a Team to Develop Full-Team Strategy",
          activities: [
            {
              description: "Warm up",
              details: ["Team-based relay races and ball-passing drills."],
            },
            {
              description: "Circuit",
              details: [
                "Review of key skills: Throwing, catching, dodging, blocking.",
              ],
            },
            {
              description: "Circuit",
              details: [
                "Full-team tactics: Focusing on weaker opponents or protecting stronger players.",
              ],
            },
            {
              description: "Game",
              details: [
                "Full-team scrimmages applying strategy in extended games.",
              ],
            },
            {
              description: "Cool-Down",
              details: [
                "Team reflection on performance and strategy.",
                "Feedback on team performance.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Refining Teamwork and Strategy",
          objective: "Refactoring Teamwork and Strategy",
          activities: [
            {
              description: "Warm up",
              details: ["Targeted drills focusing on agility and awareness."],
            },
            {
              description: "Game",
              details: [
                "Final practice scrimmages to refine skills and strategies.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Feedback on teamwork and strategy use."],
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
          title: "Advanced Team Defense",
          objective: "Mastering Defensive Team Strategies",
          activities: [
            {
              description: "Warm up",
              details: ["Dynamic stretches and reaction drills."],
            },
            {
              description: "Circuit",
              details: [
                "Defensive formations: Group exercises to develop cohesive defensive plays.",
              ],
            },
            {
              description: "Game",
              details: [
                "Scrimmages focused on team defense and counterattacks.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Reflection on defensive teamwork and strategies."],
            },
          ],
        },
        {
          sessionNumber: 10,
          title: "Offensive Coordination",
          objective: "Building Offensive Strategies as a Team",
          activities: [
            {
              description: "Warm up",
              details: ["Ball-handling drills and quick passes."],
            },
            {
              description: "Circuit",
              details: [
                "Offensive plays: Practicing coordinated attacks with multiple players.",
              ],
            },
            {
              description: "Game",
              details: [
                "Full-team scrimmages emphasizing offensive coordination.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Reflection on offensive execution and teamwork."],
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
          title: "Tournament Preparation I",
          objective: "Preparing for Class Tournament: Team Dynamics",
          activities: [
            {
              description: "Warm up",
              details: ["Group stretches and light jogs."],
            },
            {
              description: "Circuit",
              details: [
                "Strategy refinement: Small group planning for tournament scenarios.",
              ],
            },
            {
              description: "Game",
              details: [
                "Practice matches emphasizing teamwork and adaptability.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Reflection on team coordination improvements."],
            },
          ],
        },
        {
          sessionNumber: 12,
          title: "Tournament Preparation II",
          objective: "Final Preparations for Tournament Play",
          activities: [
            {
              description: "Warm up",
              details: ["Agility drills and team ball drills."],
            },
            {
              description: "Game",
              details: [
                "Simulated tournament matches: Groups play extended games.",
              ],
            },
            {
              description: "Cool-Down",
              details: ["Feedback and adjustments for the tournament."],
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
          title: "Tournament Kickoff",
          objective: "Class Tournament Round One",
          activities: [
            {
              description: "Warm up",
              details: ["Group stretches and motivational talk."],
            },
            {
              description: "Game",
              details: ["First rounds of the class-wide tournament."],
            },
            {
              description: "Cool-Down",
              details: ["Reflection on teamwork and gameplay."],
            },
          ],
        },
        {
          sessionNumber: 14,
          title: "Tournament Semi-Finals",
          objective: "Advancing Skills in Competitive Play",
          activities: [
            {
              description: "Warm up",
              details: ["Dynamic warm-ups and partner drills."],
            },
            {
              description: "Game",
              details: ["Semi-final rounds of the tournament."],
            },
            {
              description: "Cool-Down",
              details: ["Team feedback and preparation for finals."],
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
          title: "Tournament Finals",
          objective: "Showcasing Teamwork and Strategy in the Finals",
          activities: [
            {
              description: "Warm up",
              details: ["Group stretches and team-focused drills."],
            },
            {
              description: "Game",
              details: ["Final rounds of the tournament."],
            },
            {
              description: "Cool-Down",
              details: ["Celebration and reflection on the unit."],
            },
          ],
        },
        {
          sessionNumber: 16,
          title: "Unit Reflection and Awards",
          objective: "Reviewing Achievements and Recognizing Excellence",
          activities: [
            {
              description: "Warm up",
              details: ["Light stretches and group discussion."],
            },
            {
              description: "Reflection",
              details: ["Unit review and highlights of key moments."],
            },
            {
              description: "Awards",
              details: ["Recognition of outstanding teamwork and performance."],
            },
            {
              description: "Cool-Down",
              details: ["Final thoughts and thank-you session."],
            },
          ],
        },
      ],
    },
  ],
  assessment: {
    participation:
      "Students actively engage in dodgeball sessions and show effort in every activity.",
    skillExecution:
      "Demonstrates progress in throwing, dodging, and catching techniques.",
    teamWork:
      "Shows ability to collaborate effectively with teammates during games.",
    strategy:
      "Displays understanding and application of offensive and defensive strategies during games.",
  },
};

// Exporting constants for use in other modules
export {
  dodgeballFifth,
  basicRulesOfDodgeball,
  skillsInvolvedInDodgeball,
  gameDescriptionForDodgeball,
};
