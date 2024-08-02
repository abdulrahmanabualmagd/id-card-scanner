# ID Card Scanner

## Overview

A full-stack application built with Node.js and React. The app allows users to upload ID card images, process them, extract data using OCR, and autofill forms with the extracted information.

## Demo

https://github.com/user-attachments/assets/206290d1-15b8-4787-baaa-3d99a7ebfd10



## Features

- **Responsive Design**: A visually appealing, responsive design using pure CSS.
- **Landing Page**: Includes multiple sections with a smooth user experience.
- **ID Card Processing**: Users can upload images, which are processed and analyzed to extract data on server side.

## Workflow

1. **Image Upload**: The user uploads an ID card image.
2. **Image Preprocessing**: The image is sent to the server, where it undergoes adjustments using Sharp.
3. **Quality Check**: The adjusted image is returned to the user for quality verification.
4. **OCR and Data Extraction**: the image is sent back to the server after review. OCR is applied using Tesseract.js, the text is cleaned, and data is identified.
5. **Data Output**: The server returns an object containing the identified data. Note that the process does not use ML models, so THE OUTPUT MAY NOT BE ACCURATE

## Technology Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Image Processing**: Sharp
- **OCR**: Tesseract.js
- **Routing**: React Router
- **HTTP Requests**: Axios
- **Cookie Management**: JS Cookie

## Setup

```bash
# Clone the repository
git clone [https://github.com/abdulrahmanabualmagd/abdulrahmanabualmagd-assignment]
cd id-card-scanner

# Install backend dependencies and run the server
cd back
npm install
npm run dev

# Install frontend dependencies and run the app
cd ../front
npm install
npm run dev
