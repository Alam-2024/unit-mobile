import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Community & Citizenship (Grades 1–3) ────────────────────────────
export const CommunityCitizenshipElementary: IUnits = {
  unitTitle: "Community & Citizenship",
  unitDBTitle: "Community",
  title: "Community & Citizenship (Grades 1–3)",
  gradeLevel: "1st – 3rd Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Communities are groups of people who share a place; good citizens contribute and care for others.",
  overallExpectation:
    "Students identify different types of communities, describe the role of citizens and leaders, and demonstrate responsible citizenship in school and beyond.",
  essentialQuestions: [
    "What makes a community?",
    "What responsibilities do we have as citizens?",
    "How do leaders help communities?",
  ],
  skills: ["Community types", "Roles and responsibilities", "Rules and laws", "Leadership and service"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Types of communities.",
      sessions: [
        {
          sessionNumber: 1,
          title: "What Is a Community?",
          objective: "Define community; identify three types: rural, suburban, urban.",
          activities: [
            {
              description: "Community Photo Sort",
              details: ["Sort photos into rural, suburban, and urban; identify clues used for each classification."],
            },
            {
              description: "Our Community Map",
              details: ["Draw a simple map of the school's neighborhood; label key community buildings."],
            },
          ],
          reflection: "Which type of community do you live in? What do you like about it?",
        },
        {
          sessionNumber: 2,
          title: "Community Helpers",
          objective: "Identify jobs that serve the community; explain how each contributes.",
          activities: [
            {
              description: "Job Card Match",
              details: ["Match community helper pictures to their tools and responsibilities."],
            },
            {
              description: "Thank You Letter",
              details: ["Students write a thank you letter to a community helper of their choice."],
            },
          ],
          reflection: "What community helper job would you want? Why?",
        },
      ],
    },
    {
      week: 2,
      focus: "Rules, laws, and responsibility.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Rules vs Laws",
          objective: "Distinguish between rules (home/school) and laws (community); explain why we need them.",
          activities: [
            {
              description: "T-Chart Comparison",
              details: ["List school rules and city/country laws; compare purpose and consequences of breaking each."],
            },
            {
              description: "Rule Creation Activity",
              details: ["Groups design rules for an imaginary classroom pet; present rules with justification."],
            },
          ],
          reflection: "What would happen if there were no rules or laws?",
        },
        {
          sessionNumber: 4,
          title: "Rights and Responsibilities",
          objective: "Identify basic rights and corresponding responsibilities of citizens.",
          activities: [
            {
              description: "Rights & Responsibilities Flip Book",
              details: ["Students make a flip book: right on front flap, corresponding responsibility inside (e.g., right to education → responsibility to attend and try hard)."],
            },
            {
              description: "Class Constitution",
              details: ["Draft a class constitution with 5 rights and 5 responsibilities; all students sign."],
            },
          ],
          reflection: "Can you have rights without responsibilities?",
        },
      ],
    },
    {
      week: 3,
      focus: "Leaders and government.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Leadership in Communities",
          objective: "Identify leaders at school, local, and national levels; describe their roles.",
          activities: [
            {
              description: "Leadership Pyramid",
              details: ["Build a pyramid: principal (school) → mayor (city) → president/prime minister (nation)."],
            },
            {
              description: "Interview a Leader",
              details: ["Write 3 questions to ask a school or community leader; share questions in class."],
            },
          ],
          reflection: "What qualities make a good leader?",
        },
        {
          sessionNumber: 6,
          title: "Voting & Democracy",
          objective: "Explain the concept of voting as a way communities make decisions.",
          activities: [
            {
              description: "Class Vote",
              details: ["Vote on a classroom decision (e.g., read-aloud book); discuss the process and fairness."],
            },
            {
              description: "Why Every Vote Matters",
              details: ["Simulate a tie vote scenario; discuss: Why does every vote count?"],
            },
          ],
          reflection: "Is voting fair? What makes it fair or unfair?",
        },
      ],
    },
    {
      week: 4,
      focus: "Service and active citizenship.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Making a Difference",
          objective: "Identify ways individuals and groups work to improve communities.",
          activities: [
            {
              description: "Changemaker Stories",
              details: ["Read about young changemakers (e.g., Greta Thunberg, Marley Dias); discuss what problem they addressed and how."],
            },
            {
              description: "Class Service Project Plan",
              details: ["Plan a small service project (e.g., book drive, litter pick-up); assign roles and set goals."],
            },
          ],
          reflection: "What is one thing YOU could do to improve your school or community?",
        },
        {
          sessionNumber: 8,
          title: "Citizenship Celebration",
          objective: "Present citizenship learning; receive Good Citizen recognition.",
          activities: [
            {
              description: "Citizenship Portfolio Share",
              details: ["Students share 2 pieces of work from the unit; explain what they learned about being a good citizen."],
            },
            {
              description: "Exit Assessment",
              details: ["Answer 5 questions: community types, a leader's role, a rule and why it exists, one right and responsibility."],
            },
          ],
          reflection: "How will you be a better citizen after this unit?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Community Types", level1: "Cannot distinguish community types", level2: "Identifies types with support", level3: "Independently identifies and describes all three types", level4: "Compares community types with specific examples and detail" },
    { skill: "Rights & Responsibilities", level1: "Cannot identify rights or responsibilities", level2: "Identifies rights but not responsibilities", level3: "Connects rights to corresponding responsibilities", level4: "Explains why this balance is essential for communities" },
  ],
  materials: ["Community photo cards", "Map supplies", "Flip book templates", "Voting ballots", "Changemaker biographies"],
};

// ── Unit 2 ── Geography: Maps & Our World (Grades 2–5) ────────────────────────
export const GeographyElementary: IUnits = {
  unitTitle: "Geography: Maps & Our World",
  unitDBTitle: "Geography",
  title: "Geography: Maps & Our World (Grades 2–5)",
  gradeLevel: "2nd – 5th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Geography is the study of Earth's features, places, and how people interact with their environment.",
  overallExpectation:
    "Students use map skills to locate, describe, and compare places; explain how geography influences how people live.",
  essentialQuestions: [
    "How do we use maps to understand our world?",
    "How does where you live affect how you live?",
    "What are the world's major landforms and bodies of water?",
  ],
  skills: ["Map elements and types", "Cardinal directions and coordinates", "World regions", "Human-environment interaction"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Map skills and elements.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Parts of a Map",
          objective: "Identify title, legend, compass rose, scale, and grid on various maps.",
          activities: [
            {
              description: "Map Scavenger Hunt",
              details: ["Given three different maps; locate title, legend, scale, compass rose on each; record findings."],
            },
            {
              description: "Make Your Own Map",
              details: ["Draw a map of the classroom or school hallway; include all five map elements."],
            },
          ],
          reflection: "Why do maps need all these elements?",
        },
        {
          sessionNumber: 2,
          title: "Types of Maps",
          objective: "Distinguish political, physical, climate, and population maps.",
          activities: [
            {
              description: "Map Type Comparison",
              details: ["View four map types of the same region; discuss what each shows and when it would be useful."],
            },
            {
              description: "Map Purpose Match",
              details: ["Match scenarios (planning a trip, studying rainfall, finding a country) to the correct map type."],
            },
          ],
          reflection: "If you were planning a hiking trip, which map type would you use? Why?",
        },
      ],
    },
    {
      week: 2,
      focus: "Continents, oceans, and landforms.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Seven Continents & Five Oceans",
          objective: "Locate and name all seven continents and five oceans on a world map.",
          activities: [
            {
              description: "Blank Map Labeling",
              details: ["Label all continents and oceans on a blank world map; practice twice using different colors."],
            },
            {
              description: "Continent Fact Cards",
              details: ["Research one fact about each continent; share in a rapid-fire class review."],
            },
          ],
          reflection: "Which continent would you most like to visit? Why?",
        },
        {
          sessionNumber: 4,
          title: "Landforms & Bodies of Water",
          objective: "Identify and define major landforms (mountain, plateau, valley, plain) and water features.",
          activities: [
            {
              description: "3D Landform Model",
              details: ["Use clay or salt dough to create a landform model; label each feature."],
            },
            {
              description: "Landform Photo Match",
              details: ["Match photos of real landforms to definitions; find one example of each on a world map."],
            },
          ],
          reflection: "How might living near a mountain range affect a community differently from living on a plain?",
        },
      ],
    },
    {
      week: 3,
      focus: "Human-environment interaction.",
      sessions: [
        {
          sessionNumber: 5,
          title: "How Geography Shapes Culture",
          objective: "Explain how physical geography influences food, housing, and clothing in different cultures.",
          activities: [
            {
              description: "Climate-Culture Connection",
              details: ["Compare housing and clothing in a desert culture vs a rainforest culture; explain geographic reasons."],
            },
            {
              description: "Food Geography",
              details: ["Trace the geographic origin of common foods; discuss why certain crops grow in certain regions."],
            },
          ],
          reflection: "How has your local geography shaped the way your community lives?",
        },
        {
          sessionNumber: 6,
          title: "Human Impact on Geography",
          objective: "Identify ways humans change the environment; evaluate positive and negative impacts.",
          activities: [
            {
              description: "Before and After",
              details: ["Compare historical and current maps of a region that has been developed; list changes."],
            },
            {
              description: "Impact Debate",
              details: ["Teams argue for/against a new development project (e.g., dam, highway) using geographic reasoning."],
            },
          ],
          reflection: "Is it always wrong to change the natural environment? Explain.",
        },
      ],
    },
    {
      week: 4,
      focus: "Regions and culminating project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Regions of the World",
          objective: "Define geographic region; describe characteristics of at least three world regions.",
          activities: [
            {
              description: "Region Research Stations",
              details: ["Rotate through 6 world region stations; record climate, landforms, and people facts for each."],
            },
            {
              description: "Region Postcard",
              details: ["Create a postcard from a chosen region: illustration on front, geographic facts on back."],
            },
          ],
          reflection: "What makes a region different from simply a country?",
        },
        {
          sessionNumber: 8,
          title: "Geography Fair",
          objective: "Present geographic research; demonstrate map skills in an assessment.",
          activities: [
            {
              description: "Postcard Gallery Walk",
              details: ["Display postcards; students tour the gallery and write 2 new facts they learned."],
            },
            {
              description: "Map Skills Assessment",
              details: ["Label continents, oceans, and landforms; read a map using scale and legend to answer questions."],
            },
          ],
          reflection: "How has learning about geography changed how you see the world?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Map Skills", level1: "Cannot identify map elements", level2: "Identifies elements with support", level3: "Uses all map elements independently", level4: "Creates accurate map with all elements; reads complex maps" },
    { skill: "Geographic Knowledge", level1: "Cannot locate continents/oceans", level2: "Locates with prompting", level3: "Locates and names all continents and oceans", level4: "Connects geography to human culture with specific examples" },
  ],
  materials: ["World maps (political, physical, climate)", "Blank world map outlines", "Clay or salt dough", "Atlas or digital globe access", "Region research cards"],
};
