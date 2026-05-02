import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Sound, Rhythm & Movement (PK-3 – KG) ────────────────────────────
export const SoundRhythmEarly: IUnits = {
  unitTitle: "Sound, Rhythm & Movement",
  unitDBTitle: "SoundRhythm",
  title: "Sound, Rhythm & Movement (PK-3 – KG)",
  gradeLevel: "PK-3 – Kindergarten",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Music is organized sound; our bodies can feel, make, and move to rhythm.",
  overallExpectation:
    "Students explore sound and silence, steady beat, and basic rhythm through singing, movement, and simple percussion instruments.",
  essentialQuestions: [
    "What is the difference between sound and silence?",
    "Can you feel a beat? How?",
    "What can music make you feel or do?",
  ],
  skills: ["Steady beat", "Fast and slow", "Loud and soft", "Simple rhythmic patterns"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Exploring sound and silence.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Sound Around Us",
          objective: "Identify environmental sounds; distinguish between sound and silence.",
          activities: [
            {
              description: "Sound Listening Walk",
              details: ["Sit quietly for 30 seconds; list sounds heard; discuss how many were musical vs non-musical."],
            },
            {
              description: "Sound or Silence Game",
              details: ["Teacher makes a sound; students raise hand if they hear it; discuss what creates each sound."],
            },
          ],
          reflection: "Can silence be part of music?",
        },
        {
          sessionNumber: 2,
          title: "Loud and Soft",
          objective: "Identify and produce loud (forte) and soft (piano) sounds.",
          activities: [
            {
              description: "Loud/Soft Movement",
              details: ["Move with big stomps for loud music; tiptoe for soft; respond to recorded examples."],
            },
            {
              description: "Instrument Exploration",
              details: ["Tap a drum loud then soft; discuss: How did you change the sound?"],
            },
          ],
          reflection: "When would you use a soft voice instead of a loud one?",
        },
      ],
    },
    {
      week: 2,
      focus: "Steady beat.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Finding the Beat",
          objective: "Demonstrate steady beat by clapping, tapping, and marching.",
          activities: [
            {
              description: "Heartbeat Connection",
              details: ["Feel heartbeat after jumping; connect to the concept of steady beat in music."],
            },
            {
              description: "Beat Buddy",
              details: ["Pat a steady beat on knees while teacher sings; try with different songs at different tempos."],
            },
          ],
          reflection: "What happens to the beat when music speeds up?",
        },
        {
          sessionNumber: 4,
          title: "Fast and Slow (Tempo)",
          objective: "Identify and respond to fast and slow music with appropriate movement.",
          activities: [
            {
              description: "Tempo Movement Game",
              details: ["Move fast to fast music, slow to slow; freeze when music stops — teacher changes tempo randomly."],
            },
            {
              description: "Animal Tempo",
              details: ["Assign animals to tempos (cheetah = fast, turtle = slow); students act out animal when they hear the tempo."],
            },
          ],
          reflection: "Can the same song sound different if played faster or slower?",
        },
      ],
    },
    {
      week: 3,
      focus: "Rhythm patterns.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Long and Short Sounds",
          objective: "Distinguish long and short sounds; clap rhythm patterns.",
          activities: [
            {
              description: "Name Rhythm",
              details: ["Clap the syllables of students' names; discuss: Which names have more sounds? Longer sounds?"],
            },
            {
              description: "Word Rhythm Patterns",
              details: ["Clap and say: 'CAT' (one clap), 'kit-ten' (two claps), 'el-e-phant' (three claps); practice as a class."],
            },
          ],
          reflection: "How is rhythm different from a steady beat?",
        },
        {
          sessionNumber: 6,
          title: "Echo Clapping",
          objective: "Repeat a 2-beat rhythmic pattern after the teacher (echo style).",
          activities: [
            {
              description: "Echo Rhythm Game",
              details: ["Teacher claps a 2-beat pattern; class echoes back exactly; gradually increase complexity."],
            },
            {
              description: "Body Percussion",
              details: ["Use clapping, patting, snapping, and stomping to perform a simple body percussion rhythm."],
            },
          ],
          reflection: "What was the hardest rhythm to copy? Why?",
        },
      ],
    },
    {
      week: 4,
      focus: "Songs, instruments, and performance.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Simple Instruments",
          objective: "Explore unpitched percussion instruments; play on the beat while singing.",
          activities: [
            {
              description: "Instrument Exploration Stations",
              details: ["Play shakers, drums, and rhythm sticks at stations; practice playing on the steady beat."],
            },
            {
              description: "Instrument Ensemble",
              details: ["Assign groups to different instruments; play together on the beat while class sings a familiar song."],
            },
          ],
          reflection: "What does it feel like to play music together with your classmates?",
        },
        {
          sessionNumber: 8,
          title: "Mini Music Show",
          objective: "Perform a song with movement and instruments for an audience.",
          activities: [
            {
              description: "Performance Rehearsal",
              details: ["Practice the chosen song with movements and instruments; focus on staying together on the beat."],
            },
            {
              description: "Class Performance",
              details: ["Perform the song for another class or parents; discuss what it felt like to perform."],
            },
          ],
          reflection: "How did it feel to perform music for other people?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Steady Beat", level1: "Cannot maintain steady beat", level2: "Maintains beat with frequent errors", level3: "Maintains steady beat consistently", level4: "Maintains beat across different tempos and while singing" },
    { skill: "Music Vocabulary", level1: "Cannot use basic terms", level2: "Uses 1–2 terms correctly", level3: "Uses loud/soft, fast/slow, beat correctly", level4: "Uses vocabulary to describe and discuss music" },
  ],
  materials: ["Drums", "Shakers", "Rhythm sticks", "Recorded music (varied tempos)", "Movement space", "Simple songbooks"],
};

// ── Unit 2 ── Singing & Simple Melodies (Grades 1–2) ─────────────────────────
export const SingingSongElementary: IUnits = {
  unitTitle: "Singing & Simple Melodies",
  unitDBTitle: "SingingSong",
  title: "Singing & Simple Melodies (Grades 1–2)",
  gradeLevel: "1st – 2nd Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "The singing voice is our first instrument; melodies go up, down, and stay the same.",
  overallExpectation:
    "Students develop a healthy singing voice, match pitch, read basic melodic direction, and perform simple songs with expression.",
  essentialQuestions: [
    "How is a singing voice different from a speaking voice?",
    "How does a melody move up, down, or stay the same?",
    "What makes a song feel happy, sad, or exciting?",
  ],
  skills: ["Singing voice vs speaking voice", "High and low pitch", "Melodic direction", "Expressive singing"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Singing voice and pitch.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Discovering the Singing Voice",
          objective: "Distinguish the singing voice from the speaking voice; use head voice.",
          activities: [
            {
              description: "Voice Types Exploration",
              details: ["Demonstrate: speaking, whispering, calling, singing; students try each and describe differences."],
            },
            {
              description: "Siren Exercise",
              details: ["Glide from low to high and back like a siren; feel the shift to head voice."],
            },
          ],
          reflection: "Where in your body does your singing voice feel different from your speaking voice?",
        },
        {
          sessionNumber: 2,
          title: "High and Low",
          objective: "Identify and match high and low pitched sounds; explore the vocal range.",
          activities: [
            {
              description: "High-Low Response",
              details: ["Teacher plays a piano note; students reach up for high, crouch down for low; match pitch on 'oo'."],
            },
            {
              description: "Pitch Matching Game",
              details: ["Teacher sings a simple pattern; students echo back; focus on matching pitch accurately."],
            },
          ],
          reflection: "Is it easier to sing high or low? Why might that be?",
        },
      ],
    },
    {
      week: 2,
      focus: "Melodic direction.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Up, Down, Same",
          objective: "Follow melodic contour with hand movements; identify melodic direction in songs.",
          activities: [
            {
              description: "Hand Contour",
              details: ["Sing a familiar song; students trace melodic direction with their hand while singing."],
            },
            {
              description: "Contour Drawing",
              details: ["Listen to a short melody; draw the contour line on paper (hill-shaped for going up then down)."],
            },
          ],
          reflection: "Can you hum a melody that goes up? Can you make one that stays the same?",
        },
        {
          sessionNumber: 4,
          title: "Sol-Mi and Simple Solfège",
          objective: "Sing Sol and Mi on pitch; recognize the interval by ear.",
          activities: [
            {
              description: "Sol-Mi Call-and-Response",
              details: ["Sing 'Hello' on Sol-Mi; students respond with 'Hello' on Sol-Mi; explore other 2-note phrases."],
            },
            {
              description: "Sol-Mi Song",
              details: ["Learn a simple song that uses mostly Sol-Mi; add hand signs."],
            },
          ],
          reflection: "Can you sing Sol-Mi without hearing it first? Try!",
        },
      ],
    },
    {
      week: 3,
      focus: "Expressive singing.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Dynamics in Singing",
          objective: "Vary dynamics (loud/soft) while singing to match the mood of a song.",
          activities: [
            {
              description: "Dynamic Contrast Song",
              details: ["Sing a song twice: once all loud, once all soft; discuss how mood changes."],
            },
            {
              description: "Dynamic Conductor",
              details: ["Student conductor uses hands to direct loud and soft; class follows dynamics."],
            },
          ],
          reflection: "Does changing volume change the feeling of a song?",
        },
        {
          sessionNumber: 6,
          title: "Tempo and Mood",
          objective: "Sing the same song at two tempos; describe how tempo affects the emotion.",
          activities: [
            {
              description: "Two-Speed Singing",
              details: ["Sing a familiar song very slowly then very fast; describe the mood of each version."],
            },
            {
              description: "Mood Word Sort",
              details: ["Sort mood words (energetic, peaceful, scary, playful) to fast or slow songs played by teacher."],
            },
          ],
          reflection: "If you were scared, would you sing fast or slow? Loud or soft?",
        },
      ],
    },
    {
      week: 4,
      focus: "Performance and song learning.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Learning a New Song",
          objective: "Learn a new 2-verse song by rote; apply dynamics and expression.",
          activities: [
            {
              description: "Echo Learning",
              details: ["Teach new song phrase-by-phrase (echo method); discuss the meaning and mood."],
            },
            {
              description: "Performance Planning",
              details: ["Decide together: how loud/soft? fast/slow? Add a movement or gesture for each verse."],
            },
          ],
          reflection: "What expression choices did your class make? Why?",
        },
        {
          sessionNumber: 8,
          title: "Singing Showcase",
          objective: "Perform songs with accurate pitch and expressive dynamics for an audience.",
          activities: [
            {
              description: "Dress Rehearsal",
              details: ["Run through all songs; give feedback on pitch and expression."],
            },
            {
              description: "Performance",
              details: ["Perform for another class; after performance, reflect on what went well and what to improve."],
            },
          ],
          reflection: "What is one thing you will practice to become a better singer?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Pitch Accuracy", level1: "Does not match pitch", level2: "Matches some pitches", level3: "Matches pitch consistently in a limited range", level4: "Matches pitch accurately across the full song range" },
    { skill: "Expressive Singing", level1: "No dynamic or tempo variation", level2: "Varies one element with prompting", level3: "Applies dynamics and tempo changes independently", level4: "Makes expressive choices and can explain their effect" },
  ],
  materials: ["Piano or keyboard", "Solfège hand sign chart", "Recorded music examples (varied tempo/mood)", "Songbooks", "Contour drawing paper"],
};
