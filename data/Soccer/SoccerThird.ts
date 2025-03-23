import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const soccerThird: IUnits = {
  unitTitle: "Soccer",
  unitDBTitle: "Soccer",
  title: "Soccer",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will develop basic soccer skills, such as ball control, passing, dribbling, and shooting, while practicing teamwork and understanding the rules of the game.",
  essentialQuestions: [
    "How can I better control the ball while running?",
    "What is the best way to pass the ball to a teammate?",
    "How should I move my body when I want to shoot the ball toward the goal?",
    "Why is it important to work as a team during a soccer game?",
  ],
  skills: [
    "Ball control",
    "Accurate passing",
    "Dribbling the ball",
    "Shooting toward the goal",
    "Teamwork and understanding of game rules",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Soccer and Ball Control",
          objective:
            "Introduce the basic rules of soccer and teach ball control.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging and dynamic stretches."],
            },
            {
              description: "Explanation of rules",
              details: ["Brief introduction to the basic rules of soccer."],
            },
            {
              description: "Ball control",
              details: [
                "Walk with the ball at different speeds, dribble around cones, ball control challenge.",
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
          title: "Ball Control and First Passes",
          objective: "Improve ball control and begin practicing short passes.",
          activities: [
            {
              description: "Warm-up",
              details: ["Free dribbling and light jogging."],
            },
            {
              description: "Ball control drills",
              details: [
                "Zigzag dribbling through cones, ball control using different parts of the foot (inside, outside, sole).",
              ],
            },
            {
              description: "Introduction to passing",
              details: ["Passing in pairs."],
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
          title: "Passing and Team Collaboration",
          objective:
            "Improve the accuracy of passes and understanding of teamwork.",
          activities: [
            {
              description: "Warm-up",
              details: ["Passing while moving across the field."],
            },
            {
              description: "Passing practice",
              details: [
                "Pair passing, precision drill, passing in teams of three.",
              ],
            },
            {
              description: "Circle Passing Game",
              details: [
                "Students form a circle and pass the ball inside the circle.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Passing and Dribbling in Teams",
          objective:
            "Continue improving passing skills and begin practicing dribbling in game situations.",
          activities: [
            {
              description: "Warm-up",
              details: ["Dribbling with short passes to teammates."],
            },
            {
              description: "Passing drills",
              details: [
                "Passing in groups of three, passing and ball control in a limited area.",
              ],
            },
            {
              description: "Team game",
              details: [
                "Shark - One student tries to steal the ball while others dribble.",
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
          title: "Dribbling and Control on the Move",
          objective:
            "Improve the ability to dribble while moving across the field.",
          activities: [
            {
              description: "Warm-up",
              details: ["Fast dribbling and coordination exercises."],
            },
            {
              description: "Dribbling drills",
              details: [
                "Dribbling between cones at different speeds, dribbling competition.",
              ],
            },
            {
              description: "Team game",
              details: [
                "1v1 Dribbling - One student dribbles while the other tries to stop them.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Introduction to Shooting",
          objective: "Introduce and practice shooting technique.",
          activities: [
            {
              description: "Warm-up",
              details: ["Long and short passing between teammates."],
            },
            {
              description: "Shooting technique",
              details: [
                "Explanation of shooting technique (foot position, contact with the ball).",
              ],
            },
            {
              description: "Shooting practice",
              details: ["Shooting from different distances."],
            },
            {
              description: "Shooting challenge",
              details: ["How many goals can you score in 5 attempts?"],
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
          title: "Applying Skills in a Game",
          objective: "Apply the skills learned in a team game.",
          activities: [
            {
              description: "Warm-up",
              details: ["Free dribbling and short passes."],
            },
            {
              description: "Team game",
              details: [
                "Divide students into small teams and play short matches.",
              ],
            },
            {
              description: "Reflection",
              details: [
                "Discuss with students how they applied the skills they learned.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Assessment and Game",
          objective: "Assess students' progress and play a final game.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Quick drills for ball control, passing, and shooting.",
              ],
            },
            {
              description: "Assessment stations",
              details: [
                "Ball control, passing, dribbling through cones, shooting toward the goal.",
              ],
            },
            {
              description: "Final game",
              details: ["Play a 5v5 or 6v6 match."],
            },
          ],
        },
      ],
    },
  ],
};

export default soccerThird;
