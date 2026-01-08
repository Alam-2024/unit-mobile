import {
  GradeLevel,
  LengthInWeeks,
  Assessment,
} from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const cooperativeGamesThreeToFive: IUnits = {
  unitTitle: "Cooperative Games 3–5",
  unitDBTitle: "Cooperative Games 3–5",
  title: "Playing Together: Cooperation, Communication, and Inclusion",
  gradeLevel: `${GradeLevel.Third} - ${GradeLevel.Fifth}`,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will participate in developmentally appropriate cooperative games that require sharing, turn-taking, basic problem-solving, and simple strategy. They will practice using kind communication, including all teammates, and demonstrating responsibility, respect, resiliency, and integrity during physical activities.",
  essentialQuestions: [
    "How does talking and listening help a team play better together?",
    "Why is it important that everyone gets a chance to participate in group games?",
    "What can we do when a game is hard or does not go as we planned?",
    "How can we solve simple problems together during cooperative activities?",
    "What do responsibility, respect, resiliency, and integrity look like in our PE games?",
  ],
  skills: [
    "Share space and equipment safely and fairly with classmates.",
    "Use simple communication (verbal and non-verbal) to cooperate with others.",
    "Follow agreed rules and group norms during activities.",
    "Show encouragement and support to teammates when they make mistakes.",
    "Help include all students in group games and decisions.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Getting Started with Cooperative Games",
          objective:
            "Introduce cooperative games, help students feel comfortable with each other, and create simple class agreements for working together.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Simple movement games (e.g., locomotor skills around the space) where students find a new partner on a signal for a quick high-five or greeting.",
              ],
            },
            {
              description: "Class Agreements",
              details: [
                "Short whole-class talk about what it means to work together (e.g., sharing, taking turns, listening).",
                "Create 3–5 simple agreements for the unit and connect them to responsibility and respect.",
              ],
            },
            {
              description: "Introductory Cooperative Games",
              details: [
                "Low-organisation games like moving together in a line or circle on teacher signals, focusing on staying together and being safe.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Light stretching in a circle; students share one way they can be a good teammate in PE.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Basic Communication and Turn-Taking",
          objective:
            "Practice basic communication, sharing, and turn-taking during simple cooperative activities.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Follow-the-leader games in small groups, rotating the leader every 30–45 seconds so everyone gets a turn.",
              ],
            },
            {
              description: "Sharing and Turn-Taking Games",
              details: [
                "Group tasks that require passing or moving objects around a circle or through a simple course, with clear turns for each student.",
                "Emphasize using kind words and listening when teammates speak.",
              ],
            },
            {
              description: "Quick Group Reflection",
              details: [
                "Students briefly discuss what helped them share and take turns fairly during the games.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching while each student names one helpful phrase (e.g., “Your turn”, “Can I try?”, “Nice job!”).",
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
          title: "Helping and Supporting Teammates",
          objective:
            "Develop helping behaviors and basic trust through partner and small-group cooperative challenges.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Partner mirror activities using slow movements to match each other’s actions safely.",
              ],
            },
            {
              description: "Helping Challenges",
              details: [
                "Activities where partners or small groups help each other complete simple tasks (e.g., balancing, staying connected, or moving together).",
                "Students practice encouraging language and checking in with partners about comfort and safety.",
              ],
            },
            {
              description: "Group Responsibility Tasks",
              details: [
                "Each student has a small job in the group (e.g., equipment helper, timekeeper, encourager), emphasizing that everyone’s role matters.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Group stretch and brief sharing of a time someone helped them during the lesson.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Trying Again: Resiliency in Games",
          objective:
            "Practice resiliency by staying positive and trying again during slightly more challenging cooperative games.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Short, simple relays or team tasks where small mistakes are common and seen as normal.",
              ],
            },
            {
              description: "Challenge Games",
              details: [
                "Teams complete slightly harder tasks (e.g., moving in a connected chain, transporting objects with limited body parts) that may require several attempts.",
                "Discuss words and actions that help the group stay positive when they do not succeed immediately.",
              ],
            },
            {
              description: "Mini-Reflection",
              details: [
                "Students identify one moment when they or their team kept trying and did not give up.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Guided breathing and stretching to calm down after active play.",
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
          title: "Working as a Team",
          objective:
            "Strengthen teamwork skills by completing tasks where all members must participate and cooperate.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Group movement patterns (e.g., moving in shapes or formations together) that require staying aware of others.",
              ],
            },
            {
              description: "Team Challenges",
              details: [
                "Games where the group must move equipment, protect a small area, or complete a course together without leaving anyone behind.",
                "Students rotate roles so that everyone has chances to lead and follow.",
              ],
            },
            {
              description: "Team Check-in",
              details: [
                "Groups quickly discuss what they did well as a team and what they want to improve next time.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching while students share one teamwork behavior they noticed in their group.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Including Everyone in the Game",
          objective:
            "Encourage inclusion by adapting and playing simple cooperative games that allow all students to participate.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Student-led warm-up in small groups using simple movements that everyone can do comfortably.",
              ],
            },
            {
              description: "Adapting Games for Inclusion",
              details: [
                "Groups modify a familiar cooperative game (e.g., change rules, equipment, or space) to make it easier for all classmates to join in.",
                "Teacher prompts students to think about classmates with different strengths and needs.",
              ],
            },
            {
              description: "Sharing and Playing",
              details: [
                "Groups explain and play their adapted games with other classmates, focusing on including everyone.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Whole-class cool-down; students say one way they helped someone feel included.",
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
          title: "Planning a Cooperative Games Circuit",
          objective:
            "Plan simple cooperative stations that highlight sharing, teamwork, and the NFL values.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Students play one or two favorite cooperative warm-up games from earlier lessons.",
              ],
            },
            {
              description: "Station Design",
              details: [
                "In small groups, students design an easy cooperative station for the final lesson, including rules, roles, and basic safety guidelines.",
                "They connect their station to responsibility, respect, resiliency, or integrity.",
              ],
            },
            {
              description: "Practice and Adjust",
              details: [
                "Groups test their stations with another group, then adjust instructions or organisation for clarity and safety.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch and review expectations for cooperation and behavior in the final lesson.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Cooperative Games Circuit Day",
          objective:
            "Demonstrate cooperation, inclusion, and character while participating in student-designed stations.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Class warm-up with a short cooperative game led by students.",
              ],
            },
            {
              description: "Cooperative Stations",
              details: [
                "Students rotate through each group’s cooperative station, focusing on teamwork, fair play, and encouraging classmates.",
              ],
            },
            {
              description: "Recognition and Reflection",
              details: [
                "Recognize examples of strong teamwork, problem-solving, and the NFL values shown during the unit.",
                "Students share or write one thing they improved in and one goal for future group work.",
              ],
            },
            {
              description: "Cool-down",
              details: ["Whole-class cool-down and closure to the unit."],
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
        "Teacher observation checklists focusing on sharing, turn-taking, basic communication, and inclusion during cooperative games.",
    },
    {
      type: "Formative",
      description:
        "Quick student self-reflections using symbols or short phrases about how they listened, helped, and included others.",
    },
    {
      type: "Summative",
      description:
        "End-of-unit rubric assessing teamwork, communication, inclusion, and demonstration of responsibility, respect, resiliency, and integrity during the cooperative games circuit.",
    },
  ],
  learningExperiences: [
    "Joining in simple cooperative games to build comfort and trust with classmates.",
    "Solving age-appropriate group challenges that require talking, listening, and helping.",
    "Practising staying positive and trying again when tasks are difficult.",
    "Adapting and creating simple cooperative games that include everyone.",
    "Reflecting on teamwork behaviors and setting small personal goals.",
  ],
  equipmentNeeded: [
    "Cones or markers to define safe play areas and stations.",
    "Soft balls, beanbags, or similar objects for passing and relay challenges.",
    "Hoops, ropes, or floor spots for group movement and linking activities.",
    "Paper, pencils, or whiteboard space for class agreements and station planning.",
  ],
  differentiation: {
    beginners:
      "Use very clear demonstrations, simple rules, and shorter tasks. Offer sentence starters and visual supports for students who need help with communication or understanding instructions.",
    advanced:
      "Invite students who are ready to lead portions of warm-ups, explain games, or support classmates in planning and reflecting on cooperative tasks.",
    inclusive:
      "Provide varied roles and flexible expectations so students with different physical or social confidence levels can participate comfortably. Adjust space, equipment, and rules to reduce barriers and keep everyone safe and successful.",
  },
  safetyConsiderations: [
    "Ensure enough space between groups and clearly mark boundaries to avoid collisions.",
    "Use soft, age-appropriate equipment and check the floor and area for hazards before each lesson.",
    "Teach and practice stopping quickly on a signal and moving with awareness of others.",
    "Remind students not to push, pull, or grab others, and to report any unsafe behavior to the teacher.",
  ],
  reflectionAndSummativeFeedback:
    "At the end of the unit, students complete a short reflection (written, drawn, or verbal) about how they have grown as teammates. Using observation notes and the summative rubric from the cooperative games circuit, the teacher provides feedback that highlights each student’s strengths and offers one or two clear next steps for cooperation in PE and beyond.",
};

export default cooperativeGamesThreeToFive;
