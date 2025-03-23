import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";
import { IUnits } from "../../interfaces/IUnits";

const basketballFourth: IUnits = {
  unitTitle: "Basketball Fundamentals",
  unitDBTitle: "Basketball",
  title: "Basketball Fundamentals: Building Skills and Teamwork",
  gradeLevel: GradeLevel.Fourth,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will develop fundamental basketball skills, including dribbling, passing, shooting, and defensive movements. They will also engage in teamwork-focused activities, learning to collaborate effectively in both offensive and defensive situations. Practical drills will dominate the sessions, with minimal theoretical components.",
  essentialQuestions: [
    "What are the fundamental skills needed to play basketball effectively?",
    "How does teamwork contribute to success on the basketball court?",
    "How can we improve our dribbling, passing, and shooting techniques through practice?",
    "What is the importance of defense in basketball, and how can we work together to defend as a team?",
    "Why is it important to stay active and fit through sports like basketball?",
  ],
  skills: [
    "Dribbling with control using both hands.",
    "Passing techniques: chest pass, bounce pass, overhead pass.",
    "Shooting technique: lay-ups, jump shots, set shots.",
    "Defensive stance and movements.",
    "Teamwork and basic offensive strategies.",
    "Introduction to basketball game rules.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Dribbling and Passing",
          objective: "Learn basic dribbling and passing techniques.",
          activities: [
            {
              description: "Warm-up",
              details: ["Simple dynamic stretches and a light jog."],
            },
            {
              description: "Dribbling Drills",
              details: [
                "Stationary dribbling with both hands.",
                "Dribbling while walking and running (focus on ball control).",
                "Dribbling around cones (focus on changing direction).",
              ],
            },
            {
              description: "Passing Drills",
              details: [
                "Chest pass and bounce pass to a partner.",
                "Passing while moving.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Stretching and reflection on key points."],
            },
          ],
          videoUrl: [
            "https://www.youtube.com/watch?v=t3mFhlJtYkM",
            "https://www.youtube.com/watch?v=t3mFhlJtYkM",
          ],
        },
        {
          sessionNumber: 2,
          title: "Dribbling and Passing in Motion",
          objective:
            "Improve dribbling and passing skills while moving on the court.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging with a basketball."],
            },
            {
              description: "Dribbling Drills",
              details: [
                "Dribble and sprint: dribbling from one side of the court to the other.",
                "Dribble and pass: dribble up to a partner, stop, and pass.",
              ],
            },
            {
              description: "Passing Drills",
              details: ["Moving chest and bounce passes while jogging."],
            },
            {
              description: "Cool-down",
              details: ["Partner stretching and review of skills."],
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
          title: "Shooting Fundamentals – Lay-ups and Set Shots",
          objective: "Learn and practice basic shooting techniques.",
          activities: [
            {
              description: "Warm-up",
              details: ["Free dribbling followed by ball-control exercises."],
            },
            {
              description: "Shooting Practice",
              details: [
                "Introduction to lay-ups (focus on footwork and finishing).",
                "Stationary set shots: proper form and follow-through.",
              ],
            },
            {
              description: "Lay-up Drills",
              details: [
                "Lay-up lines (focus on rhythm and balance).",
                "One-on-one lay-up competition.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Stretching and breathing exercises."],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Shooting Techniques – Jump Shots",
          objective: "Introduce jump shots and improve shooting accuracy.",
          activities: [
            {
              description: "Warm-up",
              details: ["Free dribbling followed by ball-control exercises."],
            },
            {
              description: "Shooting Practice",
              details: [
                "Focus on jump shots: bending knees, extending arms, proper form.",
                "Shooting from different positions on the court.",
              ],
            },
            {
              description: "Shooting Drills",
              details: [
                "'Spot Shooting' from five different spots on the court.",
                "One-on-one shooting drills with partners.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Light stretching and team discussion."],
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
          title: "Defensive Movements and Footwork",
          objective: "Learn basic defensive stance and footwork.",
          activities: [
            {
              description: "Warm-up",
              details: ["Defensive footwork exercises."],
            },
            {
              description: "Defense Drills",
              details: [
                "'Mirror Drill' (students mimic teacher’s movements).",
                "Defensive sliding drills (side-to-side movement).",
                "One-on-one defensive practice (without the ball).",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Group stretching and reflection on defensive importance.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Defense with Ball Handling and Passing Under Pressure",
          objective:
            "Practice defensive pressure and maintain ball control under pressure.",
          activities: [
            {
              description: "Warm-up",
              details: ["Ball-handling and defensive stance exercises."],
            },
            {
              description: "Defensive Pressure Drills",
              details: [
                "Two-on-one defensive drills: applying pressure while passing.",
                "Dribble under pressure: defenders apply pressure while offensive players dribble and pass.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light stretches and reflection on the challenges of defense.",
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
          title: "Combining Dribbling, Passing, and Shooting",
          objective:
            "Integrate dribbling, passing, and shooting into one continuous drill.",
          activities: [
            {
              description: "Warm-up",
              details: ["Quick passing and dribbling exercises."],
            },
            {
              description: "Combination Drills",
              details: [
                "Dribble, pass, and shoot (working in teams of 3).",
                "'Fast Break Drill': Dribbling down the court and passing to teammates for a lay-up.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Team review and stretching."],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Introduction to 3v3 and Teamwork",
          objective:
            "Learn basic offensive and defensive teamwork in a 3v3 setup.",
          activities: [
            {
              description: "Warm-up",
              details: ["Partner passing and shooting drills."],
            },
            {
              description: "3v3 Play",
              details: [
                "Focus on passing, spacing, and communication.",
                "Rotating teams to ensure all students participate.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Partner stretches and team feedback session."],
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
          title: "Scrimmage Practice",
          objective:
            "Practice playing basketball with an emphasis on teamwork and applying learned skills.",
          activities: [
            {
              description: "Warm-up",
              details: ["Quick drills on passing, shooting, and defense."],
            },
            {
              description: "Scrimmage",
              details: [
                "3v3 or 4v4 games (depending on class size), focusing on teamwork.",
                "Teacher provides feedback during games to correct form and tactics.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Group stretches and final reflection."],
            },
          ],
        },
        {
          sessionNumber: 10,
          title: "Game Play and Assessment",
          objective: "Assess students’ skills in a real game situation.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light stretching and shooting drills."],
            },
            {
              description: "Final Game",
              details: [
                "Full-court scrimmage (if space allows) or half-court 3v3/4v4 games.",
                "Focus on applying skills learned throughout the unit.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Team stretches and group reflection on progress."],
            },
          ],
        },
      ],
    },
  ],
  assessment: [
    {
      skill: "Dribbling Control",
      level1: "Lacks control and often loses the ball.",
      level2: "Sometimes controls the ball but lacks consistency.",
      level3: "Controls the ball effectively most of the time.",
      level4:
        "Exhibits excellent ball control and can dribble with both hands.",
    },
    {
      skill: "Passing Accuracy",
      level1: "Inaccurate passes, often missing the target.",
      level2: "Occasionally accurate but inconsistent.",
      level3: "Accurate passing with good timing.",
      level4: "Consistently accurate and precise in passing under pressure.",
    },
    {
      skill: "Shooting Form and Accuracy",
      level1: "Incorrect form and frequent misses.",
      level2: "Sometimes uses correct form but lacks consistency.",
      level3: "Generally uses correct form and hits the target often.",
      level4: "Consistently uses excellent form and shoots with accuracy.",
    },
    {
      skill: "Defensive Skills",
      level1: "Poor stance and slow movements.",
      level2: "Occasionally uses proper stance but lacks consistency.",
      level3: "Generally uses correct stance and moves well.",
      level4:
        "Consistently displays good stance and quick defensive movements.",
    },
    {
      skill: "Teamwork",
      level1: "Struggles to collaborate with teammates.",
      level2: "Occasionally works with the team but needs improvement.",
      level3: "Frequently collaborates and supports teammates.",
      level4: "Consistently shows strong teamwork and communication.",
    },
  ],
};

export default basketballFourth;
