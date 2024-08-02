exports.cleanText = (input) => {
    return input
        .toLowerCase() 
        .replace(/[\r\n]+/g, " ") 
        .replace(/[^a-z0-9\/\s]/g, ""); 
};
