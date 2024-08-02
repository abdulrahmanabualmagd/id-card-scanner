const fs = require("fs");
const path = require("path");

// Load the names from the text file
function loadNames() {
    const filePath = "./assets/names.txt";
    const data = fs.readFileSync(filePath, "utf8");
    return data
        .split("\n")
        .map((name) => name.trim().toLowerCase())
        .filter((name) => name);
}

// Extract names from a given piece of data
function extractNames(text, namesList) {
    const foundNames = [];
    const words = text.split(/\s+/);

    for (const word of words) {
        // Normalize the word to match the names list (e.g., case-insensitive)
        const normalizedWord = word.trim().toLowerCase();

        // Check if the current word is in the names list
        if (namesList.includes(normalizedWord)) {
            foundNames.push(word);
        }
    }

    return [...new Set(foundNames)]; // Remove duplicates
}

// Main function to extract names from a text string
exports.getNames = async (text) => {
    const namesList = loadNames();
    const namesFound = extractNames(text, namesList);
    return namesFound;
};
