import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Web Development Fundamentals (Grades 9–10) ─────────────────────
export const WebDevHigh: IUnits = {
  unitTitle: "Web Development Fundamentals",
  unitDBTitle: "WebDev",
  title: "Web Development Fundamentals (Grades 9–10)",
  gradeLevel: "9th – 10th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "The web is built on HTML, CSS, and JavaScript — three languages that structure, style, and add interactivity to pages.",
  overallExpectation:
    "Students build a multi-page website from scratch using HTML for structure, CSS for design, and basic JavaScript for interactivity.",
  essentialQuestions: [
    "How does a browser turn code into a webpage you can see?",
    "What is the difference between structure, style, and behavior on a webpage?",
    "How do design decisions affect the user experience?",
  ],
  skills: ["HTML structure", "CSS styling", "JavaScript basics", "Responsive design principles"],
  weeklyPlan: [
    {
      week: 1,
      focus: "HTML structure.",
      sessions: [
        {
          sessionNumber: 1,
          title: "How the Web Works",
          objective: "Describe the client-server model; inspect a webpage's HTML using browser dev tools.",
          activities: [
            {
              description: "Browser Dev Tools",
              details: ["Right-click a webpage → Inspect; explore the DOM tree; modify a heading text live."],
            },
            {
              description: "Client-Server Diagram",
              details: ["Draw and annotate a request-response cycle: browser → DNS → server → HTML → browser renders."],
            },
          ],
          reflection: "What surprised you when you looked at the source code of a webpage?",
          imgUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=it1rTvBcfRg"],
        },
        {
          sessionNumber: 2,
          title: "HTML Essentials",
          objective: "Write a valid HTML page with head, body, headings, paragraphs, links, and images.",
          activities: [
            {
              description: "First HTML File",
              details: ["Create index.html; add: DOCTYPE, html, head (title), body (h1, h2, p, a, img); open in browser."],
            },
            {
              description: "Semantic HTML",
              details: ["Replace generic divs with semantic tags (header, nav, main, footer, article); discuss why semantics matter for accessibility."],
            },
          ],
          reflection: "Why is semantic HTML better than using only divs and spans?",
          imgUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "CSS styling.",
      sessions: [
        {
          sessionNumber: 3,
          title: "CSS Selectors and Properties",
          objective: "Apply CSS using element, class, and ID selectors; modify colors, fonts, and spacing.",
          activities: [
            {
              description: "Stylesheet Creation",
              details: ["Create styles.css; link to HTML; style body (font-family, background), headings (color, font-size), paragraphs (line-height)."],
            },
            {
              description: "Box Model Exploration",
              details: ["Add borders, padding, and margin to elements; use dev tools to visualize the box model."],
            },
          ],
          reflection: "What is the difference between padding and margin?",
        },
        {
          sessionNumber: 4,
          title: "Layout with Flexbox",
          objective: "Use CSS Flexbox to create responsive multi-column layouts.",
          activities: [
            {
              description: "Flexbox Froggy",
              details: ["Complete levels 1–12 of flexboxfroggy.com to learn flex properties interactively."],
            },
            {
              description: "Navigation Bar",
              details: ["Build a horizontal navigation bar using flexbox; make it space-evenly; apply hover styles."],
            },
          ],
          reflection: "How does Flexbox make layout easier than using floats or manual positioning?",
        },
      ],
    },
    {
      week: 3,
      focus: "JavaScript interactivity.",
      sessions: [
        {
          sessionNumber: 5,
          title: "JavaScript Basics",
          objective: "Declare variables, write functions, and log output to the browser console.",
          activities: [
            {
              description: "Console Exploration",
              details: ["Open browser console; declare variables with let and const; perform arithmetic; log results."],
            },
            {
              description: "Function Writing",
              details: ["Write a greet(name) function that returns a greeting string; call it from the console."],
            },
          ],
          reflection: "What is the difference between let and const? When would you use each?",
        },
        {
          sessionNumber: 6,
          title: "DOM Manipulation",
          objective: "Use JavaScript to change HTML content and respond to button clicks.",
          activities: [
            {
              description: "Change Content on Click",
              details: ["Add a button; write JS to change a heading's text when clicked; add a color-change effect."],
            },
            {
              description: "Form Validation",
              details: ["Create a simple form; write JS to check that the name field is not empty before 'submitting'."],
            },
          ],
          reflection: "What other interactions could you add to a webpage with JavaScript?",
        },
      ],
    },
    {
      week: 4,
      focus: "Personal website project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Website Planning & Design",
          objective: "Plan and wireframe a personal or portfolio website with multiple pages.",
          activities: [
            {
              description: "Wireframing",
              details: ["Sketch wireframes for 3 pages (home, about, projects) on paper; identify layout sections."],
            },
            {
              description: "Design System",
              details: ["Choose: 2 fonts, 3 colors, button style; apply consistently to all pages."],
            },
          ],
          reflection: "Why is consistency in design important for user experience?",
        },
        {
          sessionNumber: 8,
          title: "Website Launch & Peer Review",
          objective: "Publish or present the completed website; conduct a UX peer review.",
          activities: [
            {
              description: "Website Presentation",
              details: ["Walk through the site: explain HTML structure, CSS choices, and one JS feature used."],
            },
            {
              description: "Peer UX Review",
              details: ["Partner navigates the site and reports: What was easy? What was confusing? What would improve usability?"],
            },
          ],
          reflection: "What is one change you would make to improve your website based on feedback?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "HTML/CSS", level1: "Cannot create a valid HTML page", level2: "Creates basic page without CSS", level3: "Creates structured page with external CSS and layout", level4: "Uses semantic HTML, flexbox layout, and consistent design system" },
    { skill: "JavaScript", level1: "Cannot write any JS", level2: "Writes variables/functions in console", level3: "Manipulates DOM and handles events", level4: "Writes clean, well-commented JS with form validation" },
  ],
  materials: ["Computer with code editor (VS Code)", "Browser with dev tools", "flexboxfroggy.com access", "Wireframe paper templates", "Design system planning worksheet"],
};

// ── Unit 2 ── Data Science & AI Literacy (Grades 10–12) ──────────────────────
export const DataScienceHigh: IUnits = {
  unitTitle: "Data Science & AI Literacy",
  unitDBTitle: "DataScience",
  title: "Data Science & AI Literacy (Grades 10–12)",
  gradeLevel: "10th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Data science extracts insights from data; AI learns from data patterns — understanding both is essential for modern citizens.",
  overallExpectation:
    "Students collect, clean, analyze, and visualize data; explain how machine learning works; and critically evaluate the societal impacts of AI.",
  essentialQuestions: [
    "How do we turn raw data into useful insights?",
    "How does a machine 'learn' from data?",
    "What are the ethical implications of AI in society?",
  ],
  skills: ["Data collection and cleaning", "Data visualization", "Machine learning basics", "AI ethics"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Data collection and analysis.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is Data Science?",
          objective: "Define data science; identify steps in the data science workflow.",
          activities: [
            {
              description: "Data Science Workflow",
              details: ["Map the pipeline: question → data collection → cleaning → analysis → visualization → insight."],
            },
            {
              description: "Messy Data Challenge",
              details: ["Open a deliberately messy spreadsheet; identify issues: missing values, inconsistent formats, duplicates."],
            },
          ],
          reflection: "Why might a data scientist spend more time cleaning data than analyzing it?",
          imgUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=ua-CiDNNj30"],
        },
        {
          sessionNumber: 2,
          title: "Data Collection and Types",
          objective: "Distinguish structured from unstructured data; design a data collection instrument.",
          activities: [
            {
              description: "Survey Design",
              details: ["Design a class survey (Google Forms); discuss question types: categorical vs numerical; avoid bias."],
            },
            {
              description: "Data Collection",
              details: ["Administer survey; export results to a spreadsheet; identify data types in each column."],
            },
          ],
          reflection: "How can the way a survey question is worded bias the data collected?",
          imgUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Data visualization and storytelling.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Choosing the Right Chart",
          objective: "Select appropriate chart types for different data relationships.",
          activities: [
            {
              description: "Chart Type Decision Tree",
              details: ["Build a decision tree: categorical → bar/pie, time series → line, two variables → scatter, distribution → histogram."],
            },
            {
              description: "Misleading Charts",
              details: ["Analyze 4 misleading charts (truncated axes, cherry-picked data); explain what is wrong and how to fix."],
            },
          ],
          reflection: "How can a chart be technically accurate but still misleading?",
        },
        {
          sessionNumber: 4,
          title: "Data Visualization with Tools",
          objective: "Create multiple chart types from class survey data using spreadsheet or Python.",
          activities: [
            {
              description: "Chart Creation Lab",
              details: ["Create: bar chart (categorical), line chart (trend over time), scatter plot (two variables) from real data."],
            },
            {
              description: "Insight Narrative",
              details: ["Write 3 bullet-point insights from the visualizations; connect each to the original research question."],
            },
          ],
          reflection: "What is the most interesting pattern you found in the class data?",
        },
      ],
    },
    {
      week: 3,
      focus: "Machine learning fundamentals.",
      sessions: [
        {
          sessionNumber: 5,
          title: "How Machine Learning Works",
          objective: "Describe supervised, unsupervised, and reinforcement learning with real-world examples.",
          activities: [
            {
              description: "ML Type Matching",
              details: ["Match applications (spam filter, Netflix recommendations, self-driving cars) to ML type and explain why."],
            },
            {
              description: "Teachable Machine",
              details: ["Use Google's Teachable Machine to train a simple image classifier; observe how training data affects accuracy."],
            },
          ],
          reflection: "What happens to your model's accuracy when you add more training examples?",
        },
        {
          sessionNumber: 6,
          title: "Bias in Machine Learning",
          objective: "Explain how biased training data leads to biased AI outcomes.",
          activities: [
            {
              description: "Bias Case Studies",
              details: ["Analyze real cases: facial recognition errors, hiring algorithm bias, loan approval disparities."],
            },
            {
              description: "Training Data Audit",
              details: ["Examine a sample dataset; identify underrepresented groups; discuss how this would affect a model."],
            },
          ],
          reflection: "Who is responsible when an AI makes a biased decision — the programmer, company, or user?",
        },
      ],
    },
    {
      week: 4,
      focus: "AI ethics and data science project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "AI in Society",
          objective: "Evaluate the societal impacts of AI in healthcare, criminal justice, and media.",
          activities: [
            {
              description: "AI Impact Debate",
              details: ["Debate: 'The benefits of AI in [sector] outweigh the risks.' Teams argue both sides with evidence."],
            },
            {
              description: "AI Policy Proposal",
              details: ["Groups write a 1-page policy recommendation for responsible AI use in one sector."],
            },
          ],
          reflection: "What safeguards should be in place before an AI system makes decisions that affect people's lives?",
        },
        {
          sessionNumber: 8,
          title: "Data Science Project Showcase",
          objective: "Present a complete data analysis project addressing a real-world question.",
          activities: [
            {
              description: "Project Presentations",
              details: ["Present: research question, data source, cleaning steps, 2+ visualizations, 3 insights, and limitations."],
            },
            {
              description: "Exit Assessment",
              details: ["Define: supervised learning, training data, data bias; describe one ethical concern about AI; interpret a chart."],
            },
          ],
          reflection: "What question would you explore next if you continued this data science project?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Data Analysis", level1: "Cannot interpret data", level2: "Identifies trends without insight", level3: "Creates appropriate visualizations and draws 2+ insights", level4: "Tells a compelling data story; addresses confounds and limitations" },
    { skill: "AI Literacy", level1: "Cannot define ML types", level2: "Defines types without examples", level3: "Explains how ML works and identifies bias sources", level4: "Evaluates AI systems critically; proposes evidence-based policy" },
  ],
  materials: ["Computer with spreadsheet/Python access", "Google Forms", "Teachable Machine (teachablemachine.withgoogle.com)", "AI case study handouts", "Data visualization rubric"],
};
