import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Ratios & Proportional Reasoning (Grades 6–7) ───────────────────
export const RatiosMiddle: IUnits = {
  unitTitle: "Ratios & Proportional Reasoning",
  unitDBTitle: "Ratios",
  title: "Ratios & Proportional Reasoning (Grades 6–7)",
  gradeLevel: "6th – 7th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "A ratio compares two quantities; proportional reasoning scales relationships.",
  overallExpectation:
    "Students understand ratios and rates, solve proportions, and apply them to real-world problems including percent.",
  essentialQuestions: [
    "What does it mean for two quantities to be proportional?",
    "How can ratios help us make predictions?",
    "Where do we encounter rates and percentages every day?",
  ],
  skills: ["Writing ratios", "Unit rates", "Solving proportions", "Percent problems"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Understanding ratios and unit rates.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Introducing Ratios",
          objective: "Write and interpret ratios in three forms (a:b, a/b, 'a to b').",
          activities: [
            {
              description: "Ratio Exploration",
              details: ["Students compare colored tiles; write ratios part-to-part and part-to-whole."],
            },
            {
              description: "Ratio Tables",
              details: ["Complete ratio tables and identify equivalent ratios using multiplication."],
            },
          ],
          reflection: "What real-world situation can you describe with a ratio?",
        },
        {
          sessionNumber: 2,
          title: "Unit Rates",
          objective: "Calculate and compare unit rates from real-world contexts.",
          activities: [
            {
              description: "Price Comparison",
              details: ["Compare prices per ounce of two products; determine better buy using unit rate."],
            },
            {
              description: "Speed Problems",
              details: ["Compute unit rates for speed (miles per hour); order three vehicles by speed."],
            },
          ],
          reflection: "When is a unit rate useful in everyday decisions?",
        },
      ],
    },
    {
      week: 2,
      focus: "Solving proportions.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Setting Up Proportions",
          objective: "Set up and solve proportions using cross-multiplication.",
          activities: [
            {
              description: "Cross-Multiplication Practice",
              details: ["Model cross-multiplication with visual diagrams; solve 10 proportion equations."],
            },
            {
              description: "Map Scale Activity",
              details: ["Use a map scale (1 cm = 50 km) to calculate real distances between cities."],
            },
          ],
          reflection: "How do you know which quantities to put in each part of a proportion?",
        },
        {
          sessionNumber: 4,
          title: "Proportions in the Real World",
          objective: "Apply proportions to recipe scaling and similar figures.",
          activities: [
            {
              description: "Recipe Scaling",
              details: ["Scale a recipe for 4 servings up to 18 servings using proportions."],
            },
            {
              description: "Similar Figures",
              details: ["Find missing side lengths of similar triangles/rectangles using proportional reasoning."],
            },
          ],
          reflection: "What other situations require proportional thinking?",
        },
      ],
    },
    {
      week: 3,
      focus: "Percent concepts and calculations.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Percent as a Ratio",
          objective: "Convert between fractions, decimals, and percents.",
          activities: [
            {
              description: "Conversion Tri-Fold",
              details: ["Fill a tri-column chart: fraction ↔ decimal ↔ percent for 12 common values."],
            },
            {
              description: "Hundredths Grid",
              details: ["Shade grids to visualize percents; write corresponding fraction and decimal."],
            },
          ],
          reflection: "Why are percents a useful way to express parts of a whole?",
        },
        {
          sessionNumber: 6,
          title: "Finding Percent of a Number",
          objective: "Solve percent problems: find the part, whole, or percent.",
          activities: [
            {
              description: "Three Types of Percent Problems",
              details: ["Model 'What is 30% of 80?', 'What % is 12 of 48?', '18 is 45% of what?' with bar models."],
            },
            {
              description: "Discount & Tax",
              details: ["Calculate sale price (20% off) and total with tax (8%) on a shopping receipt."],
            },
          ],
          reflection: "Which type of percent problem do you find hardest? Why?",
        },
      ],
    },
    {
      week: 4,
      focus: "Percent change and unit review.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Percent Increase & Decrease",
          objective: "Calculate percent change and apply to real-world situations.",
          activities: [
            {
              description: "Percent Change Formula",
              details: ["Introduce formula (change/original × 100); practice with population and price changes."],
            },
            {
              description: "Data Analysis",
              details: ["Analyze a table of sports statistics; identify the greatest percent change."],
            },
          ],
          reflection: "Is a 10% increase always the same amount? Explain.",
        },
        {
          sessionNumber: 8,
          title: "Proportional Reasoning Review",
          objective: "Demonstrate mastery across ratio, proportion, and percent topics.",
          activities: [
            {
              description: "Math Market Simulation",
              details: ["Students 'shop' for items, calculate discounts, compare unit prices, and total with tax."],
            },
            {
              description: "Exit Assessment",
              details: ["Six-problem quiz covering unit rates, proportions, and percent."],
            },
          ],
          reflection: "Describe one way proportional reasoning will help you outside school.",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Unit Rates", level1: "Cannot compute unit rates", level2: "Computes unit rates with errors", level3: "Computes unit rates accurately", level4: "Compares and explains unit rates fluently" },
    { skill: "Solving Proportions", level1: "Cannot set up proportions", level2: "Sets up but miscalculates", level3: "Solves proportions correctly", level4: "Applies to novel contexts with explanation" },
    { skill: "Percent Calculations", level1: "Cannot convert between forms", level2: "Converts with support", level3: "Solves all three percent types", level4: "Solves multi-step percent problems independently" },
  ],
  materials: ["Colored tiles", "Ratio tables worksheet", "Graph paper", "Maps with scale", "Shopping receipt templates"],
};

// ── Unit 2 ── Expressions, Equations & Inequalities (Grades 7–8) ─────────────
export const AlgebraMiddle: IUnits = {
  unitTitle: "Expressions, Equations & Inequalities",
  unitDBTitle: "Algebra",
  title: "Expressions, Equations & Inequalities (Grades 7–8)",
  gradeLevel: "7th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Variables represent unknown quantities; equations and inequalities model real-world constraints.",
  overallExpectation:
    "Students write, simplify, and solve linear equations and inequalities, and represent solutions on number lines and coordinate planes.",
  essentialQuestions: [
    "What is a variable and why is it useful?",
    "How do we use equations to model real-world situations?",
    "What does the solution to an inequality look like?",
  ],
  skills: ["Simplifying expressions", "Solving one- and two-step equations", "Graphing inequalities", "Slope-intercept form"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Algebraic expressions and simplification.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Variables & Expressions",
          objective: "Write algebraic expressions from verbal descriptions and simplify.",
          activities: [
            {
              description: "Algebra Tiles",
              details: ["Use tiles to model expressions; combine like terms physically before writing symbolically."],
            },
            {
              description: "Expression Gallery",
              details: ["Match verbal descriptions to algebraic expressions; correct misconceptions in pairs."],
            },
          ],
          reflection: "What is the difference between an expression and an equation?",
        },
        {
          sessionNumber: 2,
          title: "Distributive Property",
          objective: "Apply the distributive property to expand and factor expressions.",
          activities: [
            {
              description: "Area Model",
              details: ["Draw area models for 3(x + 5) and similar; connect to symbolic distribution."],
            },
            {
              description: "Factoring Practice",
              details: ["Factor expressions such as 6x + 9 by identifying GCF; verify by expanding."],
            },
          ],
          reflection: "How does the area model help you understand distribution?",
        },
      ],
    },
    {
      week: 2,
      focus: "Solving linear equations.",
      sessions: [
        {
          sessionNumber: 3,
          title: "One- and Two-Step Equations",
          objective: "Solve one- and two-step equations using inverse operations.",
          activities: [
            {
              description: "Balance Scale Model",
              details: ["Use a balance metaphor: what you do to one side, do to the other; solve step-by-step."],
            },
            {
              description: "Equation Relay",
              details: ["Teams pass a paper; each member solves one step of a multi-step equation."],
            },
          ],
          reflection: "Why must you perform the same operation on both sides?",
        },
        {
          sessionNumber: 4,
          title: "Equations with Variables on Both Sides",
          objective: "Solve equations with variables on both sides by collecting terms.",
          activities: [
            {
              description: "Collect Like Terms",
              details: ["Model with algebra tiles; practice collecting variable terms to one side."],
            },
            {
              description: "Word Problem Workshop",
              details: ["Translate word problems to equations with variables on both sides; solve and check."],
            },
          ],
          reflection: "What step do you always take first when variables appear on both sides?",
        },
      ],
    },
    {
      week: 3,
      focus: "Inequalities and their graphs.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Understanding Inequalities",
          objective: "Write and interpret inequalities; graph solutions on a number line.",
          activities: [
            {
              description: "Inequality Symbols",
              details: ["Review <, >, ≤, ≥; use open/closed circles on number line to represent solutions."],
            },
            {
              description: "Real-Life Inequalities",
              details: ["Model 'you must be at least 48 inches tall'; write inequality and graph solution set."],
            },
          ],
          reflection: "How is solving an inequality similar to solving an equation?",
        },
        {
          sessionNumber: 6,
          title: "Solving Two-Step Inequalities",
          objective: "Solve two-step inequalities and graph solutions; identify when to flip the inequality sign.",
          activities: [
            {
              description: "Sign-Flip Investigation",
              details: ["Show by example that multiplying/dividing by a negative flips the sign; practice 8 problems."],
            },
            {
              description: "Application Problems",
              details: ["Solve budget and time-constraint problems; graph and interpret solution sets."],
            },
          ],
          reflection: "Why does the inequality sign reverse when you multiply by a negative?",
        },
      ],
    },
    {
      week: 4,
      focus: "Linear relationships and slope-intercept form.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Slope & Rate of Change",
          objective: "Calculate slope from two points and interpret as rate of change.",
          activities: [
            {
              description: "Rise Over Run",
              details: ["Graph points; count rise and run visually; confirm with formula (y₂-y₁)/(x₂-x₁)."],
            },
            {
              description: "Slope in Context",
              details: ["Interpret slope in distance-time and cost graphs; state meaning in words."],
            },
          ],
          reflection: "What does a negative slope mean in a real-world context?",
        },
        {
          sessionNumber: 8,
          title: "Slope-Intercept Form & Review",
          objective: "Write and graph linear equations in y = mx + b form.",
          activities: [
            {
              description: "Graphing y = mx + b",
              details: ["Identify slope and y-intercept; plot y-intercept then use slope to find two more points."],
            },
            {
              description: "Unit Performance Task",
              details: ["Write an equation for a real-world linear scenario, graph it, and interpret slope/intercept."],
            },
          ],
          reflection: "What information does y = mx + b immediately tell you about a line?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Simplifying Expressions", level1: "Cannot combine like terms", level2: "Combines with errors", level3: "Simplifies correctly", level4: "Applies distribution and factoring fluently" },
    { skill: "Solving Equations", level1: "Cannot isolate variable", level2: "Solves one-step only", level3: "Solves two-step and both-side equations", level4: "Solves and explains each step" },
    { skill: "Graphing Inequalities", level1: "Cannot graph on number line", level2: "Graphs with circle errors", level3: "Graphs correctly with open/closed circles", level4: "Solves, graphs, and interprets in context" },
  ],
  materials: ["Algebra tiles", "Graph paper", "Balance scale manipulative", "Coordinate grid worksheets"],
};
