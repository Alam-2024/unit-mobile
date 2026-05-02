import { IUnits } from "@/interfaces/units/IUnit";
import { LengthInWeeks } from "@/interfaces/units/ICommon";

// ── Unit 1 ── Biology: Genetics & Heredity (Grades 9–10) ─────────────────────
export const GeneticsHigh: IUnits = {
  unitTitle: "Genetics & Heredity",
  unitDBTitle: "Genetics",
  title: "Genetics & Heredity (Grades 9–10)",
  gradeLevel: "9th – 10th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Genes are segments of DNA that carry heritable information; patterns of inheritance explain trait distribution.",
  overallExpectation:
    "Students explain DNA structure, transcription, and translation; apply Mendelian genetics; and analyze inheritance patterns using Punnett squares and pedigrees.",
  essentialQuestions: [
    "How does DNA code for proteins that determine traits?",
    "Why do offspring resemble but differ from their parents?",
    "How are genetic diseases inherited and what are the ethical implications?",
  ],
  skills: ["DNA structure and replication", "Protein synthesis", "Punnett squares", "Pedigree analysis"],
  weeklyPlan: [
    {
      week: 1,
      focus: "DNA structure and protein synthesis.",
      sessions: [
        {
          sessionNumber: 1,
          title: "DNA Double Helix",
          objective: "Describe the structure of DNA; explain base pairing rules.",
          activities: [
            {
              description: "DNA Model Building",
              details: ["Build a double-helix model using candy or paper nucleotides; label sugar, phosphate, and bases."],
            },
            {
              description: "DNA Extraction Lab",
              details: ["Extract DNA from a strawberry; observe it macroscopically; connect to cellular location."],
            },
          ],
          reflection: "Why is base pairing so important for DNA function?",
        },
        {
          sessionNumber: 2,
          title: "Transcription & Translation",
          objective: "Trace the path from DNA → mRNA → protein; apply the genetic code.",
          activities: [
            {
              description: "Central Dogma Flowchart",
              details: ["Create an annotated flowchart: DNA → transcription → mRNA → translation → protein."],
            },
            {
              description: "Codon Decoding Activity",
              details: ["Use a codon chart to decode a mRNA sequence into an amino acid chain; identify the protein."],
            },
          ],
          reflection: "What would happen if one base in a DNA sequence mutated?",
        },
      ],
    },
    {
      week: 2,
      focus: "Mendelian genetics.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Mendel's Laws",
          objective: "Explain segregation and independent assortment; distinguish dominant from recessive alleles.",
          activities: [
            {
              description: "Coin Flip Simulation",
              details: ["Simulate gamete formation using coins; calculate phenotype ratios; compare to expected 3:1 ratio."],
            },
            {
              description: "Mendel's Pea Plant Cases",
              details: ["Analyze historical pea plant crosses; determine genotype of parent plants from offspring ratios."],
            },
          ],
          reflection: "Why did it take the scientific community so long to accept Mendel's work?",
        },
        {
          sessionNumber: 4,
          title: "Punnett Squares",
          objective: "Complete monohybrid and dihybrid Punnett squares; calculate phenotype and genotype ratios.",
          activities: [
            {
              description: "Monohybrid Practice",
              details: ["Solve 6 monohybrid crosses; determine genotype/phenotype ratios; classify as homo/heterozygous."],
            },
            {
              description: "Dihybrid Crosses",
              details: ["Set up a 4×4 Punnett square for two traits; calculate expected 9:3:3:1 ratio; verify with simulation."],
            },
          ],
          reflection: "When would a Punnett square NOT accurately predict offspring ratios?",
        },
      ],
    },
    {
      week: 3,
      focus: "Beyond Mendelian genetics.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Incomplete Dominance & Codominance",
          objective: "Apply non-Mendelian inheritance patterns to predict offspring phenotypes.",
          activities: [
            {
              description: "Flower Color Exploration",
              details: ["Model red × white snapdragon cross; compare incomplete dominance (pink) vs codominance (red-white spotted)."],
            },
            {
              description: "ABO Blood Type",
              details: ["Work through ABO blood type inheritance; explain why blood type O is recessive."],
            },
          ],
          reflection: "How do codominance and incomplete dominance challenge Mendel's original model?",
        },
        {
          sessionNumber: 6,
          title: "Sex-Linked Traits & Pedigrees",
          objective: "Explain sex-linked inheritance; read a pedigree to determine genotypes.",
          activities: [
            {
              description: "Color Blindness Pedigree",
              details: ["Analyze a 3-generation color-blindness pedigree; determine carrier status and genotypes."],
            },
            {
              description: "Build a Pedigree",
              details: ["Create a pedigree for a fictional family trait; challenge partner to determine the inheritance pattern."],
            },
          ],
          reflection: "Why are sex-linked recessive traits more common in males?",
        },
      ],
    },
    {
      week: 4,
      focus: "Genetic technology and ethics.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Genetic Engineering & CRISPR",
          objective: "Describe how CRISPR works; evaluate potential benefits and ethical concerns.",
          activities: [
            {
              description: "CRISPR Video & Discussion",
              details: ["Watch a short animation of CRISPR-Cas9 mechanism; take notes on mechanism and applications."],
            },
            {
              description: "Ethical Debate",
              details: ["Debate: Should gene editing be used to eliminate heritable diseases? Evaluate multiple perspectives."],
            },
          ],
          reflection: "Where is the line between treating disease and 'designing' babies?",
        },
        {
          sessionNumber: 8,
          title: "Genetics Culminating Task",
          objective: "Apply genetics knowledge to a case study involving a family with a genetic condition.",
          activities: [
            {
              description: "Genetics Case Study",
              details: ["Analyze a family's genetic history; determine mode of inheritance; calculate risk for offspring; advise."],
            },
            {
              description: "Exit Assessment",
              details: ["Complete: DNA base pairing, transcription sequence, Punnett square, pedigree interpretation."],
            },
          ],
          reflection: "How has learning about genetics changed the way you think about your own traits?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "DNA & Protein Synthesis", level1: "Cannot describe DNA structure", level2: "Describes structure; cannot trace synthesis", level3: "Traces transcription and translation accurately", level4: "Explains mutation consequences at protein level" },
    { skill: "Punnett Squares", level1: "Cannot set up crosses", level2: "Sets up monohybrid with errors", level3: "Solves mono- and dihybrid correctly", level4: "Applies to non-Mendelian patterns with explanation" },
    { skill: "Pedigree Analysis", level1: "Cannot read a pedigree", level2: "Identifies affected individuals only", level3: "Determines genotypes and inheritance pattern", level4: "Calculates probability and advises hypothetical family" },
  ],
  materials: ["DNA model kit or candy/paper supplies", "Strawberries and DNA extraction materials", "Codon tables", "Pedigree worksheets", "CRISPR video resource"],
};

// ── Unit 2 ── Chemistry: Chemical Reactions (Grades 10–12) ────────────────────
export const ChemistryHigh: IUnits = {
  unitTitle: "Chemical Reactions",
  unitDBTitle: "ChemicalReactions",
  title: "Chemical Reactions (Grades 10–12)",
  gradeLevel: "10th – 12th Grade",
  lengthOfUnit: LengthInWeeks.FourWeeks,
  concept: "Chemical reactions rearrange atoms; energy changes and rates are governed by predictable principles.",
  overallExpectation:
    "Students write and balance chemical equations, classify reaction types, investigate reaction rates, and apply stoichiometry to calculate yields.",
  essentialQuestions: [
    "How do we know a chemical reaction has occurred?",
    "Why must chemical equations be balanced?",
    "What factors control how fast a reaction proceeds?",
  ],
  skills: ["Writing and balancing equations", "Reaction classification", "Stoichiometry", "Reaction rates and factors"],
  weeklyPlan: [
    {
      week: 1,
      focus: "Chemical equations and balancing.",
      sessions: [
        {
          sessionNumber: 1,
          title: "Signs of Chemical Reactions",
          objective: "Identify observable evidence of chemical change; distinguish from physical change.",
          activities: [
            {
              description: "Reaction Stations Lab",
              details: ["Observe 5 mini-reactions; record: color change, precipitate, gas, heat/light, odor; classify each."],
            },
            {
              description: "Reactants & Products",
              details: ["Write word equations for observed reactions; translate into chemical formulas."],
            },
          ],
          reflection: "Why isn't a color change alone sufficient proof of a chemical reaction?",
        },
        {
          sessionNumber: 2,
          title: "Balancing Chemical Equations",
          objective: "Apply the law of conservation of mass to balance chemical equations.",
          activities: [
            {
              description: "Atom Counting",
              details: ["Use colored blocks to represent atoms; balance equations by adjusting coefficients only."],
            },
            {
              description: "Balancing Practice Set",
              details: ["Balance 12 equations of increasing complexity; verify by counting atoms on both sides."],
            },
          ],
          reflection: "Why can you change coefficients but not subscripts when balancing equations?",
        },
      ],
    },
    {
      week: 2,
      focus: "Types of chemical reactions.",
      sessions: [
        {
          sessionNumber: 3,
          title: "Five Reaction Types",
          objective: "Classify reactions as synthesis, decomposition, single replacement, double replacement, or combustion.",
          activities: [
            {
              description: "Reaction Type Pattern Cards",
              details: ["Match general patterns (A+B→AB, AB→A+B, etc.) to equations; classify each into reaction type."],
            },
            {
              description: "Combustion Lab",
              details: ["Burn a candle in a closed jar; observe CO₂ + H₂O products; write balanced combustion equation."],
            },
          ],
          reflection: "How can recognizing the reaction type help you predict products?",
        },
        {
          sessionNumber: 4,
          title: "Predicting Products",
          objective: "Use activity series and solubility rules to predict products of reactions.",
          activities: [
            {
              description: "Activity Series Lab",
              details: ["Place metals in different salt solutions; observe which react; rank metals by reactivity."],
            },
            {
              description: "Solubility Rules Practice",
              details: ["Use solubility rules to predict whether a precipitate forms in 8 double-replacement reactions."],
            },
          ],
          reflection: "How does the activity series save chemists time in the lab?",
        },
      ],
    },
    {
      week: 3,
      focus: "Stoichiometry.",
      sessions: [
        {
          sessionNumber: 5,
          title: "Mole Concept",
          objective: "Define the mole; convert between grams, moles, and number of particles.",
          activities: [
            {
              description: "Mole Analogy",
              details: ["Compare a mole to a dozen; use molar mass from periodic table for conversions."],
            },
            {
              description: "Conversion Practice",
              details: ["Solve 10 conversions: grams↔moles↔molecules using dimensional analysis."],
            },
          ],
          reflection: "Why do chemists use moles instead of counting individual atoms?",
        },
        {
          sessionNumber: 6,
          title: "Mole Ratios & Yields",
          objective: "Use mole ratios from balanced equations to calculate theoretical yield.",
          activities: [
            {
              description: "Stoichiometry Map",
              details: ["Use the stoichiometry road map: given → moles given → moles wanted → grams wanted."],
            },
            {
              description: "S'mores Stoichiometry",
              details: ["Model stoichiometry with s'mores ingredients; identify limiting reactant and theoretical yield."],
            },
          ],
          reflection: "What is a limiting reactant and why does it matter in industry?",
        },
      ],
    },
    {
      week: 4,
      focus: "Reaction rates and energy.",
      sessions: [
        {
          sessionNumber: 7,
          title: "Factors Affecting Reaction Rate",
          objective: "Investigate how temperature, concentration, surface area, and catalysts affect reaction rate.",
          activities: [
            {
              description: "Alka-Seltzer Rate Lab",
              details: ["Measure reaction time at 3 temperatures; calculate rate; graph and interpret results."],
            },
            {
              description: "Catalyst Investigation",
              details: ["Decompose H₂O₂ with and without MnO₂ catalyst; compare gas production rates."],
            },
          ],
          reflection: "Why do we refrigerate food? Use reaction rate concepts in your answer.",
        },
        {
          sessionNumber: 8,
          title: "Endothermic vs Exothermic",
          objective: "Distinguish between endothermic and exothermic reactions using energy diagrams.",
          activities: [
            {
              description: "Energy Diagram Analysis",
              details: ["Draw energy diagrams for exothermic and endothermic reactions; label activation energy, ΔH."],
            },
            {
              description: "Culminating Lab Report",
              details: ["Write a lab report for the Alka-Seltzer investigation: hypothesis, data table, graph, conclusion."],
            },
          ],
          reflection: "How does a catalyst lower activation energy without being consumed?",
        },
      ],
    },
  ],
  assessment: [
    { skill: "Balancing Equations", level1: "Cannot balance simple equations", level2: "Balances with significant errors", level3: "Balances most equations accurately", level4: "Balances complex equations; explains conservation law" },
    { skill: "Stoichiometry", level1: "Cannot convert grams to moles", level2: "Converts but cannot apply mole ratios", level3: "Calculates theoretical yield from balanced equation", level4: "Identifies limiting reagent and calculates percent yield" },
    { skill: "Reaction Rate Analysis", level1: "Cannot identify rate factors", level2: "Lists factors without explanation", level3: "Explains and demonstrates factor effects", level4: "Designs experiment to isolate a rate variable" },
  ],
  materials: ["Balancing equation worksheets", "Alka-Seltzer tablets", "Thermometers", "Hydrogen peroxide and MnO₂", "Periodic tables", "Activity series charts"],
};
