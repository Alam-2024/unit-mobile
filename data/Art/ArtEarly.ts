import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Exploring Colors & Shapes (PK-3, PK-4, KG) ─────────────────────
export const ColorsShapesEarly: IUnits = {
  unitTitle: "Exploring Colors & Shapes",
  unitDBTitle: "ColorsShapes",
  title: "Exploring Colors & Shapes (PK-3 – KG)",
  gradeLevel: "PK-3 – Kindergarten",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Art starts with seeing and playing with color, shape, and line.",
  overallExpectation:
    "Students explore primary colors, basic shapes, and lines through hands-on art making, developing fine motor skills and visual language.",
  essentialQuestions: [
    "What colors do you see in the world around you?",
    "What shapes can you find in art and nature?",
    "How do lines make art feel different?",
  ],
  skills: ["Primary colors", "Basic shapes", "Types of lines", "Simple mixed-media making"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Primary colors.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Red, Yellow, Blue",
          objective: "Identify and name the three primary colors.",
          activities: [
            {
              description: "Color Hunt",
              details: ["Walk the classroom; students tag objects that are red, yellow, or blue; share findings."],
            },
            {
              description: "Primary Color Collage",
              details: ["Tear and glue colored paper scraps to create a three-color collage."],
            },
          ],
          reflection: "Which primary color is your favorite? Can you find it somewhere in nature?",
        },
        {
          sessionNumber: 2,
          title: "Mixing Colors",
          objective: "Predict and observe secondary colors made by mixing primaries.",
          activities: [
            {
              description: "Watercolor Mixing Exploration",
              details: ["Use watercolors to mix red+yellow, blue+yellow, red+blue; record result colors."],
            },
            {
              description: "Color Wheel Beginning",
              details: ["Paste primary and secondary color swatches in a wheel order; label each."],
            },
          ],
          reflection: "What color surprised you most when you mixed paints?",
        },
      ],
    },
    {
      week: 2,
      focus: "Basic shapes in art.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Shapes Everywhere",
          objective: "Identify circles, squares, triangles, and rectangles in artworks and surroundings.",
          activities: [
            {
              description: "Shape Walk",
              details: ["Find and photograph (or draw) 2 examples of each shape in the school environment."],
            },
            {
              description: "Shape Animals",
              details: ["Arrange pre-cut shapes to form an animal; glue and add details with crayons."],
            },
          ],
          reflection: "What animal did you make? What shapes did you use?",
        },
        {
          sessionNumber: 4,
          title: "Shape Prints",
          objective: "Create a repeated pattern using geometric shape prints.",
          activities: [
            {
              description: "Foam Shape Printing",
              details: ["Stamp foam shapes in paint to create a pattern on paper; use at least 2 colors."],
            },
            {
              description: "Pattern Discussion",
              details: ["Display prints; students identify the repeated pattern in classmates' work."],
            },
          ],
          reflection: "What pattern did you make? What would come next?",
        },
      ],
    },
    {
      week: 3,
      focus: "Lines in art.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Types of Lines",
          objective: "Draw and name straight, curved, wavy, and zigzag lines.",
          activities: [
            {
              description: "Line Symphony",
              details: ["Teacher draws a line type to music; students copy; switch line type with each song change."],
            },
            {
              description: "Line Drawing",
              details: ["Create a drawing using at least 4 line types; share what feeling each type gives."],
            },
          ],
          reflection: "Which line type makes a drawing look calm? Which looks exciting?",
        },
        {
          sessionNumber: 6,
          title: "Line Painting",
          objective: "Use brushes to apply different line types in a painted composition.",
          activities: [
            {
              description: "Brush Exploration",
              details: ["Practice wide and thin strokes on practice paper; explore pressure and speed."],
            },
            {
              description: "Expressive Line Painting",
              details: ["Paint a composition using only lines; choose colors to match the mood they want to create."],
            },
          ],
          reflection: "How did you use different lines to make your painting interesting?",
        },
      ],
    },
    {
      week: 4,
      focus: "Creating with everything learned.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Self-Portrait",
          objective: "Create a self-portrait using shapes, lines, and primary/secondary colors.",
          activities: [
            {
              description: "Mirror Observation",
              details: ["Students observe their face in a mirror; identify shapes they see (circle face, oval eyes)."],
            },
            {
              description: "Self-Portrait Drawing & Painting",
              details: ["Draw and paint a self-portrait; focus on using shapes for facial features and mixing colors for skin tone."],
            },
          ],
          reflection: "What is your favorite part of your self-portrait?",
        },
        {
          sessionNumber: 8,
          title: "Mini Art Show",
          objective: "Display artwork and share what was learned about color, shape, and line.",
          activities: [
            {
              description: "Art Display Setup",
              details: ["Mount artworks on colored backing; students dictate or write 1-sentence artist statement."],
            },
            {
              description: "Gallery Walk",
              details: ["Class tours the display; each student gives one compliment to a classmate's artwork."],
            },
          ],
          reflection: "What is something new you learned about making art?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Color Knowledge", level1: "Cannot identify primary colors", level2: "Identifies primary colors only", level3: "Names primary and secondary colors; predicts mixing results", level4: "Discusses color mixing and makes choices with intention" },
    { skill: "Art Making", level1: "Does not engage with materials", level2: "Explores with guidance", level3: "Creates independently using shapes and lines", level4: "Makes deliberate creative choices; explains decisions" },
  ],
  materials: ["Watercolor paints", "Primary-color paper", "Foam shape stamps", "Brushes (wide and thin)", "Mirrors for self-portrait", "Display mounting paper"],
};

// ── Unit 2 ── Storytelling Through Art (KG–Grade 2) ──────────────────────────
export const StorytellingArtEarly: IUnits = {
  unitTitle: "Storytelling Through Art",
  unitDBTitle: "StorytellingArt",
  title: "Storytelling Through Art (KG – Grade 2)",
  gradeLevel: "Kindergarten – 2nd Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Pictures tell stories; every artwork communicates ideas and feelings.",
  overallExpectation:
    "Students create sequential art narratives using color, character, and composition to convey a story or emotion.",
  essentialQuestions: [
    "How can a picture tell a story without words?",
    "How do artists show feelings in their work?",
    "What choices make an artwork interesting to look at?",
  ],
  skills: ["Story sequencing", "Expressive color choice", "Composition basics", "Mixed media"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Art tells stories.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Pictures as Stories",
          objective: "Interpret stories told through famous artwork; identify characters, setting, and action.",
          activities: [
            {
              description: "Artwork Discussion",
              details: ["View 2 narrative artworks (e.g., Bruegel 'Children's Games'); students narrate what is happening."],
            },
            {
              description: "Story Sketch",
              details: ["Students sketch a one-scene story from their own life; share with a partner."],
            },
          ],
          reflection: "What do you look at first in a painting? Why?",
        },
        {
          sessionNumber: 2,
          title: "Sequential Art",
          objective: "Create a 3-panel sequence showing beginning, middle, and end of a story.",
          activities: [
            {
              description: "3-Panel Storyboard",
              details: ["Fold paper into 3; draw beginning, middle, end of a personal story in each panel."],
            },
            {
              description: "Partner Story Share",
              details: ["Share storyboards; partner retells the story based only on the pictures."],
            },
          ],
          reflection: "Could your partner understand your story? What would make it clearer?",
        },
      ],
    },
    {
      week: 2,
      focus: "Showing emotion through color and expression.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Warm & Cool Colors as Emotion",
          objective: "Associate warm colors with energy/excitement and cool colors with calm/sadness.",
          activities: [
            {
              description: "Emotion Color Experiment",
              details: ["Paint the same scene twice: once in warm colors (happy), once in cool colors (sad); compare feelings."],
            },
            {
              description: "Artist Connection",
              details: ["View examples from Mark Rothko or Matisse; identify emotions evoked by color choices."],
            },
          ],
          reflection: "Can colors really make you feel something? Give an example.",
        },
        {
          sessionNumber: 4,
          title: "Facial Expressions in Art",
          objective: "Draw expressive faces showing different emotions; use in a narrative artwork.",
          activities: [
            {
              description: "Emotion Mirror Practice",
              details: ["Students make expressions in mirrors; sketch happy, sad, surprised, and angry faces."],
            },
            {
              description: "Emotion Character",
              details: ["Create a character in a setting; the character's face and body language should communicate one emotion."],
            },
          ],
          reflection: "How did you show emotion without using words?",
        },
      ],
    },
    {
      week: 3,
      focus: "Composition basics.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Foreground, Middle Ground, Background",
          objective: "Place objects at different levels to create a sense of depth.",
          activities: [
            {
              description: "Layered Landscape",
              details: ["Create a landscape in three layers using torn paper: sky (back), hills (middle), objects (front)."],
            },
            {
              description: "Overlap Discussion",
              details: ["Discuss how overlapping objects creates depth; identify overlapping in a master artwork."],
            },
          ],
          reflection: "What is the difference between objects in the foreground vs the background?",
        },
        {
          sessionNumber: 6,
          title: "Filling the Space",
          objective: "Use the full page to create a balanced, interesting composition.",
          activities: [
            {
              description: "Big/Small/Overlap",
              details: ["Demonstrate using small, medium, and large elements; add details to fill empty space."],
            },
            {
              description: "Composition Critique",
              details: ["Compare two versions of the same scene: one crowded, one with too much white space; discuss which feels better."],
            },
          ],
          reflection: "What would you add to your composition to make it more interesting?",
        },
      ],
    },
    {
      week: 4,
      focus: "Culminating story artwork.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Story Art Planning",
          objective: "Plan a final narrative artwork using storyboard and color choices.",
          activities: [
            {
              description: "Final Storyboard Planning",
              details: ["Plan a narrative scene: character, setting, emotion, color mood, composition layout."],
            },
            {
              description: "Material Selection",
              details: ["Choose materials (paint, collage, colored pencil) appropriate for the story's mood."],
            },
          ],
          reflection: "What story do you most want to tell through your final artwork?",
        },
        {
          sessionNumber: 8,
          title: "Story Art Exhibition",
          objective: "Present final narrative artwork with an artist statement.",
          activities: [
            {
              description: "Artwork Completion",
              details: ["Finish artwork; add title; write/dictate an artist statement: 'My artwork shows ___ because ___.'"
              ],
            },
            {
              description: "Gallery Celebration",
              details: ["Parents/class invited; students explain their artwork to at least one viewer."],
            },
          ],
          reflection: "How did you use color, expression, and composition to tell your story?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Story Communication", level1: "Artwork does not convey a story", level2: "Story recognizable with explanation", level3: "Story is clear from artwork alone", level4: "Artwork communicates nuanced emotion and narrative depth" },
    { skill: "Art Elements Usage", level1: "Does not apply color or composition", level2: "Applies one element with guidance", level3: "Uses color and composition intentionally", level4: "Explains deliberate choices for each element" },
  ],
  materials: ["Tempera paints", "Torn paper for collage", "Mirrors", "Large drawing paper", "Colored pencils", "Artist statement templates"],
};
