import { IUnits } from "@/interfaces/units/IUnit";
import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";

const SwimmingUnitSecondGrade: IUnits = {
  unitTitle: "Swimming",
  unitDBTitle: "Swimming",
  title: "Swimming for 2nd Grade (Ages 7-8, Beginners)",
  gradeLevel: GradeLevel.Second,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept:
    "Developing foundational swimming skills and water safety awareness.",
  overallExpectation:
    "Students will learn basic swimming techniques, build confidence in the water, and understand the importance of water safety.",
  essentialQuestions: [
    "Why is it important to feel confident and safe in the water?",
    "What are the basic skills required to swim effectively?",
    "How can we ensure safety while swimming or playing in the water?",
  ],
  skills: [
    "Blowing bubbles and submerging face",
    "Floating on front and back",
    "Kicking with a kickboard",
    "Basic arm movements for front crawl",
    "Jumping into shallow water safely",
  ],
  weeklyPlan: [
    {
      week: 1,
      focus: "Introduction to water safety and basic water confidence.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Water Safety Basics",
          objective:
            "Understand pool rules and practice entering and exiting the pool safely.",
          activities: [
            {
              description: "Introduction to pool safety rules.",
              details: [
                "Discuss rules such as no running and listening to the lifeguard.",
              ],
            },
            {
              description: "Practice entering and exiting the pool safely.",
              details: [
                "Use the steps and ladder to get in and out of the water.",
              ],
            },
            {
              description: "Blowing bubbles activity.",
              details: [
                "Students practice blowing bubbles in the water to get comfortable.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Building Water Confidence",
          objective: "Learn to submerge face and float with support.",
          activities: [
            {
              description: "Face submersion practice.",
              details: [
                "Students practice dipping their faces in the water while holding the pool edge.",
              ],
            },
            {
              description: "Front and back floating with support.",
              details: ["Instructors assist students in floating positions."],
            },
          ],
        },
      ],
    },
    {
      week: 2,
      focus: "Floating and kicking techniques.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Mastering the Float",
          objective: "Improve floating skills and build endurance.",
          activities: [
            {
              description: "Front and back floating practice.",
              details: [
                "Students practice floating independently with minimal assistance.",
              ],
            },
            {
              description: "Games to encourage floating confidence.",
              details: [
                "Instructors use floating toys to make practice engaging.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Kick It Up!",
          objective: "Learn basic kicking techniques with a kickboard.",
          activities: [
            {
              description: "Kicking with kickboards.",
              details: [
                "Practice straight-leg kicking across short distances.",
              ],
            },
            {
              description: "Relay races with kickboards.",
              details: [
                "Students participate in friendly races to practice kicking.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 3,
      focus: "Introduction to arm movements and combining with kicks.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Arm Movement Basics",
          objective:
            "Understand and practice basic arm movements for front crawl.",
          activities: [
            {
              description: "Dryland demonstration of arm movements.",
              details: [
                "Instructor demonstrates arm strokes out of the water.",
              ],
            },
            {
              description: "Arm movements in water.",
              details: [
                "Practice arm strokes while standing in shallow water.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Putting It Together",
          objective: "Combine kicking and arm movements in shallow water.",
          activities: [
            {
              description: "Kicking and arm movements with support.",
              details: [
                "Students use kickboards while practicing arm strokes.",
              ],
            },
            {
              description: "Short-distance swim practice.",
              details: [
                "Combine skills over short distances with instructor guidance.",
              ],
            },
          ],
        },
      ],
    },
    {
      week: 4,
      focus: "Building confidence and skill application.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Confident Swimming",
          objective: "Enhance skill confidence through practice.",
          activities: [
            {
              description: "Swimming with minimal support.",
              details: [
                "Practice swimming skills with reduced instructor assistance.",
              ],
            },
            {
              description: "Games to apply skills.",
              details: [
                "Instructors organize water games that use learned skills.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Skill Showcase",
          objective: "Demonstrate learned skills in a fun environment.",
          activities: [
            {
              description: "Skill demonstration.",
              details: ["Students perform their best skills for peers."],
            },
            {
              description: "Water games and free swim time.",
              details: ["Celebrate progress with supervised free swim."],
            },
          ],
        },
      ],
    },
  ],
  assessment: [
    {
      skill: "Floating",
      level1: "Needs assistance to float.",
      level2: "Floats with minimal assistance.",
      level3: "Floats independently for a few seconds.",
      level4: "Floats independently with confidence.",
    },
    {
      skill: "Kicking",
      level1: "Needs assistance to kick effectively.",
      level2: "Kicks with some coordination.",
      level3: "Kicks effectively with a kickboard.",
      level4: "Kicks effectively without assistance.",
    },
    {
      skill: "Arm Movements",
      level1: "Needs assistance to perform arm movements.",
      level2: "Performs arm movements with some coordination.",
      level3: "Performs arm movements effectively in shallow water.",
      level4: "Combines arm movements with kicking effectively.",
    },
  ],
  equipmentNeeded: [
    "Kickboards",
    "Floating toys",
    "Pool ladder or steps",
    "Goggles",
  ],
  safetyConsiderations: [
    "Ensure constant supervision by certified lifeguards.",
    "Check pool depth before activities.",
    "Enforce strict adherence to pool rules.",
    "Provide flotation devices for beginners.",
  ],
  reflectionAndSummativeFeedback:
    "Students showed significant improvement in water confidence and basic swimming skills. Continued practice and encouragement will further develop their abilities.",
};

export default SwimmingUnitSecondGrade;
