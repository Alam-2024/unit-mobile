import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Reading Comprehension (Grades 1–3) ──────────────────────────────
export const ReadingComprehensionElementary: IUnits = {
  unitTitle: "Reading Comprehension",
  unitDBTitle: "ReadingComprehension",
  title: "Reading Comprehension (Grades 1–3)",
  gradeLevel: "1st – 3rd Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Good readers use strategies to understand, visualize, and connect with texts.",
  overallExpectation:
    "Students identify main idea and key details, make inferences, and retell stories using evidence from the text.",
  essentialQuestions: [
    "How do we figure out what a text is mostly about?",
    "What clues help us understand parts the author doesn't say directly?",
    "How do we connect what we read to our own lives?",
  ],
  skills: ["Main idea & details", "Making inferences", "Story retelling", "Text-to-self connections"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Main idea and supporting details.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Finding the Main Idea",
          objective: "Identify the main idea and three supporting details from a short text.",
          activities: [
            {
              description: "Anchor Chart",
              details: ["Build a 'hamburger' organizer: main idea on top bun, details as fillings, conclusion on bottom bun."],
            },
            {
              description: "Shared Reading",
              details: ["Read a nonfiction passage together; highlight main idea in yellow and details in blue."],
            },
          ],
          reflection: "How do you know which idea is the MAIN idea?",
        },
        {
          sessionNumber: 2,
          title: "Details Support the Main Idea",
          objective: "Explain how details prove or develop the main idea.",
          activities: [
            {
              description: "Partner Reading",
              details: ["Partners read a leveled book; each writes one main idea sentence and two detail sentences."],
            },
            {
              description: "Sort Activity",
              details: ["Sort sentence strips as 'main idea' or 'detail' for a given short passage."],
            },
          ],
          reflection: "Can a paragraph have more than one main idea?",
        },
      ],
    },
    {
      week: 2,
      focus: "Making inferences.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Reading Between the Lines",
          objective: "Use text clues and prior knowledge to make inferences.",
          activities: [
            {
              description: "I Notice / I Think",
              details: ["Show an image; model 'I notice ___, so I think ___'; practice with short paragraphs."],
            },
            {
              description: "Inference Sentence Frames",
              details: ["Students complete: 'The text says ___ and I know ___, so I can infer ___.'"
              ],
            },
          ],
          reflection: "Why doesn't the author always say everything directly?",
        },
        {
          sessionNumber: 4,
          title: "Character Feelings & Motivations",
          objective: "Infer how a character feels and why they act a certain way.",
          activities: [
            {
              description: "Emotion Thermometer",
              details: ["Mark a thermometer with emotion intensity; discuss character actions and assign emotion level."],
            },
            {
              description: "Evidence Hunt",
              details: ["Find two text quotes that show a character's feelings; explain reasoning."],
            },
          ],
          reflection: "What would change in the story if the character felt differently?",
        },
      ],
    },
    {
      week: 3,
      focus: "Story structure and retelling.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Story Map",
          objective: "Identify characters, setting, problem, and solution in a story.",
          activities: [
            {
              description: "Story Mountain",
              details: ["Draw a story mountain: beginning, rising action, climax, resolution; label with story events."],
            },
            {
              description: "Retelling in Pairs",
              details: ["One partner retells; the other checks story map for accuracy; swap roles."],
            },
          ],
          reflection: "What would the story be like if the problem was never solved?",
        },
        {
          sessionNumber: 6,
          title: "Sequencing Events",
          objective: "Use signal words (first, next, then, finally) to retell events in order.",
          activities: [
            {
              description: "Sequence Strip Comic",
              details: ["Students draw 4-panel comic of story events; add signal word captions."],
            },
            {
              description: "Sentence Strip Ordering",
              details: ["Order scrambled sentences from a passage; read the sequence aloud."],
            },
          ],
          reflection: "Why does the ORDER of events matter in a story?",
        },
      ],
    },
    {
      week: 4,
      focus: "Text connections and review.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Text-to-Self & Text-to-World",
          objective: "Make meaningful connections between the text and personal experience or world knowledge.",
          activities: [
            {
              description: "Connection Journal",
              details: ["Students write: 'This reminds me of ___ because ___'; share in small groups."],
            },
            {
              description: "Compare Two Texts",
              details: ["Read two books on the same topic; use a Venn diagram to compare ideas."],
            },
          ],
          reflection: "Does making a connection help you understand better? How?",
        },
        {
          sessionNumber: 8,
          title: "Reading Showcase",
          objective: "Apply all comprehension strategies to an independent reading task.",
          activities: [
            {
              description: "Independent Reading Assessment",
              details: ["Students read a new passage; complete main idea, inference, and retelling questions."],
            },
            {
              description: "Strategy Celebration",
              details: ["Share favorite strategy from the unit; receive a 'Super Reader' badge."],
            },
          ],
          reflection: "Which reading strategy helps you most? Why?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Main Idea & Details", level1: "Cannot identify main idea", level2: "Identifies main idea with support", level3: "Identifies main idea and 2+ details independently", level4: "Explains how details support main idea with text evidence" },
    { skill: "Making Inferences", level1: "Guesses without text support", level2: "Infers with sentence frames", level3: "Infers using text + prior knowledge", level4: "Infers and justifies with multiple text clues" },
  ],
  materials: ["Leveled readers", "Story mountain graphic organizers", "Highlighters (yellow and blue)", "Sentence strip sets"],
};

// ── Unit 2 ── Narrative Writing (Grades 2–5) ─────────────────────────────────
export const NarrativeWritingElementary: IUnits = {
  unitTitle: "Narrative Writing",
  unitDBTitle: "NarrativeWriting",
  title: "Narrative Writing (Grades 2–5)",
  gradeLevel: "2nd – 5th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Writers use craft techniques — show not tell, dialogue, precise words — to bring stories to life.",
  overallExpectation:
    "Students plan, draft, revise, and publish a personal narrative with a clear structure, descriptive details, and a reflective conclusion.",
  essentialQuestions: [
    "What makes a story interesting to read?",
    "How do writers choose which details to include?",
    "Why do we write about our own experiences?",
  ],
  skills: ["Story planning", "Descriptive language", "Dialogue", "Revision strategies"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Gathering ideas and planning.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Small Moments",
          objective: "Identify a focused personal experience to write about.",
          activities: [
            {
              description: "Heart Map",
              details: ["Draw a heart divided into sections; fill with important people, places, and memories."],
            },
            {
              description: "Watermelon vs Seed",
              details: ["Contrast 'My whole summer' (too broad) with 'The day I fell off my bike' (focused seed)."],
            },
          ],
          reflection: "What small moment could only YOU tell?",
        },
        {
          sessionNumber: 2,
          title: "Planning with a Story Map",
          objective: "Organize narrative with beginning, middle, and end before drafting.",
          activities: [
            {
              description: "Story Map Organizer",
              details: ["Complete beginning (set the scene), 3 middle events, and ending (feeling/lesson)."],
            },
            {
              description: "Story Talk",
              details: ["Tell your story aloud to a partner following the map; partner checks all boxes are filled."],
            },
          ],
          reflection: "Did telling your story aloud change how you planned it? How?",
        },
      ],
    },
    {
      week: 2,
      focus: "Drafting with craft techniques.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Show, Don't Tell",
          objective: "Replace 'telling' sentences with vivid 'showing' details.",
          activities: [
            {
              description: "Before/After Transformation",
              details: ["Rewrite 'I was scared' → 'My heart thumped; I gripped the railing with both hands.'"],
            },
            {
              description: "Sense Words Bank",
              details: ["Build a class list of sensory words; students add 3 show-sentences to their draft."],
            },
          ],
          reflection: "Which of your show-sentences are you most proud of?",
        },
        {
          sessionNumber: 4,
          title: "Writing Dialogue",
          objective: "Punctuate and use dialogue to move the story forward.",
          activities: [
            {
              description: "Dialogue Punctuation Lesson",
              details: ["Model placement of quotation marks, commas, and dialogue tags; practice 5 sentences."],
            },
            {
              description: "Adding Dialogue to Drafts",
              details: ["Find one scene in draft; replace narration with a conversation of at least two exchanges."],
            },
          ],
          reflection: "What does dialogue reveal that narration alone cannot?",
        },
      ],
    },
    {
      week: 3,
      focus: "Revision and editing.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Revision: Zoom In",
          objective: "Identify the most important scene and expand it with more detail.",
          activities: [
            {
              description: "Star & Wish Peer Feedback",
              details: ["Partner reads draft; gives one 'star' (strength) and one 'wish' (area to develop)."],
            },
            {
              description: "Zoom-In Rewrite",
              details: ["Students select a key moment; rewrite it to double the length with added sensory detail."],
            },
          ],
          reflection: "How did peer feedback help you see your story differently?",
        },
        {
          sessionNumber: 6,
          title: "Editing for Conventions",
          objective: "Edit for capitalization, punctuation, and spelling.",
          activities: [
            {
              description: "CUPS Checklist",
              details: ["Use CUPS (Capitalization, Usage, Punctuation, Spelling) checklist on own draft; mark errors."],
            },
            {
              description: "Editor Swap",
              details: ["Exchange draft with partner for a second editing pass; discuss corrections together."],
            },
          ],
          reflection: "What is one convention you always need to check?",
        },
      ],
    },
    {
      week: 4,
      focus: "Publishing and sharing.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Publishing",
          objective: "Produce a final neat copy with an illustration or cover.",
          activities: [
            {
              description: "Final Copy Writing",
              details: ["Write or type final draft; check formatting (title, paragraphs, margins)."],
            },
            {
              description: "Illustration & Cover Design",
              details: ["Design a cover that reflects the tone of the story; add a detailed illustration for key scene."],
            },
          ],
          reflection: "What are you most proud of in your published narrative?",
        },
        {
          sessionNumber: 8,
          title: "Author's Chair",
          objective: "Share narrative with an audience and receive positive feedback.",
          activities: [
            {
              description: "Author's Chair Read-Aloud",
              details: ["Each student reads one section aloud; audience uses listening sentence starters to respond."],
            },
            {
              description: "Writing Self-Assessment",
              details: ["Complete a 4-point rubric self-assessment covering ideas, organization, word choice, conventions."],
            },
          ],
          reflection: "How has your writing changed from draft one to published piece?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Story Structure", level1: "No clear beginning/middle/end", level2: "Basic structure with gaps", level3: "Clear structure with transitions", level4: "Sophisticated structure with purposeful pacing" },
    { skill: "Descriptive Language", level1: "Tells without showing", level2: "Some sensory details", level3: "Consistent show-don't-tell with varied word choice", level4: "Vivid, precise language that creates strong imagery" },
    { skill: "Conventions", level1: "Many errors obscure meaning", level2: "Errors but meaning is clear", level3: "Minor errors; correctly punctuates dialogue", level4: "Near-correct; intentional craft choices with conventions" },
  ],
  materials: ["Heart map templates", "Story map graphic organizers", "CUPS editing checklists", "Publishing paper / booklet templates"],
};
