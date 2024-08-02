import axios from "axios";

const API_URL = "http://localhost:3000/card"; // Update with your actual API endpoint

export const uploadFileApi = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

export const processedFileApi = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});


