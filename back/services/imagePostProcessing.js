exports.gatherData = (text) => {
    const data = {};

    const documentNoMatch = text.match(/document no.\s*\n?\)?\s*(\d+)/i);
    const surnameMatch = text.match(/surname\s*\n?—?\s*([\w\s]+)/i);
    const givenNameMatch = text.match(/given names\s*\n?©?\s*([\w\s]+)/i);
    const sexMatch = text.match(/goslacht\/sex\s*\n?\s*([\w\s]+)/i);
    const nationalityMatch = text.match(/nationaliteit\/ nationality\s*\n?\s*([\w\s]+)/i);
    const dobMatch = text.match(/date of birth\s*\n?\|?\s*([\d\w\s\/]+)/i);
    const issueDateMatch = text.match(/date of issue\s*\n?[^>]*>\s*([\d\w\s\/]+)/i);
    const expiryDateMatch = text.match(/date of expiry\s*\n?[oY]*\s*([\d\w\s\/]+)/i);

    if (documentNoMatch) data.documentNo = documentNoMatch[1].trim();
    if (surnameMatch) data.surname = surnameMatch[1].trim();
    if (givenNameMatch) data.givenName = givenNameMatch[1].trim();
    if (sexMatch) data.sex = sexMatch[1].trim().split(/\s+/)[0]; // Take the first word for sex
    if (nationalityMatch) data.nationality = nationalityMatch[1].trim().split(/\s+/)[0]; // First word for nationality
    if (dobMatch) data.dateOfBirth = dobMatch[1].trim();
    if (issueDateMatch) data.dateOfIssue = issueDateMatch[1].trim();
    if (expiryDateMatch) data.dateOfExpiry = expiryDateMatch[1].trim();

    return data;
};
