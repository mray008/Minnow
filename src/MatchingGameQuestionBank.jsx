// matching game question bank
// stores the bank of questions that matching game can read and pull from.
// questions are divided into groups "easy," "medium," and "hard"

import { defineConfig } from "vite";

// for now, all questions will be based on biology

const MatchingGameQuestionBank = {
    easy: [
        { id: 1, word: "Osmosis", definition: "Movement of water through a semi-permeable membrane." },
        { id: 2, word: "Photosynthesis", definition: "Process by which plants convert sunlight into energy." },
        { id: 3, word: "Evaporation", definition: "Process of a liquid turning into vapor." },
        //following sourced from https://www.brainscape.com/flashcards/cell-biology-16468978/packs/22218839
        { id: 4, word: "Organelle", definition: "A separate, specialized structure within a cell."},
        { id: 5, word: "Mitochondria", definition: "Powerhouse organelle responsible for cellular metabolism."},
        { id: 6, word: "Plasma Membrane", definition: "Organelle responsible for protecting a cell from an outside environment."},
        //following sourced from https://www.brainscape.com/flashcards/genetics-16480083/packs/22218839
        { id: 7, word: "Gene", definition: "A nucleic acid sequence that determines some trait of an organism."},
        { id: 8, word: "Phenotype", definition: "A physical or observable characteristic of an organism."},
        { id: 9, word: "Genotype", definition: "The actual set of alleles possessed by an organism."}
    ],

    medium: [
        //following sourced from https://quizlet.com/gb/22037238/intermediate-2-biology-flash-cards/
        { id: 101, word: "Respiration", definition: "The process by which a living organism releases energy from it's food."},
        { id: 102, word: "Yeast", definition: "The single celled fungus used to make bread, beer, and wine through fermentation."},
        { id: 103, word: "Maltose", definition: "Sugar produced when an amylase enzyme in grains digests starch in the grain."},
        { id: 104, word: "Non-renewable", definition: "Resources that will eventually run out such as fossil fuels."},
        { id: 105, word: "Renewable", definition: "Resources that can be continually produced in an environmentally friendly way."},
        { id: 106, word: "Penicillin", definition: "The first antibiotic, discovered by Alexander Fleming."},
        { id: 107, word: "Carbon Dioxide", definition: "The compound that causes dough to rise during baking."},
        { id: 108, word: "Lactose", definition: "Sugar in milk acted upon by yogurt forming bacteria."},
        { id: 109, word: "Diffusion", definition: "The movement of a substance an area with a higher concentration to lower."}
    ],

    hard: [
        //following sourced from https://quizlet.com/gb/22037238/intermediate-2-biology-flash-cards/
        { id: 201, word: "Hypotonic", definition: "A solution with a higher concentration of water than another."},
        { id: 202, word: "Hypertonic", definition: "A solution with a lower concentration of water than another."},
        { id: 203, word: "Isotonic", definition: "When two solutions are equal in water concentration."},
        { id: 204, word: "Molarity", definition: "The concentration of a solute (e.g sugar) dissolved in a solution."},
        { id: 205, word: "Turgid", definition: "When a plant cell swells with water and stretches against the cell wall."},
        { id: 206, word: "Plasmolysed", definition: "When a plant cell loses water due to external conditions and shrinks."},
        { id: 207, word: "Catalase", definition: "An enzyme found in living cells found in high concentrations in fish livers."},
        { id: 208, word: "Active site", definition: "The area of an enzyme at which the substrate locks on."},
        { id: 209, word: "Amalayse", definition: "The protein that promotes the breakdown of starch into the sugar maltose."} 
    ]
};

export default MatchingGameQuestionBank;