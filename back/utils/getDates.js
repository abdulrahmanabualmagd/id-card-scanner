exports.getDates = async (text) => {
    // Regular expression to match MM/DD/YYYY format
    const dateRegex = /\b(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}\b/g;

    // Find all matches in the text
    const matches = text.match(dateRegex);

    if (!matches) {
        return [];
    }

    // Parse and sort dates
    const sortedDates = matches
        .map((dateStr) => {
            const [month, day, year] = dateStr.split('/');
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        })
        .sort();

    return sortedDates;
};
