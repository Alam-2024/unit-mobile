import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Elements of Art (Grades 3–5) ────────────────────────────────────
export const ElementsOfArtElementary: IUnits = {
  unitTitle: "Elements of Art",
  unitDBTitle: "ElementsOfArt",
  title: "Elements of Art (Grades 3–5)",
  gradeLevel: "3rd – 5th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "The elements of art — line, shape, form, color, texture, value, and space — are the building blocks of all visual art.",
  overallExpectation:
    "Students identify and apply all seven elements of art in their own work; analyze how artists use elements to create meaning and effect.",
  essentialQuestions: [
    "What are the 'ingredients' of a work of art?",
    "How does an artist use the elements to guide your eye and create feeling?",
    "What makes a piece of art interesting or beautiful?",
  ],
  skills: ["Identifying art elements", "Value and shading", "Texture techniques", "Color mixing and value scales"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Line, shape, and form.",
      sessions: [
        {
          sessionNumber: 1,
          title: "The Power of Line",
          objective: "Distinguish line types and analyze their expressive qualities in master artworks.",
          activities: [
            {
              description: "Line Analysis",
              details: ["Analyze a Van Gogh painting for line types; list: straight, curved, thick, thin, implied; describe mood."],
            },
            {
              description: "Contour Line Drawing",
              details: ["Practice slow contour drawing of a hand; focus on edge without lifting pencil."],
            },
          ],
          reflection: "How does the line quality in Van Gogh differ from a technical architect's drawing?",
        },
        {
          sessionNumber: 2,
          title: "Shape vs Form",
          objective: "Distinguish 2D shapes from 3D forms; create the illusion of form through drawing.",
          activities: [
            {
              description: "Flat to 3D Transformation",
              details: ["Draw a circle; add shading to make it look like a sphere; compare to a flat disk."],
            },
            {
              description: "Still Life Observation",
              details: ["Observe a simple still life; sketch objects focusing on their form (3D quality)."],
            },
          ],
          reflection: "What is the difference between a square and a cube? How do you show that difference in drawing?",
        },
      ],
    },
    {
      week: 2,
      focus: "Color, value, and texture.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Color Wheel & Color Relationships",
          objective: "Identify complementary, analogous, and warm/cool color relationships.",
          activities: [
            {
              description: "Full Color Wheel",
              details: ["Mix and paint a 12-step color wheel including tertiary colors; label all."],
            },
            {
              description: "Color Scheme Artwork",
              details: ["Create a small artwork using only one color scheme (complementary or analogous); explain choice."],
            },
          ],
          reflection: "Why do complementary colors seem to 'pop' next to each other?",
        },
        {
          sessionNumber: 4,
          title: "Value: Light & Shadow",
          objective: "Create a value scale; apply light and shadow to create depth.",
          activities: [
            {
              description: "Value Scale Practice",
              details: ["Create a 7-step value scale from white to black using pencil pressure; name each step."],
            },
            {
              description: "Shaded Sphere",
              details: ["Draw and shade a sphere with a light source; identify highlight, mid-tone, core shadow, cast shadow."],
            },
          ],
          reflection: "Where does the shadow fall on your sphere? What does that tell you about where the light is?",
        },
      ],
    },
    {
      week: 3,
      focus: "Texture and space.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Texture: Real and Implied",
          objective: "Distinguish actual texture from implied (visual) texture; create both in artwork.",
          activities: [
            {
              description: "Texture Rubbings",
              details: ["Create at least 6 texture rubbings from real surfaces; label each surface."],
            },
            {
              description: "Implied Texture Drawing",
              details: ["Draw a natural object (leaf, rock, bark); use marks and lines to imply its texture visually."],
            },
          ],
          reflection: "Can you feel a texture in a photograph? Why does it look like you might be able to?",
        },
        {
          sessionNumber: 6,
          title: "Space: Positive and Negative",
          objective: "Identify positive and negative space; use negative space in a composition.",
          activities: [
            {
              description: "Hand Space Study",
              details: ["Trace a hand; paint the negative space only; leave the hand shape white; observe the effect."],
            },
            {
              description: "MC Escher Inspiration",
              details: ["View Escher's tessellations; create a simple shape that tiles using positive/negative space."],
            },
          ],
          reflection: "What surprised you about focusing on the negative space instead of the subject?",
        },
      ],
    },
    {
      week: 4,
      focus: "Synthesizing all elements in a final artwork.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Artist Statement Planning",
          objective: "Plan a final artwork that intentionally uses at least four art elements.",
          activities: [
            {
              description: "Element Checklist Planning",
              details: ["Complete a planning sheet: which 4+ elements to use, why, and how they'll create the intended effect."],
            },
            {
              description: "Draft Thumbnail",
              details: ["Create 2 small thumbnail sketches exploring different compositions; select one to develop."],
            },
          ],
          reflection: "Which art element is hardest to control? Which comes most naturally?",
        },
        {
          sessionNumber: 8,
          title: "Art Elements Gallery",
          objective: "Present final artwork with a written artist statement; conduct a peer critique.",
          activities: [
            {
              description: "Peer Critique",
              details: ["Use 'I see, I think, I wonder' protocol: describe what is observed, infer meaning, ask one question."],
            },
            {
              description: "Exit Portfolio Reflection",
              details: ["Students select their best work from the unit and write why it best shows understanding of art elements."],
            },
          ],
          reflection: "How has knowing the elements changed the way you look at art?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Element Identification", level1: "Cannot identify elements", level2: "Identifies 3 elements in artworks", level3: "Identifies and names all 7 elements", level4: "Explains how each element creates a specific effect" },
    { skill: "Value and Shading", level1: "No variation in value", level2: "Creates 3-step scale only", level3: "Creates 7-step scale; applies shading to 3D form", level4: "Uses light source consistently; creates convincing depth" },
  ],
  materials: ["Pencils (2H–9B range)", "Watercolor and tempera paints", "Drawing paper and texture rubbing objects", "Contour drawing warm-up sheets", "Escher tessellation reference images"],
};

// ── Unit 2 ── Sculpture & 3D Art (Grades 4–5) ─────────────────────────────────
export const SculptureElementary: IUnits = {
  unitTitle: "Sculpture & 3D Art",
  unitDBTitle: "Sculpture",
  title: "Sculpture & 3D Art (Grades 4–5)",
  gradeLevel: "4th – 5th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Sculpture occupies real space; sculptors consider all sides, materials, and form.",
  overallExpectation:
    "Students create three-dimensional artworks using additive and subtractive methods; analyze how sculptors use form, texture, and space.",
  essentialQuestions: [
    "How is sculpture different from drawing or painting?",
    "How do sculptors use materials to create form?",
    "What does it feel like to view art from all sides?",
  ],
  skills: ["Additive and subtractive sculpture", "Clay hand-building", "Wire sculpture", "Recycled materials construction"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Introduction to 3D art and clay exploration.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is Sculpture?",
          objective: "Define sculpture; compare additive and subtractive methods using examples.",
          activities: [
            {
              description: "Sculpture Museum Virtual Tour",
              details: ["View 3D sculptures online; discuss: What materials? How was it made? How does it feel to 'walk around' it?"],
            },
            {
              description: "Subtractive Soap Carving",
              details: ["Carve a simple animal or shape from a bar of soap; identify this as a subtractive process."],
            },
          ],
          reflection: "What is the advantage of building up (additive) vs carving away (subtractive)?",
        },
        {
          sessionNumber: 2,
          title: "Clay Hand-Building",
          objective: "Use pinch, coil, and slab methods to build a clay form.",
          activities: [
            {
              description: "Three Techniques Practice",
              details: ["Practice pinch pot, coil building, and rolling a slab; explore how each creates different forms."],
            },
            {
              description: "Clay Tile with Texture",
              details: ["Roll a slab; press objects to create texture; trim into a 4×4 tile."],
            },
          ],
          reflection: "Which hand-building technique feels most natural? Which do you find most challenging?",
        },
      ],
    },
    {
      week: 2,
      focus: "Clay sculpture project.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Designing a Clay Sculpture",
          objective: "Plan and begin a clay sculpture of an animal or character.",
          activities: [
            {
              description: "Sketch from Multiple Views",
              details: ["Draw the sculpture idea from front, side, and top view before building."],
            },
            {
              description: "Building the Armature/Form",
              details: ["Build the basic body of the sculpture; score and slip all joints for strength."],
            },
          ],
          reflection: "Why is planning important before starting a sculpture?",
        },
        {
          sessionNumber: 4,
          title: "Adding Detail",
          objective: "Add texture, surface details, and refinement to clay sculpture.",
          activities: [
            {
              description: "Texture Tools",
              details: ["Use combs, sticks, and stamps to add texture; consider what texture communicates about the subject."],
            },
            {
              description: "Final Refinement",
              details: ["Smooth or add final details; set sculptures to dry; discuss glaze color options."],
            },
          ],
          reflection: "How did you use texture to make your sculpture more realistic or expressive?",
        },
      ],
    },
    {
      week: 3,
      focus: "Wire and mixed-media sculpture.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Wire Figure Sculpture",
          objective: "Bend and shape wire to create a figure in an action pose.",
          activities: [
            {
              description: "Gesture Drawing Warm-Up",
              details: ["Quick 30-second gesture drawings of poses; select a dynamic pose to recreate in wire."],
            },
            {
              description: "Wire Bending",
              details: ["Bend wire into a figure matching the chosen pose; wrap wire for thickness and strength."],
            },
          ],
          reflection: "How does a wire figure show movement differently from a drawing?",
        },
        {
          sessionNumber: 6,
          title: "Recycled Materials Sculpture",
          objective: "Design and build a sculpture using recycled/found materials; focus on balance and structure.",
          activities: [
            {
              description: "Material Exploration",
              details: ["Sort available materials; brainstorm 2 sculpture concepts; select one based on structural feasibility."],
            },
            {
              description: "Build and Test",
              details: ["Construct sculpture; test stability; modify as needed; title the piece."],
            },
          ],
          reflection: "How did you solve the challenge of making your sculpture stand on its own?",
        },
      ],
    },
    {
      week: 4,
      focus: "Finishing, glazing, and exhibition.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Glazing Clay Sculptures",
          objective: "Apply glaze to bisque-fired clay sculpture; make intentional color choices.",
          activities: [
            {
              description: "Glaze Color Planning",
              details: ["Plan color scheme on a sketch before glazing; consider how color will affect final appearance."],
            },
            {
              description: "Glaze Application",
              details: ["Apply two coats of glaze with careful brushwork; avoid drips on bottom."],
            },
          ],
          reflection: "How did glazing change the look and feel of your sculpture?",
        },
        {
          sessionNumber: 8,
          title: "Sculpture Exhibition",
          objective: "Display sculptures; write artist statement; conduct sculpture critique.",
          activities: [
            {
              description: "3D Gallery Setup",
              details: ["Display all sculptures on platforms/pedestals; add name cards and titles."],
            },
            {
              description: "Sculpture Critique Walk",
              details: ["Students observe all sculptures from multiple angles; write: material, technique, what the sculptor was trying to express."],
            },
          ],
          reflection: "What is the biggest difference between looking at a sculpture and looking at a painting?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Construction Skills", level1: "Cannot join clay or materials", level2: "Basic forms with weak joints", level3: "Uses correct techniques (score/slip); stable structure", level4: "Refined form with controlled texture and strong construction" },
    { skill: "3D Thinking", level1: "Thinks only in 2D", level2: "Creates basic 3D form", level3: "Considers all views; creates interesting 3D composition", level4: "Plans and executes complex 3D form with expressive intent" },
  ],
  materials: ["Air-dry or kiln clay", "Clay tools (combs, stamps, wire cutters)", "Armature wire", "Glaze (if kiln available)", "Recycled materials collection", "Soap bars for carving"],
};
