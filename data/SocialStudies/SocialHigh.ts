import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── World History: Revolutions & Modern Nations (9th – 10th) ─────────
export const WorldHistoryHigh: IUnits = {
  unitTitle: "WorldHistory",
  unitDBTitle: "WorldHistory",
  title: "World History: Revolutions & Modern Nations",
  gradeLevel: "9th – 10th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Revolutions reshape political, social, and economic structures, giving rise to the modern nation-state and the world we live in today.",
  overallExpectation:
    "Students analyze the causes and consequences of major world revolutions, evaluate the ideologies that drove them, and trace how revolutionary movements transformed the political map of the modern world.",
  essentialQuestions: [
    "What conditions push ordinary people toward revolution?",
    "How do revolutions transform societies — and at what cost?",
    "What connects the revolutions of the past two centuries to the world we live in today?",
  ],
  skills: ["Historical causation", "Comparative analysis", "Primary source evaluation", "Argument construction"],
  weeklyPlan: [
    {
      week: 1,
      focus: "The Age of Revolution: Enlightenment and Atlantic revolutions.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Roots of Revolution",
          objective: "Analyze Enlightenment ideas and explain how they fueled revolutionary movements in America and France.",
          activities: [
            {
              description: "Enlightenment Idea Gallery Walk",
              details: ["Post 6 Enlightenment thinker quotes (Locke, Rousseau, Voltaire, Montesquieu); students annotate: What does this argue? How might this inspire revolution?"],
            },
            {
              description: "American vs French Revolution Comparison",
              details: ["Complete a T-chart comparing causes, key figures, outcomes, and legacies of both revolutions; discuss: Why did outcomes differ so dramatically?"],
            },
          ],
          reflection: "Which Enlightenment idea do you think was most dangerous to existing power structures? Why?",
          imgUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=Yocja_N5s1I"],
        },
        {
          sessionNumber: 2,
          title: "The Haitian Revolution",
          objective: "Explain the causes and global significance of the Haitian Revolution as the first successful slave revolt.",
          activities: [
            {
              description: "Primary Source Analysis",
              details: ["Analyze excerpts from Toussaint Louverture's letters; identify his goals, appeals, and arguments for independence."],
            },
            {
              description: "Global Impact Discussion",
              details: ["Discuss how Haiti's revolution terrified slaveholding nations and inspired abolitionists; trace its long-term consequences for Haiti and the Caribbean."],
            },
          ],
          reflection: "Why is the Haitian Revolution often absent from standard history textbooks? Why does that matter?",
          imgUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Industrial Revolution and nationalist movements.",
      sessions: [
        {
          sessionNumber: 3,
          title: "The Industrial Revolution",
          objective: "Analyze the causes and social consequences of industrialization; evaluate its impact on class, labor, and urbanization.",
          activities: [
            {
              description: "Industrial Revolution Document Analysis",
              details: ["Analyze 3 primary sources (factory worker testimonies, child labor reports, early socialist pamphlets); identify patterns in working conditions."],
            },
            {
              description: "Costs and Benefits Debate",
              details: ["Groups argue whether the Industrial Revolution was a net positive or negative for humanity; cite evidence from primary sources."],
            },
          ],
          reflection: "Who benefited most from industrialization? Who paid the greatest cost? Is that still true today?",
        },
        {
          sessionNumber: 4,
          title: "Nationalism and the Birth of Modern Nations",
          objective: "Define nationalism; trace how nationalist movements led to the unification of Germany and Italy and the dissolution of empires.",
          activities: [
            {
              description: "Nationalist Movements Map",
              details: ["Map the unification of Germany and Italy; identify key figures (Bismarck, Garibaldi) and strategies (diplomacy, warfare, propaganda)."],
            },
            {
              description: "Nationalism: Unifying and Dividing",
              details: ["Analyze cases where nationalism united people AND cases where it led to ethnic conflict; discuss: Is nationalism inherently dangerous?"],
            },
          ],
          reflection: "What gives people the right to form their own nation? Who decides?",
        },
      ],
    },
    {
      week: 3,
      focus: "20th century revolutions.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Russian Revolution & the Rise of Communism",
          objective: "Explain the causes of the Russian Revolution; evaluate how Marxist ideology shaped the Soviet state.",
          activities: [
            {
              description: "Causes of Revolution Fishbone",
              details: ["Create a fishbone diagram of causes: WWI losses, poverty, autocracy, Rasputin, food shortages; connect each to specific revolutionary events of 1917."],
            },
            {
              description: "Lenin vs Marx Comparison",
              details: ["Compare Marx's original vision in The Communist Manifesto to Lenin's adaptations; evaluate: Was the Soviet Union what Marx envisioned?"],
            },
          ],
          reflection: "Can a revolution that uses violence to end oppression end up creating new oppression? Provide evidence.",
        },
        {
          sessionNumber: 6,
          title: "Decolonization and Independence Movements",
          objective: "Analyze the causes of decolonization after WWII; evaluate independence movements in Africa and Asia.",
          activities: [
            {
              description: "Decolonization Timeline",
              details: ["Map the wave of decolonization from 1945–1975; identify which colonial powers withdrew and which resisted; note the role of WWII in weakening European empires."],
            },
            {
              description: "Case Study: Gandhi vs Nkrumah",
              details: ["Compare the nonviolent approach of Gandhi in India with the pan-African approach of Nkrumah in Ghana; evaluate the effectiveness of each strategy."],
            },
          ],
          reflection: "Why did European powers hold onto colonies even when they were expensive and faced resistance? What finally changed their calculus?",
        },
      ],
    },
    {
      week: 4,
      focus: "Cold War, globalization, and culminating project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "The Cold War World Order",
          objective: "Explain how the Cold War divided the world into competing spheres; trace its proxy conflicts and legacy.",
          activities: [
            {
              description: "Cold War Proxy Conflict Map",
              details: ["Map Cold War proxy conflicts (Korea, Vietnam, Angola, Nicaragua); identify which superpower backed each side; evaluate the human cost."],
            },
            {
              description: "Cold War Legacy Discussion",
              details: ["Identify 3 ways the Cold War still shapes today's world (NATO, nuclear treaties, U.S. foreign policy, regional instability); connect to current news."],
            },
          ],
          reflection: "Was the Cold War truly 'cold'? Who bore the heat of it?",
        },
        {
          sessionNumber: 8,
          title: "Historical Argument Presentation",
          objective: "Construct and present a historical argument connecting a revolution to a modern global issue.",
          activities: [
            {
              description: "Historical Argument Essay",
              details: ["Students write a structured 3-paragraph argument: identify a revolution, explain its most important consequence, and connect that consequence to a present-day global issue with evidence."],
            },
            {
              description: "Presentations and Peer Critique",
              details: ["Students present arguments; peers evaluate: Is the claim clear? Is the evidence strong? Is the connection to today convincing? Provide written feedback."],
            },
          ],
          reflection: "History is not just the past — it is the present in disguise. What revolution most explains the world you live in today?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Historical Causation", level1: "Cannot identify causes of revolution", level2: "Lists causes without connecting them", level3: "Explains multiple causes and their interconnections", level4: "Analyzes root vs. surface causes; evaluates competing historical interpretations" },
    { skill: "Evidence-Based Argument", level1: "Makes claims without evidence", level2: "Uses evidence but without analysis", level3: "Constructs a coherent argument with supporting evidence", level4: "Evaluates the strength of evidence; acknowledges counterarguments; connects to contemporary issues" },
  ],
  materials: ["Enlightenment thinker quote cards", "Primary source document packets", "World maps for revolutionary movements", "Fishbone diagram template", "Argument essay outline"],
};

// ── Unit 2 ── Economics: Personal Finance & Global Markets (11th – 12th) ───────
export const EconomicsHigh: IUnits = {
  unitTitle: "Economics",
  unitDBTitle: "Economics",
  title: "Economics: Personal Finance & Global Markets",
  gradeLevel: "11th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Economic decisions — from personal budgets to global trade — shape individual opportunity and collective outcomes.",
  overallExpectation:
    "Students apply economic reasoning to personal financial decisions, analyze market structures, evaluate the role of governments in economies, and assess how globalization connects local and international economic outcomes.",
  essentialQuestions: [
    "How do scarcity and incentives drive individual and collective economic decisions?",
    "What makes personal financial decisions powerful over a lifetime?",
    "How does the global economy connect to the choices I make every day?",
  ],
  skills: ["Personal financial literacy", "Supply and demand analysis", "Macroeconomic reasoning", "Global economic literacy"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Personal finance foundations.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Scarcity, Trade-offs, and Economic Thinking",
          objective: "Define scarcity, opportunity cost, and marginal thinking; apply economic reasoning to real decisions.",
          activities: [
            {
              description: "Opportunity Cost Simulation",
              details: ["Students choose how to spend a hypothetical free Saturday with 6 options; calculate opportunity cost of each choice; discuss: How does scarcity force trade-offs?"],
            },
            {
              description: "Economic Decision Frameworks",
              details: ["Apply cost-benefit analysis and marginal thinking to two everyday decisions (buying a car, choosing a college); compare outcomes with and without the framework."],
            },
          ],
          reflection: "Every decision has a cost — even doing nothing. What is the opportunity cost of a decision you made this week?",
          imgUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=3ez10ADR_gM"],
        },
        {
          sessionNumber: 2,
          title: "Budgeting and Personal Finance",
          objective: "Create a monthly budget; evaluate the impact of financial decisions on long-term wealth.",
          activities: [
            {
              description: "Paycheck Reality Simulation",
              details: ["Given a simulated entry-level salary, students calculate take-home pay after taxes; allocate to housing, food, transport, and savings using the 50/30/20 rule."],
            },
            {
              description: "Compound Interest Analysis",
              details: ["Use a calculator to show the difference between saving $100/month starting at 18 vs 30; discuss: Why does time matter so much in wealth building?"],
            },
          ],
          reflection: "What financial habit, started today, would most improve your life at 40? Why do most people not start?",
          imgUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Markets and microeconomics.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Supply, Demand, and Markets",
          objective: "Apply supply and demand analysis to explain price changes in real markets.",
          activities: [
            {
              description: "Supply and Demand Graphing",
              details: ["Graph supply and demand curves for a product; shift curves based on 3 scenarios (technology change, natural disaster, income change); identify new equilibrium."],
            },
            {
              description: "Real Market Case Study",
              details: ["Analyze a recent real-world price change (housing, gas, used cars); identify which supply or demand factors drove it; present findings to the class."],
            },
          ],
          reflection: "Prices send signals. What is a recent price change telling producers and consumers about the market?",
        },
        {
          sessionNumber: 4,
          title: "Market Structures and Competition",
          objective: "Compare perfect competition, monopoly, oligopoly, and monopolistic competition; evaluate their effects on consumers.",
          activities: [
            {
              description: "Market Structure Matrix",
              details: ["Complete a matrix: number of sellers, product differentiation, price control, real example — for each market structure."],
            },
            {
              description: "Antitrust Case Study",
              details: ["Analyze a landmark antitrust case (Standard Oil, Microsoft, Amazon); evaluate: Was the market structure harmful to consumers? What was the government response?"],
            },
          ],
          reflection: "Is monopoly always bad? Can you think of a context where one dominant provider might actually serve the public better?",
        },
      ],
    },
    {
      week: 3,
      focus: "Macroeconomics and government policy.",
      sessions: [
        {
          sessionNumber: 5,
          title: "GDP, Unemployment, and Inflation",
          objective: "Define and interpret key macroeconomic indicators; explain the trade-offs governments face in managing the economy.",
          activities: [
            {
              description: "Macroeconomic Indicators Dashboard",
              details: ["Research current GDP growth, unemployment rate, and inflation for one country; interpret what each indicator signals about economic health."],
            },
            {
              description: "Phillips Curve Trade-off Discussion",
              details: ["Introduce the historical trade-off between inflation and unemployment; analyze: Can governments reduce both simultaneously? What do recent data suggest?"],
            },
          ],
          reflection: "If you were advising a government with 8% inflation and 5% unemployment, what would you prioritize? Why?",
        },
        {
          sessionNumber: 6,
          title: "Fiscal and Monetary Policy",
          objective: "Distinguish fiscal from monetary policy; evaluate how each is used to stabilize the economy.",
          activities: [
            {
              description: "Policy Tools Simulation",
              details: ["Given an economic scenario (recession or inflation), students choose fiscal tools (spending, taxes) and monetary tools (interest rates, money supply) and predict outcomes."],
            },
            {
              description: "Federal Reserve Analysis",
              details: ["Read a recent Federal Reserve statement; identify the economic goal, the policy tool chosen, and the expected effect; evaluate whether it is likely to achieve its goal."],
            },
          ],
          reflection: "Government economic policy always has winners and losers. Who tends to benefit most from low interest rates? Who is hurt by high inflation?",
        },
      ],
    },
    {
      week: 4,
      focus: "Global economy and financial literacy culmination.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Globalization and International Trade",
          objective: "Apply comparative advantage theory to explain trade patterns; evaluate the benefits and costs of globalization.",
          activities: [
            {
              description: "Comparative Advantage Activity",
              details: ["Simulate two countries producing two goods; demonstrate how specialization and trade increases total output; connect to real-world trade patterns."],
            },
            {
              description: "Globalization Debate",
              details: ["Groups argue pro and con positions on globalization using economic, social, and environmental evidence; evaluate: Has globalization been a net positive for low-income countries?"],
            },
          ],
          reflection: "Is free trade always fair trade? What rules would make global trade more equitable?",
        },
        {
          sessionNumber: 8,
          title: "Personal Finance Plan Presentation",
          objective: "Present a comprehensive 10-year personal financial plan integrating unit concepts.",
          activities: [
            {
              description: "10-Year Financial Plan",
              details: ["Create a plan covering: post-high-school path (college, trade, work), estimated income and expenses at 22 and 28, savings and investment strategy, one financial goal and the steps to achieve it."],
            },
            {
              description: "Peer Feedback and Reflection",
              details: ["Students present plans; peers evaluate feasibility and completeness; students revise based on feedback and write a unit reflection on what economic thinking they will carry forward."],
            },
          ],
          reflection: "Economic literacy is a superpower most people never develop. What is one thing from this unit that will actually change how you make decisions?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Economic Reasoning", level1: "Cannot apply economic concepts to decisions", level2: "Applies one concept with prompting", level3: "Applies multiple economic concepts to real decisions with evidence", level4: "Evaluates trade-offs with nuance; connects micro and macro reasoning; challenges assumptions" },
    { skill: "Financial Literacy", level1: "Cannot create a functional budget", level2: "Creates a budget with errors or gaps", level3: "Builds a realistic personal finance plan with savings strategy", level4: "Integrates compound interest, opportunity cost, and economic context into a sophisticated long-term plan" },
  ],
  materials: ["Budget simulation worksheet", "Supply and demand graph templates", "Macroeconomic indicator data sources", "Comparative advantage simulation materials", "10-year financial plan template"],
};
