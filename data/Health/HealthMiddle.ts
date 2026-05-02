import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Personal Health & Body Systems (Grades 6–8) ────────────────────
export const PersonalHealthMiddle: IUnits = {
  unitTitle: "Personal Health & Body Systems",
  unitDBTitle: "PersonalHealth",
  title: "Personal Health & Body Systems (Grades 6–8)",
  gradeLevel: "6th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Our bodies are interconnected systems; understanding how they work empowers us to make healthier choices.",
  overallExpectation:
    "Students identify major body systems and their functions, analyze the relationship between health behaviors and body system function, and develop personal health goals.",
  essentialQuestions: [
    "How do our body systems work together?",
    "How do our daily choices affect our long-term health?",
    "What habits contribute to overall wellness?",
  ],
  skills: ["Body systems knowledge", "Nutrition analysis", "Physical activity benefits", "Goal setting"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Major body systems.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Systems Overview",
          objective: "Name and describe the function of 6 major body systems.",
          activities: [
            {
              description: "Systems Jigsaw",
              details: ["Groups each research one system (circulatory, respiratory, digestive, nervous, skeletal, muscular); teach the class."],
            },
            {
              description: "Interconnection Web",
              details: ["Use yarn to connect systems; pull one — others follow; discuss interdependence."],
            },
          ],
          reflection: "If the digestive system stopped working, which other systems would be affected?",
        },
        {
          sessionNumber: 2,
          title: "Heart & Circulatory System",
          objective: "Describe how the heart pumps blood; measure resting vs active heart rate.",
          activities: [
            {
              description: "Heart Rate Lab",
              details: ["Measure resting heart rate; do 1 minute of jumping jacks; re-measure; calculate change."],
            },
            {
              description: "Blood Path Diagram",
              details: ["Trace the path of blood through heart, lungs, and body on a diagram; label vessels."],
            },
          ],
          reflection: "Why does your heart beat faster during exercise?",
        },
      ],
    },
    {
      week: 2,
      focus: "Nutrition and the digestive system.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Macronutrients & Micronutrients",
          objective: "Identify carbohydrates, proteins, fats, vitamins, and minerals and their roles.",
          activities: [
            {
              description: "Nutrition Label Analysis",
              details: ["Analyze 3 food labels; identify macros; calculate % of daily value; discuss what is 'healthy'."],
            },
            {
              description: "MyPlate Meal Plan",
              details: ["Design a balanced one-day meal plan using MyPlate guidelines; justify each choice."],
            },
          ],
          reflection: "Is a food 'bad' if it has a lot of fat? Explain.",
        },
        {
          sessionNumber: 4,
          title: "The Digestive Journey",
          objective: "Trace how food is broken down from mouth to absorption.",
          activities: [
            {
              description: "Digestion Timeline",
              details: ["Map the digestive journey: mouth, esophagus, stomach, small intestine, large intestine; time each step."],
            },
            {
              description: "Enzyme Demo",
              details: ["Add pineapple (bromelain) to gelatin; observe protein breakdown; connect to enzyme function."],
            },
          ],
          reflection: "Why does it matter where nutrients are absorbed in the digestive system?",
        },
      ],
    },
    {
      week: 3,
      focus: "Physical activity and mental health.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Benefits of Physical Activity",
          objective: "Identify physical, mental, and social benefits of regular physical activity.",
          activities: [
            {
              description: "Benefits Web",
              details: ["Students generate physical, mental, and social benefits of exercise; compare with research findings."],
            },
            {
              description: "FITT Principle",
              details: ["Introduce Frequency, Intensity, Time, Type; students plan a one-week activity schedule using FITT."],
            },
          ],
          reflection: "Why might someone feel better emotionally after exercising?",
        },
        {
          sessionNumber: 6,
          title: "Sleep and Stress",
          objective: "Explain the role of sleep and stress management in health.",
          activities: [
            {
              description: "Sleep Deprivation Effects",
              details: ["Review research on sleep and cognitive performance; calculate if classmates get the recommended amount."],
            },
            {
              description: "Stress Response & Coping",
              details: ["Identify physical stress signals; practice 3 evidence-based coping strategies (breathing, journaling, movement)."],
            },
          ],
          reflection: "What is one change you could make to improve your sleep?",
        },
      ],
    },
    {
      week: 4,
      focus: "Personal health goals and wellness.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Health Risk Factors",
          objective: "Distinguish between controllable and uncontrollable health risk factors.",
          activities: [
            {
              description: "Risk Factor Sort",
              details: ["Sort risk factors into: can control (diet, exercise, sleep) vs cannot control (genetics, age, environment)."],
            },
            {
              description: "Health Media Analysis",
              details: ["Evaluate a health advertisement or social media post for accuracy and persuasion techniques."],
            },
          ],
          reflection: "If heart disease runs in your family, does that mean you will definitely get it? Explain.",
        },
        {
          sessionNumber: 8,
          title: "Personal Wellness Plan",
          objective: "Create a SMART health goal and a 4-week wellness plan.",
          activities: [
            {
              description: "SMART Goal Setting",
              details: ["Write a SMART health goal (Specific, Measurable, Achievable, Relevant, Time-bound); identify barriers."],
            },
            {
              description: "Wellness Plan Presentation",
              details: ["Share wellness plan with the class; explain goal rationale, action steps, and how progress will be tracked."],
            },
          ],
          reflection: "Why is a specific, measurable goal more likely to succeed than a vague one?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Body Systems Knowledge", level1: "Cannot name systems", level2: "Names systems without functions", level3: "Names systems and their primary functions", level4: "Explains interconnections between systems with examples" },
    { skill: "Health Decision Making", level1: "Cannot identify healthy choices", level2: "Identifies choices without reasoning", level3: "Analyzes choices using evidence", level4: "Creates and justifies a personal wellness plan with SMART goals" },
  ],
  materials: ["Body system diagrams", "Food labels (collected from home)", "MyPlate reference", "FITT principle cards", "Sleep research handout"],
};

// ── Unit 2 ── Mental Health & Relationships (Grades 7–8) ─────────────────────
export const MentalHealthMiddle: IUnits = {
  unitTitle: "Mental Health & Relationships",
  unitDBTitle: "MentalHealth",
  title: "Mental Health & Relationships (Grades 7–8)",
  gradeLevel: "7th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Mental health is as important as physical health; healthy relationships require communication, respect, and boundaries.",
  overallExpectation:
    "Students identify mental health continuum, develop coping and communication skills, and analyze characteristics of healthy and unhealthy relationships.",
  essentialQuestions: [
    "What does mental health really mean?",
    "How do our emotions affect our behavior and relationships?",
    "What makes a relationship healthy or unhealthy?",
  ],
  skills: ["Emotional awareness", "Coping strategies", "Communication skills", "Relationship analysis"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Understanding mental health.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Mental Health Continuum",
          objective: "Define mental health; place oneself on a continuum; reduce stigma.",
          activities: [
            {
              description: "Continuum Activity",
              details: ["Students anonymously rate their current mental wellness on a 1–10 scale; discuss normal fluctuation."],
            },
            {
              description: "Mental Health Myth-Busting",
              details: ["Present 8 myths about mental health; students mark true/false; reveal answers with evidence."],
            },
          ],
          reflection: "Why is it important to talk about mental health without shame?",
        },
        {
          sessionNumber: 2,
          title: "Emotions & the Brain",
          objective: "Explain the role of the amygdala and prefrontal cortex in emotional regulation.",
          activities: [
            {
              description: "Brain Anatomy Overview",
              details: ["Simple diagram of amygdala (emotional response) vs prefrontal cortex (rational thinking)."],
            },
            {
              description: "Amygdala Hijack Scenarios",
              details: ["Students analyze scenarios where emotions override reasoning; discuss what could be done differently."],
            },
          ],
          reflection: "Can you think of a time your amygdala took over? What happened?",
        },
      ],
    },
    {
      week: 2,
      focus: "Coping strategies.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Healthy vs Unhealthy Coping",
          objective: "Distinguish healthy coping strategies from unhealthy ones; build a coping toolkit.",
          activities: [
            {
              description: "Coping Strategy Sort",
              details: ["Sort 20 coping strategies into healthy (exercise, talk to someone, creative outlet) vs unhealthy (avoidance, substance use)."],
            },
            {
              description: "Personal Coping Toolkit",
              details: ["Students create a personal coping card: 3 strategies for different situations (social, academic, family stress)."],
            },
          ],
          reflection: "Why might an unhealthy coping strategy feel easier in the moment?",
        },
        {
          sessionNumber: 4,
          title: "Mindfulness & Stress Reduction",
          objective: "Practice mindfulness techniques; explain how they reduce stress physiologically.",
          activities: [
            {
              description: "Box Breathing Practice",
              details: ["Teach 4-4-4-4 box breathing; practice twice; measure how body feels before vs after."],
            },
            {
              description: "Mindfulness Journaling",
              details: ["5-minute guided journaling: What am I feeling? Where in my body? What triggered it?"],
            },
          ],
          reflection: "Can mindfulness help everyone? Are there limits to what it can address?",
        },
      ],
    },
    {
      week: 3,
      focus: "Communication and conflict.",
      sessions: [
        {
          sessionNumber: 5,
          title: "I-Statements and Active Listening",
          objective: "Use I-statements to express feelings without blame; practice active listening.",
          activities: [
            {
              description: "You vs I Statement Practice",
              details: ["Rewrite 6 'You-statements' ('You always ignore me') as 'I-statements' ('I feel unheard when...'). "],
            },
            {
              description: "Active Listening Role Play",
              details: ["Partner A shares a problem for 2 minutes; Partner B uses active listening (eye contact, nodding, paraphrasing)."],
            },
          ],
          reflection: "How did it feel to be truly listened to?",
        },
        {
          sessionNumber: 6,
          title: "Conflict Resolution",
          objective: "Apply a 5-step conflict resolution process to a scenario.",
          activities: [
            {
              description: "Conflict Steps",
              details: ["Teach: cool down → identify problem → brainstorm solutions → evaluate options → agree on solution."],
            },
            {
              description: "Conflict Scenario Practice",
              details: ["In pairs, apply the 5-step process to two peer conflict scenarios; debrief as a class."],
            },
          ],
          reflection: "What is the hardest step in conflict resolution? Why?",
        },
      ],
    },
    {
      week: 4,
      focus: "Healthy relationships and boundaries.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Healthy vs Unhealthy Relationships",
          objective: "Identify characteristics of healthy and unhealthy relationships across multiple types.",
          activities: [
            {
              description: "Relationship Spectrum",
              details: ["Place relationship scenario cards on a spectrum from healthy to abusive; discuss reasoning."],
            },
            {
              description: "Green/Yellow/Red Flags",
              details: ["Define green flags (mutual respect, trust), yellow flags (warning signs), red flags (abuse indicators)."],
            },
          ],
          reflection: "Why might someone stay in a relationship with yellow or red flags?",
        },
        {
          sessionNumber: 8,
          title: "Boundaries and Help-Seeking",
          objective: "Define personal boundaries; identify when and how to seek help.",
          activities: [
            {
              description: "Boundary Role Play",
              details: ["Practice saying 'no' assertively (not aggressively) in social scenarios; debrief feelings."],
            },
            {
              description: "Resource Directory",
              details: ["Create a personal 'Help Directory': list 3 trusted adults, 1 school resource, 1 community resource, 1 hotline."],
            },
          ],
          reflection: "Is asking for help a sign of weakness? How would you encourage a friend to seek help?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Emotional Awareness", level1: "Cannot identify own emotions", level2: "Identifies basic emotions", level3: "Identifies emotions and physical responses", level4: "Analyzes emotional triggers and chooses appropriate coping strategies" },
    { skill: "Relationship Analysis", level1: "Cannot identify healthy/unhealthy patterns", level2: "Identifies with heavy prompting", level3: "Identifies and explains characteristics of both types", level4: "Evaluates complex scenarios; identifies warning signs and actions to take" },
  ],
  materials: ["Mental health myth-busting cards", "Brain diagram handout", "Coping strategy sort cards", "Conflict scenario cards", "Help directory template"],
};
