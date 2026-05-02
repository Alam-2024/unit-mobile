import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Number Sense & Operations (Grades 1–3) ─────────────────────────
export const NumberSenseElementary: IUnits = {
  unitTitle: "Number Sense & Operations",
  unitDBTitle: "NumberSense",
  title: "Number Sense & Operations (Grades 1–3)",
  gradeLevel: "1st – 3rd Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Understanding quantities and how numbers relate to each other.",
  overallExpectation:
    "Students count, compare, add, and subtract within 100 using concrete models and mental strategies.",
  essentialQuestions: [
    "What does a number represent?",
    "How can we use place value to add and subtract?",
    "Where do we use math in daily life?",
  ],
  skills: ["Counting to 100", "Place value (tens & ones)", "Addition within 20", "Subtraction within 20"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Counting collections and understanding place value.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Counting Collections",
          objective: "Count objects up to 100 and record with a numeral.",
          activities: [
            {
              description: "Number Talk warm-up",
              details: ["Teacher shows a dot image; students share how many and how they counted."],
            },
            {
              description: "Counting Collections",
              details: ["Groups count bags of objects (50–100 items) and record totals on a recording sheet."],
            },
          ],
          reflection: "What strategy helped you count accurately?",
          imgUrl: "https://images.unsplash.com/photo-RTFX0TQHXko?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=wx2gI8iwMCA"],
        },
        {
          sessionNumber: 2,
          title: "Tens and Ones",
          objective: "Group objects into tens and ones to understand place value.",
          activities: [
            {
              description: "Base-Ten Blocks Exploration",
              details: ["Students build numbers using base-ten blocks, recording tens and ones."],
            },
            {
              description: "Two-Digit Number Match",
              details: ["Match numeral cards to base-ten block representations."],
            },
          ],
          reflection: "Why is it helpful to group by tens?",
          imgUrl: "https://images.unsplash.com/photo-ngssXH33ve0?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Addition strategies within 20.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Adding with Number Lines",
          objective: "Use a number line to add two single-digit numbers.",
          activities: [
            {
              description: "Number Line Jumps",
              details: ["Model addition as jumps on an open number line; students practice in pairs."],
            },
            {
              description: "Story Problems",
              details: ["Solve addition story problems by drawing a number line and recording the equation."],
            },
          ],
          reflection: "How does the number line show adding?",
        },
        {
          sessionNumber: 4,
          title: "Make a Ten Strategy",
          objective: "Use the Make-a-Ten strategy to add efficiently.",
          activities: [
            {
              description: "Ten-Frame Demonstration",
              details: ["Show how to bridge to 10 using ten frames; e.g. 8 + 5 = 8 + 2 + 3."],
            },
            {
              description: "Practice Cards",
              details: ["Partners solve addition cards using Make-a-Ten, explaining steps aloud."],
            },
          ],
          reflection: "Which strategy feels fastest for you?",
        },
      ],
    },
    {
      week: 3,
      focus: "Subtraction strategies within 20.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Subtraction as Difference",
          objective: "Understand subtraction as finding the difference between two numbers.",
          activities: [
            {
              description: "Comparison Story Problems",
              details: ["Solve 'how many more' problems using cubes and number lines."],
            },
            {
              description: "Equation Practice",
              details: ["Write and solve subtraction equations from pictorial representations."],
            },
          ],
          reflection: "What does subtraction mean to you in your own words?",
        },
        {
          sessionNumber: 6,
          title: "Related Facts (Fact Families)",
          objective: "Use addition to check subtraction; build fact families.",
          activities: [
            {
              description: "Fact Family Houses",
              details: ["Students complete fact family triangles (e.g. 7, 3, 10) with all four related equations."],
            },
            {
              description: "Fluency Partner Practice",
              details: ["Flash card drill in pairs; record equations correctly."],
            },
          ],
          reflection: "How do addition and subtraction connect?",
        },
      ],
    },
    {
      week: 4,
      focus: "Applying operations to solve word problems.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Multi-Step Word Problems",
          objective: "Solve two-step addition and subtraction word problems.",
          activities: [
            {
              description: "Read, Draw, Write (RDW)",
              details: ["Model RDW strategy: read problem, draw a picture/number line, write equation."],
            },
            {
              description: "Partner Problem-Solving",
              details: ["Pairs solve problems and explain solution paths; rotate roles."],
            },
          ],
          reflection: "What information in a word problem helps you decide which operation to use?",
        },
        {
          sessionNumber: 8,
          title: "Math Share & Showcase",
          objective: "Present solution strategies and celebrate growth.",
          activities: [
            {
              description: "Gallery Walk",
              details: ["Students post solved problems; peers leave sticky-note feedback."],
            },
            {
              description: "Exit Ticket",
              details: ["Two addition and two subtraction problems to assess fluency."],
            },
          ],
          reflection: "What is one math strategy you will keep using? Why?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Counting to 100", level1: "Cannot count past 20", level2: "Counts to 50 with errors", level3: "Counts to 100 accurately", level4: "Counts, groups by tens, explains strategy" },
    { skill: "Addition within 20", level1: "Uses only fingers", level2: "Counts on from larger number", level3: "Uses Make-a-Ten strategy", level4: "Solves fluently and explains strategy" },
  ],
  materials: ["Base-ten blocks", "Number lines", "Ten frames", "Counting collections bags"],
};

// ── Unit 2 ── Fractions Introduction (Grades 3–5) ────────────────────────────
export const FractionsElementary: IUnits = {
  unitTitle: "Introduction to Fractions",
  unitDBTitle: "Fractions",
  title: "Introduction to Fractions (Grades 3–5)",
  gradeLevel: "3rd – 5th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Fractions represent equal parts of a whole or a set.",
  overallExpectation:
    "Students identify, compare, and order fractions, and begin adding/subtracting fractions with like denominators.",
  essentialQuestions: [
    "What does a fraction represent?",
    "How do we compare fractions fairly?",
    "Where do we use fractions in everyday life?",
  ],
  skills: ["Naming fractions", "Comparing fractions", "Equivalent fractions", "Adding fractions with like denominators"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Understanding fractions as equal parts of a whole.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is a Fraction?",
          objective: "Define fraction and identify numerator/denominator.",
          activities: [
            {
              description: "Paper Folding",
              details: ["Fold paper into halves, quarters, eighths; shade and label fractions."],
            },
            {
              description: "Fraction Sort",
              details: ["Sort fraction pictures by whether they show equal or unequal parts."],
            },
          ],
          reflection: "Why must the parts be equal to name a fraction?",
          imgUrl: "https://images.unsplash.com/photo-ngssXH33ve0?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=jgWqSjgMAtw"],
        },
        {
          sessionNumber: 2,
          title: "Fractions on a Number Line",
          objective: "Place fractions on a number line between 0 and 1.",
          activities: [
            {
              description: "Number Line Construction",
              details: ["Divide a number line into thirds, fourths, sixths; place fraction cards."],
            },
            {
              description: "Partner Race",
              details: ["Race to correctly place fraction cards on number lines in pairs."],
            },
          ],
          reflection: "How does the number line help you understand fraction size?",
          imgUrl: "https://images.unsplash.com/photo-ngssXH33ve0?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Comparing and ordering fractions.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Comparing with Same Denominator",
          objective: "Compare fractions with the same denominator using >, <, =.",
          activities: [
            {
              description: "Fraction Bar Models",
              details: ["Color fraction bars and compare shaded amounts side by side."],
            },
            {
              description: "Inequality Practice",
              details: ["Write comparison statements for pairs of fractions."],
            },
          ],
          reflection: "What shortcut helps when denominators match?",
        },
        {
          sessionNumber: 4,
          title: "Equivalent Fractions",
          objective: "Identify and generate equivalent fractions using models.",
          activities: [
            {
              description: "Folding Equivalents",
              details: ["Fold paper into halves then re-fold to see 2/4 = 1/2."],
            },
            {
              description: "Multiplication Rule",
              details: ["Show that multiplying numerator and denominator by same number creates equivalent fraction."],
            },
          ],
          reflection: "Are equivalent fractions the same size? How do you know?",
        },
      ],
    },
    {
      week: 3,
      focus: "Adding and subtracting fractions with like denominators.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Adding Fractions (Same Denominator)",
          objective: "Add fractions with like denominators using models.",
          activities: [
            {
              description: "Pizza Model",
              details: ["Use paper pizza divided into 8 slices; add slices to write fraction addition."],
            },
            {
              description: "Equation Writing",
              details: ["Transfer model work to written equations; simplify where possible."],
            },
          ],
          reflection: "Why doesn't the denominator change when we add?",
        },
        {
          sessionNumber: 6,
          title: "Subtracting Fractions (Same Denominator)",
          objective: "Subtract fractions with like denominators.",
          activities: [
            {
              description: "Tape Diagram Subtraction",
              details: ["Use tape diagrams to model fraction subtraction; record equations."],
            },
            {
              description: "Word Problems",
              details: ["Solve fraction subtraction story problems in context (e.g. eating pizza slices)."],
            },
          ],
          reflection: "How is subtracting fractions like subtracting whole numbers?",
        },
      ],
    },
    {
      week: 4,
      focus: "Real-world applications and review.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Fractions in the Real World",
          objective: "Apply fraction knowledge to measurement and cooking contexts.",
          activities: [
            {
              description: "Recipe Scaling",
              details: ["Use a simple recipe; double or halve ingredient amounts expressed as fractions."],
            },
            {
              description: "Measurement Hunt",
              details: ["Measure objects with a ruler to the nearest 1/4 inch; record fractions."],
            },
          ],
          reflection: "Name one place outside school where you use fractions.",
        },
        {
          sessionNumber: 8,
          title: "Fraction Review & Assessment",
          objective: "Demonstrate mastery of fraction concepts.",
          activities: [
            {
              description: "Fraction Game",
              details: ["'Fraction War' card game to compare fractions; fastest correct comparison wins card."],
            },
            {
              description: "Exit Assessment",
              details: ["Short written task: compare two fractions, find equivalent, solve one addition problem."],
            },
          ],
          reflection: "What fraction concept was most challenging? What helped?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Naming Fractions", level1: "Cannot identify parts", level2: "Names simple fractions with support", level3: "Names fractions independently", level4: "Explains numerator/denominator meaning fluently" },
    { skill: "Comparing Fractions", level1: "Cannot compare", level2: "Compares same-denominator fractions", level3: "Compares and orders mixed fractions", level4: "Justifies comparisons using multiple strategies" },
  ],
};
