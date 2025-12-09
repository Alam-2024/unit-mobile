import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const flagFootballSixthSeventh: IUnits = {
  unitTitle: "Flag Football 6–7",
  unitDBTitle: "Flag Football 6–7",
  title:
    "Applying NFL FLAG Rules, Offensive Concepts, and Defensive Responsibilities in Game Play",
  gradeLevel: `${GradeLevel.Sixth} - ${GradeLevel.Seventh}`,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will apply core NFL FLAG rules and terminology while executing more advanced skills and strategies. They will design and implement simple offensive playbooks, read basic defensive structures, and demonstrate effective team communication, leadership, and resilience in competitive game situations.",
  essentialQuestions: [
    "How do specific NFL FLAG rules such as no-run zones, rush line, and line-to-gain influence offensive and defensive decisions?",
    "What offensive concepts and route combinations help create space and mismatches against different defensive looks?",
    "How can defenders use angles of pursuit, leverage, and communication to limit big plays?",
    "What leadership and communication skills are needed to organise a huddle, call plays, and solve problems as a team?",
    "How can students show resiliency and integrity when facing setbacks or close games in flag football?",
  ],
  skills: [
    "Apply core NFL FLAG rules including no-run zones, line of scrimmage, line-to-gain, rush line, and change of possession.",
    "Execute a range of passing routes (slant, out, in, corner, post) with timing and appropriate depth.",
    "Create and run simple offensive plays that combine multiple routes to stretch the defence horizontally and vertically.",
    "Identify and respond to basic defensive structures (man-to-man and simple zones) using appropriate offensive decisions.",
    "Use effective defensive techniques including angles of pursuit, closing space, and coordinated team coverage.",
    "Demonstrate leadership in the huddle, clear communication of assignments, and constructive feedback to teammates.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Advanced Rules and Terminology",
          objective:
            "Review core NFL FLAG rules and introduce advanced terminology such as no-run zones, rush line, and rusher.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Dynamic warm-up including backpedal, side shuffle, and change-of-direction drills.",
              ],
            },
            {
              description: "Rules and Vocabulary",
              details: [
                "Review field markings and introduce or reinforce terms: line of scrimmage, line-to-gain, no-run zone, rush line, rusher, backfield.",
                "Mini-scenarios where students decide if a run or pass is required based on ball position (no-run zone situations).",
              ],
            },
            {
              description: "Decision-Making Game",
              details: [
                "3v3 or 4v4 drills where the offense must choose plays that respect no-run zones and downs, with quick feedback between plays.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching and short written or verbal check for understanding of new vocabulary.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Route Tree and Timing",
          objective:
            "Extend students’ route knowledge and strengthen timing between quarterback and receivers.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Passing lines with timed releases: receivers leave on a count, QBs throw on rhythm.",
              ],
            },
            {
              description: "Route Tree Introduction",
              details: [
                "Review and practise a small route tree (e.g., quick out, in, corner, post) with emphasis on correct depth and cuts.",
                "Receivers run routes on air while QBs focus on drop, footwork, and release timing.",
              ],
            },
            {
              description: "Timing Drills",
              details: [
                "QB–WR pairs work on routes where the ball is thrown to a spot, not to a standing receiver, reinforcing anticipation.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Partner stretch and brief discussion on why timing matters against real defenders.",
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
          title: "Offensive Concepts: Stretching the Defence",
          objective:
            "Use simple offensive concepts to stretch the defence horizontally and vertically.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Passing in triangles with movement to new spaces after each catch.",
              ],
            },
            {
              description: "Horizontal and Vertical Stretch",
              details: [
                "Demonstrate concepts of horizontal stretch (routes at different widths) and vertical stretch (routes at different depths).",
                "Practise 3‑receiver patterns where one route is short, one intermediate, and one deep.",
              ],
            },
            {
              description: "Play Design Workshop",
              details: [
                "In small groups, students design one simple play that uses a clear stretch concept and then run it against light defence.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Team stretch and quick share-out of what made their designed play effective or not.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Defensive Techniques and Rush",
          objective:
            "Refine defensive techniques, including backpedal, leverage, angles of pursuit, and use of a dedicated rusher.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Mirror and pursuit angle drills with increasing speed.",
              ],
            },
            {
              description: "Rusher and Coverage",
              details: [
                "Introduce the role of the rusher lined up behind the rush line and cues for safe, controlled pressure on the quarterback.",
                "Small drills where one defender rushes and others hold coverage zones or man assignments.",
              ],
            },
            {
              description: "Angles of Pursuit",
              details: [
                "1v2 and 2v2 pursuit games where defenders must take smart angles to pull flags before a scoring line.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching; students identify one defensive habit they will focus on (e.g., staying low, eyes on hips).",
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
          title: "Reading Defence: Man and Zone",
          objective:
            "Identify basic man-to-man and zone defences and make appropriate offensive decisions.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Jog-and-react drills where students change direction based on teacher signals, simulating reading cues.",
              ],
            },
            {
              description: "Defensive Structures",
              details: [
                "Walk-through of simple man-to-man and 2‑ or 3‑zone defensive structures.",
                "Offense and defence take turns setting up; offense predicts which routes might be open.",
              ],
            },
            {
              description: "Read-and-React Drills",
              details: [
                "3v3 passing drills where QB must choose a receiver based on defence alignment, practising quick, safe decisions.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light stretching; students explain how they could adjust a route against a different defence.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Huddle Management and Communication",
          objective:
            "Develop leadership and communication in the huddle, including calling plays and clarifying assignments.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Quick passing games that require calling names and giving simple verbal cues before each throw.",
              ],
            },
            {
              description: "Huddle Structure",
              details: [
                "Model an efficient huddle: entering, listening to the play, confirming roles, and breaking with energy.",
                "Students practise running short huddles as play-callers, using clear and respectful communication.",
              ],
            },
            {
              description: "Leadership in Small-Sided Games",
              details: [
                "4v4 games where different students rotate as captain/play-caller, responsible for tempo and clarity.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Reflection on leadership: what worked, what was challenging, and how to support teammates.",
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
          title: "Game Strategy and Adjustments",
          objective:
            "Apply offensive and defensive strategies in game play while making simple in-game adjustments.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Review of key skills (throwing, catching, flag pulling) through short competitive drills.",
              ],
            },
            {
              description: "Game Strategy Focus",
              details: [
                "Short drives where teams plan a series of plays in advance and then review what worked after each drive.",
                "Encourage adjustments such as changing routes, using different personnel, or altering defensive alignment.",
              ],
            },
            {
              description: "Scenario-Based Games",
              details: [
                "Set up scenarios (e.g., third down in a no-run zone, defending a one-play drive) to practise decision-making under pressure.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Team stretch and discussion on how strategy and communication affected game outcomes.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Culminating Games and Performance Review",
          objective:
            "Demonstrate advanced flag football skills and strategies in full games and reflect on individual and team performance.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Student-selected warm-up, ensuring they include mobility and ball-handling components.",
              ],
            },
            {
              description: "Culminating Games",
              details: [
                "Full-field small-sided games with emphasis on correct rules application, strategic play-calling, and team defence.",
              ],
            },
            {
              description: "Performance Reflection",
              details: [
                "Students complete a structured self-assessment and set future goals related to skills, tactics, and character.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Whole-group cool-down, recognising examples of resiliency, respect, and integrity shown throughout the unit.",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default flagFootballSixthSeventh;
