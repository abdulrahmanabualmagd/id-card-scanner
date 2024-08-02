import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create a context [handleFileChange, handleFileRemove, file, fileUrl]
export const FileContext = createContext();

// Create a provider component
export default function FileProvider({ children }) {
    // States
    const [file, setFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [processedFileUrl, setProcessedFileUrl] = useState(null);
    const [fileData, setFileData] = useState(null);
    const [fileLoading, setFileLoading] = useState(false);
    const [fileBlob, setFileBlob] = useState(false);

    // File selection
    const handleFileChange = (selectedFile) => {
        if (selectedFile) {
            setFile(selectedFile);
            setFileUrl(URL.createObjectURL(selectedFile));
        }
    };

    // File removal
    const handleFileRemove = () => {
        if (fileUrl) {
            URL.revokeObjectURL(fileUrl); // Free up memory
        }
        setFile(null);
        setFileUrl(null);
    };

    return (
        <FileContext.Provider
            value={{
                file,
                fileUrl,
                fileData,
                fileLoading,
                processedFileUrl,
                fileBlob,
                handleFileChange,
                handleFileRemove,
                setFileData,
                setFileLoading,
                setProcessedFileUrl,
                setFileUrl,
                setFileBlob,
            }}
        >
            {children}
        </FileContext.Provider>
    );
}

// props validation
FileProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
