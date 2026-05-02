import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Health Literacy & Chronic Disease Prevention (Grades 9–12) ──────
export const HealthLiteracyHigh: IUnits = {
  unitTitle: "Health Literacy & Chronic Disease Prevention",
  unitDBTitle: "HealthLiteracy",
  title: "Health Literacy & Chronic Disease Prevention (Grades 9–12)",
  gradeLevel: "9th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Health literacy empowers informed decision-making; most chronic diseases are preventable through lifestyle choices.",
  overallExpectation:
    "Students evaluate health information critically, analyze risk factors for chronic disease, and develop an evidence-based personal prevention plan.",
  essentialQuestions: [
    "What does it mean to be 'health literate'?",
    "How do social determinants of health affect disease rates?",
    "What actions taken now will affect your health in 20 years?",
  ],
  skills: ["Evaluating health information", "Chronic disease risk analysis", "Social determinants of health", "Evidence-based decision making"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Health literacy and information evaluation.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is Health Literacy?",
          objective: "Define health literacy; evaluate credibility of health information sources.",
          activities: [
            {
              description: "Misinformation Audit",
              details: ["Analyze 3 health claims from social media; use a credibility checklist to rate each as reliable, questionable, or false."],
            },
            {
              description: "Credible Sources Discussion",
              details: ["Identify trusted health organizations (WHO, CDC, NIH); practice locating accurate health statistics."],
            },
          ],
          reflection: "Why is it dangerous to follow health advice from unverified sources?",
        },
        {
          sessionNumber: 2,
          title: "Health Data Interpretation",
          objective: "Read and interpret graphs and statistics from public health data.",
          activities: [
            {
              description: "Mortality Chart Analysis",
              details: ["Analyze leading causes of death by age group; identify which are most preventable; discuss trends."],
            },
            {
              description: "Cohort Study Basics",
              details: ["Explain the difference between correlation and causation using a public health example."],
            },
          ],
          reflection: "What is the difference between 'increases risk' and 'causes' a disease?",
        },
      ],
    },
    {
      week: 2,
      focus: "Chronic disease and risk factors.",
      sessions: [
        {
          sessionNumber: 3,
          title: "The Big Four Chronic Diseases",
          objective: "Identify cardiovascular disease, cancer, diabetes, and chronic respiratory disease as leading killers; list modifiable risk factors.",
          activities: [
            {
              description: "Disease Profile Cards",
              details: ["Research one chronic disease; create a profile: prevalence, risk factors (modifiable/non-modifiable), prevention."],
            },
            {
              description: "Risk Factor Web",
              details: ["Map how shared risk factors (obesity, smoking, inactivity) contribute to multiple chronic diseases."],
            },
          ],
          reflection: "Why do so many chronic diseases share the same risk factors?",
        },
        {
          sessionNumber: 4,
          title: "Nutrition and Disease",
          objective: "Analyze dietary patterns linked to chronic disease; evaluate popular diets.",
          activities: [
            {
              description: "Popular Diet Analysis",
              details: ["Compare 3 popular diets (Mediterranean, keto, whole30) using WHO/CDC nutritional criteria; rate each."],
            },
            {
              description: "Food Environment Discussion",
              details: ["Discuss food deserts and food access inequality; analyze how environment shapes diet choices."],
            },
          ],
          reflection: "Is eating healthily a matter of personal choice alone? What factors make it harder for some people?",
        },
      ],
    },
    {
      week: 3,
      focus: "Social determinants of health.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Social Determinants Overview",
          objective: "Identify the 5 key domains of social determinants; explain their impact on health outcomes.",
          activities: [
            {
              description: "Health Equity Video",
              details: ["Watch a documentary clip on health disparities; list social factors that contributed to unequal outcomes."],
            },
            {
              description: "Zip Code vs Genetic Code",
              details: ["Compare life expectancy data across zip codes in one city; discuss disparities and their causes."],
            },
          ],
          reflection: "Is the current disparity in health outcomes fair? What systemic changes would help?",
        },
        {
          sessionNumber: 6,
          title: "Substance Use and Brain Health",
          objective: "Analyze how nicotine, alcohol, and other substances affect the developing brain.",
          activities: [
            {
              description: "Brain Development Timeline",
              details: ["The brain develops until age 25; map which functions are most vulnerable to substance disruption."],
            },
            {
              description: "Media Influence Analysis",
              details: ["Analyze alcohol/tobacco advertising; identify persuasion techniques used to target youth."],
            },
          ],
          reflection: "Why are substance use risks higher for teenagers than for adults?",
        },
      ],
    },
    {
      week: 4,
      focus: "Personal prevention plan.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Preventive Health Behaviors",
          objective: "Identify screenings, vaccinations, and lifestyle behaviors that reduce chronic disease risk.",
          activities: [
            {
              description: "Preventive Care Timeline",
              details: ["Create a personal preventive care timeline: screenings and vaccinations recommended from age 18–50."],
            },
            {
              description: "Health Insurance Literacy",
              details: ["Explain deductibles, co-pays, and coverage basics; practice reading a simplified insurance plan."],
            },
          ],
          reflection: "Why is preventive care cheaper for society than treating disease after it develops?",
        },
        {
          sessionNumber: 8,
          title: "Personal Prevention Plan",
          objective: "Create and present an evidence-based personal health prevention plan.",
          activities: [
            {
              description: "Prevention Plan Development",
              details: ["Write a plan covering: nutrition goal, activity goal, sleep goal, stress management strategy, and one preventive care action."],
            },
            {
              description: "Peer Presentation",
              details: ["Present plan in pairs; partner gives feedback on specificity, evidence-basis, and feasibility."],
            },
          ],
          reflection: "What is one health behavior you are willing to change starting this week?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Health Literacy", level1: "Cannot evaluate sources", level2: "Identifies credible sources without explanation", level3: "Evaluates sources using specific criteria", level4: "Critically analyzes health claims and identifies misleading data" },
    { skill: "Prevention Planning", level1: "No goals or no evidence base", level2: "Goals present but not SMART", level3: "SMART goals with some evidence support", level4: "Comprehensive, evidence-based plan addressing multiple health domains" },
  ],
  materials: ["WHO/CDC health data access", "Social media health claim examples", "Popular diet comparison charts", "Zip code life expectancy maps", "Insurance literacy handout"],
};

// ── Unit 2 ── Sexual Health & Consent (Grades 10–12) ─────────────────────────
export const SexualHealthHigh: IUnits = {
  unitTitle: "Sexual Health & Consent",
  unitDBTitle: "SexualHealth",
  title: "Sexual Health & Consent (Grades 10–12)",
  gradeLevel: "10th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Sexual health is a component of overall wellness; consent, respect, and communication are foundational to healthy relationships.",
  overallExpectation:
    "Students understand sexual health, reproductive anatomy, STI prevention, consent, and healthy relationship standards using medically accurate, age-appropriate information.",
  essentialQuestions: [
    "What are the components of sexual health?",
    "What does meaningful consent look like in practice?",
    "What factors contribute to healthy intimate relationships?",
  ],
  skills: ["Reproductive health knowledge", "STI prevention", "Consent and boundaries", "Communication in relationships"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Sexual health foundations.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Components of Sexual Health",
          objective: "Define sexual health using WHO's framework; describe its connection to overall wellbeing.",
          activities: [
            {
              description: "Anonymous Question Box",
              details: ["Students submit anonymous questions; teacher addresses common questions to normalize discussion."],
            },
            {
              description: "WHO Sexual Health Framework",
              details: ["Review WHO's definition; discuss physical, emotional, social, and societal components."],
            },
          ],
          reflection: "Why is sexual health part of overall wellness rather than a separate topic?",
        },
        {
          sessionNumber: 2,
          title: "Reproductive Anatomy",
          objective: "Identify and explain the function of male and female reproductive structures.",
          activities: [
            {
              description: "Anatomy Diagram Labeling",
              details: ["Label diagrams of male and female reproductive systems; use correct medical terminology."],
            },
            {
              description: "Hormonal Changes in Adolescence",
              details: ["Describe puberty-related hormonal changes; connect to physical, emotional, and social development."],
            },
          ],
          reflection: "Why is it important to use correct medical terminology when discussing anatomy?",
        },
      ],
    },
    {
      week: 2,
      focus: "STI prevention and contraception.",
      sessions: [
        {
          sessionNumber: 3,
          title: "STIs: Prevention and Testing",
          objective: "Identify common STIs, transmission routes, prevention methods, and importance of testing.",
          activities: [
            {
              description: "STI Fact Cards",
              details: ["Create fact cards for HIV, chlamydia, gonorrhea, HPV, herpes: transmission, symptoms, prevention, treatment."],
            },
            {
              description: "Stigma Discussion",
              details: ["Discuss why STI stigma prevents people from getting tested; emphasize that testing is responsible behavior."],
            },
          ],
          reflection: "How does reducing stigma around STIs contribute to public health?",
        },
        {
          sessionNumber: 4,
          title: "Contraception Methods",
          objective: "Compare contraception methods by effectiveness, STI protection, and appropriate use.",
          activities: [
            {
              description: "Contraception Comparison Chart",
              details: ["Complete a chart: method, how it works, % effective (typical/perfect use), STI protection (yes/no)."],
            },
            {
              description: "Decision-Making Scenarios",
              details: ["Analyze health decision scenarios; discuss which factors influence contraception choices."],
            },
          ],
          reflection: "What barriers might prevent someone from accessing contraception, and how can those be addressed?",
        },
      ],
    },
    {
      week: 3,
      focus: "Consent.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Understanding Consent",
          objective: "Define consent using FRIES (Freely given, Reversible, Informed, Enthusiastic, Specific).",
          activities: [
            {
              description: "FRIES Framework",
              details: ["Define each component; analyze scenarios to determine if consent is present or absent."],
            },
            {
              description: "Consent Misconceptions",
              details: ["Address common myths: 'implied consent', 'no means maybe', 'can't revoke'; clarify each with evidence."],
            },
          ],
          reflection: "Can consent be given if someone feels pressured? Why or why not?",
        },
        {
          sessionNumber: 6,
          title: "Consent in Practice",
          objective: "Demonstrate how to ask for, give, and refuse consent clearly and respectfully.",
          activities: [
            {
              description: "Communication Role Play",
              details: ["Practice conversations: asking clearly, saying yes enthusiastically, saying no assertively, accepting no gracefully."],
            },
            {
              description: "Digital Consent",
              details: ["Discuss consent in the context of sharing images, social media, and digital communication."],
            },
          ],
          reflection: "What makes it hard to say no or stop in some situations? How can communication help?",
        },
      ],
    },
    {
      week: 4,
      focus: "Healthy intimate relationships.",
      sessions: [
        {
          sessionNumber: 7,
          title: "What Healthy Looks Like",
          objective: "Identify characteristics of healthy intimate relationships: trust, respect, equity, communication.",
          activities: [
            {
              description: "Relationship Wheel Analysis",
              details: ["Analyze the Power and Control Wheel vs Equality Wheel; identify specific behaviors in each section."],
            },
            {
              description: "Media Relationship Critique",
              details: ["Analyze a TV/movie relationship; identify healthy and unhealthy dynamics; discuss normalization of red flags in media."],
            },
          ],
          reflection: "How does media affect what we consider 'normal' in relationships?",
        },
        {
          sessionNumber: 8,
          title: "Resources and Support",
          objective: "Identify community and online resources for sexual health and relationship support.",
          activities: [
            {
              description: "Resource Mapping",
              details: ["Identify local clinics, school resources, hotlines (RAINN, Planned Parenthood), and apps for sexual health information."],
            },
            {
              description: "Unit Reflection & Exit Assessment",
              details: ["Complete: define consent using FRIES, identify one STI prevention method, describe one characteristic of a healthy relationship."],
            },
          ],
          reflection: "What is one thing you learned in this unit that you wish you had known earlier?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Health Knowledge", level1: "Cannot describe basic sexual health concepts", level2: "States facts without application", level3: "Explains STI prevention and contraception accurately", level4: "Applies knowledge to complex scenarios; addresses stigma and access issues" },
    { skill: "Consent Understanding", level1: "Cannot define consent", level2: "Defines consent without application", level3: "Applies FRIES framework to scenarios", level4: "Analyzes nuanced scenarios; communicates clearly about consent" },
  ],
  materials: ["WHO sexual health framework handout", "Anatomy diagrams", "STI fact card templates", "Contraception comparison chart", "Power & Control / Equality Wheels", "Resource directory"],
};
