import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Reading Music: Notes & Rhythms (Grades 3–5) ────────────────────
export const ReadingMusicElementary: IUnits = {
  unitTitle: "Reading Music: Notes & Rhythms",
  unitDBTitle: "ReadingMusic",
  title: "Reading Music: Notes & Rhythms (Grades 3–5)",
  gradeLevel: "3rd – 5th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Music notation is a written language that tells musicians what to play and when.",
  overallExpectation:
    "Students read basic music notation including treble clef, quarter/half/whole notes, rests, time signatures, and perform simple melodies from notation.",
  essentialQuestions: [
    "Why do musicians use written notation?",
    "How does the position of a note on the staff tell us its pitch?",
    "What does a time signature tell us?",
  ],
  skills: ["Treble clef and staff", "Note names", "Note values and rests", "Simple melody performance"],
  weeklyPlan: [
    {
      week: 1,
      focus: "The staff and treble clef.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Lines and Spaces",
          objective: "Name the lines and spaces of the treble clef staff using mnemonics.",
          activities: [
            {
              description: "Staff Introduction",
              details: ["Draw a 5-line staff; label lines (EGBDF – Every Good Boy Does Fine) and spaces (FACE)."],
            },
            {
              description: "Note Placement Practice",
              details: ["Place note heads on the staff for given note names; identify notes from given positions."],
            },
          ],
          reflection: "What trick helps you remember the line notes? Create your own mnemonic!",
        },
        {
          sessionNumber: 2,
          title: "Treble Clef Drawing & Note Reading",
          objective: "Draw the treble clef symbol; read whole notes on the treble clef.",
          activities: [
            {
              description: "Treble Clef Practice",
              details: ["Follow step-by-step instructions to draw a treble clef; practice 5 times with increasing neatness."],
            },
            {
              description: "Note Reading Flashcards",
              details: ["Flashcard drill with whole notes on random staff positions; students name each note."],
            },
          ],
          reflection: "Which note on the staff is hardest to remember? How will you practice it?",
        },
      ],
    },
    {
      week: 2,
      focus: "Note values and rhythm.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Quarter, Half, and Whole Notes",
          objective: "Identify and clap quarter, half, and whole note values.",
          activities: [
            {
              description: "Pie Chart Analogy",
              details: ["Show whole note = 4 beats, half note = 2 beats, quarter note = 1 beat using a divided circle."],
            },
            {
              description: "Clapping Rhythms",
              details: ["Clap rhythms written on the board; students count aloud (1-2-3-4) while clapping."],
            },
          ],
          reflection: "If a whole note = 4 beats, how many quarter notes fit in a measure?",
        },
        {
          sessionNumber: 4,
          title: "Rests and Time Signatures",
          objective: "Identify quarter and half rests; read a 4/4 time signature.",
          activities: [
            {
              description: "Rest Notation Practice",
              details: ["Draw quarter and half rests; clap rhythms that include rests (silence during rest)."],
            },
            {
              description: "Time Signature Exploration",
              details: ["Explain top (beats per measure) and bottom (note value = 1 beat) of time signature; analyze examples."],
            },
          ],
          reflection: "Why are rests just as important as notes in music?",
        },
      ],
    },
    {
      week: 3,
      focus: "Playing from notation.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Recorder or Xylophone Introduction",
          objective: "Produce a clear tone on recorder or xylophone; play B, A, and G from notation.",
          activities: [
            {
              description: "Instrument Technique",
              details: ["Demonstrate proper instrument hold and breath/mallet technique; practice long tones."],
            },
            {
              description: "B-A-G Songs",
              details: ["Play simple songs using only B, A, and G notes; read from notation on the board."],
            },
          ],
          reflection: "What is the hardest part of reading music and playing at the same time?",
        },
        {
          sessionNumber: 6,
          title: "Simple Melody Performance",
          objective: "Play a simple melody from notation including notes C through G.",
          activities: [
            {
              description: "New Notes: C, D, E",
              details: ["Introduce C, D, E fingerings/positions; practice scales; add to note flashcard deck."],
            },
            {
              description: "Melody Practice",
              details: ["Rehearse a 4-bar melody; practice slowly then at tempo; identify challenging passages."],
            },
          ],
          reflection: "What strategy helps you when you come to a hard part in the music?",
        },
      ],
    },
    {
      week: 4,
      focus: "Composing and performance.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Composing a Rhythm",
          objective: "Compose a 4-measure rhythm in 4/4 using quarter, half, and whole notes/rests.",
          activities: [
            {
              description: "Rhythm Composition",
              details: ["Students compose a 4-measure rhythm on a staff template; count to verify it adds up to 4 beats per measure."],
            },
            {
              description: "Peer Performance",
              details: ["Exchange rhythms with a partner; clap each other's composition; give feedback."],
            },
          ],
          reflection: "How does composing music feel different from reading it?",
        },
        {
          sessionNumber: 8,
          title: "Music Reading Recital",
          objective: "Perform a melody from notation in a class recital.",
          activities: [
            {
              description: "Recital Rehearsal",
              details: ["Final run-through; focus on steady tempo and clean notes; mark trouble spots for practice."],
            },
            {
              description: "Recital Performance",
              details: ["Perform individually or in small groups for the class; self-assess using a 4-point checklist."],
            },
          ],
          reflection: "What will you do to keep improving your music reading skills?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Note Reading", level1: "Cannot name notes on staff", level2: "Names notes with prompting", level3: "Names treble clef notes independently", level4: "Reads notes quickly and plays from notation fluently" },
    { skill: "Rhythm Performance", level1: "Cannot maintain steady beat", level2: "Performs quarter notes only", level3: "Performs quarter, half, whole notes/rests correctly", level4: "Performs complex patterns; composes own rhythms" },
  ],
  materials: ["Recorders or xylophones/keyboards", "Music notation worksheets", "Flashcard sets", "Composition staff paper", "Pencils with erasers"],
};

// ── Unit 2 ── World Music & Cultural Connections (Grades 4–5) ─────────────────
export const WorldMusicElementary: IUnits = {
  unitTitle: "World Music & Cultural Connections",
  unitDBTitle: "WorldMusic",
  title: "World Music & Cultural Connections (Grades 4–5)",
  gradeLevel: "4th – 5th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Every culture has its own musical traditions that reflect history, values, and ways of life.",
  overallExpectation:
    "Students listen to, analyze, and perform music from diverse world cultures; connect musical elements to cultural context.",
  essentialQuestions: [
    "How does music reflect the culture it comes from?",
    "What musical elements are shared across all cultures?",
    "What can we learn about a culture by listening to its music?",
  ],
  skills: ["Active listening", "Cultural context analysis", "World rhythm performance", "Comparative music analysis"],
  weeklyPlan: [
    {
      week: 1,
      focus: "African music traditions.",
      sessions: [
        {
          sessionNumber: 1,
          title: "West African Drumming",
          objective: "Identify the role of drums in West African culture; perform a basic djembe pattern.",
          activities: [
            {
              description: "Listening and Discussion",
              details: ["Listen to West African drum ensemble; identify: instruments, texture, purpose (ceremony, communication)."],
            },
            {
              description: "Djembe Rhythm Pattern",
              details: ["Learn a basic djembe 4-beat pattern on drums or desk; layer patterns in groups."],
            },
          ],
          reflection: "In what ways does the music we heard communicate something to the listener?",
        },
        {
          sessionNumber: 2,
          title: "Call and Response",
          objective: "Define and perform call-and-response as a fundamental structure in African music.",
          activities: [
            {
              description: "Call-Response Identification",
              details: ["Listen to a traditional work song; identify leader phrases vs group response phrases."],
            },
            {
              description: "Class Call-Response",
              details: ["Teacher improvises a call rhythm; class responds with a fixed pattern; switch caller to students."],
            },
          ],
          reflection: "Where else in your life have you experienced call-and-response?",
        },
      ],
    },
    {
      week: 2,
      focus: "Latin American music.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Salsa & Cumbia",
          objective: "Identify rhythmic and melodic features of Latin American popular music.",
          activities: [
            {
              description: "Rhythm Comparison",
              details: ["Compare salsa clave pattern to a 4/4 march beat; clap both; discuss the 'swing' feel."],
            },
            {
              description: "Movement Introduction",
              details: ["Learn a simple 4-step salsa side-step pattern; connect movement to musical pulse."],
            },
          ],
          reflection: "How does movement help you feel the rhythm differently than just clapping?",
        },
        {
          sessionNumber: 4,
          title: "Marimba & Andean Music",
          objective: "Identify the marimba and panpipes; describe how geography influenced their development.",
          activities: [
            {
              description: "Instrument Origins",
              details: ["Research how the marimba (Central America) and zampoña (Andes) are made and played."],
            },
            {
              description: "Listening Map",
              details: ["Create a listening map while hearing Andean music: draw what you visualize; note tempo, dynamics, mood."],
            },
          ],
          reflection: "How do the instruments of a region reflect the materials available in that environment?",
        },
      ],
    },
    {
      week: 3,
      focus: "Asian and Middle Eastern music.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Indian Classical Music",
          objective: "Identify the raga system and tala (rhythm cycle) in Indian classical music.",
          activities: [
            {
              description: "Raga Listening",
              details: ["Listen to a morning and evening raga; identify mood differences; learn that ragas have specific times/purposes."],
            },
            {
              description: "Simple Tala Clapping",
              details: ["Learn a basic 8-beat tala cycle (tintal simplified); clap with hand gestures while listening."],
            },
          ],
          reflection: "How is the idea of a raga (music for a specific time/mood) similar to or different from Western music?",
        },
        {
          sessionNumber: 6,
          title: "Japanese and Chinese Instruments",
          objective: "Identify the shakuhachi, taiko, erhu, and guzheng; describe their cultural roles.",
          activities: [
            {
              description: "Instrument Sound Identification",
              details: ["Listen to 4 audio clips; match sound to instrument image and name."],
            },
            {
              description: "Ceremonial Music Discussion",
              details: ["Discuss how music in Asian traditions is used in ceremony and meditation differently from Western music."],
            },
          ],
          reflection: "What did you notice about the pace and mood of traditional Asian music compared to pop music?",
        },
      ],
    },
    {
      week: 4,
      focus: "Connecting world music themes.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Universal Elements of Music",
          objective: "Identify musical elements (rhythm, melody, dynamics, texture) that appear in all cultures.",
          activities: [
            {
              description: "World Music Comparison Chart",
              details: ["Complete a chart comparing 4 musical cultures on: instruments, rhythm style, vocal style, cultural purpose."],
            },
            {
              description: "Similarities Discussion",
              details: ["Discuss: Why might all cultures use music for similar purposes even if the sounds are very different?"],
            },
          ],
          reflection: "Is there a universal musical language? What might it be?",
        },
        {
          sessionNumber: 8,
          title: "World Music Festival",
          objective: "Present research on a musical culture; perform a rhythm or melody from that culture.",
          activities: [
            {
              description: "Culture Music Presentation",
              details: ["Groups present: cultural background, 2 instruments, 1 music example, unique musical feature."],
            },
            {
              description: "Class Rhythm Ensemble",
              details: ["Combine all world rhythms learned in the unit into a layered class ensemble performance."],
            },
          ],
          reflection: "How has learning about world music changed the way you listen to unfamiliar music?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Active Listening", level1: "Cannot identify any musical features", level2: "Identifies tempo and dynamics only", level3: "Identifies instruments, rhythm, dynamics, and mood", level4: "Connects musical features to cultural context with detail" },
    { skill: "Cultural Understanding", level1: "States facts without meaning", level2: "Describes culture surface-level", level3: "Explains how music reflects cultural values", level4: "Compares multiple cultures; finds universal and unique elements" },
  ],
  materials: ["Djembe or classroom drums", "Recorded music: West African, Latin, Indian, Japanese", "World instrument images/cards", "Listening map template", "World map for cultural reference"],
};
