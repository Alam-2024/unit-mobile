import { GradeLevel, LengthInWeeks } from "../../interfaces/ICommon";
import { IUnits } from "../../interfaces/IUnits";

const circuitTrainingThird: IUnits = {
  unitTitle: "Circuit Training Unit Plan",
  unitDBTitle: "CircuitTraining",
  title: "Exploring Strength and Stamina: A Journey Through Circuit Training",
  gradeLevel: GradeLevel.Third,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation: `Students will explore circuit training exercises that strengthen the upper body, lower body, and core muscles. 
  They will gain a basic understanding of aerobic and anaerobic exercises and the importance of varying exercises to promote overall health and fitness.`,

  essentialQuestions: [
    "How do different exercises in circuit training strengthen the upper body, lower body, and core muscles?",
    "What are aerobic and anaerobic exercises, and how do they affect our bodies differently?",
    "Why is it important to engage in a variety of exercises through circuit training, and what benefits do they offer for our health and fitness?",
  ],
  skills: [
    "Understanding and performing exercises that target the upper body.",
    "Performing exercises that strengthen lower body muscles.",
    "Engaging core muscles for improved stability.",
    "Differentiating between aerobic (endurance) and anaerobic (strength-focused) exercises.",
    "Improving stamina, strength, and coordination through diverse physical activities.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title:
            "Understanding Circuit Training and Exploring Upper Body Strength",
          objective:
            "Introduce the concept of circuit training and focus on upper body exercises.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging", "arm circles", "stretching"],
            },
            {
              description:
                "Circuit Stations(Upper and lower body, Core and Aerobic)",
              details: [
                "Push-ups (modified)",
                "Plank hold",
                "Arm raises with light objects",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching",
                "reflection on how the exercises help strengthen arms and shoulders",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Improving Upper Body Strength Through Circuit Training",
          objective:
            "Continue practicing upper body exercises while building endurance.",
          activities: [
            {
              description: "Warm-up",
              details: ["Jumping jacks and arm swings."],
            },
            {
              description: "Circuit Stations",
              details: [
                "Repeat the exercises from Session 1 with a focus on maintaining form for longer periods.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching and reflection on how the exercises help strengthen arms and shoulders.",
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
          title: "Exploring Lower Body Strength Through Circuit Training",
          objective: "Focus on strengthening the lower body muscles.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging", "leg swings", "stretching"],
            },
            {
              description: "Circuit Stations",
              details: ["Squats", "Lunges", "Jumping on the spot"],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching legs and a discussion on how the exercises help strengthen leg muscles.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Combining Lower Body Strength and Aerobic Fitness",
          objective:
            "Introduce the difference between aerobic and anaerobic exercises",
          activities: [
            {
              description: "Warm-up",
              details: ["Jogging in place and dynamic leg stretches."],
            },
            {
              description: "Circuit Stations",
              details: [
                "Squats and Lunges (anaerobic)",
                "Jumping Jacks and Running on the Spot (aerobic)",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light stretches and a discussion on the difference between endurance and strength exercises.",
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
          title: "Focusing on Core Muscles Through Circuit Training",
          objective:
            "Strengthen core muscles and explain how they help with balance and stability.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Arm and leg stretches, followed by a brief explanation of core muscles.",
              ],
            },
            {
              description: "Circuit Stations",
              details: [
                "Sit-ups (core strength, anaerobic)",
                "Plank hold (core strength, anaerobic)",
                "Fast running on the spot (lower body, aerobic)",
                "Bicycle crunches (core strength, aerobic)",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching the abdomen and lower back, with a brief discussion on the importance of strong core muscles.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Strengthening Core Muscles and Practicing Anaerobic Exercise",
          objective:
            "Continue practicing core-focused exercises with a focus on anaerobic strength training.",
          activities: [
            {
              description: "Warm-up",
              details: ["Gentle running in place and stretching."],
            },
            {
              description: "Circuit Stations",
              details: [
                "Sit-ups (core strength, anaerobic)",
                "Plank hold (core strength, anaerobic)",
                "Fast running on the spot (lower body, aerobic)",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light stretches, followed by a reflection on how anaerobic exercises build strength.",
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
          title: "Combining Upper Body, Lower Body, and Core Exercises",
          objective:
            "Perform a full-body circuit combining exercises learned in previous sessions.",
          activities: [
            {
              description: "Warm-up",
              details: ["Group stretching and a short jog."],
            },
            {
              description: "Circuit Stations",
              details: [
                "Push-ups (upper body)",
                "Squats (lower body)",
                "Plank hold (core)",
                "Jumping jacks (aerobic)",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching and reflection on how the different exercises target various muscle groups.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Final Circuit Challenge and Reflection on Circuit Training",
          objective:
            "Review all learned exercises and perform a final circuit challenge.",
          activities: [
            {
              description: "Warm-up",
              details: ["Gentle dynamic stretches and light jogging."],
            },
            {
              description: "Circuit Stations",
              details: [
                "A mix of upper body, lower body, core, and aerobic exercises.",
                "Timed stations to see how long students can maintain good form.",
                "Plank hold (core)",
                "Jumping jacks (aerobic)",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Final group stretches and a reflection on the entire circuit training unit.",
              ],
            },
          ],
        },
      ],
    },
  ],
  assessment: {
    participation:
      "Students actively engage in circuit stations and demonstrate an understanding of exercises.",
    technique:
      "Students show progress in their ability to perform exercises correctly, with attention to form.",
    reflection:
      "Students can identify how they feel after exercising and can explain the benefits of upper body, lower body, and core exercises.",
  },
};

export default circuitTrainingThird;
