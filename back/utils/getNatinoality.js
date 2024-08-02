const fs = require("fs");
const path = require("path");

// Load pregiven data
function loadStates() {
    const filePath = "./assets/states.txt";
    const data = fs.readFileSync(filePath, "utf8");
    return data
        .split("\n")
        .map((state) => state.trim().toLowerCase())
        .filter((state) => state);
}

// Check if the text contains any state names
function containsState(text, statesList) {
    const words = text.split(/\s+/);

    // Normalize the words for comparison
    const normalizedWords = words.map((word) => word.replace(/[^a-zA-Z]/g, "").toLowerCase());

    // Check if any state is present in the text
    return normalizedWords.some((word) => statesList.includes(word));
}

// Main function to determine nationality based on state names
exports.getNationality = async (text) => {
    const statesList = loadStates();
    const hasState = containsState(text, statesList);
    return hasState ? "American" : "Non";
};
