import { uploadFileApi, processedFileApi } from "apis";

// Upload file and get the preprocessed file as blob
export const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await uploadFileApi.post("/upload", formData, {
            responseType: "blob",
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};

// send the received blob again to the server to extract the text
export const sendProcessedFile = async (fileBlob) => {
    const formData = new FormData();

    formData.append("file", fileBlob);

    try {
        const response = await processedFileApi.post("/process", formData);
        return response.data;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
};
