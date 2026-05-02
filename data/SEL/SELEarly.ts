import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Feelings & Self-Awareness (PK-3 – KG) ───────────────────────────
export const FeelingsAwarenessEarly: IUnits = {
  unitTitle: "Feelings & Self-Awareness",
  unitDBTitle: "FeelingsAwareness",
  title: "Feelings & Self-Awareness (PK-3 – KG)",
  gradeLevel: "PK-3 – Kindergarten",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Everyone has feelings; learning to notice and name them is the first step to managing them well.",
  overallExpectation:
    "Students identify a range of emotions in themselves and others, practice simple calming strategies, and begin to understand that all feelings are okay — but not all behaviors are.",
  essentialQuestions: [
    "What does this feeling feel like in my body?",
    "Is it okay to feel angry or sad?",
    "What can I do when I have a big feeling?",
  ],
  skills: ["Emotion identification", "Body awareness", "Calming strategies", "Empathy basics"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Naming feelings.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Feelings Have Names",
          objective: "Name at least 6 emotions using pictures, words, and body language.",
          activities: [
            {
              description: "Feelings Wall",
              details: ["Build a class Feelings Wall with picture cards: happy, sad, angry, scared, surprised, proud; students act out each."],
            },
            {
              description: "Mirror Game",
              details: ["Students make an emotion face in a mirror; partner guesses the feeling."],
            },
          ],
          reflection: "What feeling do you have most often at school?",
          imgUrl: "https://images.unsplash.com/photo-FtL07GM9Q7Y?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=nCrjevx3-Js"],
        },
        {
          sessionNumber: 2,
          title: "Reading Others' Feelings",
          objective: "Identify emotions in characters from a picture book; practice empathy.",
          activities: [
            {
              description: "Read-Aloud with Feeling Check-Ins",
              details: ["Read a picture book; pause to ask: 'How do you think this character feels? How can you tell?'"],
            },
            {
              description: "Empathy Sentence",
              details: ["Students complete: 'If I were ___, I would feel ___ because ___.'"],
            },
          ],
          reflection: "How can you tell someone is sad even if they don't say anything?",
          imgUrl: "https://images.unsplash.com/photo--Ux5mdMJNEA?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Feelings in my body.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Where Do Feelings Live?",
          objective: "Connect emotions to body sensations; identify physical cues for 3 emotions.",
          activities: [
            {
              description: "Body Outline Activity",
              details: ["Trace a body outline; color where fear/anger/happiness feels in the body (e.g., stomachache for worry)."],
            },
            {
              description: "Feelings Thermometer",
              details: ["Introduce a 5-point thermometer (calm → small feeling → medium → big → explosive); students rate how big a feeling is."],
            },
          ],
          reflection: "What does your body do when you are really excited?",
        },
        {
          sessionNumber: 4,
          title: "Big Feelings Are Okay",
          objective: "Understand that all feelings are acceptable; some behaviors are not.",
          activities: [
            {
              description: "Feelings vs Behaviors",
              details: ["Discuss: 'It is okay to feel angry. It is not okay to hit.' Sort scenarios into 'okay feeling' and 'not okay behavior'."],
            },
            {
              description: "Story Discussion",
              details: ["Read a story about a character with a big feeling who makes a poor choice; discuss what they could have done instead."],
            },
          ],
          reflection: "Can you feel angry AND choose not to hurt someone? How?",
        },
      ],
    },
    {
      week: 3,
      focus: "Calming strategies.",
      sessions: [
        {
          sessionNumber: 5,
          title: "The Calm-Down Toolkit",
          objective: "Practice at least 3 calming strategies: belly breathing, counting, and moving.",
          activities: [
            {
              description: "Belly Breathing",
              details: ["Practice 'smell the flowers, blow out the candle' breathing; students place a hand on their belly to feel it rise."],
            },
            {
              description: "Calm-Down Choices",
              details: ["Explore: count to 10, take 3 deep breaths, do 5 jumping jacks, squeeze a stress ball; students pick a favorite."],
            },
          ],
          reflection: "Which calming strategy feels best for YOUR body?",
        },
        {
          sessionNumber: 6,
          title: "The Calm-Down Corner",
          objective: "Know when and how to use a calm-down space; practice asking for a break.",
          activities: [
            {
              description: "Calm-Down Corner Setup",
              details: ["Create a class calm-down corner with materials; establish rules for its use."],
            },
            {
              description: "Role Play",
              details: ["Practice saying 'I need a calm-down break' and going to the corner; return to the group when ready."],
            },
          ],
          reflection: "How does taking a break help you and also help the people around you?",
        },
      ],
    },
    {
      week: 4,
      focus: "Kindness and connection.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Being Kind",
          objective: "Define kindness; identify kind actions vs unkind actions.",
          activities: [
            {
              description: "Kindness Sort",
              details: ["Sort scenario cards: sharing, excluding, helping, teasing; label kind or unkind; discuss why it matters."],
            },
            {
              description: "Kindness Challenge",
              details: ["Students complete a 3-day kindness challenge: one act of kindness per day; report back."],
            },
          ],
          reflection: "How did you feel after doing something kind for someone else?",
        },
        {
          sessionNumber: 8,
          title: "SEL Celebration",
          objective: "Reflect on feelings vocabulary, calming strategies, and kindness learned.",
          activities: [
            {
              description: "Feelings Dictionary",
              details: ["Each student creates a 3-page mini feelings dictionary: feeling name, drawing, and 'I feel ___ when ___.'"],
            },
            {
              description: "Calm-Down Strategy Poster",
              details: ["Groups create a poster of favorite calm-down strategies to hang in class as a reference tool."],
            },
          ],
          reflection: "What is the most important thing you learned about feelings?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Emotion Identification", level1: "Cannot name emotions", level2: "Names 1–2 basic emotions", level3: "Names 6+ emotions and identifies body cues", level4: "Recognizes emotions in others and explains empathic response" },
    { skill: "Calming Strategies", level1: "Does not use strategies", level2: "Uses one strategy with prompting", level3: "Selects and uses a strategy independently", level4: "Chooses strategy appropriate to emotion intensity; explains why" },
  ],
  materials: ["Feelings picture cards", "Mirrors", "Body outline templates", "Feelings thermometer poster", "Calm-down corner supplies (stress ball, breathing cards)", "Kindness sort cards"],
};

// ── Unit 2 ── Making Friends & Solving Problems (Grades 1–3) ─────────────────
export const FriendshipSELElementary: IUnits = {
  unitTitle: "Making Friends & Solving Problems",
  unitDBTitle: "FriendshipSEL",
  title: "Making Friends & Solving Problems (Grades 1–3)",
  gradeLevel: "1st – 3rd Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Healthy friendships are built on respect, honesty, and kindness; conflicts can be solved without hurting each other.",
  overallExpectation:
    "Students demonstrate social skills for making and keeping friends, identify conflict triggers, and apply step-by-step conflict resolution strategies.",
  essentialQuestions: [
    "What makes someone a good friend?",
    "What starts a conflict and what can make it bigger?",
    "How can we solve a problem without fighting?",
  ],
  skills: ["Friendship skills", "Recognizing conflict escalation", "Conflict resolution steps", "Perspective-taking"],
  weeklyPlan: [
    {
      week: 1,
      focus: "What makes a good friend?",
      sessions: [
        {
          sessionNumber: 1,
          title: "Friendship Qualities",
          objective: "Identify qualities of a good friend; compare friendly vs unfriendly behaviors.",
          activities: [
            {
              description: "Friendship Web",
              details: ["Students brainstorm friendship qualities; connect to a central circle; discuss which matter most and why."],
            },
            {
              description: "Friendly/Unfriendly Sort",
              details: ["Sort 12 behavior cards into friendly and unfriendly; discuss how each would make you feel."],
            },
          ],
          reflection: "What kind of friend do YOU want to be?",
          imgUrl: "https://images.unsplash.com/photo--Ux5mdMJNEA?auto=format&fit=crop&w=800&q=80",
          videoUrl: ["https://www.youtube.com/watch?v=R9YX-t23YoQ"],
        },
        {
          sessionNumber: 2,
          title: "Making New Friends",
          objective: "Practice 3 strategies for starting a conversation and joining a group.",
          activities: [
            {
              description: "Conversation Starters",
              details: ["Learn and practice: give a compliment, ask a question, find something in common."],
            },
            {
              description: "Role Play: Joining a Group",
              details: ["Practice walking up to a group and asking to join; practice accepting and politely rejecting the request."],
            },
          ],
          reflection: "What is the hardest part about making a new friend?",
          imgUrl: "https://images.unsplash.com/photo--Ux5mdMJNEA?auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      week: 2,
      focus: "Keeping friends and handling differences.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Listening and Cooperation",
          objective: "Demonstrate active listening and cooperation in partner and group tasks.",
          activities: [
            {
              description: "Partner Listening Activity",
              details: ["Partner A talks for 1 minute about their weekend; Partner B paraphrases; swap; discuss how it felt to be listened to."],
            },
            {
              description: "Cooperation Challenge",
              details: ["Groups complete a task that requires everyone's contribution (e.g., build a tower, create a group drawing)."],
            },
          ],
          reflection: "How does listening make your friend feel?",
        },
        {
          sessionNumber: 4,
          title: "When Friends Disagree",
          objective: "Understand that disagreement is normal; distinguish disagreement from fighting.",
          activities: [
            {
              description: "Disagree With Respect",
              details: ["Practice saying: 'I understand your point, but I think ___'; role-play 3 scenarios."],
            },
            {
              description: "Friendship Story Analysis",
              details: ["Read a picture book where two friends disagree; identify how they handled it; evaluate the outcome."],
            },
          ],
          reflection: "Can two people disagree and still be friends? Give an example.",
        },
      ],
    },
    {
      week: 3,
      focus: "Understanding and managing conflicts.",
      sessions: [
        {
          sessionNumber: 5,
          title: "What Starts a Conflict?",
          objective: "Identify common conflict triggers; recognize how conflict escalates.",
          activities: [
            {
              description: "Trigger Identification",
              details: ["List common triggers (unfairness, misunderstanding, teasing); connect to physical reaction (hot feeling, clenched fists)."],
            },
            {
              description: "Conflict Escalation Ladder",
              details: ["Draw a ladder; place conflict actions from small (ignoring) to large (physical fighting); discuss how to stop early."],
            },
          ],
          reflection: "What is your personal conflict trigger? How does your body signal it?",
        },
        {
          sessionNumber: 6,
          title: "Conflict Resolution Steps",
          objective: "Apply a 4-step conflict resolution process: Stop → Think → Talk → Agree.",
          activities: [
            {
              description: "STOP-THINK-TALK-AGREE Practice",
              details: ["Teach each step with a visual; practice with a partner using a scripted conflict scenario."],
            },
            {
              description: "Conflict Scenario Role Play",
              details: ["Each pair resolves a different conflict scenario using the 4-step process; share outcomes with the class."],
            },
          ],
          reflection: "Which step in the conflict resolution process is hardest for you? Why?",
        },
      ],
    },
    {
      week: 4,
      focus: "Asking for help and celebration.",
      sessions: [
        {
          sessionNumber: 7,
          title: "When to Ask an Adult",
          objective: "Distinguish between conflicts students can solve alone and those that need an adult.",
          activities: [
            {
              description: "Handle It / Get Help Sort",
              details: ["Sort 10 scenario cards: can handle it myself vs need to get an adult (bullying, safety issue, stranger)."],
            },
            {
              description: "Trusted Adults",
              details: ["Each student lists 3 trusted adults they can go to; discuss what makes someone a trusted adult."],
            },
          ],
          reflection: "Is asking for help a sign of weakness or strength? Why?",
        },
        {
          sessionNumber: 8,
          title: "Friendship Celebration",
          objective: "Reflect on social skills learned; celebrate growth as a class community.",
          activities: [
            {
              description: "Friendship Pledge",
              details: ["Class writes and signs a friendship pledge: 3 commitments to being a good friend and classmate."],
            },
            {
              description: "Appreciation Circle",
              details: ["Each student gives one specific compliment to a classmate; class reflects on how it feels to receive appreciation."],
            },
          ],
          reflection: "What is one friendship skill you want to keep practicing?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Friendship Skills", level1: "Does not demonstrate friendly behaviors", level2: "Demonstrates 1–2 skills with prompting", level3: "Demonstrates multiple friendship skills independently", level4: "Adapts skills to different social contexts; mentors peers" },
    { skill: "Conflict Resolution", level1: "Cannot apply steps", level2: "Applies steps with heavy support", level3: "Applies 4-step process to simple conflicts", level4: "Applies process to complex scenarios; recognizes when adult help is needed" },
  ],
  materials: ["Friendship quality web template", "Behavior sort cards", "Conflict escalation ladder template", "STOP-THINK-TALK-AGREE poster", "Scenario role-play cards", "Trusted adult worksheet"],
};
