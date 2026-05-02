import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Functions & Linear Systems (Grades 9–10) ───────────────────────
export const FunctionsHigh: IUnits = {
  unitTitle: "Functions & Linear Systems",
  unitDBTitle: "Functions",
  title: "Functions & Linear Systems (Grades 9–10)",
  gradeLevel: "9th – 10th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "A function assigns exactly one output to each input; systems find where two functions intersect.",
  overallExpectation:
    "Students define, evaluate, and graph functions; solve systems of linear equations algebraically and graphically.",
  essentialQuestions: [
    "What makes a relation a function?",
    "How do we find where two linear models intersect?",
    "How do functions model change in the real world?",
  ],
  skills: ["Function notation", "Domain and range", "Solving systems graphically", "Substitution and elimination"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Functions: definition, notation, and graphs.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Relations vs Functions",
          objective: "Determine whether a relation is a function using mapping diagrams and the vertical line test.",
          activities: [
            {
              description: "Mapping Diagrams",
              details: ["Create input-output tables; draw mapping diagrams; classify as function or not."],
            },
            {
              description: "Vertical Line Test",
              details: ["Graph relations on coordinate plane; apply vertical line test to identify functions."],
            },
          ],
          reflection: "Can a function have two inputs mapping to the same output? Explain.",
        },
        {
          sessionNumber: 2,
          title: "Function Notation & Evaluation",
          objective: "Use f(x) notation to evaluate functions and interpret meaning.",
          activities: [
            {
              description: "Notation Exploration",
              details: ["Evaluate f(x) = 2x – 3 for multiple inputs; interpret f(4) in context."],
            },
            {
              description: "Real-World Functions",
              details: ["Model phone data cost as a function C(m); evaluate for given usage values."],
            },
          ],
          reflection: "What is the difference between f(x) and y?",
        },
      ],
    },
    {
      week: 2,
      focus: "Domain, range, and transformations.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Domain & Range",
          objective: "Identify domain and range of functions from graphs, tables, and equations.",
          activities: [
            {
              description: "Graph Interpretation",
              details: ["Read domain (x-values) and range (y-values) from various graphs; use interval notation."],
            },
            {
              description: "Restricted Domains",
              details: ["Discuss real-world constraints (e.g., time can't be negative); restrict domain accordingly."],
            },
          ],
          reflection: "Why might a real-world function have a restricted domain?",
        },
        {
          sessionNumber: 4,
          title: "Comparing Linear Functions",
          objective: "Compare linear functions given in different representations.",
          activities: [
            {
              description: "Multi-Representation Card Match",
              details: ["Match equations, graphs, tables, and verbal descriptions of the same linear function."],
            },
            {
              description: "Rate of Change Comparison",
              details: ["Determine which of two savings plans grows faster; justify with slope."],
            },
          ],
          reflection: "Which representation of a function do you find most useful? Why?",
        },
      ],
    },
    {
      week: 3,
      focus: "Systems of linear equations — graphical and substitution.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Graphing Systems",
          objective: "Solve systems of equations by graphing and identify the solution as an intersection point.",
          activities: [
            {
              description: "Desmos Exploration",
              details: ["Graph pairs of lines on Desmos; identify one solution, no solution, infinite solutions."],
            },
            {
              description: "Break-Even Problems",
              details: ["Model cost vs revenue as two lines; find break-even point graphically."],
            },
          ],
          reflection: "What does the intersection point mean in the context of a real problem?",
        },
        {
          sessionNumber: 6,
          title: "Substitution Method",
          objective: "Solve systems algebraically using substitution.",
          activities: [
            {
              description: "Step-by-Step Substitution",
              details: ["Isolate one variable; substitute into the second equation; solve and back-substitute."],
            },
            {
              description: "Application: Mixture Problems",
              details: ["Set up and solve a mixture problem (e.g., two solutions of different concentrations)."],
            },
          ],
          reflection: "When is substitution easier than graphing?",
        },
      ],
    },
    {
      week: 4,
      focus: "Elimination method and systems review.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Elimination Method",
          objective: "Solve systems by adding or subtracting equations to eliminate a variable.",
          activities: [
            {
              description: "Add-to-Eliminate",
              details: ["Choose systems where coefficients are opposites; add equations; solve for one variable."],
            },
            {
              description: "Multiply then Eliminate",
              details: ["Multiply one or both equations to create opposite coefficients; solve systems."],
            },
          ],
          reflection: "When would you choose elimination over substitution?",
        },
        {
          sessionNumber: 8,
          title: "Systems Performance Task",
          objective: "Apply function and systems knowledge to a multi-step real-world problem.",
          activities: [
            {
              description: "Cell Phone Plan Comparison",
              details: ["Write equations for two phone plans; solve the system; recommend a plan based on usage."],
            },
            {
              description: "Exit Assessment",
              details: ["Solve one system by substitution and one by elimination; identify domain/range of a function."],
            },
          ],
          reflection: "Describe a real-world scenario where solving a system of equations is necessary.",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Function Notation", level1: "Cannot evaluate f(x)", level2: "Evaluates with errors", level3: "Evaluates and interprets correctly", level4: "Interprets in context and explains domain restrictions" },
    { skill: "Graphing Systems", level1: "Cannot graph lines", level2: "Graphs but misidentifies solution", level3: "Correctly identifies intersection", level4: "Identifies all three solution types with justification" },
    { skill: "Algebraic Methods", level1: "Cannot apply substitution", level2: "Sets up but makes algebra errors", level3: "Solves correctly by substitution or elimination", level4: "Selects optimal method and explains choice" },
  ],
  materials: ["Graphing calculators or Desmos", "Coordinate grid paper", "Multi-representation card sets", "Phone plan scenario handouts"],
};

// ── Unit 2 ── Statistics & Probability (Grades 10–12) ────────────────────────
export const StatisticsHigh: IUnits = {
  unitTitle: "Statistics & Probability",
  unitDBTitle: "Statistics",
  title: "Statistics & Probability (Grades 10–12)",
  gradeLevel: "10th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Data analysis and probability allow us to describe, predict, and make decisions under uncertainty.",
  overallExpectation:
    "Students summarize data distributions, calculate probabilities, and interpret statistical results critically.",
  essentialQuestions: [
    "How do we describe a data set fairly and accurately?",
    "What is the difference between correlation and causation?",
    "How does probability help us make better decisions?",
  ],
  skills: ["Descriptive statistics", "Data displays", "Probability rules", "Correlation and regression"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Describing data distributions.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Measures of Center & Spread",
          objective: "Calculate mean, median, mode, range, and IQR; choose appropriate measure.",
          activities: [
            {
              description: "Data Card Sort",
              details: ["Sort a data set; compute all measures of center and spread; discuss outlier effects."],
            },
            {
              description: "Robustness Comparison",
              details: ["Add an extreme outlier to data; compare how mean vs median changes; conclude on robustness."],
            },
          ],
          reflection: "When is the median a better descriptor than the mean?",
        },
        {
          sessionNumber: 2,
          title: "Data Displays",
          objective: "Create and interpret histograms, box plots, and dot plots.",
          activities: [
            {
              description: "Display Gallery",
              details: ["Create a histogram, box plot, and dot plot from the same data set; compare what each reveals."],
            },
            {
              description: "Shape of Distributions",
              details: ["Identify skewed, symmetric, and bimodal distributions from histograms; discuss implications."],
            },
          ],
          reflection: "What does a skewed distribution tell you about the data?",
        },
      ],
    },
    {
      week: 2,
      focus: "Probability fundamentals.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Basic Probability",
          objective: "Calculate theoretical and experimental probability; compare results.",
          activities: [
            {
              description: "Coin and Die Experiment",
              details: ["Run 30 trials; record experimental probability; compare to theoretical; discuss law of large numbers."],
            },
            {
              description: "Sample Space Construction",
              details: ["Use lists and tree diagrams to enumerate sample spaces for compound events."],
            },
          ],
          reflection: "Why might experimental and theoretical probabilities differ?",
        },
        {
          sessionNumber: 4,
          title: "Compound Events: AND / OR",
          objective: "Apply addition and multiplication rules for probability.",
          activities: [
            {
              description: "Venn Diagram Probability",
              details: ["Use Venn diagrams to visualize union and intersection; calculate P(A∪B) and P(A∩B)."],
            },
            {
              description: "Independence Check",
              details: ["Determine if two events are independent using P(A and B) = P(A)·P(B)."],
            },
          ],
          reflection: "What does it mean for two events to be mutually exclusive?",
        },
      ],
    },
    {
      week: 3,
      focus: "Correlation and linear regression.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Scatter Plots & Correlation",
          objective: "Create scatter plots and describe direction, form, and strength of correlation.",
          activities: [
            {
              description: "Scatter Plot Investigation",
              details: ["Plot real data (e.g., study hours vs test scores); describe correlation verbally."],
            },
            {
              description: "Correlation Coefficient",
              details: ["Use technology to compute r; interpret values from −1 to 1."],
            },
          ],
          reflection: "Does a strong correlation mean one variable causes the other?",
        },
        {
          sessionNumber: 6,
          title: "Linear Regression",
          objective: "Find and interpret a line of best fit; make predictions.",
          activities: [
            {
              description: "Least-Squares Line",
              details: ["Use Desmos/calculator to find regression line; record equation and interpret slope."],
            },
            {
              description: "Prediction & Extrapolation",
              details: ["Predict values within and beyond data range; discuss reliability of extrapolation."],
            },
          ],
          reflection: "When is extrapolation unreliable? Give an example.",
        },
      ],
    },
    {
      week: 4,
      focus: "Statistical inference and real-world data project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Sampling & Bias",
          objective: "Identify sampling methods and sources of bias in data collection.",
          activities: [
            {
              description: "Survey Design",
              details: ["Critique biased survey questions; rewrite questions to reduce bias."],
            },
            {
              description: "Sampling Methods",
              details: ["Describe random, stratified, cluster sampling; discuss when each is appropriate."],
            },
          ],
          reflection: "How can the way data is collected affect conclusions?",
        },
        {
          sessionNumber: 8,
          title: "Data Analysis Project",
          objective: "Collect, display, and analyze real data; draw and present conclusions.",
          activities: [
            {
              description: "Project Presentations",
              details: ["Groups present research question, data collection method, displays, and conclusions."],
            },
            {
              description: "Exit Assessment",
              details: ["Compute mean/median, find probability, interpret a regression equation from given data."],
            },
          ],
          reflection: "What would you do differently in your data collection if you repeated this project?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Descriptive Statistics", level1: "Cannot compute measures", level2: "Computes with errors", level3: "Computes and interprets correctly", level4: "Selects appropriate measure and justifies choice" },
    { skill: "Probability", level1: "Cannot set up sample space", level2: "Calculates simple probability only", level3: "Applies AND/OR rules correctly", level4: "Solves multi-step problems and explains independence" },
    { skill: "Regression & Correlation", level1: "Cannot create scatter plot", level2: "Describes direction only", level3: "Finds and uses regression line", level4: "Interprets r, makes predictions, discusses limitations" },
  ],
  materials: ["Graphing calculators or Desmos", "Dice and coins for experiments", "Real data sets (census, sports, science)", "Poster boards for project presentations"],
};
