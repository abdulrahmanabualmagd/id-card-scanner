import { useContext, useEffect } from "react";
import { FileContext } from "contexts";
import { uploadFile } from "services";
import { Link } from "react-router-dom";
import "./style.css";

export default function PreviewIDFormComponent() {
    const { file, fileUrl, setProcessedFileUrl, processedFileUrl, setFileBlob } = useContext(FileContext);

    useEffect(() => {
        const getProcessedFile = async () => {
            if (file) {
                try {
                    const blob = await uploadFile(file);
                    setProcessedFileUrl(URL.createObjectURL(blob));
                    setFileBlob(blob);
                } catch (error) {
                    console.error("Error performing OCR:", error);
                }
            }
        };

        getProcessedFile();
    }, []);

    return (
        <div className="previewWrapper d-flex flex-column flex-c-c p-2 child-my-2">
            <div className="font-xxl italic">Processed Image</div>
            <div className="previewArea d-flex flex-column flex-c-c p-2">
                {processedFileUrl ? (
                    <img src={processedFileUrl} alt="Processed File Preview" className="previewImage" />
                ) : fileUrl ? (
                    <img src={fileUrl} alt="Original File Preview" className="previewImage" />
                ) : (
                    <div className="font-xl t-neutral-main py-2 pt-3">No Files Found!</div>
                )}
            </div>
            <div className="font-xs t-neutral-main py-2 pt-3">Please review your data before scanning</div>
            <Link
                to={processedFileUrl ? "submit" : "#"}
                className={`btn btn-primary w-100 t-center ${!processedFileUrl ? "btn-disabled" : ""}`}
            >
                Scan
            </Link>
        </div>
    );
}
