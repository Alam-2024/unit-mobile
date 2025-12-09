import { GradeLevel, LengthInWeeks } from "@/interfaces/units/ICommon";
import { IUnits } from "@/interfaces/units/IUnit";

const flagFootballEighthNinth: IUnits = {
  unitTitle: "Flag Football 8–9",
  unitDBTitle: "Flag Football 8–9",
  title:
    "Competing with Advanced NFL FLAG Tactics, Game Management, and Character",
  gradeLevel: `${GradeLevel.Eighth} - ${GradeLevel.Ninth}`,
  lengthOfUnit: LengthInWeeks.FourWeeks,
  overallExpectation:
    "Students will compete in NFL FLAG games using advanced skills, offensive and defensive concepts, and game management strategies. They will analyse game situations, make appropriate tactical decisions, and consistently demonstrate the NFL values of responsibility, respect, resiliency, and integrity on and off the field.",
  essentialQuestions: [
    "How can teams use advanced offensive concepts, such as route combinations and play-action, to exploit defensive tendencies?",
    "In what ways can defenders use coverage adjustments, disguised looks, and coordinated pressure to disrupt the offense?",
    "How does effective game management, including clock awareness and risk assessment, influence outcomes in close games?",
    "How can video or peer feedback be used to analyse performance and guide improvement in flag football?",
    "What does it mean to consistently demonstrate responsibility, respect, resiliency, and integrity in a competitive environment?",
  ],
  skills: [
    "Execute a variety of advanced routes and combinations with precise timing, depth, and spacing.",
    "Implement offensive concepts such as play-action, flood patterns, and layered routes to challenge different coverages.",
    "Organise and adjust defensive structures (man, zone, and mixed coverages) based on offensive formations and tendencies.",
    "Manage game situations including down and distance, clock, field position, and risk versus reward decisions.",
    "Provide and respond to constructive feedback using basic performance analysis and reflection.",
    "Model positive leadership, emotional control, and respect for opponents, officials, and teammates in all game contexts.",
  ],
  weeklyPlan: [
    {
      week: 1,
      sessions: [
        {
          sessionNumber: 1,
          title: "Review, Roles, and Expectations",
          objective:
            "Review core NFL FLAG rules and skills, clarify advanced expectations, and assign or rotate roles within teams.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "High-intensity dynamic warm-up including acceleration, deceleration, and multi-directional movement with ball handling.",
              ],
            },
            {
              description: "Review and Expectations",
              details: [
                "Quick review of key rules and vocabulary, confirming understanding of no-run zones, rush line, and common penalties.",
                "Discuss unit expectations around leadership, effort, and demonstration of NFL values in competitive settings.",
              ],
            },
            {
              description: "Role Identification",
              details: [
                "Within small squads, students identify primary and secondary roles (QB, centre, receivers, defenders, rusher) while agreeing to regular rotation.",
              ],
            },
            {
              description: "Baseline Game Play",
              details: [
                "Short scrimmages to observe current skill and tactical levels and to introduce formative assessment criteria.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching and quick self-rating of confidence in offense, defence, and game management.",
              ],
            },
          ],
        },
        {
          sessionNumber: 2,
          title: "Advanced Route Combinations and Play-Action",
          objective:
            "Develop advanced route combinations and introduce simple play-action concepts to influence defenders.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Route tree review at low intensity, focusing on sharp cuts and consistent depths.",
              ],
            },
            {
              description: "Route Combinations",
              details: [
                "Teach and practise combinations such as flood (short, intermediate, deep on one side) and high-low reads.",
                "QBs focus on progression reads; receivers focus on spacing and timing.",
              ],
            },
            {
              description: "Play-Action Concepts",
              details: [
                "Introduce play-action (fake run, then pass) to show how body language can move defenders.",
                "Drills where defenders react to run/pass fakes and then reflect on what influenced them.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching; short debrief on when and why to use play-action in games.",
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
          title: "Defensive Adjustments and Disguise",
          objective:
            "Explore defensive adjustments, basic disguise, and coordinated pressure to disrupt offensive rhythm.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Defensive footwork circuit: backpedal, break on ball, change of direction.",
              ],
            },
            {
              description: "Coverage Adjustments",
              details: [
                "Review man and zone, then practise shifting between them pre-snap on teacher signal.",
                "Emphasise communication cues for switching assignments and supporting teammates.",
              ],
            },
            {
              description: "Pressure and Disguise",
              details: [
                "Introduce simple disguise concepts (showing one look, playing another) appropriate to students’ level of understanding.",
                "3v3 or 4v4 drills where defence experiments with different rush and coverage combinations.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch and quick reflection on how defensive adjustments affected the offense.",
              ],
            },
          ],
        },
        {
          sessionNumber: 4,
          title: "Special Situations and Game Management",
          objective:
            "Apply game management concepts such as clock awareness, field position, and risk assessment in special situations.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Short competitive drills (e.g., red zone drives, two-point conversion attempts).",
              ],
            },
            {
              description: "Special Situations",
              details: [
                "Discuss and model scenarios: end-of-half drives, red zone decisions, going for first down versus safer field position.",
                "Small-sided games starting from different field positions with limited time or downs.",
              ],
            },
            {
              description: "Risk and Reward",
              details: [
                "Students analyse when to choose high-risk deep passes versus safer short gains based on score and time.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Group stretch; quick written or verbal response describing one good game management decision.",
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
          title: "Offense vs. Defence: Game Plans",
          objective:
            "Create and implement simple offensive and defensive game plans based on opponents’ strengths and weaknesses.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Passing and pursuit drills with increasing intensity.",
              ],
            },
            {
              description: "Game Plan Development",
              details: [
                "Teams analyse previous scrimmages or teacher feedback to identify patterns in their own and opponents’ play.",
                "Offense designs a short game plan (favourite plays, go-to situations); defence designs responses and key focuses.",
              ],
            },
            {
              description: "Controlled Scrimmages",
              details: [
                "Play short scrimmages where teams attempt to execute their game plans and then reflect between drives.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretch; each team shares one successful adjustment they made during the session.",
              ],
            },
          ],
        },
        {
          sessionNumber: 6,
          title: "Performance Analysis and Feedback",
          objective:
            "Use peer or video feedback to analyse individual and team performance and set improvement targets.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Light technical warm-up with emphasis on precision rather than speed.",
              ],
            },
            {
              description: "Observation and Feedback",
              details: [
                "During short games or drills, some students act as observers using simple checklists for key skills or behaviours.",
                "Observers provide specific, respectful feedback to players and teams between drives.",
              ],
            },
            {
              description: "Goal Setting",
              details: [
                "Students set short-term performance goals for upcoming culminating games (e.g., communication, effort, execution of assignments).",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching and quiet reflection on personal progress and next steps.",
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
          title: "Tournament Preparation and Leadership",
          objective:
            "Prepare for culminating tournament-style play, emphasising leadership, roles, and collective responsibility.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Team-led warm-ups incorporating agreed drills for offense and defence.",
              ],
            },
            {
              description: "Tournament Planning",
              details: [
                "Teams confirm roles, preferred plays, defensive calls, and sideline expectations (substitution, support, and focus).",
              ],
            },
            {
              description: "Pre-Tournament Scrimmages",
              details: [
                "Short scrimmages with emphasis on behaviour, communication, and application of game plans rather than only outcome.",
              ],
            },
            {
              description: "Cool-down",
              details: [
                "Stretching and final adjustments to individual and team goals ahead of the final session.",
              ],
            },
          ],
        },
        {
          sessionNumber: 8,
          title: "Culminating Tournament and Character Showcase",
          objective:
            "Demonstrate advanced flag football performance and consistently display core NFL values in a tournament setting.",
          activities: [
            {
              description: "Warm-up",
              details: [
                "Student-organised warm-up with clear time management.",
              ],
            },
            {
              description: "Tournament Play",
              details: [
                "Round-robin or knockout-style games with clear expectations for sportsmanship, respect, and effort.",
              ],
            },
            {
              description: "Awards and Reflection",
              details: [
                "Recognise not only performance but also leadership, teamwork, resiliency, and integrity displayed throughout the unit.",
                "Students complete a final reflection connecting their experiences to the NFL values and to future physical activity goals.",
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
};

export default flagFootballEighthNinth;
