const { HfInference } = require("@huggingface/inference");
require("dotenv").config();

const KEY = process.env.API_MODEL_KEY || "";
const MODEL = process.env.API_MODEL || "";

const hf = new HfInference(KEY);

exports.IdentityText = async (text) => {
    try {
        const response = await hf.tokenClassification({
            model: MODEL,
            inputs: text,
        });
        return response;
    } catch (error) {
        console.error("Error connecting to Hugging Face API:", error);
    }
};
