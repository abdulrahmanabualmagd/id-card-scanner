# ID Card Scanner

## Overview

ID Card Scanner is a full-stack application built with Node.js and React. The app allows users to upload ID card images, process them, extract data using OCR, and autofill forms with the extracted information. The project features a well-designed, responsive user interface crafted with pure CSS.

## Demo


## Features

- **Responsive Design**: A visually appealing, responsive design without using premade libraries like Bootstrap or Material UI.
- **Landing Page**: Includes multiple sections with a smooth user experience.
- **Authentication**: Login and logout templates for user authentication.
- **ID Card Processing**: Users can upload images, which are processed and analyzed to extract data.

## Workflow

1. **Image Upload**: The user uploads an ID card image.
2. **Image Preprocessing**: The image is sent to the server, where it undergoes adjustments using Sharp.
3. **Quality Check**: The adjusted image is returned to the user for quality verification.
4. **OCR and Data Extraction**: Once verified, the image is sent back to the server. OCR is applied using Tesseract.js, the text is cleaned, and data is identified.
5. **Data Output**: The server returns an object containing the identified data. Note that the process does not use ML models, so the output may not be accurate.

## Technology Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Image Processing**: Sharp
- **OCR**: Tesseract.js
- **State Management**: Redux
- **Routing**: React Router
- **HTTP Requests**: Axios
- **Cookie Management**: JS Cookie

## Setup

```bash
# Clone the repository
git clone [your-repository-url]
cd id-card-scanner

# Install backend dependencies and run the server
cd server
npm install
npm run dev

# Install frontend dependencies and run the app
cd ../client
npm install
npm run dev
