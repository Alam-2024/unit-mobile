import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Emotional Regulation & Stress Management (Grades 6–8) ───────────
export const EmotionalRegulationMiddle: IUnits = {
  unitTitle: "EmotionalRegulation",
  unitDBTitle: "EmotionalRegulation",
  title: "Emotional Regulation & Stress Management",
  gradeLevel: "6th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Understanding and regulating emotions is a learnable skill that builds resilience and supports healthy relationships.",
  overallExpectation:
    "Students identify their emotional triggers, apply evidence-based regulation strategies, and build personalized stress management plans they can use in daily life.",
  essentialQuestions: [
    "What happens in my brain and body when I experience strong emotions?",
    "What strategies actually work for managing stress and big feelings?",
    "How can I build habits that support my emotional wellbeing?",
  ],
  skills: ["Emotional self-awareness", "Stress identification", "Regulation strategies", "Resilience building"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Understanding emotions and the brain.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Your Brain on Emotions",
          objective: "Explain the role of the amygdala and prefrontal cortex in emotional responses; identify personal emotional triggers.",
          activities: [
            {
              description: "Brain Science Overview",
              details: ["Introduce the amygdala (alarm system) and prefrontal cortex (thinking brain); explain the 'amygdala hijack' concept with relatable examples."],
            },
            {
              description: "Personal Trigger Map",
              details: ["Students create a trigger map: list 5 situations that cause strong emotions; rate intensity (1–10); identify which emotions they trigger."],
            },
          ],
          reflection: "When your amygdala fires, what does it feel like in your body? How do you know you've been 'hijacked'?",
          imgUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=oTugjssqOT0"],
        },
        {
          sessionNumber: 2,
          title: "The Stress Response",
          objective: "Describe the fight-flight-freeze response; distinguish between helpful and harmful stress.",
          activities: [
            {
              description: "Stress Spectrum",
              details: ["Introduce eustress (good stress) vs. distress; students categorize their own stressors on a spectrum from 'helpful challenge' to 'overwhelming'."],
            },
            {
              description: "Body Signals Journal",
              details: ["Students journal: 3 physical signs they notice when stressed (headache, tight shoulders, racing heart); discuss commonalities."],
            },
          ],
          reflection: "Is all stress bad? When has stress actually helped you perform better?",
          imgUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Regulation strategies.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Breathing & Grounding Techniques",
          objective: "Practice at least 3 evidence-based calming techniques: box breathing, 5-4-3-2-1 grounding, and progressive muscle relaxation.",
          activities: [
            {
              description: "Box Breathing Practice",
              details: ["Guide students through box breathing (inhale 4, hold 4, exhale 4, hold 4); repeat 3 rounds; discuss the physiological effect on heart rate."],
            },
            {
              description: "5-4-3-2-1 Grounding",
              details: ["Practice the sensory grounding technique: name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste; discuss how it interrupts anxiety."],
            },
          ],
          reflection: "Which technique felt most natural to you? When might you use it at school?",
        },
        {
          sessionNumber: 4,
          title: "Cognitive Reframing",
          objective: "Apply cognitive reframing to turn catastrophic thinking into balanced thinking.",
          activities: [
            {
              description: "Thought Trap Identification",
              details: ["Introduce common cognitive distortions: catastrophizing, all-or-nothing thinking, mind-reading; students find examples in provided scenarios."],
            },
            {
              description: "Reframe Practice",
              details: ["Practice replacing distorted thoughts with balanced alternatives using sentence starters: 'A more balanced way to see this is...' — apply to 4 scenarios."],
            },
          ],
          reflection: "Give an example of a thought you've had that was a 'thought trap.' What would a reframe look like?",
        },
      ],
    },
    {
      week: 3,
      focus: "Coping with school and social stress.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Academic Stress & Time Management",
          objective: "Identify sources of academic stress; apply time management strategies to reduce overwhelm.",
          activities: [
            {
              description: "Stress Audit",
              details: ["Students audit their weekly academic load; identify peak stress periods (tests, projects); discuss the connection between poor time management and anxiety."],
            },
            {
              description: "Priority Matrix",
              details: ["Introduce the Eisenhower Matrix (urgent/important quadrants); students sort 10 tasks; create a realistic weekly schedule with built-in breaks."],
            },
          ],
          reflection: "When you feel overwhelmed with schoolwork, what is the first thing you usually do? Is it helpful?",
        },
        {
          sessionNumber: 6,
          title: "Social Stress & Peer Pressure",
          objective: "Recognize social stressors including peer pressure, social media comparison, and exclusion; practice assertive responses.",
          activities: [
            {
              description: "Social Stressor Gallery Walk",
              details: ["Post 6 social stress scenarios around the room; students rate their personal stress level for each and write one coping strategy they'd use."],
            },
            {
              description: "Assertive Response Role Play",
              details: ["Practice three responses to peer pressure: assertive refusal, broken record technique, change-the-subject exit; role-play with a partner."],
            },
          ],
          reflection: "How does social media affect your mood and stress levels? What boundaries could help?",
        },
      ],
    },
    {
      week: 4,
      focus: "Building a personal wellness plan.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Healthy Habits for Emotional Wellness",
          objective: "Connect sleep, exercise, nutrition, and screen time to emotional regulation; evaluate personal habits.",
          activities: [
            {
              description: "Wellness Habits Audit",
              details: ["Students rate their current habits (sleep, exercise, nutrition, screen time) on a 1–5 scale; identify one habit to improve and set a specific SMART goal."],
            },
            {
              description: "Science of Sleep and Mood",
              details: ["Discuss how sleep deprivation impairs the prefrontal cortex; students design an ideal evening wind-down routine."],
            },
          ],
          reflection: "Which wellness habit has the biggest impact on your mood? What would it take to improve it?",
        },
        {
          sessionNumber: 8,
          title: "My Personal Stress Management Plan",
          objective: "Create and present a personalized stress management plan that integrates unit strategies.",
          activities: [
            {
              description: "Stress Management Plan",
              details: ["Students create a one-page plan: 3 triggers, 3 early warning signs, 3 regulation strategies, 1 healthy habit goal, 2 trusted supports."],
            },
            {
              description: "Plan Share & Peer Feedback",
              details: ["Students share plans in small groups; peers offer one strength and one suggestion; revise plan based on feedback."],
            },
          ],
          reflection: "How has your understanding of your own emotions changed over these four weeks?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Emotional Awareness", level1: "Cannot identify triggers or body signals", level2: "Identifies triggers with prompting", level3: "Independently identifies triggers, body signals, and emotions", level4: "Analyzes emotional patterns and explains connections to behavior" },
    { skill: "Regulation Strategies", level1: "Cannot apply any strategy", level2: "Uses one strategy with prompting", level3: "Applies multiple strategies appropriately", level4: "Selects strategies based on emotion type and intensity; teaches others" },
  ],
  materials: ["Trigger map template", "Box breathing visual", "Cognitive distortions handout", "Eisenhower Matrix template", "Personal stress management plan template"],
};

// ── Unit 2 ── Conflict Resolution & Empathy (Grades 7–8) ─────────────────────
export const ConflictResolutionMiddle: IUnits = {
  unitTitle: "ConflictResolution",
  unitDBTitle: "ConflictResolution",
  title: "Conflict Resolution & Empathy",
  gradeLevel: "7th – 8th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Empathy is the foundation of effective conflict resolution; understanding another's perspective transforms how we handle disagreement.",
  overallExpectation:
    "Students develop empathy skills, distinguish between healthy and harmful conflict patterns, and apply structured mediation strategies to resolve interpersonal conflicts constructively.",
  essentialQuestions: [
    "What is empathy, and why is it hard to practice?",
    "What makes conflict escalate or de-escalate?",
    "How can we solve conflicts in a way that respects everyone's needs?",
  ],
  skills: ["Perspective-taking", "Active listening", "Conflict de-escalation", "Mediation skills"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Empathy and perspective-taking.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is Empathy?",
          objective: "Distinguish between empathy and sympathy; practice cognitive and affective empathy.",
          activities: [
            {
              description: "Empathy vs Sympathy Discussion",
              details: ["Use Brené Brown's empathy framework; discuss the difference: sympathy says 'at least...', empathy says 'I hear you'; apply to 4 realistic scenarios."],
            },
            {
              description: "Perspective Walk",
              details: ["Read a conflict scenario; students write the event from three perspectives (their own, the other person, a bystander); debrief: what changed when you stepped into someone else's shoes?"],
            },
          ],
          reflection: "When was a time someone showed you real empathy? How did it feel different from sympathy?",
          imgUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=KUqnkVRojtE"],
        },
        {
          sessionNumber: 2,
          title: "Active Listening Skills",
          objective: "Demonstrate active listening using paraphrasing, body language, and clarifying questions.",
          activities: [
            {
              description: "Listening Self-Assessment",
              details: ["Rate current listening habits (1–5): eye contact, phone use, interrupting, paraphrasing; identify one area to improve."],
            },
            {
              description: "Active Listening Practice",
              details: ["Partners take turns sharing a frustration (2 minutes); listener practices: nod, maintain eye contact, paraphrase, ask one clarifying question; swap and debrief."],
            },
          ],
          reflection: "What is the hardest part of truly listening to someone you disagree with?",
          imgUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Understanding conflict dynamics.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Conflict Styles",
          objective: "Identify five conflict styles (avoiding, competing, accommodating, compromising, collaborating) and evaluate when each is appropriate.",
          activities: [
            {
              description: "Conflict Style Assessment",
              details: ["Students complete a 10-question conflict style inventory; graph results; discuss their dominant style's strengths and limitations."],
            },
            {
              description: "Style Scenario Matching",
              details: ["Present 5 conflict scenarios; students identify which style each character is using and evaluate whether it is effective for that situation."],
            },
          ],
          reflection: "Is your dominant conflict style always helpful? When might a different style work better?",
        },
        {
          sessionNumber: 4,
          title: "Escalation and De-escalation",
          objective: "Identify verbal and nonverbal behaviors that escalate or de-escalate conflict.",
          activities: [
            {
              description: "Escalation Triggers Role Play",
              details: ["Role-play a disagreement that escalates; observers note specific words or actions that triggered escalation; debrief as a class."],
            },
            {
              description: "De-escalation Toolkit",
              details: ["Build a de-escalation toolkit: tone of voice, 'I' statements, taking a break, acknowledging feelings; practice each tool in pairs."],
            },
          ],
          reflection: "What is one thing YOU tend to say or do that escalates conflict? How could you change it?",
        },
      ],
    },
    {
      week: 3,
      focus: "Conflict resolution strategies.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Interests vs Positions",
          objective: "Distinguish between positions (what someone wants) and interests (why they want it); use interest-based negotiation.",
          activities: [
            {
              description: "Orange Negotiation Exercise",
              details: ["Two people want the same orange; surface positions vs. interests; discover that one needs the juice, the other the peel — model interest-based resolution."],
            },
            {
              description: "Interest Mapping",
              details: ["Apply interest mapping to 3 school-based conflicts; identify underlying needs for each party; brainstorm solutions that meet both sets of interests."],
            },
          ],
          reflection: "Why do people fight over positions when finding common interests could solve the problem?",
        },
        {
          sessionNumber: 6,
          title: "Peer Mediation Process",
          objective: "Apply a 5-step peer mediation model to resolve a conflict.",
          activities: [
            {
              description: "Mediation Model Introduction",
              details: ["Teach the 5-step model: (1) Set ground rules, (2) Each party shares uninterrupted, (3) Identify issues, (4) Brainstorm solutions, (5) Agree and commit."],
            },
            {
              description: "Mock Mediation",
              details: ["Groups of three practice mediation: two parties in conflict, one mediator; rotate roles; debrief the process and outcome."],
            },
          ],
          reflection: "What qualities make a good mediator? Do you have those qualities? How could you develop them?",
        },
      ],
    },
    {
      week: 4,
      focus: "Digital conflict and culminating project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Conflict in Digital Spaces",
          objective: "Identify how conflict behaves differently online; apply de-escalation strategies to digital communication.",
          activities: [
            {
              description: "Digital Conflict Analysis",
              details: ["Analyze 3 anonymized social media conflict threads; identify escalation triggers; rewrite one thread using de-escalation strategies."],
            },
            {
              description: "Digital Empathy Challenge",
              details: ["Before responding online, apply: Is it True? Is it Helpful? Is it Inspiring? Is it Necessary? Is it Kind? (THINK) — practice with 5 example messages."],
            },
          ],
          reflection: "Why is conflict harder to resolve over text than in person? What strategies can bridge that gap?",
        },
        {
          sessionNumber: 8,
          title: "Conflict Resolution Showcase",
          objective: "Demonstrate conflict resolution skills through a real-world scenario presentation.",
          activities: [
            {
              description: "Scenario Role Play Showcase",
              details: ["Groups choose a real-world type of conflict (school, family, community, online); role-play the conflict and model a resolution process; class provides feedback."],
            },
            {
              description: "Exit Reflection",
              details: ["Written reflection: describe a conflict you handled better because of this unit; what strategy did you use and what was the outcome?"],
            },
          ],
          reflection: "How has learning about empathy changed how you approach people you disagree with?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Empathy & Perspective-Taking", level1: "Cannot take another's perspective", level2: "Identifies another perspective with prompting", level3: "Articulates multiple perspectives with empathy", level4: "Analyzes complex situations from multiple perspectives; models empathy for peers" },
    { skill: "Conflict Resolution", level1: "Cannot apply resolution steps", level2: "Applies one strategy with support", level3: "Applies mediation model to realistic conflicts", level4: "Adapts strategies to context; successfully mediates peer conflicts" },
  ],
  materials: ["Conflict style inventory", "Mediation model poster", "Scenario role-play cards", "Digital conflict case studies", "THINK poster"],
};
