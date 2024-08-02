exports.getDocumentNo = async (text) => {
    const docNoRegex = /\b\d{8}\b/;

    const match = text.match(docNoRegex);
    
    return match ? match[0] : null;
};
