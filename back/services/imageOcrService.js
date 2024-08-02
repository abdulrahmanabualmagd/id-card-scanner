const Tesseract = require("tesseract.js");

exports.extractText = async (imagePath) => {
    try {
        const {
            data: { text },
        } = await Tesseract.recognize(imagePath, "eng", {
            tessedit_char_whitelist: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            oem: 1,
        });
        return (text.replace(/\s+/g, ' ').trim());
    } catch (err) {
        next(err);
    }
};
