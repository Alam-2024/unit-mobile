import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Digital Citizenship & Computer Basics (Grades 6–8) ─────────────
export const DigitalCitizenshipMiddle: IUnits = {
  unitTitle: "Digital Citizenship & Computer Basics",
  unitDBTitle: "DigitalCitizenship",
  title: "Digital Citizenship & Computer Basics (Grades 6–8)",
  gradeLevel: "6th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Digital citizens use technology ethically, safely, and productively; computers operate on logical, learnable principles.",
  overallExpectation:
    "Students describe how computers process information, apply digital citizenship principles, practice internet safety, and use productivity tools effectively.",
  essentialQuestions: [
    "How does a computer 'think'?",
    "What are your rights and responsibilities online?",
    "How can you protect your privacy in a digital world?",
  ],
  skills: ["Hardware and software basics", "Internet safety and privacy", "Digital footprint", "Productivity software"],
  weeklyPlan: [
    {
      week: 1,
      focus: "How computers work.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Hardware and Software",
          objective: "Distinguish hardware from software; identify the function of CPU, RAM, storage, and I/O devices.",
          activities: [
            {
              description: "Computer Anatomy Diagram",
              details: ["Label a computer diagram: CPU, RAM, hard drive, motherboard, input devices, output devices."],
            },
            {
              description: "Hardware vs Software Sort",
              details: ["Sort 20 items into hardware or software; discuss edge cases (firmware, OS)."],
            },
          ],
          reflection: "Could software work without hardware? Could hardware be useful without software?",
          imgUrl: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=uDDxKnQOUms"],
        },
        {
          sessionNumber: 2,
          title: "Binary and Data",
          objective: "Explain that computers process data in binary (0s and 1s); convert simple numbers.",
          activities: [
            {
              description: "Binary Introduction",
              details: ["Decode a short binary message using an ASCII chart; discuss why computers use binary."],
            },
            {
              description: "Binary Conversion Practice",
              details: ["Convert 5 decimal numbers (0–15) to binary and back; discuss patterns."],
            },
          ],
          reflection: "Why would it be impractical for computers to use base-10 (our number system)?",
          imgUrl: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Internet safety and privacy.",
      sessions: [
        {
          sessionNumber: 3,
          title: "How the Internet Works",
          objective: "Describe how data travels across the internet using IP addresses and DNS.",
          activities: [
            {
              description: "Message Passing Simulation",
              details: ["Students simulate packets: break a message into pieces; route through classmates to destination; reassemble."],
            },
            {
              description: "IP and DNS Explanation",
              details: ["Explain what happens when you type a URL; trace request from browser to server to response."],
            },
          ],
          reflection: "Why is it useful for your data to be broken into 'packets' rather than sent all at once?",
        },
        {
          sessionNumber: 4,
          title: "Cybersecurity Basics",
          objective: "Identify common online threats (phishing, malware, social engineering) and preventive strategies.",
          activities: [
            {
              description: "Phishing Email Analysis",
              details: ["Analyze 3 fake phishing emails; identify 5 red flags in each; discuss how to verify legitimacy."],
            },
            {
              description: "Password Security",
              details: ["Test password strength; learn principles of strong passwords; discuss password managers."],
            },
          ],
          reflection: "What is the weakest link in most cybersecurity — hardware, software, or human behavior?",
        },
      ],
    },
    {
      week: 3,
      focus: "Digital citizenship and footprint.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Your Digital Footprint",
          objective: "Define digital footprint; evaluate what your online presence reveals about you.",
          activities: [
            {
              description: "Footprint Audit",
              details: ["Search for a classmate's name (with permission) or own name; discuss what information is public."],
            },
            {
              description: "Future Employer Scenario",
              details: ["Evaluate social media profiles as a college admissions officer or employer; identify helpful vs harmful posts."],
            },
          ],
          reflection: "What would you want a future employer to find if they searched your name?",
        },
        {
          sessionNumber: 6,
          title: "Copyright, Fair Use & AI Ethics",
          objective: "Define copyright and fair use; discuss ethical use of AI tools.",
          activities: [
            {
              description: "Copyright Scenarios",
              details: ["Evaluate 8 scenarios for copyright compliance; discuss where fair use applies."],
            },
            {
              description: "AI Use Discussion",
              details: ["Discuss: When is using AI tools helpful vs when does it become academic dishonesty? Set class norms."],
            },
          ],
          reflection: "Is copying an AI's answer your own work? Explain your reasoning.",
        },
      ],
    },
    {
      week: 4,
      focus: "Productivity software and project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Productivity Tools",
          objective: "Use word processing, spreadsheet, and presentation software effectively.",
          activities: [
            {
              description: "Spreadsheet Basics",
              details: ["Enter data, use SUM and AVERAGE formulas, create a bar chart from data in a spreadsheet."],
            },
            {
              description: "Presentation Design",
              details: ["Create a 5-slide presentation using a template; apply good design principles (contrast, simplicity, readability)."],
            },
          ],
          reflection: "What makes a presentation effective vs one that puts the audience to sleep?",
        },
        {
          sessionNumber: 8,
          title: "Digital Citizenship Portfolio",
          objective: "Create a digital portfolio reflecting unit learning; demonstrate responsible online behavior.",
          activities: [
            {
              description: "Portfolio Creation",
              details: ["Compile unit work into a structured digital portfolio: hardware notes, cybersecurity plan, digital citizenship pledge."],
            },
            {
              description: "Exit Assessment",
              details: ["Define: hardware, software, phishing, digital footprint; explain one way to stay safe online."],
            },
          ],
          reflection: "What is one digital habit you will change after this unit?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Computer Basics", level1: "Cannot identify hardware/software", level2: "Identifies but cannot explain functions", level3: "Explains functions of main components", level4: "Describes data processing and binary with accuracy" },
    { skill: "Digital Citizenship", level1: "Cannot describe online risks", level2: "Identifies risks without strategies", level3: "Identifies risks and applies preventive strategies", level4: "Evaluates complex scenarios; creates a personal cybersecurity plan" },
  ],
  materials: ["Computer access for each student", "Phishing email examples (printed)", "ASCII chart", "Spreadsheet and presentation software", "Digital portfolio template"],
};

// ── Unit 2 ── Introduction to Programming (Grades 7–8) ───────────────────────
export const ProgrammingMiddle: IUnits = {
  unitTitle: "Introduction to Programming",
  unitDBTitle: "Programming",
  title: "Introduction to Programming (Grades 7–8)",
  gradeLevel: "7th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Programming is the process of writing instructions for a computer to solve problems or create interactive experiences.",
  overallExpectation:
    "Students apply algorithmic thinking, write programs using sequences, loops, conditionals, and functions, and create a working interactive project.",
  essentialQuestions: [
    "What is an algorithm and where do we find them in everyday life?",
    "How do we break a problem into steps a computer can follow?",
    "What is the debugging process and why is persistence important?",
  ],
  skills: ["Algorithmic thinking", "Sequences and loops", "Conditionals", "Functions and debugging"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Algorithmic thinking.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is an Algorithm?",
          objective: "Define algorithm; write step-by-step instructions for everyday processes.",
          activities: [
            {
              description: "PB&J Algorithm",
              details: ["Students write instructions for making a sandwich; teacher follows LITERALLY; debrief ambiguity."],
            },
            {
              description: "Everyday Algorithms",
              details: ["Identify algorithms in daily life: recipe, GPS directions, social media feed sorting."],
            },
          ],
          reflection: "Why must algorithms be precise and unambiguous?",
          imgUrl: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=1vsmaEfbnoE"],
        },
        {
          sessionNumber: 2,
          title: "Flowcharts and Pseudocode",
          objective: "Use flowcharts and pseudocode to plan a program before coding.",
          activities: [
            {
              description: "Flowchart Symbols",
              details: ["Learn shapes: oval (start/end), rectangle (process), diamond (decision), arrow (flow)."],
            },
            {
              description: "Plan a Quiz Game",
              details: ["Create a flowchart for a 3-question quiz game; include decision points for correct/incorrect answers."],
            },
          ],
          reflection: "Why plan with a flowchart before writing code?",
          imgUrl: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Sequences and loops in Scratch or Python.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Sequences in Code",
          objective: "Write a sequence of instructions in Scratch or Python; understand execution order.",
          activities: [
            {
              description: "First Program",
              details: ["Write a program that prints/displays 'Hello, World!' and then a personal message; run and debug."],
            },
            {
              description: "Drawing with Sequences",
              details: ["Use turtle graphics or Scratch pen to draw a square using sequential move/turn commands."],
            },
          ],
          reflection: "What happens if you change the order of instructions in your program?",
        },
        {
          sessionNumber: 4,
          title: "Loops",
          objective: "Use for-loops and while-loops to avoid repeating code; identify when each is appropriate.",
          activities: [
            {
              description: "Loop Identification",
              details: ["Rewrite a repeated 10-step sequence using a for-loop; count how many fewer lines are needed."],
            },
            {
              description: "Drawing with Loops",
              details: ["Draw a hexagon, star, or spiral using loops; modify loop count to change the shape."],
            },
          ],
          reflection: "What is the difference between a for-loop and a while-loop? Give an example of each.",
        },
      ],
    },
    {
      week: 3,
      focus: "Conditionals and user input.",
      sessions: [
        {
          sessionNumber: 5,
          title: "If-Else Conditionals",
          objective: "Write conditional statements to make programs respond differently based on input.",
          activities: [
            {
              description: "Number Guessing Game",
              details: ["Program: computer picks a number; player guesses; if correct → celebrate, if too high → hint, if too low → hint."],
            },
            {
              description: "Multiple Conditions",
              details: ["Add elif/else-if branches; handle 3+ scenarios; test each branch."],
            },
          ],
          reflection: "What would happen if you forgot the 'else' part of an if-else statement?",
        },
        {
          sessionNumber: 6,
          title: "Functions",
          objective: "Define and call functions to organize and reuse code.",
          activities: [
            {
              description: "Function Introduction",
              details: ["Refactor a repeated section of code into a function; call it multiple times."],
            },
            {
              description: "Function with Parameters",
              details: ["Write a greet(name) function; call it with different names; discuss how parameters make functions flexible."],
            },
          ],
          reflection: "How do functions make your code easier to read and fix?",
        },
      ],
    },
    {
      week: 4,
      focus: "Project creation and debugging.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Project Design",
          objective: "Plan and begin a personal interactive project using all concepts learned.",
          activities: [
            {
              description: "Project Brainstorm",
              details: ["Choose project type: quiz game, story generator, calculator, or animation; sketch flowchart."],
            },
            {
              description: "Coding Sprint",
              details: ["Begin coding the project; identify and debug errors using a systematic process."],
            },
          ],
          reflection: "What is the most important debugging strategy you have learned?",
        },
        {
          sessionNumber: 8,
          title: "Project Showcase",
          objective: "Present completed project; demonstrate understanding of programming concepts used.",
          activities: [
            {
              description: "Project Demo",
              details: ["Present project to classmates; walk through: problem solved, key code sections, challenges overcome."],
            },
            {
              description: "Peer Code Review",
              details: ["Review a partner's code; identify: one thing it does well, one bug or improvement suggestion."],
            },
          ],
          reflection: "What would you add to your project if you had more time?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Algorithmic Thinking", level1: "Cannot write step-by-step instructions", level2: "Writes steps with ambiguity", level3: "Writes clear, precise algorithms with flowcharts", level4: "Designs efficient algorithms; identifies optimization opportunities" },
    { skill: "Programming", level1: "Cannot write a working program", level2: "Writes sequences; cannot use loops or conditionals", level3: "Uses loops, conditionals, and functions correctly", level4: "Writes clean, well-structured code; debugs independently" },
  ],
  materials: ["Computer access for each student", "Scratch.mit.edu or Python (Thonny/IDLE)", "Flowchart template", "Turtle graphics resource sheet", "Project planning worksheet"],
};
