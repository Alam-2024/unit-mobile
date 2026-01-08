import {
  GradeLevel,
  LengthInWeeks,
  Assessment,
  AssessmentCooGames,
} from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const cooperativeGamesEighthNinth: IUnits = {
  unitTitle: "Cooperative Games 8–9",
  unitDBTitle: "Cooperative Games 8–9",
  title:
    "Building Teamwork, Communication, and Problem-Solving through Cooperative Games",
  gradeLevel: `${GradeLevel.Eighth} - ${GradeLevel.Ninth}`,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will participate in a range of cooperative games that require teamwork, communication, and shared decision-making. They will solve physical and tactical challenges together, reflect on group dynamics, and demonstrate responsibility, respect, resiliency, and integrity in all activities.",
  essentialQuestions: [
    "How can effective communication and listening help a team solve physical challenges more successfully?",
    "In what ways do trust and shared responsibility influence the performance of a group?",
    "How can teams manage conflict and different opinions while staying focused on a common goal?",
    "What strategies can be used to include and support all teammates in cooperative activities?",
    "What does it mean to show responsibility, respect, resiliency, and integrity during cooperative games?",
  ],
  skills: [
    "Use clear verbal and non-verbal communication to share ideas and instructions with teammates.",
    "Demonstrate active listening and openness to others’ suggestions during group tasks.",
    "Apply simple problem-solving strategies (plan–do–review) in cooperative physical challenges.",
    "Show trust and support by encouraging teammates and accepting shared decisions.",
    "Manage emotions and respond constructively to setbacks and disagreements.",
    "Include all group members in roles and decisions to ensure a positive and fair environment.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Introduction to Cooperation and Group Norms",
          objective:
            "Introduce cooperative games, establish group norms, and begin practising basic communication and trust skills.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light tag and movement games that require pairing up and changing partners frequently to meet different classmates.",
              ],
            },
            {
              description: "Group Norms and Expectations",
              details: [
                "Brief discussion of what cooperation looks like (listening, sharing, including others) and how it connects to responsibility, respect, resiliency, and integrity.",
                "Classes agree on simple group norms for the unit (e.g., one voice at a time, encourage others, stay positive).",
              ],
            },
            {
              description: "Cooperative Icebreakers",
              details: [
                "Small-group challenges such as forming shapes or numbers with their bodies and completing simple tasks while staying connected (e.g., holding hands, linking arms).",
              ],
            },
            {
              description: "Reflection",
              details: [
                "Quick exit prompt: students share one behaviour that helped their group and one they want to improve next time.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Whole-group stretch with partners taking turns to lead simple mobility exercises.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Communication and Simple Problem-Solving",
          objective:
            "Develop clear communication and basic problem-solving strategies in low-risk cooperative challenges.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Follow-the-leader style movement in small groups, rotating the leader every 30–45 seconds.",
              ],
            },
            {
              description: "Communication Challenges",
              details: [
                "Activities where one or two students give instructions (e.g., navigating a simple obstacle while partners have limited vision or information).",
                "Focus on using clear, positive language and checking for understanding.",
              ],
            },
            {
              description: "Plan–Do–Review Tasks",
              details: [
                "Groups receive a simple physical challenge (e.g., moving all group members and limited equipment from one area to another using specific rules).",
                "Students briefly plan, attempt the challenge, then pause to review what worked and what they will change.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching in circles; each student states one communication tip that helped their group.",
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
          title: "Trust and Shared Responsibility",
          objective:
            "Build trust and shared responsibility through cooperative activities that require mutual support and role-sharing.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Partner mirror games that require slow, controlled movements and close attention to a partner’s actions.",
              ],
            },
            {
              description: "Trust-Based Activities",
              details: [
                "Low-risk trust challenges such as guiding a partner through a simple course with limited vision using clear verbal cues.",
                "Emphasis on safety, consent, and checking comfort levels before starting each task.",
              ],
            },
            {
              description: "Shared Responsibility Games",
              details: [
                "Team challenges where the group must transport objects or complete tasks and every member has a defined role that affects success.",
                "Groups rotate roles so that all students experience leading, supporting, and following.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Group stretch combined with a brief discussion: What helped you trust your teammates today?",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Managing Conflict and Emotions",
          objective:
            "Recognise and manage conflict and emotions while staying focused on cooperative goals.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Short, low-stakes cooperative relay games where quick decisions might cause minor mistakes and require emotional control.",
              ],
            },
            {
              description: "Conflict Scenarios",
              details: [
                "Teacher presents common conflict situations (e.g., disagreeing about strategy, someone not listening) and groups practise quick, respectful ways to respond.",
                "Students rehearse sentence starters for constructive feedback and disagreement.",
              ],
            },
            {
              description: "Cooperative Games Under Pressure",
              details: [
                "Teams repeat a cooperative challenge with time or attempt limits to simulate mild pressure, focusing on keeping communication respectful.",
                "Groups pause between rounds to reflect briefly on emotional responses and adjustments.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Guided breathing and stretching while students think of one strategy they will use next time they feel frustrated in a group task.",
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
          title: "Complex Team Challenges",
          objective:
            "Apply communication, trust, and problem-solving skills in more complex, multi-step cooperative challenges.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Small-group movement patterns (e.g., moving in different formations, changing directions together on a signal).",
              ],
            },
            {
              description: "Multi-Step Challenges",
              details: [
                "Team tasks that include several stages (e.g., collecting objects, organising them in a specific way, and finishing in a target area) with limited time or equipment.",
                "Groups assign roles and responsibilities before starting and adjust them as needed.",
              ],
            },
            {
              description: "Strategy and Adaptation",
              details: [
                "Between attempts, groups discuss how to adapt their strategy, improve communication, or change roles to be more effective.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch while each student shares one example of when their team adapted successfully.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Inclusion and Leadership",
          objective:
            "Promote inclusive behaviours and shared leadership within cooperative games.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Student-led warm-up in small groups, with rotating leaders responsible for choosing simple movements.",
              ],
            },
            {
              description: "Inclusive Design",
              details: [
                "Groups adapt or invent a cooperative game that ensures everyone has a meaningful role, including those who prefer less physically demanding tasks.",
                "Students consider how to modify rules, space, or equipment to include all teammates.",
              ],
            },
            {
              description: "Leadership in Action",
              details: [
                "Groups play their games, rotating leadership roles and giving feedback on how leaders supported inclusion and participation.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Whole-group cool-down and quick written or verbal reflection: How can you help others feel included in future activities?",
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
          title: "Cooperative Challenge Day Planning",
          objective:
            "Plan and prepare a cooperative challenge day that highlights teamwork, problem-solving, and the NFL values.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Short cooperative warm-up games chosen by students from earlier sessions.",
              ],
            },
            {
              description: "Event Planning",
              details: [
                "Groups choose or design one cooperative challenge to use in the culminating session, clarifying rules, space, roles, and safety considerations.",
                "Students identify how their activity promotes responsibility, respect, resiliency, and integrity.",
              ],
            },
            {
              description: "Trial Runs",
              details: [
                "Groups test and refine their activities with other classmates, adjusting instructions and roles based on feedback.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch and final check-in on roles and expectations for the culminating cooperative challenge day.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Culminating Cooperative Challenge Day",
          objective:
            "Demonstrate effective cooperation, inclusion, and character in a series of student-led cooperative challenges.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Student-organised warm-up that includes at least one cooperative movement game.",
              ],
            },
            {
              description: "Cooperative Stations",
              details: [
                "Classes rotate through different student-designed cooperative challenges, with clear expectations for teamwork, communication, and inclusion.",
              ],
            },
            {
              description: "Recognition and Reflection",
              details: [
                "Celebrate examples of leadership, teamwork, resiliency, and integrity shown across the unit.",
                "Students complete a final reflection on how their cooperation skills have developed and how they can use them beyond PE.",
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
        "Ongoing observation checklists during cooperative games focusing on communication, inclusion, and problem-solving behaviours.",
    },
    {
      type: "Formative",
      description:
        "Quick self- and peer-assessment prompts at the end of selected sessions (e.g., rating own contribution to the group on a simple scale).",
    },
    {
      type: "Summative",
      description:
        "End-of-unit rubric assessing teamwork, communication, conflict management, and demonstration of responsibility, respect, resiliency, and integrity during the culminating cooperative challenge day.",
    },
  ],
  learningExperiences: [
    "Participating in low-risk cooperative icebreakers to build comfort and trust within the group.",
    "Solving physical challenges that require planning, role allocation, and shared responsibility.",
    "Practising conflict-management strategies and constructive communication during disagreements.",
    "Designing and leading inclusive cooperative games for peers.",
    "Reflecting on personal and group behaviours and setting goals for future cooperation.",
  ],
  equipmentNeeded: [
    "Cones or markers to define spaces and simple obstacle courses.",
    "Lightweight balls, beanbags, or similar small objects for transport and relay tasks.",
    "Hoops, ropes, or bands for linking and team movement challenges.",
    "Clipboards or simple checklists for observation, self-assessment, or peer feedback.",
    "Whiteboard or poster paper and markers for planning and recording group norms and strategies.",
  ],
  differentiation: {
    beginners:
      "Provide simpler versions of challenges with fewer rules, shorter distances, and more time. Assign clear, structured roles and offer sentence starters to support communication and reflection.",
    advanced:
      "Increase complexity by adding time limits, multi-step tasks, or extra constraints (e.g., limited communication). Encourage advanced students to take on facilitation roles and lead parts of the planning and reflection.",
    inclusive:
      "Offer varied roles (e.g., strategist, timekeeper, encourager, equipment manager) so that all students can contribute meaningfully, including those with lower confidence or physical limitations. Adjust rules, space, and equipment to reduce barriers and ensure safe participation for everyone.",
  },
  safetyConsiderations: [
    "Ensure adequate space between groups to avoid collisions during movement-based challenges.",
    "Clearly establish boundaries and rules for safe physical contact and movement, emphasising control and awareness of others.",
    "Use equipment that is age-appropriate and in good condition, checking for tripping hazards or sharp edges.",
    "Remind students to communicate clearly, respect personal space, and stop immediately on a safety or stop signal.",
    "Adapt or remove activities that may cause discomfort for students who are uneasy with trust-based tasks, offering alternative roles.",
  ],
  reflectionAndSummativeFeedback:
    "At the end of the unit, students complete a written or verbal reflection describing how their cooperation, communication, and conflict-management skills have changed. Teacher uses the summative rubric and anecdotal notes from the culminating cooperative challenge day to provide feedback on each student’s contribution, highlighting strengths and suggesting next steps for applying these behaviours in future PE units and other group settings.",
};

export default cooperativeGamesEighthNinth;
