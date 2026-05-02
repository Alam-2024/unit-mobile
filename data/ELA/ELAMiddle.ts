import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Literary Analysis (Grades 6–8) ─────────────────────────────────
export const LiteraryAnalysisMiddle: IUnits = {
  unitTitle: "Literary Analysis",
  unitDBTitle: "LiteraryAnalysis",
  title: "Literary Analysis (Grades 6–8)",
  gradeLevel: "6th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Authors make deliberate choices about theme, characterization, and structure to create meaning.",
  overallExpectation:
    "Students analyze literary texts for theme, character development, point of view, and figurative language, supporting claims with textual evidence.",
  essentialQuestions: [
    "How do authors develop theme through character and conflict?",
    "How does point of view shape what we know about a story?",
    "What is the difference between what a text says and what it means?",
  ],
  skills: ["Theme analysis", "Character development", "Point of view", "Figurative language"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Theme and character development.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is Theme?",
          objective: "Distinguish topic from theme; identify theme in short stories.",
          activities: [
            {
              description: "Topic vs Theme Sort",
              details: ["Sort cards into 'topic' (e.g., friendship) and 'theme' (e.g., true friendship requires honesty) columns."],
            },
            {
              description: "Shared Short Story",
              details: ["Read a short story together; students write a theme statement using the formula 'When ___, ___.'"],
            },
          ],
          reflection: "Can a story have more than one theme? Explain.",
          imgUrl: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=IfFD5LMQCCY"],
        },
        {
          sessionNumber: 2,
          title: "Character Arc Analysis",
          objective: "Trace how a character changes from beginning to end and explain why.",
          activities: [
            {
              description: "Character Change Graph",
              details: ["Plot character attitude/confidence on a graph across story events; note turning points."],
            },
            {
              description: "Evidence Paragraphs",
              details: ["Write a paragraph: claim about character change + two text-evidence quotes + analysis."],
            },
          ],
          reflection: "What causes characters to change in stories? Is this realistic?",
          imgUrl: "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Point of view and narrative perspective.",
      sessions: [
        {
          sessionNumber: 3,
          title: "First vs Third Person Narration",
          objective: "Identify narrative point of view and explain how it affects reader knowledge.",
          activities: [
            {
              description: "Narration Rewrite",
              details: ["Rewrite a first-person passage in third person; discuss what changes and what is lost."],
            },
            {
              description: "Unreliable Narrator Discussion",
              details: ["Read a passage from an unreliable narrator; list what they might be hiding or misunderstanding."],
            },
          ],
          reflection: "Why might an author choose a limited point of view instead of omniscient?",
        },
        {
          sessionNumber: 4,
          title: "Multiple Perspectives",
          objective: "Compare how different characters view the same event.",
          activities: [
            {
              description: "Two-Voice Poem",
              details: ["Write a two-column poem showing two characters' perspectives on one story event."],
            },
            {
              description: "Socratic Seminar",
              details: ["Discuss: 'Whose perspective in the text is most sympathetic? Whose is most biased?'"],
            },
          ],
          reflection: "How does empathy help us analyze multiple perspectives?",
        },
      ],
    },
    {
      week: 3,
      focus: "Figurative language and author's craft.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Figurative Language Toolkit",
          objective: "Identify and interpret simile, metaphor, personification, and hyperbole.",
          activities: [
            {
              description: "Figurative Language Anchor Chart",
              details: ["Build class definitions with examples from mentor texts; students add examples from independent reading."],
            },
            {
              description: "Effect Analysis",
              details: ["For three figurative examples from the text, explain the literal meaning and the emotional effect."],
            },
          ],
          reflection: "Why do authors use figurative language instead of literal descriptions?",
        },
        {
          sessionNumber: 6,
          title: "Imagery & Tone",
          objective: "Analyze how imagery creates tone and mood in a text.",
          activities: [
            {
              description: "Color & Tone",
              details: ["Identify color and sensory imagery in two passages with different tones; annotate for effect."],
            },
            {
              description: "Tone Shift Tracker",
              details: ["Track tone changes across a chapter; name 3 words per section that signal the shift."],
            },
          ],
          reflection: "How does the author's choice of words make you feel as a reader?",
        },
      ],
    },
    {
      week: 4,
      focus: "Writing a literary analysis essay.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Literary Analysis Essay Structure",
          objective: "Plan and draft a multi-paragraph literary analysis using a clear thesis.",
          activities: [
            {
              description: "Thesis Workshop",
              details: ["Model strong vs weak thesis statements; students write and peer-critique three options."],
            },
            {
              description: "Outline and Draft",
              details: ["Complete a structured outline (intro/thesis, 2 body paragraphs with evidence, conclusion); begin draft."],
            },
          ],
          reflection: "What makes a thesis statement arguable rather than obvious?",
        },
        {
          sessionNumber: 8,
          title: "Revision & Publishing",
          objective: "Revise for clarity, evidence integration, and conventions; submit final essay.",
          activities: [
            {
              description: "Peer Review with Rubric",
              details: ["Exchange essays; score thesis, evidence, analysis, and conventions using a 4-point rubric."],
            },
            {
              description: "Final Submission",
              details: ["Apply peer feedback; submit final essay; complete self-reflection on the writing process."],
            },
          ],
          reflection: "What is the strongest part of your literary analysis? What would you improve?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Theme Analysis", level1: "States topic only", level2: "Identifies theme without support", level3: "Identifies theme with text evidence", level4: "Analyzes theme development across the whole text" },
    { skill: "Figurative Language", level1: "Cannot identify examples", level2: "Identifies but cannot interpret", level3: "Identifies and interprets effect", level4: "Explains how figurative language develops theme/tone" },
    { skill: "Literary Analysis Writing", level1: "No clear claim or evidence", level2: "Claim present; evidence not analyzed", level3: "Clear thesis with integrated textual evidence", level4: "Sophisticated analysis; strong voice and transitions" },
  ],
  materials: ["Short story anthology", "Figurative language reference cards", "Analysis essay graphic organizer", "4-point peer review rubric"],
};

// ── Unit 2 ── Argument Writing (Grades 7–8) ───────────────────────────────────
export const ArgumentWritingMiddle: IUnits = {
  unitTitle: "Argument Writing",
  unitDBTitle: "ArgumentWriting",
  title: "Argument Writing (Grades 7–8)",
  gradeLevel: "7th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Effective arguments combine a clear claim, credible evidence, logical reasoning, and acknowledgment of counterclaims.",
  overallExpectation:
    "Students write a well-structured argument essay supported by research, addressing counterarguments and using formal language.",
  essentialQuestions: [
    "What is the difference between an argument and an opinion?",
    "How do we evaluate whether evidence is credible?",
    "Why must a strong argument acknowledge opposing views?",
  ],
  skills: ["Claim and thesis", "Evidence evaluation", "Counterclaim and rebuttal", "Formal academic writing"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Claim construction and evidence evaluation.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Opinion vs Argument",
          objective: "Distinguish between opinion and evidence-based argument.",
          activities: [
            {
              description: "Opinion vs Argument Sort",
              details: ["Sort 12 statement cards into 'opinion' or 'argument backed by evidence'; justify decisions."],
            },
            {
              description: "Claim Workshop",
              details: ["Practice writing debatable claims on three topics; test each for arguability."],
            },
          ],
          reflection: "What makes a claim worth arguing about?",
          imgUrl: "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=2sZFaHAi9FU"],
        },
        {
          sessionNumber: 2,
          title: "Evaluating Sources",
          objective: "Apply CRAAP test (Currency, Relevance, Authority, Accuracy, Purpose) to evaluate sources.",
          activities: [
            {
              description: "Source Evaluation Activity",
              details: ["Evaluate three websites on the same topic using the CRAAP criteria; rank by credibility."],
            },
            {
              description: "Research Practice",
              details: ["Students find two credible sources for their argument topic; annotate key evidence."],
            },
          ],
          reflection: "Why does the credibility of your source affect the strength of your argument?",
          imgUrl: "https://images.unsplash.com/photo-1554721299-e0b8aa7666ce?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Structuring arguments with evidence and reasoning.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Claim – Evidence – Reasoning (CER)",
          objective: "Write body paragraphs using the CER framework.",
          activities: [
            {
              description: "CER Model Paragraphs",
              details: ["Annotate a model paragraph: highlight claim (yellow), evidence (blue), reasoning (green)."],
            },
            {
              description: "CER Draft",
              details: ["Students write a full CER paragraph on their argument topic using a research-based quote."],
            },
          ],
          reflection: "What is the difference between evidence and reasoning?",
        },
        {
          sessionNumber: 4,
          title: "Integrating Quotes",
          objective: "Introduce, quote, and explain textual evidence smoothly.",
          activities: [
            {
              description: "Quote Sandwich",
              details: ["Use the quote sandwich: introduce speaker → quote → explain relevance; practice three examples."],
            },
            {
              description: "Paraphrase Practice",
              details: ["Paraphrase two pieces of evidence; discuss when paraphrase is better than direct quote."],
            },
          ],
          reflection: "Why can't you just drop a quote into a paragraph without explanation?",
        },
      ],
    },
    {
      week: 3,
      focus: "Counterclaims, rebuttals, and essay structure.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Counterclaim & Rebuttal",
          objective: "Acknowledge opposing views and refute them with evidence.",
          activities: [
            {
              description: "Four-Corners Debate",
              details: ["Class debates a topic; students move to agree/strongly agree/disagree/strongly disagree corners; defend position."],
            },
            {
              description: "Rebuttal Sentence Starters",
              details: ["Use frames: 'While some argue ___, in fact ___ because ___'; write a full counterclaim paragraph."],
            },
          ],
          reflection: "How does addressing the other side actually strengthen YOUR argument?",
        },
        {
          sessionNumber: 6,
          title: "Essay Blueprint",
          objective: "Organize argument essay: hook, thesis, body paragraphs, counterclaim, conclusion.",
          activities: [
            {
              description: "Argument Blueprint Organizer",
              details: ["Complete the 5-part blueprint: hook strategy, thesis, 2 CER body paragraphs, counterclaim/rebuttal, conclusion."],
            },
            {
              description: "Peer Blueprint Review",
              details: ["Partners check: Is the claim arguable? Are sources credible? Is the counterclaim addressed?"],
            },
          ],
          reflection: "What order should your strongest argument appear in? First or last?",
        },
      ],
    },
    {
      week: 4,
      focus: "Drafting, revising, and publishing the argument essay.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Drafting & Revising",
          objective: "Write a complete argument essay draft and revise for coherence and logic.",
          activities: [
            {
              description: "Timed Draft",
              details: ["Write full essay draft from blueprint; focus on flow and transitions between paragraphs."],
            },
            {
              description: "Revision Checklist",
              details: ["Check: clear claim, 2+ pieces of evidence, counterclaim addressed, formal language, correct citations."],
            },
          ],
          reflection: "What part of argument writing is most difficult for you?",
        },
        {
          sessionNumber: 8,
          title: "Final Submission & Debate",
          objective: "Submit polished argument essay; participate in a brief structured academic controversy.",
          activities: [
            {
              description: "Mini Academic Controversy",
              details: ["Groups present arguments to the class; listeners evaluate the logic and evidence quality."],
            },
            {
              description: "Final Essay Submission",
              details: ["Submit final essay with works cited; complete argument writing self-reflection."],
            },
          ],
          reflection: "How did writing this essay change or strengthen your view on the topic?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Claim Construction", level1: "Claim is vague or purely opinion", level2: "Claim is debatable but weak", level3: "Clear, specific, arguable claim", level4: "Sophisticated claim that forecasts argument structure" },
    { skill: "Evidence & Reasoning", level1: "No evidence or irrelevant", level2: "Evidence present, reasoning missing", level3: "Evidence with sufficient reasoning (CER)", level4: "Multiple credible sources with nuanced analysis" },
    { skill: "Counterclaim & Rebuttal", level1: "Counterclaim absent", level2: "Acknowledged but not rebutted", level3: "Counterclaim addressed with evidence", level4: "Counterclaim strengthens overall argument" },
  ],
  materials: ["CRAAP test rubric", "CER graphic organizer", "Argument blueprint template", "Works cited model sheet"],
};
