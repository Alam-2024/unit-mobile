import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Life Science: Plants & Animals (Grades K–3) ─────────────────────
export const LifeScienceElementary: IUnits = {
  unitTitle: "Life Science: Plants & Animals",
  unitDBTitle: "LifeScience",
  title: "Life Science: Plants & Animals (Grades K–3)",
  gradeLevel: "K – 3rd Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Living things have needs; animals and plants are uniquely structured to survive in their environments.",
  overallExpectation:
    "Students observe, compare, and describe plants and animals, identify their basic needs, and explain how structural adaptations help them survive.",
  essentialQuestions: [
    "What do plants and animals need to survive?",
    "How do body parts help animals live in their habitat?",
    "What happens when a living thing does not get what it needs?",
  ],
  skills: ["Observing living things", "Identifying basic needs", "Describing adaptations", "Life cycle sequencing"],
  weeklyPlan: [
    {
      week: 1,
      focus: "What living things need.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Living vs Non-Living",
          objective: "Sort objects into living and non-living categories; justify reasoning.",
          activities: [
            {
              description: "Living/Non-Living Sort",
              details: ["Sort picture cards; discuss: Does it grow? Does it need food? Does it reproduce?"],
            },
            {
              description: "Classroom Nature Walk",
              details: ["Walk outside; record 5 living and 5 non-living things with drawings."],
            },
          ],
          reflection: "How do you know something is alive?",
        },
        {
          sessionNumber: 2,
          title: "Basic Needs of Plants",
          objective: "Identify water, sunlight, air, and nutrients as plant needs; set up a plant observation.",
          activities: [
            {
              description: "Seed Planting Investigation",
              details: ["Plant seeds in two cups: one with light/water, one without; predict and observe over weeks."],
            },
            {
              description: "Plant Needs Diagram",
              details: ["Draw and label a plant; add arrows showing where each need (sun, water, soil) comes from."],
            },
          ],
          reflection: "What do you think will happen to the plant that gets no light?",
        },
      ],
    },
    {
      week: 2,
      focus: "Animals and their needs.",
      sessions: [
        {
          sessionNumber: 3,
          title: "What Animals Need",
          objective: "List the basic needs of animals: food, water, shelter, air.",
          activities: [
            {
              description: "Animal Needs Anchor Chart",
              details: ["Build class chart with student-generated examples; discuss where each need comes from."],
            },
            {
              description: "Habitat Book",
              details: ["Students create a 4-panel mini-book showing how one animal gets each of its needs met."],
            },
          ],
          reflection: "What would happen to a polar bear in the desert?",
        },
        {
          sessionNumber: 4,
          title: "Habitats Match",
          objective: "Match animals to their habitats and explain why each match makes sense.",
          activities: [
            {
              description: "Habitat Diorama",
              details: ["Groups build a shoebox diorama of one habitat; place matching animal cut-outs inside."],
            },
            {
              description: "Gallery Walk",
              details: ["View all dioramas; record one fact about each habitat on a recording sheet."],
            },
          ],
          reflection: "Could any animal live in every habitat? Why or why not?",
        },
      ],
    },
    {
      week: 3,
      focus: "Adaptations.",
      sessions: [
        {
          sessionNumber: 5,
          title: "What Is an Adaptation?",
          objective: "Define adaptation; identify structural adaptations in local and exotic animals.",
          activities: [
            {
              description: "Adaptation Detective",
              details: ["Show 6 animal images; students identify one body feature and explain its survival purpose."],
            },
            {
              description: "Beak Lab",
              details: ["Use different tools (tweezers, spoons, clips) to pick up different 'foods'; match beak to food source."],
            },
          ],
          reflection: "What is your body's best adaptation for surviving?",
        },
        {
          sessionNumber: 6,
          title: "Plant Adaptations",
          objective: "Identify structural adaptations in plants such as thorns, waxy leaves, and deep roots.",
          activities: [
            {
              description: "Cactus vs Fern Comparison",
              details: ["Compare a cactus and a fern; list structural differences; connect each to its environment."],
            },
            {
              description: "Design a Plant",
              details: ["Students design an imaginary plant for an extreme environment and justify each adaptation."],
            },
          ],
          reflection: "Would a cactus survive in a rainforest? Explain.",
        },
      ],
    },
    {
      week: 4,
      focus: "Life cycles.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Life Cycles of Animals",
          objective: "Sequence the life cycle of a frog and a butterfly; compare the two.",
          activities: [
            {
              description: "Life Cycle Sequencing",
              details: ["Order scrambled life cycle cards for frog and butterfly; label each stage."],
            },
            {
              description: "Venn Diagram Comparison",
              details: ["Compare frog and butterfly life cycles; identify similarities and differences."],
            },
          ],
          reflection: "Why is metamorphosis an advantage for some animals?",
        },
        {
          sessionNumber: 8,
          title: "Life Science Showcase",
          objective: "Present learning through a poster or poster-walk sharing session.",
          activities: [
            {
              description: "Science Poster",
              details: ["Create a poster: chosen animal, its needs, habitat, one adaptation, and life cycle stages."],
            },
            {
              description: "Exit Assessment",
              details: ["Complete 5 questions: identify needs, match animal to habitat, label an adaptation."],
            },
          ],
          reflection: "What is the most interesting thing you learned about living things?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Basic Needs", level1: "Cannot identify needs", level2: "Identifies 1–2 needs", level3: "Identifies all needs for plants and animals", level4: "Explains consequences if a need is unmet" },
    { skill: "Adaptations", level1: "Cannot identify adaptations", level2: "Names adaptations without explaining purpose", level3: "Explains how adaptation aids survival", level4: "Connects adaptation to environment with detailed reasoning" },
  ],
  materials: ["Seeds and planting cups", "Soil and water", "Animal picture cards", "Shoebox diorama supplies", "Beaks lab tools (tweezers, spoons, clips)"],
};

// ── Unit 2 ── Earth Science: Weather & the Sky (Grades 1–4) ───────────────────
export const EarthScienceElementary: IUnits = {
  unitTitle: "Earth Science: Weather & the Sky",
  unitDBTitle: "EarthScience",
  title: "Earth Science: Weather & the Sky (Grades 1–4)",
  gradeLevel: "1st – 4th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Weather is the condition of the atmosphere and changes daily; patterns in weather can be observed and recorded.",
  overallExpectation:
    "Students observe, measure, and record weather data; identify patterns; and explain how the sun drives weather and seasons.",
  essentialQuestions: [
    "How do we observe and describe weather?",
    "What causes seasons to change?",
    "How does weather affect what we do?",
  ],
  skills: ["Weather observation", "Data collection and graphing", "Identifying weather patterns", "Sun and Earth relationship"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Observing and describing weather.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Weather Watchers",
          objective: "Identify and describe types of weather using scientific vocabulary.",
          activities: [
            {
              description: "Weather Word Wall",
              details: ["Build vocabulary: sunny, cloudy, rainy, snowy, foggy, windy; add picture cards."],
            },
            {
              description: "Daily Weather Journal",
              details: ["Begin a weather journal; record temperature, cloud cover, precipitation, and wind each day."],
            },
          ],
          reflection: "How did today's weather affect what you wore or did?",
        },
        {
          sessionNumber: 2,
          title: "Weather Tools",
          objective: "Identify and use basic weather instruments (thermometer, rain gauge, wind vane).",
          activities: [
            {
              description: "Tool Exploration Stations",
              details: ["Rotate through stations: read a thermometer, measure simulated rainfall, identify wind direction."],
            },
            {
              description: "Class Weather Station",
              details: ["Set up a class weather station; assign daily weather monitor roles."],
            },
          ],
          reflection: "Why do we need tools to measure weather accurately?",
        },
      ],
    },
    {
      week: 2,
      focus: "Recording and graphing weather data.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Creating a Weather Graph",
          objective: "Record daily weather data and create a bar graph to show a weekly pattern.",
          activities: [
            {
              description: "Weather Tally & Bar Graph",
              details: ["Tally 5 days of weather types; create a bar graph; identify the most common weather."],
            },
            {
              description: "Temperature Line Graph",
              details: ["Plot daily temperature readings on a line graph; describe the trend."],
            },
          ],
          reflection: "What do you notice about weather patterns in our area?",
        },
        {
          sessionNumber: 4,
          title: "Severe Weather",
          objective: "Identify types of severe weather and describe safety precautions.",
          activities: [
            {
              description: "Severe Weather Slideshow",
              details: ["View images of thunderstorms, tornadoes, hurricanes, blizzards; discuss formation basics."],
            },
            {
              description: "Safety Plan",
              details: ["Groups create a severe weather safety plan for one weather type; share with class."],
            },
          ],
          reflection: "What severe weather could happen in our region? Are we prepared?",
        },
      ],
    },
    {
      week: 3,
      focus: "The sun and temperature.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Sun as Energy Source",
          objective: "Explain that the sun warms Earth's surface and drives weather.",
          activities: [
            {
              description: "Sunlight Experiment",
              details: ["Place dark and light paper in sunlight for 5 min; record temperatures with a thermometer."],
            },
            {
              description: "Water Cycle Model",
              details: ["Show evaporation with a ziplock bag taped to a window; observe over several hours."],
            },
          ],
          reflection: "Where does all the energy for weather come from?",
        },
        {
          sessionNumber: 6,
          title: "Seasons",
          objective: "Explain how Earth's tilt causes seasons; relate seasons to temperature and daylight.",
          activities: [
            {
              description: "Globe and Flashlight Demo",
              details: ["Demonstrate Earth's tilt with a globe and flashlight; students identify which hemisphere gets more direct sunlight."],
            },
            {
              description: "Seasons Journal",
              details: ["Draw and describe the same location in each of the four seasons; note temperature and daylight differences."],
            },
          ],
          reflection: "Why is it summer in Australia when it is winter in North America?",
        },
      ],
    },
    {
      week: 4,
      focus: "Weather patterns and culminating project.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Weather Forecasting",
          objective: "Interpret a simple weather map and make a two-day forecast.",
          activities: [
            {
              description: "Map Reading",
              details: ["Examine a simple weather map with symbols; identify fronts, precipitation, and temperature zones."],
            },
            {
              description: "Be a Meteorologist",
              details: ["Students record a 30-second weather forecast video or present to class using a map."],
            },
          ],
          reflection: "Why is weather forecasting important for people and communities?",
        },
        {
          sessionNumber: 8,
          title: "Weather Science Fair",
          objective: "Present weather data and findings from the unit in a poster or display.",
          activities: [
            {
              description: "Data Poster",
              details: ["Display class weather graphs with written observations about patterns."],
            },
            {
              description: "Exit Assessment",
              details: ["Label weather tools, identify 3 types of weather, explain what causes seasons."],
            },
          ],
          reflection: "What surprised you most about how weather works?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Weather Observation", level1: "Cannot describe weather accurately", level2: "Describes with limited vocabulary", level3: "Uses scientific vocabulary to describe weather", level4: "Identifies patterns and explains causes" },
    { skill: "Data Recording", level1: "Does not record consistently", level2: "Records with errors", level3: "Records accurately and creates graphs", level4: "Interprets graphs and explains trends" },
  ],
  materials: ["Thermometers", "Rain gauges", "Wind vanes", "Weather journal notebooks", "Globe and flashlight", "Ziplock bags for water cycle demo"],
};
