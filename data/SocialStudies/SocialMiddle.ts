import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── World History: Ancient Civilizations (Grades 6–7) ───────────────
export const AncientCivilizationsMiddle: IUnits = {
  unitTitle: "Ancient Civilizations",
  unitDBTitle: "AncientCivilizations",
  title: "Ancient Civilizations (Grades 6–7)",
  gradeLevel: "6th – 7th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Ancient civilizations developed complex systems of government, culture, and technology that still influence us today.",
  overallExpectation:
    "Students analyze characteristics of ancient civilizations, compare their achievements, and explain their lasting influence on modern society.",
  essentialQuestions: [
    "What does it mean to be a 'civilization'?",
    "How did geography shape the development of ancient societies?",
    "What legacies from ancient civilizations do we see today?",
  ],
  skills: ["Analyzing primary sources", "Comparing civilizations", "Understanding legacy", "Historical cause and effect"],
  weeklyPlan: [
    {
      week: 1,
      focus: "What makes a civilization? Mesopotamia and Egypt.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Characteristics of Civilization",
          objective: "Identify and define 6 characteristics of a civilization (government, writing, cities, religion, jobs, infrastructure).",
          activities: [
            {
              description: "Civilization Checklist",
              details: ["Define 6 characteristics; apply checklist to modern and ancient societies."],
            },
            {
              description: "Geography and River Civilizations",
              details: ["Locate Tigris/Euphrates and Nile rivers on maps; explain why civilizations developed near rivers."],
            },
          ],
          reflection: "Could there be a civilization without writing? Why or why not?",
          imgUrl: "https://images.unsplash.com/photo-1740635551152-eea7b5e4b1c1?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=VQ8XdEPfS0g"],
        },
        {
          sessionNumber: 2,
          title: "Mesopotamia: Cradle of Civilization",
          objective: "Describe contributions of Mesopotamia: writing, law codes, city-states.",
          activities: [
            {
              description: "Hammurabi's Code Analysis",
              details: ["Read 6 excerpts from Hammurabi's Code; evaluate: Is each law fair by today's standards? Why?"],
            },
            {
              description: "Cuneiform Writing",
              details: ["Students write their name in cuneiform on clay or paper; reflect on early writing's purpose."],
            },
          ],
          reflection: "Why is a written law code more effective than unwritten rules?",
          imgUrl: "https://images.unsplash.com/photo-1740635551152-eea7b5e4b1c1?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Ancient Egypt and Greece.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Egyptian Empire",
          objective: "Analyze the role of pharaohs, religion, and the Nile in Egyptian society.",
          activities: [
            {
              description: "Nile Delta Map Analysis",
              details: ["Analyze how the Nile's flooding created fertile farmland; connect to agricultural surplus."],
            },
            {
              description: "Pharaoh Profile",
              details: ["Research Ramses II or Hatshepsut; create a profile card: achievements, authority, legacy."],
            },
          ],
          reflection: "Why were pharaohs considered gods as well as rulers?",
        },
        {
          sessionNumber: 4,
          title: "Ancient Greece: Democracy & Philosophy",
          objective: "Explain Athenian democracy and the contributions of Greek philosophers.",
          activities: [
            {
              description: "Democracy Origins",
              details: ["Compare Athenian democracy (limited) to modern democracy; identify similarities and key differences."],
            },
            {
              description: "Socratic Questioning",
              details: ["Practice Socratic questioning on a moral dilemma; discuss how this method challenges assumptions."],
            },
          ],
          reflection: "Is Athenian democracy really 'democracy'? Who was left out?",
        },
      ],
    },
    {
      week: 3,
      focus: "Rome and other ancient civilizations.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Roman Republic and Empire",
          objective: "Trace Rome's transformation from republic to empire; identify key contributions.",
          activities: [
            {
              description: "Republic vs Empire Comparison",
              details: ["Compare powers of Senate, consuls, and emperor using a power-structure diagram."],
            },
            {
              description: "Roman Engineering",
              details: ["Examine Roman roads, aqueducts, and arches; explain how engineering supported empire expansion."],
            },
          ],
          reflection: "What caused the Roman Republic to become an Empire? Could it have been prevented?",
        },
        {
          sessionNumber: 6,
          title: "Ancient China and India",
          objective: "Identify major dynasties and contributions of Ancient China and India.",
          activities: [
            {
              description: "Silk Road Simulation",
              details: ["Simulate trading goods along the Silk Road; discuss cultural exchange and economic impact."],
            },
            {
              description: "Contribution Comparison Chart",
              details: ["Compare contributions of China (paper, compass, printing) and India (math, medicine, Buddhism) to the world."],
            },
          ],
          reflection: "How did the Silk Road connect civilizations that never met face to face?",
        },
      ],
    },
    {
      week: 4,
      focus: "Legacy and culminating project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Lasting Legacies",
          objective: "Trace the influence of ancient civilizations on modern government, science, and culture.",
          activities: [
            {
              description: "Legacy Hunt",
              details: ["Find modern examples of: Roman law, Greek democracy, Chinese inventions, Egyptian symbols."],
            },
            {
              description: "Timeline of Influence",
              details: ["Create a timeline showing when each civilization's contribution affected later history."],
            },
          ],
          reflection: "Which ancient civilization has influenced your life most? Justify your choice.",
        },
        {
          sessionNumber: 8,
          title: "Civilization Museum",
          objective: "Present research on an ancient civilization to peers as a 'museum exhibit'.",
          activities: [
            {
              description: "Museum Exhibit",
              details: ["Create a display board with: map, timeline, 3 achievements, 1 primary source, modern legacy."],
            },
            {
              description: "Exit Assessment",
              details: ["Define civilization; name 2 contributions from 3 different civilizations; explain one modern legacy."],
            },
          ],
          reflection: "How has studying ancient history changed the way you see the world today?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Civilization Characteristics", level1: "Cannot define characteristics", level2: "Identifies characteristics with support", level3: "Applies all 6 characteristics to a civilization", level4: "Compares two civilizations across all characteristics with evidence" },
    { skill: "Historical Analysis", level1: "States facts without context", level2: "Explains cause or effect but not both", level3: "Connects cause to effect with historical evidence", level4: "Analyzes complex causation; connects to modern world" },
  ],
  materials: ["World history maps", "Primary source excerpts (Hammurabi, Egyptian hieroglyphs)", "Silk Road trade goods simulation", "Display board supplies"],
};

// ── Unit 2 ── Civics: Government & Democracy (Grades 7–8) ─────────────────────
export const CivicsMiddle: IUnits = {
  unitTitle: "Civics: Government & Democracy",
  unitDBTitle: "Civics",
  title: "Civics: Government & Democracy (Grades 7–8)",
  gradeLevel: "7th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Democratic governments derive power from citizens; understanding civic processes empowers participation.",
  overallExpectation:
    "Students analyze the structure of democratic government, the role of the Constitution, and apply civic knowledge by evaluating current issues and participating in simulated civic processes.",
  essentialQuestions: [
    "Where does government get its power?",
    "How does the Constitution protect individual rights?",
    "What is the responsibility of citizens in a democracy?",
  ],
  skills: ["Branches of government", "Constitutional rights", "Civic participation", "Current events analysis"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Foundations of government.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Why Government?",
          objective: "Explain the social contract theory; describe purposes of government.",
          activities: [
            {
              description: "State of Nature Simulation",
              details: ["Simulate a 'no-rules' classroom for 5 minutes; debrief: Why did problems arise? What did we need?"],
            },
            {
              description: "Social Contract Reading",
              details: ["Read excerpts from Locke and Rousseau; summarize: What do citizens give up and what do they gain?"],
            },
          ],
          reflection: "Is following government rules the same as giving up freedom? Explain.",
          imgUrl: "https://images.unsplash.com/photo-1740635551152-eea7b5e4b1c1?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=8PIXkVWYAH4"],
        },
        {
          sessionNumber: 2,
          title: "Types of Government",
          objective: "Compare democracy, monarchy, oligarchy, and dictatorship.",
          activities: [
            {
              description: "Government Type Matrix",
              details: ["Complete a matrix: who holds power, how leaders are chosen, role of citizens — for all four types."],
            },
            {
              description: "Case Study Discussion",
              details: ["Analyze a current or historical example of each government type; evaluate advantages and disadvantages."],
            },
          ],
          reflection: "Why might some people prefer a strong central authority to democracy?",
          imgUrl: "https://images.unsplash.com/photo-1740635551152-eea7b5e4b1c1?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "The Constitution and Bill of Rights.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Three Branches of Government",
          objective: "Describe the powers and functions of legislative, executive, and judicial branches.",
          activities: [
            {
              description: "Branch of Government Poster",
              details: ["Create a trifold: each branch's name, members, key powers, and one example of its use."],
            },
            {
              description: "Checks and Balances Simulation",
              details: ["Role-play a bill passing through Congress, signed by President, and reviewed by the Supreme Court."],
            },
          ],
          reflection: "Why would the founders create three separate branches of government?",
        },
        {
          sessionNumber: 4,
          title: "Bill of Rights",
          objective: "Identify the first 10 Amendments; apply them to real-world scenarios.",
          activities: [
            {
              description: "Amendment Card Match",
              details: ["Match scenario cards to the relevant amendment; justify why that amendment applies."],
            },
            {
              description: "Current Events Connection",
              details: ["Find a news article that involves a Constitutional right; present which amendment is relevant."],
            },
          ],
          reflection: "Are there any rights in the Bill of Rights that you think are most important? Why?",
        },
      ],
    },
    {
      week: 3,
      focus: "Civic participation.",
      sessions: [
        {
          sessionNumber: 5,
          title: "How a Bill Becomes a Law",
          objective: "Trace the legislative process from proposal to presidential signature.",
          activities: [
            {
              description: "Schoolhouse Rock Analysis",
              details: ["Watch 'I'm Just a Bill'; annotate the steps; identify where most bills die in the process."],
            },
            {
              description: "Mock Bill Writing",
              details: ["Groups write a bill to improve the school; present to the class as a mock Congressional session."],
            },
          ],
          reflection: "Why is it intentionally difficult to pass a law?",
        },
        {
          sessionNumber: 6,
          title: "Voting and Electoral Process",
          objective: "Explain how elections work; discuss importance of voter participation.",
          activities: [
            {
              description: "Electoral College Simulation",
              details: ["Simulate an election with Electoral College; compare to popular vote result; discuss fairness."],
            },
            {
              description: "Barriers to Voting History",
              details: ["Research voting rights timeline: 15th, 19th, 26th Amendments; discuss ongoing barriers."],
            },
          ],
          reflection: "Should voting be mandatory? Make an argument with evidence.",
        },
      ],
    },
    {
      week: 4,
      focus: "Current events and civic action.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Analyzing Current Issues",
          objective: "Apply civic knowledge to analyze a current political issue from multiple perspectives.",
          activities: [
            {
              description: "Current Events Fishbowl",
              details: ["Inner circle debates a current issue; outer circle observes and notes arguments used."],
            },
            {
              description: "Perspective Writing",
              details: ["Write a 2-paragraph analysis of an issue: summarize two different perspectives; state own position."],
            },
          ],
          reflection: "How can you stay informed and engaged as a future voter?",
        },
        {
          sessionNumber: 8,
          title: "Civic Action Project",
          objective: "Identify a community issue; propose a civic action plan; present to peers.",
          activities: [
            {
              description: "Action Plan Presentation",
              details: ["Present: issue, affected citizens, civic process to use (petition, contacting representative, voting), expected impact."],
            },
            {
              description: "Exit Assessment",
              details: ["Name three branches, one right, and explain how a law is made; describe one form of civic participation."],
            },
          ],
          reflection: "At what age should people be allowed to vote? Justify with evidence.",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Government Structure", level1: "Cannot name branches", level2: "Names branches without functions", level3: "Describes each branch's role and checks/balances", level4: "Analyzes how structure prevents abuse of power with examples" },
    { skill: "Constitutional Rights", level1: "Cannot identify amendments", level2: "Names amendments without application", level3: "Applies amendments to real scenarios", level4: "Evaluates tensions between rights in complex cases" },
  ],
  materials: ["Constitution and Bill of Rights text", "Amendment scenario cards", "Current news articles", "Electoral College maps", "Mock bill templates"],
};
