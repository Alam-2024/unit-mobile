import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Research, Rhetoric & Argument (Grades 9–12) ────────────────────
export const ResearchRhetoricHigh: IUnits = {
  unitTitle: "Research, Rhetoric & Argument",
  unitDBTitle: "ResearchRhetoric",
  title: "Research, Rhetoric & Argument (Grades 9–12)",
  gradeLevel: "9th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Skilled communicators understand rhetorical appeals and use research to construct credible arguments.",
  overallExpectation:
    "Students conduct independent research, analyze rhetorical strategies in mentor texts, and write a research-based argument essay with MLA or APA citations.",
  essentialQuestions: [
    "How do speakers and writers use ethos, pathos, and logos to persuade?",
    "What standards must research meet to be academically credible?",
    "How do we synthesize multiple sources into a coherent argument?",
  ],
  skills: ["Rhetorical analysis", "Source synthesis", "Research documentation (MLA/APA)", "Formal argument essay"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Rhetoric and persuasion analysis.",
      sessions: [
        {
          sessionNumber: 1,
          title: "The Rhetorical Triangle",
          objective: "Define ethos, pathos, and logos; identify them in persuasive texts.",
          activities: [
            {
              description: "Advertisement Analysis",
              details: ["Analyze three print/video ads; identify which rhetorical appeal is dominant and how it works."],
            },
            {
              description: "Speech Annotation",
              details: ["Annotate a famous speech (e.g., MLK 'I Have a Dream'); label ethos, pathos, logos examples."],
            },
          ],
          reflection: "Which rhetorical appeal do you find most convincing? Does it depend on the context?",
          imgUrl: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=SZ0mDIVCaFI"],
        },
        {
          sessionNumber: 2,
          title: "Rhetorical Analysis Essay",
          objective: "Write a structured rhetorical analysis of a persuasive text.",
          activities: [
            {
              description: "SOAPS Analysis",
              details: ["Identify Subject, Occasion, Audience, Purpose, Speaker before drafting analysis."],
            },
            {
              description: "Rhetorical Analysis Draft",
              details: ["Write a 3-paragraph analysis: one appeal per paragraph with textual evidence and effect explanation."],
            },
          ],
          reflection: "How does knowing the author's purpose change how you read an argument?",
          imgUrl: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Research methods and source evaluation.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Research Process & Database Search",
          objective: "Use academic databases to locate peer-reviewed and credible sources.",
          activities: [
            {
              description: "Database Orientation",
              details: ["Navigate JSTOR, Google Scholar, or library databases; use Boolean operators (AND, OR, NOT)."],
            },
            {
              description: "Annotated Bibliography",
              details: ["Write a 3-source annotated bibliography: citation + 2-sentence summary + credibility assessment."],
            },
          ],
          reflection: "What makes a peer-reviewed source more reliable than a popular article?",
        },
        {
          sessionNumber: 4,
          title: "Synthesizing Sources",
          objective: "Combine information from multiple sources to support a single argument.",
          activities: [
            {
              description: "Synthesis Matrix",
              details: ["Fill a matrix: rows = sources, columns = key argument points; identify agreements and contradictions."],
            },
            {
              description: "Synthesis Paragraph Practice",
              details: ["Write a paragraph that weaves two sources around a single claim without summarizing separately."],
            },
          ],
          reflection: "How is synthesis different from summary?",
        },
      ],
    },
    {
      week: 3,
      focus: "Building and writing the research argument.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Thesis & Argument Mapping",
          objective: "Develop a research-based thesis and map the essay's argumentative structure.",
          activities: [
            {
              description: "They Say / I Say Framework",
              details: ["Use Graff & Birkenstein's templates to frame argument in context of existing conversation."],
            },
            {
              description: "Argument Map",
              details: ["Map 4-6 body paragraph claims with supporting source citations and counterargument placement."],
            },
          ],
          reflection: "How does mapping prevent you from just stringing summaries together?",
        },
        {
          sessionNumber: 6,
          title: "Drafting the Research Essay",
          objective: "Write a complete first draft of the research argument essay.",
          activities: [
            {
              description: "Drafting Workshop",
              details: ["Timed drafting: introduction (hook + context + thesis), body paragraphs, counterargument, conclusion."],
            },
            {
              description: "In-Text Citation Practice",
              details: ["Check all quotes/paraphrases for correct MLA or APA in-text citations; format Works Cited page."],
            },
          ],
          reflection: "What was the hardest part of incorporating research into your own argument?",
        },
      ],
    },
    {
      week: 4,
      focus: "Revision, publication, and presentation.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Peer Workshop Revision",
          objective: "Give and receive substantive feedback using a revision protocol.",
          activities: [
            {
              description: "Lively Revision Protocol",
              details: ["Reader highlights: thesis (yellow), each piece of evidence (blue), transitions (green); gives written feedback."],
            },
            {
              description: "Targeted Revision",
              details: ["Students revise two specific elements identified in peer review; conference with teacher."],
            },
          ],
          reflection: "What is the most important change you made based on peer feedback?",
        },
        {
          sessionNumber: 8,
          title: "Final Essay & Oral Defense",
          objective: "Submit polished research essay and present key argument in a brief oral defense.",
          activities: [
            {
              description: "2-Minute Oral Defense",
              details: ["Each student presents: thesis, strongest evidence, and how they addressed a counterargument."],
            },
            {
              description: "Final Submission",
              details: ["Submit essay with Works Cited; complete a metacognitive reflection on the research process."],
            },
          ],
          reflection: "How did researching this topic change or complicate your original thinking?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Rhetorical Analysis", level1: "Cannot identify appeals", level2: "Identifies appeals without effect analysis", level3: "Identifies and explains rhetorical effects with evidence", level4: "Analyzes how appeals work together to achieve purpose" },
    { skill: "Source Integration", level1: "No citations; summary only", level2: "Cites but does not synthesize", level3: "Integrates multiple sources with correct citation", level4: "Synthesizes sources to build original argument; nuanced analysis" },
    { skill: "Argument Quality", level1: "No clear thesis or structure", level2: "Thesis present; reasoning undeveloped", level3: "Structured argument with counterargument addressed", level4: "Sophisticated, nuanced argument; scholarly voice" },
  ],
  materials: ["Access to academic databases (JSTOR, Google Scholar)", "Synthesis matrix template", "MLA/APA style guide", "Rhetorical analysis sentence frames"],
};

// ── Unit 2 ── AP Literature: Close Reading & Extended Analysis (Grades 11–12) ─
export const ClosReadingHigh: IUnits = {
  unitTitle: "Close Reading & Extended Analysis",
  unitDBTitle: "CloseReading",
  title: "Close Reading & Extended Analysis (Grades 11–12)",
  gradeLevel: "11th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Deep reading requires attention to diction, syntax, structure, and their cumulative effect on meaning.",
  overallExpectation:
    "Students perform close analysis of literary and nonfiction texts, write timed analytical essays, and connect texts to broader literary and cultural contexts.",
  essentialQuestions: [
    "How do diction and syntax choices shape meaning?",
    "How does a text fit within its literary or historical context?",
    "What does it mean to read a text 'closely'?",
  ],
  skills: ["Annotation strategies", "Diction and syntax analysis", "Timed analytical writing", "Intertextual connections"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Close reading and annotation.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Active Annotation",
          objective: "Develop a personal annotation system and apply it to a complex text.",
          activities: [
            {
              description: "Annotation Code Development",
              details: ["Create personal symbols for: imagery, tone shifts, figurative language, key diction, structural choices."],
            },
            {
              description: "Annotated Reading",
              details: ["Apply annotation system to a short story or essay excerpt; share 3 key observations with a partner."],
            },
          ],
          reflection: "What do you notice when you re-read a text compared to a first read?",
          imgUrl: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=d-TF2OGZ1wg"],
        },
        {
          sessionNumber: 2,
          title: "Diction Analysis",
          objective: "Analyze how word choice reveals tone, attitude, and theme.",
          activities: [
            {
              description: "Connotation Spectrum",
              details: ["Place synonyms on a spectrum from negative to positive; discuss how connotation drives meaning."],
            },
            {
              description: "Diction Analysis Paragraph",
              details: ["Select 5 key words from a passage; explain cumulative effect of those choices on tone."],
            },
          ],
          reflection: "Can changing one word in a sentence fundamentally alter its meaning?",
          imgUrl: "https://images.unsplash.com/photo-1549737221-bef65e2604a6?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Syntax, structure, and style.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Syntax and Effect",
          objective: "Analyze how sentence length, structure, and rhythm contribute to meaning.",
          activities: [
            {
              description: "Syntax Comparison",
              details: ["Compare a long periodic sentence to a short declarative; discuss how each creates different effects."],
            },
            {
              description: "Stylistic Imitation",
              details: ["Imitate the style of a passage using your own subject matter; reflect on why style feels intentional."],
            },
          ],
          reflection: "Why might an author choose a very short sentence after a long complex one?",
        },
        {
          sessionNumber: 4,
          title: "Structure as Meaning",
          objective: "Analyze how a text's organizational structure reinforces its central idea.",
          activities: [
            {
              description: "Structural Mapping",
              details: ["Map a full essay's structure: identify shifts, transitions, and how structure supports argument."],
            },
            {
              description: "Comparison Essay",
              details: ["Compare the structural choices of two texts on the same topic; analyze different effects."],
            },
          ],
          reflection: "Could this text be rearranged? What would be lost?",
        },
      ],
    },
    {
      week: 3,
      focus: "Timed analytical writing.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Timed Writing Practice",
          objective: "Write a focused analytical essay under timed conditions.",
          activities: [
            {
              description: "Planning Protocol",
              details: ["Spend 5 minutes annotating and outlining before writing; practice deciding on a focused claim."],
            },
            {
              description: "40-Minute Timed Essay",
              details: ["Write a complete essay with thesis, two body paragraphs with evidence, and conclusion."],
            },
          ],
          reflection: "What is your biggest challenge writing analytically under time pressure?",
        },
        {
          sessionNumber: 6,
          title: "Essay Scoring & Revision",
          objective: "Use a 9-point scoring rubric to evaluate and improve timed essays.",
          activities: [
            {
              description: "Anchor Paper Scoring",
              details: ["Score 3 anonymous essays using the rubric; compare scores in small groups; calibrate."],
            },
            {
              description: "Targeted Revision",
              details: ["Identify the weakest paragraph in own essay; revise for sharper claim and deeper analysis."],
            },
          ],
          reflection: "What distinguishes a 6-score response from a 9-score response?",
        },
      ],
    },
    {
      week: 4,
      focus: "Intertextuality and culminating analysis.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Intertextual Connections",
          objective: "Connect a text to other literary works, historical events, or cultural contexts.",
          activities: [
            {
              description: "Text Web",
              details: ["Map connections from a central text to 4+ other works/events/ideas; explain each connection."],
            },
            {
              description: "Intertextual Essay Planning",
              details: ["Plan an essay argument that requires reading two texts in dialogue with one another."],
            },
          ],
          reflection: "Does knowing the context of a text change how you interpret it?",
        },
        {
          sessionNumber: 8,
          title: "Culminating Essay & Seminar",
          objective: "Submit a polished analytical essay and participate in a Socratic seminar.",
          activities: [
            {
              description: "Socratic Seminar",
              details: ["Discuss a complex text; students must build on prior comments, cite the text, and challenge politely."],
            },
            {
              description: "Final Essay Submission",
              details: ["Submit final close reading essay with annotations attached; include a reflective cover letter."],
            },
          ],
          reflection: "How has this unit changed the way you read and think about texts?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Close Reading/Annotation", level1: "Annotation is surface-level", level2: "Identifies devices without effect", level3: "Annotates for diction, syntax, and tone with explanation", level4: "Builds layered analysis from micro to macro textual effects" },
    { skill: "Analytical Writing", level1: "No clear thesis; plot summary", level2: "Thesis present; evidence not analyzed", level3: "Structured analysis with textual support", level4: "Sophisticated claim; precise diction; insightful analysis" },
    { skill: "Intertextual Thinking", level1: "Cannot connect texts", level2: "Surface-level connections only", level3: "Meaningful connections with explanation", level4: "Complex dialogue between texts enriching interpretation" },
  ],
  materials: ["Selected literary texts", "9-point AP-style rubric", "Anchor paper sets", "Annotation guide"],
};
