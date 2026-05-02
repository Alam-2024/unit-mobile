import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Identity, Values & Purpose (Grades 9–11) ───────────────────────
export const IdentityPurposeHigh: IUnits = {
  unitTitle: "IdentityPurpose",
  unitDBTitle: "IdentityPurpose",
  title: "Identity, Values & Purpose",
  gradeLevel: "9th – 11th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "A clear sense of identity and values provides the foundation for purposeful decision-making and authentic relationships.",
  overallExpectation:
    "Students explore the multiple dimensions of their identity, clarify core values, examine how social forces shape self-perception, and articulate a personal sense of purpose aligned with their strengths.",
  essentialQuestions: [
    "Who am I, and how do I know?",
    "What values guide my decisions, and where did they come from?",
    "How do I find purpose in a complex and changing world?",
  ],
  skills: ["Self-reflection", "Values clarification", "Identity exploration", "Purpose articulation"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Dimensions of identity.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Who Am I? Exploring Identity",
          objective: "Identify multiple dimensions of personal identity; examine how identity is fluid and contextual.",
          activities: [
            {
              description: "Identity Wheel",
              details: ["Complete an identity wheel with 8 dimensions (race, gender, nationality, religion, family role, interests, values, future aspirations); reflect: which feel most central right now?"],
            },
            {
              description: "Identity in Context",
              details: ["Discuss how identity shifts in different contexts (home vs. school vs. work); share examples of times a part of your identity felt more or less visible."],
            },
          ],
          reflection: "Is there a part of your identity that you rarely show at school? Why?",
          imgUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=TWpLvHP7fvM"],
        },
        {
          sessionNumber: 2,
          title: "Social Identity & Influence",
          objective: "Analyze how social groups, media, and culture shape identity; distinguish external labels from internal self-concept.",
          activities: [
            {
              description: "Media Identity Analysis",
              details: ["Analyze 3 social media profiles or advertisements; identify messages about who you should be; discuss how these shape self-perception for your age group."],
            },
            {
              description: "Internal vs External Identity",
              details: ["Create a two-column list: identities others assign to me vs. identities I choose for myself; discuss which feel empowering and which feel limiting."],
            },
          ],
          reflection: "How much of who you are is shaped by others' expectations vs. your own choices?",
          imgUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Values and decision-making.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Clarifying Your Values",
          objective: "Identify core personal values; analyze how values drive behavior and conflict.",
          activities: [
            {
              description: "Values Card Sort",
              details: ["Sort 50 values cards into Must Have, Important, and Nice to Have; narrow to top 5; discuss how values were formed (family, experience, culture)."],
            },
            {
              description: "Values in Action",
              details: ["Identify a recent decision you made; trace it back to the values driving it; evaluate: was your behavior aligned with your stated values?"],
            },
          ],
          reflection: "Have your values ever conflicted with each other? How did you decide what mattered more?",
        },
        {
          sessionNumber: 4,
          title: "Values Under Pressure",
          objective: "Examine how social pressure, peer influence, and fear can pull behavior away from core values.",
          activities: [
            {
              description: "Values Under Pressure Scenarios",
              details: ["Analyze 4 scenarios where characters compromise their values under pressure; identify the pressure, the compromise, and a values-aligned alternative response."],
            },
            {
              description: "Personal Values Pledge",
              details: ["Students write a 3-sentence values commitment: state 2 core values, describe how they show up in daily life, identify one situation where they want to be stronger."],
            },
          ],
          reflection: "When is it hardest for you to act according to your values? What makes it hard?",
        },
      ],
    },
    {
      week: 3,
      focus: "Strengths and purpose.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Discovering Your Strengths",
          objective: "Identify signature strengths; connect strengths to past successes and future possibilities.",
          activities: [
            {
              description: "Strength Inventory",
              details: ["Complete a character strengths inventory; identify top 5 strengths; find evidence of each in a specific past experience."],
            },
            {
              description: "Strength Spotting",
              details: ["Partner activity: each person describes a time they were proud of themselves; partner identifies and names the strengths visible in that story."],
            },
          ],
          reflection: "Are there strengths you have that others don't always see? How could you use them more?",
        },
        {
          sessionNumber: 6,
          title: "The Ikigai Framework",
          objective: "Apply the Ikigai framework to explore the intersection of passion, skill, need, and livelihood.",
          activities: [
            {
              description: "Ikigai Mapping",
              details: ["Map four Ikigai circles: What I love, What I am good at, What the world needs, What I can be paid for; find intersections; explore what sits at the center."],
            },
            {
              description: "Purpose Brainstorm",
              details: ["Generate 10 possible directions for your future based on the Ikigai map; discuss how purpose can guide but doesn't have to define you at 16."],
            },
          ],
          reflection: "You don't need to have your purpose figured out. What questions does this exercise open up for you?",
        },
      ],
    },
    {
      week: 4,
      focus: "Authentic self and personal statement.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Authenticity & Belonging",
          objective: "Define authenticity; examine the tension between fitting in and belonging; practice showing up authentically.",
          activities: [
            {
              description: "Fitting In vs Belonging Discussion",
              details: ["Discuss Brené Brown's distinction: fitting in requires changing yourself; belonging requires showing up as yourself; share examples of each."],
            },
            {
              description: "Authenticity Audit",
              details: ["In which relationships/contexts do you feel most yourself? Least yourself? What would it take to bring more of yourself into those 'low authenticity' spaces?"],
            },
          ],
          reflection: "Is being authentic always safe? What makes it risky, and is it worth the risk?",
        },
        {
          sessionNumber: 8,
          title: "Personal Statement: Who I Am & What I Stand For",
          objective: "Write and present a personal statement integrating identity, values, strengths, and purpose.",
          activities: [
            {
              description: "Personal Statement Draft",
              details: ["Write a 200-word personal statement: who I am (identity), what I stand for (values), what I bring (strengths), where I'm going (purpose); share with a trusted peer for feedback."],
            },
            {
              description: "Gallery Sharing",
              details: ["Post statements anonymously; class does a gallery walk adding one sticky note of affirmation per statement; debrief the experience of being truly seen."],
            },
          ],
          reflection: "What did you learn about yourself in this unit that you didn't know before?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Self-Awareness", level1: "Cannot identify values or strengths", level2: "Identifies values and strengths with prompting", level3: "Articulates identity, values, and strengths with specific evidence", level4: "Analyzes how identity, values, and strengths connect; presents with nuance and self-insight" },
    { skill: "Purpose Articulation", level1: "Cannot connect strengths to future direction", level2: "Identifies possible directions without connection to values", level3: "Creates a coherent personal statement connecting identity, values, and purpose", level4: "Personal statement shows sophisticated self-understanding; invites dialogue and reflection" },
  ],
  materials: ["Identity wheel template", "Values card sort deck", "Ikigai mapping template", "Character strengths inventory", "Personal statement outline"],
};

// ── Unit 2 ── Leadership & Community Advocacy (Grades 10–12) ─────────────────
export const LeadershipAdvocacyHigh: IUnits = {
  unitTitle: "LeadershipAdvocacy",
  unitDBTitle: "LeadershipAdvocacy",
  title: "Leadership & Community Advocacy",
  gradeLevel: "10th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Effective leaders combine self-awareness, empathy, and strategic thinking to advocate for change in their communities.",
  overallExpectation:
    "Students develop a personal leadership philosophy, analyze systemic community issues, practice advocacy skills, and design an action plan to address a cause they care about.",
  essentialQuestions: [
    "What does it mean to lead with integrity?",
    "How do individuals create systemic change?",
    "What makes an advocacy effort effective?",
  ],
  skills: ["Leadership styles", "Community analysis", "Public speaking & persuasion", "Advocacy and action planning"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Leadership identity.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Kind of Leader Are You?",
          objective: "Identify personal leadership style; evaluate strengths and growth edges as a leader.",
          activities: [
            {
              description: "Leadership Style Assessment",
              details: ["Complete a leadership style inventory (transformational, servant, democratic, directive); identify dominant style and discuss how it shows up in group situations."],
            },
            {
              description: "Leader Analysis",
              details: ["Analyze a leader the student admires: identify their style, values, and impact; connect to student's own leadership aspirations."],
            },
          ],
          reflection: "Leadership is more than a title. Describe a time you led without having official authority.",
          imgUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=FIUlHHyXSic"],
        },
        {
          sessionNumber: 2,
          title: "Ethical Leadership",
          objective: "Examine ethical dilemmas in leadership; define personal leadership values.",
          activities: [
            {
              description: "Ethical Dilemma Discussion",
              details: ["Analyze 3 real-world leadership ethical dilemmas (whistleblowing, loyalty vs. integrity, group vs. individual good); discuss how values guide decisions under pressure."],
            },
            {
              description: "Leadership Values Statement",
              details: ["Draft a 5-sentence leadership values statement: who I lead for, what I stand for, how I treat others, when I'll speak up, where I want to have impact."],
            },
          ],
          reflection: "Is it possible to be a great leader and also be ethical? What makes that hard sometimes?",
          imgUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Community awareness and systems thinking.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Reading Your Community",
          objective: "Identify assets and challenges in their local community using a community mapping framework.",
          activities: [
            {
              description: "Community Asset Map",
              details: ["Create a community asset map: people, organizations, physical spaces, and resources; discuss what strengths already exist and what is missing."],
            },
            {
              description: "Community Challenge Analysis",
              details: ["Select one community challenge; apply a root cause analysis (5 Whys); identify systemic vs. surface-level causes."],
            },
          ],
          reflection: "What community issue do you feel most strongly about? What do you think causes it at the deepest level?",
        },
        {
          sessionNumber: 4,
          title: "Understanding Systems",
          objective: "Apply systems thinking to explain why community problems persist and how change happens.",
          activities: [
            {
              description: "Iceberg Model",
              details: ["Apply the iceberg model to a social issue: events (tip), patterns, structures, mental models (below surface); discuss why attacking only events doesn't create lasting change."],
            },
            {
              description: "Leverage Points Discussion",
              details: ["Discuss Donella Meadows' leverage points framework; identify where change efforts could have the most impact in the community issue selected."],
            },
          ],
          reflection: "Why do well-intentioned programs sometimes fail to solve the problems they target? What does systems thinking reveal?",
        },
      ],
    },
    {
      week: 3,
      focus: "Advocacy skills.",
      sessions: [
        {
          sessionNumber: 5,
          title: "The Art of Persuasion",
          objective: "Apply ethos, pathos, and logos to construct a persuasive advocacy argument.",
          activities: [
            {
              description: "Rhetoric Analysis",
              details: ["Analyze 2 advocacy speeches for ethos, pathos, logos; evaluate which appeals were most effective and why."],
            },
            {
              description: "Advocacy Pitch Draft",
              details: ["Draft a 60-second advocacy pitch for the community issue they selected; include a hook, the problem, why it matters, and a specific ask."],
            },
          ],
          reflection: "When is emotional appeal (pathos) more effective than statistics (logos)? When is it less effective?",
        },
        {
          sessionNumber: 6,
          title: "Public Speaking & Presence",
          objective: "Deliver an advocacy pitch with confidence; apply feedback to improve delivery.",
          activities: [
            {
              description: "Pitch Practice Rounds",
              details: ["Students deliver 60-second pitches in groups of 3; each receives written feedback on: clarity, conviction, eye contact, and call to action."],
            },
            {
              description: "Revised Pitch",
              details: ["Revise pitch using peer feedback; practice with a partner; focus on vocal variety, pausing, and presence."],
            },
          ],
          reflection: "What is the difference between speaking loudly and speaking powerfully? How do you find your voice?",
        },
      ],
    },
    {
      week: 4,
      focus: "Action planning and culminating project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Designing an Advocacy Action Plan",
          objective: "Create a realistic advocacy action plan with goals, stakeholders, strategies, and success metrics.",
          activities: [
            {
              description: "Stakeholder Mapping",
              details: ["Map stakeholders for the community issue: who is affected, who has power, who is an ally, who is a barrier; develop a strategy to engage each group."],
            },
            {
              description: "Action Plan Development",
              details: ["Create a written action plan: issue, goal, 3 strategies, timeline, resources needed, how success will be measured; peer review for feasibility."],
            },
          ],
          reflection: "What is one obstacle you haven't fully accounted for yet? How will you address it?",
        },
        {
          sessionNumber: 8,
          title: "Leadership & Advocacy Showcase",
          objective: "Present advocacy action plan to a real or simulated audience; demonstrate leadership voice and vision.",
          activities: [
            {
              description: "Showcase Presentations",
              details: ["Students deliver 3-minute presentations of their advocacy action plan; audience includes peers and optionally community members, teachers, or administrators."],
            },
            {
              description: "Leadership Reflection Letter",
              details: ["Write a 1-page letter to your future self: what kind of leader do you want to be, what community impact do you want to have, what will you do next?"],
            },
          ],
          reflection: "One person can make a difference — but rarely alone. Who do you need to build with to create the change you want to see?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Leadership Identity", level1: "Cannot articulate leadership values or style", level2: "Identifies leadership style without connecting to values", level3: "Articulates leadership style, values, and ethical commitments", level4: "Demonstrates leadership philosophy with evidence of practice and growth" },
    { skill: "Advocacy Skills", level1: "Cannot construct or deliver an argument", level2: "Presents an issue without clear argument structure", level3: "Delivers a structured advocacy pitch with ethos, pathos, logos", level4: "Adapts pitch to audience; action plan is feasible, specific, and systems-informed" },
  ],
  materials: ["Leadership style inventory", "Community asset map template", "Iceberg model worksheet", "Stakeholder mapping template", "Action plan template", "Peer feedback forms"],
};
