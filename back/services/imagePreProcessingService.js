const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

exports.processImage = async (imagePath) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(imagePath); // Get original extension

    const processedImagePath = path.join("images", `${uniqueSuffix}-processed${ext}`); // Ensure no duplicate dot

    try {
        await sharp(imagePath)
            .resize(3000) // Resize image to a standard width
            .toColourspace("b-w") // Convert to grayscale
            .normalize() // Improve contrast
            .threshold(128) // Apply binary thresholding
            .modulate({ brightness: 1.2, contrast: 1.1 }) // Enhance brightness and contrast
            .sharpen() // Apply sharpening filter
            .toFile(processedImagePath); // Directly chain to toFile()

        return processedImagePath;
    } catch (error) {
        console.error("Error during image processing:", error.message);

        // Clean up partially processed file if exists
        if (fs.existsSync(processedImagePath)) {
            fs.unlinkSync(processedImagePath);
        }

        throw new Error("Failed to process the image.");
    }
};
