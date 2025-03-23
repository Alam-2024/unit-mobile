import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const rollerSkatingFourth: IUnits = {
  unitTitle: "Roller Skating",
  unitDBTitle: "RollerSkating",
  title: "Roller Skating",
  gradeLevel: GradeLevel.Fourth,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept:
    "Balance, Control, and Confidence: Mastering the Basics of Roller Skating.",
  overallExpectation:
    "This unit focuses on introducing students to the fundamentals of roller skating. Students will learn essential techniques like balancing, starting, stopping, turning, and moving safely on skates.",
  essentialQuestions: [
    "What key skills and techniques are necessary to safely and effectively roller skate?",
    "How do balance and coordination help us improve our skating ability?",
    "What strategies can we use to safely start, stop, and change direction while roller skating?",
    "Why is it important to practice safety when learning new skills in roller skating?",
    "How can we gain confidence and improve our fitness through roller skating?",
  ],
  skills: [
    "Balance and Posture",
    "Starting and Stopping",
    "Turning and Maneuvering",
    "Coordination and Rhythm",
    "Skating Safety",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Getting Started with Roller Skating",
          objective:
            "Learn the basics of roller skating, including balance, starting, and stopping.",
          activities: [
            {
              description: "Warm up",
              details: ["Off-skate balance drills and stretching."],
            },
            {
              description: "Skill Focus",
              details: [
                "Basic stance (feet shoulder-width apart, knees bent), balancing, and standing still on skates.",
              ],
            },
            {
              description: "Practice",
              details: [
                "Students practice standing and rolling slowly while maintaining balance.",
              ],
            },
            {
              description: "Reflection",
              details: ["How does balance help us stay steady on skates?"],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Moving Forward and Stopping",
          objective:
            "Learn techniques for moving forward and stopping safely on skates.",
          activities: [
            {
              description: "Warm up",
              details: ["Light jogging and leg stretches."],
            },
            {
              description: "Skill Focus",
              details: [
                "Techniques for starting to move (push off with one foot) and stopping (using a heel brake or T-stop).",
              ],
            },
            {
              description: "Practice",
              details: [
                "Students skate short distances, practicing starting and stopping safely.",
              ],
            },
            {
              description: "Reflection",
              details: [
                "What makes it easier to start moving on skates, and how can we stop without falling?",
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
          title: "Turning and Changing Directions",
          objective:
            "Learn basic turning techniques and maneuvering on skates.",
          activities: [
            {
              description: "Warm up",
              details: [
                "On-skate balance drills (shifting weight from side to side).",
              ],
            },
            {
              description: "Skill Focus",
              details: [
                "Introduction to basic turning techniques (leaning and pivoting, crossovers).",
              ],
            },
            {
              description: "Practice",
              details: [
                "Students practice turning and changing direction while skating around cones or markers.",
              ],
            },
            {
              description: "Reflection",
              details: ["What helps us turn smoothly without losing control?"],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Skating Safety and Falling Techniques",
          objective:
            "Learn how to fall safely (bending knees, using wrist guards) and the importance of protective gear.",
          activities: [
            {
              description: "Warm up",
              details: ["Off-skate stretching and coordination drills."],
            },
            {
              description: "Skill Focus",
              details: [
                "Learning how to fall safely (bending knees, using wrist guards) and the importance of protective gear.",
              ],
            },
            {
              description: "Practice",
              details: [
                "Skating slowly and practicing safe falling techniques in a controlled environment.",
              ],
            },
            {
              description: "Reflection",
              details: [
                "Why is it important to know how to fall safely in roller skating?",
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
          title: "Skating with Rhythm and Control",
          objective: "Learn how to skate in a rhythm and maintain control.",
          activities: [
            {
              description: "Warm up",
              details: ["On-skate leg and balance drills."],
            },
            {
              description: "Skill Focus",
              details: [
                "Developing fluid movement and rhythm while skating (push-and-glide technique).",
              ],
            },
            {
              description: "Practice",
              details: [
                "Skating in a rhythm, maintaining a smooth glide between pushes.",
              ],
            },
            {
              description: "Reflection",
              details: ["How can keeping a rhythm make our skating smoother?"],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Skating in Pairs or Small Groups",
          objective:
            "Learn how to skate with a partner or small group to promote awareness and control.",
          activities: [
            {
              description: "Warm up",
              details: ["Light jogging and off-skate stretches."],
            },
            {
              description: "Skill Focus",
              details: [
                "Practicing skating with a partner or small group to promote awareness and control.",
              ],
            },
            {
              description: "Practice",
              details: [
                "Students skate in pairs or groups, maintaining safe distances and coordinating their movements.",
              ],
            },
            {
              description: "Reflection",
              details: [
                "What do we need to keep in mind when skating with others?",
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
          title: "Skating Skills Review and Mini Obstacle Course",
          objective:
            "Review our skating skills and practice a mini obstacle course.",
          activities: [
            {
              description: "Warm up",
              details: ["Dynamic stretches and slow skating."],
            },
            {
              description: "Skill Focus",
              details: ["Recap of starting, stopping, turning, and balance."],
            },
            {
              description: "Practice",
              details: [
                "Students complete a mini obstacle course, incorporating turning, stopping, and skating with control.",
              ],
            },
            {
              description: "Reflection",
              details: [
                "How have our skating skills improved over the past few weeks?",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Roller Skating Skills Showcase",
          objective:
            "Showcase our skills in a fun and friendly showcase event.",
          activities: [
            {
              description: "Warm up",
              details: ["Skating laps to loosen up."],
            },
            {
              description: "Skill Focus",
              details: [
                "Students demonstrate their skills in a fun and friendly showcase event.",
              ],
            },
            {
              description: "Practice",
              details: [
                "A skating showcase where students perform their best moves and compete in friendly games, such as relay races or skating around cones.",
              ],
            },
            {
              description: "Reflection",
              details: [
                "What skating skills have we mastered, and what can we keep practicing to improve?",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default rollerSkatingFourth;
