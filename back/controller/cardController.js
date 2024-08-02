const { processImage } = require("./../services/imagePreProcessingService");
const { extractText } = require("./../services/imageOcrService");
const { gatherInfoService } = require("./../services/gatherInfoService");
const { cleanText } = require("./../utils/cleanText");
const path = require("path");

// return blob of the processed file
exports.uploadCardController = async (req, res, next) => {
    try {
        // Check for the file
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        const preprocessResult = await processImage(req.file.path);

        const filePath = path.resolve(__dirname, "..", preprocessResult);

        res.setHeader("Content-Disposition", 'attachment; filename="example.jpg"');
        res.setHeader("Content-Type", "image/jpeg");

        res.sendFile(filePath);
    } catch (err) {
        next(err);
    }
};

// Get the processed file from client and proceed on
exports.performOcrController = async (req, res, next) => {
    try {

        // Check for the file
        if (!req.file) {
            return res.status(400).send("No file uploaded.");
        }

        const extractedText = await extractText(req.file.path);

        const cleanedText = cleanText(extractedText);

        const data = await gatherInfoService(cleanedText);

        res.status(201).json({cleanedText, data});
    } catch (err) {
        next(err);
    }
};
