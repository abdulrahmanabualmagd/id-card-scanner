// UploadIDFormComponent.js
import { useContext, useEffect, useRef } from "react";
import { FileContext } from "contexts"; // Adjust the path as needed
import { Link } from "react-router-dom";
import {CloudUpload} from 'svgs'
import "./style.css";

export default function UploadIDFormComponent() {
    const { file, fileUrl, handleFileChange, handleFileRemove, setProcessedFileUrl } = useContext(FileContext);
    const fileInputRef = useRef(null);

    // Resetting the processed image URL
    useEffect(() => {
        setProcessedFileUrl(null);
    }, []);

    // Handle file input change
    const handleInputChange = (event) => {
        const selectedFile = event.target.files[0];
        handleFileChange(selectedFile);
    };

    // Handle file remove
    const handleRemoveFile = () => {
        handleFileRemove();
        // Reset the file input
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className="uploadWrapper d-flex flex-column flex-c-c p-2 child-my-2">
            <div className="font-xxl">Upload Image</div>
            <div className="uploadArea d-flex flex-column flex-b-c p-3">
                <div className="t-center">
                    <img width="100px" src={CloudUpload} alt="Upload Pic" />
                </div>
                <div>
                    <input
                        type="file"
                        id="fileUpload"
                        accept=".jpeg, .jpg, .png, .gif"
                        onChange={handleInputChange}
                        style={{ display: "none" }}
                        ref={fileInputRef}
                    />
                    <label htmlFor="fileUpload" className="link">
                        Drag & drop files or Browse
                    </label>
                </div>
                <div className="notes font-xs">Supported formats: JPEG, PNG, GIF</div>
            </div>

            {/* File Preview */}
            {file && (
                <div className="filePreview d-flex flex-b-c p-2">
                    <img src={fileUrl} alt="File Preview" className="previewImage" />
                    <div>{file.name}</div>
                    <button onClick={handleRemoveFile} className="removeImage btn p-0">
                        X
                    </button>
                </div>
            )}

            {/* Notes */}
            <div className="font-xs t-neutral-main py-2 pt-3">Make sure you have the supported formats</div>

            <Link
                to={file ? "preview" : "#"}
                className={`btn btn-primary w-100 t-center ${!file ? "btn-disabled" : ""}`}
            >
                Preprocess Image
            </Link>
        </div>
    );
}
