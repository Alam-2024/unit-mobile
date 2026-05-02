import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Physical Science: Matter & Energy (Grades 6–8) ─────────────────
export const PhysicalScienceMiddle: IUnits = {
  unitTitle: "Matter & Energy",
  unitDBTitle: "MatterEnergy",
  title: "Matter & Energy (Grades 6–8)",
  gradeLevel: "6th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Matter is made of particles; energy can be transferred and transformed but is never created or destroyed.",
  overallExpectation:
    "Students describe matter at the particle level, investigate physical and chemical changes, and apply the law of conservation of energy to real scenarios.",
  essentialQuestions: [
    "What is everything made of?",
    "How do physical and chemical changes differ?",
    "Where does energy go when it seems to disappear?",
  ],
  skills: ["States of matter", "Physical vs chemical change", "Energy transfer", "Conservation of energy"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Structure of matter.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Atoms & the Particle Model",
          objective: "Describe matter as composed of particles in constant motion.",
          activities: [
            {
              description: "Particle Model Simulation",
              details: ["Use PhET 'States of Matter' simulation; observe particle arrangement in solid, liquid, gas."],
            },
            {
              description: "Particle Diagrams",
              details: ["Draw particle-level diagrams for ice, liquid water, and steam; annotate spacing and motion."],
            },
          ],
          reflection: "Why can't you see the particles that make up a table?",
        },
        {
          sessionNumber: 2,
          title: "Properties of Matter",
          objective: "Identify physical properties (mass, volume, density, color, state) of common materials.",
          activities: [
            {
              description: "Mystery Object Lab",
              details: ["Measure mass with balance and volume by displacement; calculate density; identify the material."],
            },
            {
              description: "Properties Chart",
              details: ["Record physical properties of 6 objects; group by similar properties; justify groupings."],
            },
          ],
          reflection: "How do scientists use properties to identify unknown substances?",
        },
      ],
    },
    {
      week: 2,
      focus: "Physical and chemical changes.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Physical Changes",
          objective: "Identify physical changes and explain how the identity of matter is unchanged.",
          activities: [
            {
              description: "Tearing, Cutting, Dissolving",
              details: ["Tear paper, dissolve salt, melt ice; discuss: Is the substance still the same? Why?"],
            },
            {
              description: "Phase Change Graph",
              details: ["Plot temperature vs time as ice melts; identify plateau as phase change; explain with particle model."],
            },
          ],
          reflection: "If you dissolve sugar in water, can you get the sugar back? Does that make it physical or chemical?",
        },
        {
          sessionNumber: 4,
          title: "Chemical Changes",
          objective: "Identify signs of chemical change; explain that new substances are formed.",
          activities: [
            {
              description: "Baking Soda and Vinegar",
              details: ["Observe gas production, temperature change; discuss indicators of chemical change."],
            },
            {
              description: "Chemical vs Physical Card Sort",
              details: ["Sort 12 scenarios into physical or chemical change; provide evidence for each decision."],
            },
          ],
          reflection: "Why is it important to distinguish between physical and chemical changes?",
        },
      ],
    },
    {
      week: 3,
      focus: "Energy and its forms.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Forms of Energy",
          objective: "Identify kinetic and potential energy; recognize thermal, sound, light, and chemical energy.",
          activities: [
            {
              description: "Energy Carousel",
              details: ["Visit 5 stations: pendulum, rubber band, battery-powered light, sound waves in water, heat demo."],
            },
            {
              description: "Energy Identification",
              details: ["Label 8 scenarios with energy type and justify each choice."],
            },
          ],
          reflection: "When you hold a book above a table, what type of energy does it have?",
        },
        {
          sessionNumber: 6,
          title: "Energy Transformations",
          objective: "Trace how energy changes from one form to another in a chain.",
          activities: [
            {
              description: "Energy Chain Diagrams",
              details: ["Trace: chemical (food) → mechanical → thermal; chemical (battery) → electrical → light/thermal."],
            },
            {
              description: "Roller Coaster Model",
              details: ["Design a paper roller coaster; predict where KE and PE are maximum; explain trade-off."],
            },
          ],
          reflection: "Is energy ever 'lost'? Where does it go?",
        },
      ],
    },
    {
      week: 4,
      focus: "Conservation of energy and STEM challenge.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Conservation of Energy",
          objective: "Apply the law of conservation of energy: total energy in a closed system is constant.",
          activities: [
            {
              description: "Pendulum Investigation",
              details: ["Drop a pendulum; measure height on each side; discuss energy transfer and conservation."],
            },
            {
              description: "Thermal Energy Investigation",
              details: ["Mix hot and cold water; measure temperatures before and after; verify conservation mathematically."],
            },
          ],
          reflection: "If energy is always conserved, why do machines eventually stop?",
        },
        {
          sessionNumber: 8,
          title: "Matter & Energy STEM Challenge",
          objective: "Design a system that demonstrates at least two energy transformations.",
          activities: [
            {
              description: "Engineering Design Challenge",
              details: ["Build a Rube Goldberg–style device using classroom materials; trace at least 3 energy transformations."],
            },
            {
              description: "Exit Assessment",
              details: ["Define physical vs chemical change; trace an energy transformation chain; apply conservation law."],
            },
          ],
          reflection: "What would you improve about your energy device design?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "States of Matter", level1: "Cannot describe particle arrangement", level2: "Describes solid only with accuracy", level3: "Describes all three states with particle model", level4: "Explains phase changes using particle model" },
    { skill: "Physical vs Chemical Change", level1: "Cannot distinguish", level2: "Identifies with support", level3: "Identifies and provides evidence for classification", level4: "Explains at the particle/molecular level" },
    { skill: "Energy Conservation", level1: "Cannot apply the law", level2: "States law but cannot apply", level3: "Applies law to simple scenarios", level4: "Applies to novel systems and explains thermal dissipation" },
  ],
  materials: ["PhET simulation access", "Balance scales", "Overflow cans for volume displacement", "Baking soda and vinegar", "Pendulums", "Thermometers"],
};

// ── Unit 2 ── Life Science: Ecosystems & Human Impact (Grades 6–8) ────────────
export const EcosystemsMiddle: IUnits = {
  unitTitle: "Ecosystems & Human Impact",
  unitDBTitle: "Ecosystems",
  title: "Ecosystems & Human Impact (Grades 6–8)",
  gradeLevel: "6th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Ecosystems are interconnected webs of living and non-living things; human activities can disrupt or restore balance.",
  overallExpectation:
    "Students analyze ecosystem relationships, construct food webs, investigate biodiversity, and evaluate the impact of human activities on ecosystems.",
  essentialQuestions: [
    "How do organisms depend on each other for survival?",
    "What happens to an ecosystem when one species is removed?",
    "How can humans reduce their negative impact on ecosystems?",
  ],
  skills: ["Food webs", "Biodiversity", "Population dynamics", "Human environmental impact"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Ecosystem relationships.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Biotic and Abiotic Factors",
          objective: "Distinguish biotic and abiotic factors; explain how they interact in an ecosystem.",
          activities: [
            {
              description: "Ecosystem Analysis",
              details: ["Analyze a biome image; list all biotic (living) and abiotic (non-living) factors; explain two interactions."],
            },
            {
              description: "Micro-Habitat Investigation",
              details: ["Observe a patch of schoolyard; identify biotic and abiotic components; draw a labeled diagram."],
            },
          ],
          reflection: "How does changing one abiotic factor (e.g., temperature) affect biotic factors?",
        },
        {
          sessionNumber: 2,
          title: "Food Chains to Food Webs",
          objective: "Build a food web and explain energy flow through trophic levels.",
          activities: [
            {
              description: "Organism Cards",
              details: ["Arrange organism cards into food chains; connect chains into a food web with arrows showing energy flow."],
            },
            {
              description: "10% Energy Rule",
              details: ["Trace energy loss between trophic levels; explain why top predators are rare."],
            },
          ],
          reflection: "What would happen to the food web if all the plants disappeared?",
        },
      ],
    },
    {
      week: 2,
      focus: "Biodiversity and population dynamics.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Why Biodiversity Matters",
          objective: "Explain the relationship between biodiversity and ecosystem stability.",
          activities: [
            {
              description: "Jenga Ecosystem",
              details: ["Each Jenga block = a species; remove blocks to simulate extinction; observe when ecosystem 'collapses'."],
            },
            {
              description: "Keystone Species Research",
              details: ["Research wolves in Yellowstone or sea otters in kelp forests; present how their removal affected the ecosystem."],
            },
          ],
          reflection: "Can losing one species really change an entire ecosystem? Give an example.",
        },
        {
          sessionNumber: 4,
          title: "Population Changes",
          objective: "Analyze population graphs; explain factors that increase or decrease populations.",
          activities: [
            {
              description: "Predator-Prey Graph",
              details: ["Graph wolf and deer population data; identify the lag relationship; explain cause and effect."],
            },
            {
              description: "Carrying Capacity",
              details: ["Model carrying capacity using a limited-resource simulation; graph results; define the concept."],
            },
          ],
          reflection: "Why don't animal populations grow forever?",
        },
      ],
    },
    {
      week: 3,
      focus: "Human impact on ecosystems.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Threats to Ecosystems",
          objective: "Identify and categorize human threats: habitat destruction, pollution, invasive species, climate change.",
          activities: [
            {
              description: "Case Study Carousel",
              details: ["Rotate through 4 case studies (deforestation, plastic in ocean, invasive zebra mussels, coral bleaching); record cause and effect."],
            },
            {
              description: "Before-and-After Maps",
              details: ["Compare satellite images of a deforested area over time; quantify change; discuss impacts."],
            },
          ],
          reflection: "Which human impact do you think is the most serious? Justify your choice.",
        },
        {
          sessionNumber: 6,
          title: "Ecosystem Restoration",
          objective: "Evaluate strategies for ecosystem restoration and conservation.",
          activities: [
            {
              description: "Restoration Case Study",
              details: ["Research a restoration success story (e.g., wolf reintroduction, coral reef programs); identify steps taken."],
            },
            {
              description: "Cost-Benefit Analysis",
              details: ["Weigh economic vs ecological costs and benefits of a conservation project; present findings."],
            },
          ],
          reflection: "Is ecosystem restoration always worth the cost? Who should pay for it?",
        },
      ],
    },
    {
      week: 4,
      focus: "Environmental action project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Design a Solution",
          objective: "Propose an evidence-based solution to a local environmental problem.",
          activities: [
            {
              description: "Problem Identification",
              details: ["Select a local environmental issue; research causes and current responses."],
            },
            {
              description: "Solution Poster/Proposal",
              details: ["Design a solution with: problem statement, proposed action, expected outcomes, potential drawbacks."],
            },
          ],
          reflection: "What is one realistic action students could take to help their local ecosystem?",
        },
        {
          sessionNumber: 8,
          title: "Ecosystem Fair",
          objective: "Present ecosystem project to peers; demonstrate mastery through discussion.",
          activities: [
            {
              description: "Project Presentations",
              details: ["Present proposals in a gallery-walk format; peers ask at least two questions per project."],
            },
            {
              description: "Exit Assessment",
              details: ["Construct a food web from given species; explain one human impact and one restoration strategy."],
            },
          ],
          reflection: "What did you learn from a classmate's ecosystem project that surprised you?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Food Webs", level1: "Cannot construct a food chain", level2: "Constructs a chain; web has errors", level3: "Constructs accurate food web with energy direction", level4: "Explains energy loss and trophic level impacts" },
    { skill: "Human Impact Analysis", level1: "Cannot identify human impacts", level2: "Lists impacts without explanation", level3: "Explains cause-effect of human impacts", level4: "Evaluates trade-offs and proposes solutions with evidence" },
  ],
  materials: ["Organism cards", "Jenga set (for biodiversity simulation)", "Predator-prey data sets", "Satellite image comparisons", "Research access for case studies"],
};
