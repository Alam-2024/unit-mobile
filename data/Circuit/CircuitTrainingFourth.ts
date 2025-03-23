import { IUnits } from "@/interfaces/units/IUnit";
import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";

const circuitTrainingFourth: IUnits = {
  unitTitle: "Circuit Training",
  unitDBTitle: "CircuitTraining",
  title: "Exploring Strength and Stamina: A Journey Through Circuit Training",
  gradeLevel: GradeLevel.Fourth,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will explore circuit training exercises that strengthen the upper body, lower body, and core muscles. They will gain a basic understanding of aerobic and anaerobic exercises and the importance of varying exercises to promote overall health and fitness.",
  essentialQuestions: [
    "How do different exercises in circuit training strengthen the upper body, lower body, and core muscles?",
    "What are aerobic and anaerobic exercises, and how do they affect our bodies differently?",
    "Why is it important to engage in a variety of exercises through circuit training, and what benefits do they offer for our health and fitness?",
  ],
  skills: [
    "Understanding and performing exercises that target the upper body, lower body, and core.",
    "Differentiating between aerobic (endurance) and anaerobic (strength-focused) exercises.",
    "Improving stamina, strength, and coordination through diverse physical activities.",
    "Following instructions, maintaining focus, and developing personal responsibility in completing circuit stations.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title:
            "Session 1: Understanding Circuit Training and Exploring Upper Body Strength",
          objective:
            "Introduce the concept of circuit training and focus on upper body exercises.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging", "arm circles", "stretching"],
            },
            {
              description: "Circuit Stations",
              details: ["Upper Body", "Lower Body", "Core", "Aerobic"],
            },
            {
              description: "Cool-down",
              details: [
                "Gentle stretches",
                "discussion on how the body feels after the exercises",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title:
            "Session 2: Improving Upper Body Strength Through Circuit Training",
          objective:
            "Continue practicing upper body exercises while building endurance.",
          activities: [
            {
              description: "Warm-up",
              details: ["Light jogging", "arm circles", "stretching"],
            },
            {
              description: "Circuit Stations",
              details: [
                "Upper Body",
                "Lower Body",
                "Core",
                "Aerobic",
                "Varying Exercises",
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

export default circuitTrainingFourth;
