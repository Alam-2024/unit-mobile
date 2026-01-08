import {
  GradeLevel,
  LengthInWeeks,
  Assessment,
} from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const cooperativeGamesSeventh: IUnits = {
  unitTitle: "Cooperative Games 7",
  unitDBTitle: "Cooperative Games 7",
  title:
    "Strengthening Teamwork, Communication, and Problem-Solving through Cooperative Games",
  gradeLevel: `${GradeLevel.Seventh}`,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will engage in cooperative games that require planning, communication, and shared responsibility. They will practise resolving simple conflicts, supporting teammates, and demonstrating responsibility, respect, resiliency, and integrity throughout the unit.",
  essentialQuestions: [
    "How can planning together before a game help a team succeed?",
    "What skills are needed to solve problems as a group during physical challenges?",
    "How can we handle disagreements in a respectful way during games?",
    "What can each person do to make sure everyone feels part of the team?",
    "How do responsibility, respect, resiliency, and integrity appear in cooperative activities?",
  ],
  skills: [
    "Plan and agree on simple strategies before starting cooperative tasks.",
    "Use clear communication and active listening to solve problems as a group.",
    "Recognise and manage simple conflicts or disagreements during games.",
    "Encourage and support teammates, especially when mistakes occur.",
    "Reflect on personal contributions and set goals to improve teamwork.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Unit Introduction and Team Norms",
          objective:
            "Introduce the unit focus, establish team norms, and begin practising basic cooperation skills.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Movement-based icebreakers where students work in pairs and small groups, changing partners regularly.",
              ],
            },
            {
              description: "Team Norms",
              details: [
                "Short discussion and small-group work to agree on team norms (e.g., listening, fair turn-taking, encouraging others).",
                "Connect norms to responsibility and respect in competitive and cooperative contexts.",
              ],
            },
            {
              description: "Introductory Cooperative Games",
              details: [
                "Simple group challenges focused on staying together, moving safely, and following agreed rules.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch in a circle; each student shares one team norm they think is most important and why.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Communication and Simple Strategy",
          objective:
            "Develop clear communication and basic strategy planning for cooperative tasks.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Follow-the-leader and call-and-response games that require students to react to verbal and visual signals.",
              ],
            },
            {
              description: "Planning Before Playing",
              details: [
                "Groups receive a simple challenge and take a short planning time to decide roles, order, or routes.",
                "Students practise explaining their ideas and listening to others before deciding together.",
              ],
            },
            {
              description: "Strategy in Action",
              details: [
                "Teams complete the challenges, pause to review what worked, and adjust their plan for a second attempt.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light stretching; students share one strategy or communication tip that helped their group.",
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
          title: "Trust, Roles, and Responsibility",
          objective:
            "Build trust and clarify roles so that all students take responsibility for group success.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Partner mirror and follow activities that require attention and control.",
              ],
            },
            {
              description: "Role-Based Challenges",
              details: [
                "Group tasks where each student has a specific role (e.g., leader, timekeeper, equipment manager, motivator).",
                "Groups rotate roles so students experience different responsibilities.",
              ],
            },
            {
              description: "Trust and Feedback",
              details: [
                "Short activities where students must trust each other to complete tasks safely, followed by quick feedback on what made them feel trusted.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch; students reflect on which role they found easiest or hardest and why.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Handling Disagreements",
          objective:
            "Practise handling disagreements and managing emotions during cooperative challenges.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Quick cooperative games where decisions must be made fast, leading to natural small disagreements.",
              ],
            },
            {
              description: "Conflict Scenarios",
              details: [
                "Groups discuss common conflict situations (e.g., not agreeing on a plan, someone speaking over others) and practise simple respectful responses.",
                "Introduce sentence starters for giving feedback and disagreeing politely.",
              ],
            },
            {
              description: "Challenges with Reflection Breaks",
              details: [
                "Teams complete tasks with short breaks to talk about any disagreements and how they solved them.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Guided breathing and stretching; students identify one strategy they will use next time they feel annoyed during a game.",
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
          title: "Multi-Step Cooperative Challenges",
          objective:
            "Apply planning, communication, and role allocation to multi-step cooperative challenges.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Group movement patterns and quick coordination games (e.g., changing directions or formations on a signal).",
              ],
            },
            {
              description: "Multi-Step Tasks",
              details: [
                "Challenges that require teams to complete several stages in order (e.g., collecting, sorting, and placing objects in a target area).",
                "Teams plan and adjust roles between attempts to improve efficiency and cooperation.",
              ],
            },
            {
              description: "Team Reflection",
              details: [
                "Groups discuss what decisions and behaviours helped them complete the tasks more successfully.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch; each student shares one example of effective teamwork from their group.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Inclusion and Shared Leadership",
          objective:
            "Promote inclusion and shared leadership by designing cooperative tasks that consider all group members.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Student-led warm-up in small groups, rotating leaders and ensuring all suggest one movement.",
              ],
            },
            {
              description: "Designing Inclusive Challenges",
              details: [
                "Teams design or adapt a cooperative game that uses simple rules and roles to include classmates with different abilities and confidence levels.",
                "Students consider how to adapt space, equipment, or rules to make participation fair.",
              ],
            },
            {
              description: "Peer Feedback",
              details: [
                "Groups try each other’s games and give short feedback on clarity, safety, and inclusion.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Whole-group cool-down; students share one way leaders can help others feel valued and involved.",
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
          title: "Planning the Cooperative Challenge Event",
          objective:
            "Plan a cooperative challenge event that highlights teamwork, inclusion, and the NFL values.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Short, familiar cooperative warm-up games chosen by the students.",
              ],
            },
            {
              description: "Event Design",
              details: [
                "Teams finalise a cooperative challenge station for the culminating event, including rules, roles, safety instructions, and time limits.",
                "Students identify how their station encourages responsibility, respect, resiliency, and integrity.",
              ],
            },
            {
              description: "Testing and Adjusting",
              details: [
                "Groups test stations with peers and adjust instructions or layout based on feedback.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch; review expectations for behaviour and teamwork during the event.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Cooperative Challenge Event",
          objective:
            "Demonstrate teamwork, communication, inclusion, and character at student-led cooperative stations.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Student-led whole-group warm-up including at least one cooperative activity.",
              ],
            },
            {
              description: "Rotating Stations",
              details: [
                "Students rotate through the cooperative stations designed by different teams, focusing on applying teamwork and respectful behaviours.",
              ],
            },
            {
              description: "Recognition and Reflection",
              details: [
                "Recognise students and groups that demonstrated strong teamwork, problem-solving, and the NFL values.",
                "Students complete a short reflection on their strengths and goals for future cooperative work.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Whole-group cool-down and closure to the unit."],
            },
          ],
        },
      ],
    },
  ],
  assessment: [
    {
      type: "Formative",
      description:
        "Teacher observation checklists focusing on planning, communication, and inclusion during cooperative activities.",
    },
    {
      type: "Formative",
      description:
        "Peer- and self-assessment using simple reflection prompts about contribution to group tasks and handling disagreements.",
    },
    {
      type: "Summative",
      description:
        "End-of-unit rubric rating students on teamwork, problem-solving, conflict management, and demonstration of responsibility, respect, resiliency, and integrity during the cooperative challenge event.",
    },
  ],
  learningExperiences: [
    "Establishing and practising team norms in small-group and whole-class settings.",
    "Planning and carrying out cooperative tasks that require shared decision-making.",
    "Practising simple conflict-management and feedback strategies.",
    "Designing and leading inclusive cooperative games for classmates.",
    "Reflecting on personal strengths and areas for growth in teamwork.",
  ],
  equipmentNeeded: [
    "Cones or markers to create stations and safe playing zones.",
    "Soft balls, beanbags, and similar small equipment for transport and relay tasks.",
    "Hoops, ropes, spots, or poly-dots for group movement and linking activities.",
    "Clipboards or reflection sheets for peer- and self-assessment.",
    "Whiteboard or poster paper and markers for planning and sharing team norms and strategies.",
  ],
  differentiation: {
    beginners:
      "Provide clear demonstrations, visual cues, and shorter, simpler tasks. Offer sentence starters and prompts for students who find communication challenging.",
    advanced:
      "Increase task complexity (e.g., more steps, mild time limits) and invite advanced students to lead planning conversations, facilitate reflection, or support younger classmates in mixed-age events.",
    inclusive:
      "Offer varied roles and flexible rules so students with different physical abilities or confidence levels can contribute. Adjust distances, equipment, and expectations to maintain success and safety for all.",
  },
  safetyConsiderations: [
    "Ensure adequate spacing between groups and clearly mark boundaries and stations.",
    "Use safe, age-appropriate equipment and regularly check for hazards on the floor.",
    "Teach safe movement (e.g., no pushing or pulling, awareness of others when changing direction).",
    "Reinforce stop signals and the importance of following safety instructions during student-led stations.",
  ],
  reflectionAndSummativeFeedback:
    "Students complete a brief reflection identifying their strongest teamwork skills and one area to improve. Using summative rubrics and observation notes from the cooperative challenge event, the teacher gives feedback that highlights positive behaviours and suggests specific next steps for future group work in PE and other subjects.",
};

export default cooperativeGamesSeventh;
