import { useEffect, useState, useContext } from "react";
import { isStrongPassword } from "validator";
import { InputFieldComponent } from "components";
import { FileContext } from "contexts";
import { sendProcessedFile } from "services";
import "./style.css";

export default function FieldsSubmitComponent() {
    const { fileBlob } = useContext(FileContext);

    // Field States
    const [formData, setFormData] = useState({
        surname: "",
        givenName: "",
        dateOfBirth: "",
        nationality: "",
        documentNo: "",
        dateOfIssue: "",
        dateOfExpiry: "",
        sex: "",
    });

    useEffect(() => {
        const ocr = async () => {
            try {
                const result = await sendProcessedFile(fileBlob);

                console.log(result);
                setFormData({
                    surname: result.data.surname || "N/A",
                    givenName: result.data.givenname || "N/A",
                    dateOfBirth: result.data.dateOfBirth || "",
                    nationality: result.data.nationality || "N/A",
                    documentNo: result.data.documentNo || "N/A",
                    dateOfIssue: result.data.dateOfIssue || "",
                    dateOfExpiry: result.data.dateOfExpire || "",
                    sex: result.data.sex || "",
                });

            } catch (error) {
                console.error("Error performing OCR:", error);
            }
        };

        if (fileBlob) {
            ocr();
        }
    }, [fileBlob]);

    // Field Errors
    const [errors, setErrors] = useState({
        surname: null,
        givenName: null,
        dateOfBirth: null,
        nationality: null,
        documentNo: null,
        dateOfIssue: null,
        dateOfExpiry: null,
        sex: null,
    });

    // Field OnChange
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // Field OnBlur
    const handleInputBlur = (e) => {
        const { name, value } = e.target;
        let error = null;
        // Example validation
        if (name === "surname" && value.trim() === "") {
            error = "Surname is required.";
        }
        // Additional validation can be added here
        setErrors((prev) => ({
            ...prev,
            [name]: error,
        }));
    };

    // OnSubmit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form data submitted:", formData);
    };

    return (
        // Form Container
        <div className="d-flex flex-c-c form-container flex-grow-1">
            {/* Main Form */}
            <form onSubmit={handleFormSubmit} className="form d-flex flex-column flex-b-c">
                <div className="font-xxl">Identity</div>

                {/* Inputs Container */}
                <div className="d-flex flex-b-b flex-wrap child-col-12 child-col-md-5 child-my-4 child-mx-2 child-p-2 flex-grow-1">
                    {/* Surname */}
                    <InputFieldComponent
                        name="surname"
                        label="Surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.surname}
                    />

                    {/* Given Name */}
                    <InputFieldComponent
                        name="givenName"
                        label="Given Name"
                        value={formData.givenName}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.givenName}
                    />

                    {/* Date of Birth */}
                    <InputFieldComponent
                        type="date"
                        name="dateOfBirth"
                        label="Date of Birth"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.dateOfBirth}
                    />

                    {/* Nationality */}
                    <InputFieldComponent
                        name="nationality"
                        label="Nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.nationality}
                    />

                    {/* Document Number */}
                    <InputFieldComponent
                        name="documentNo"
                        label="Document No"
                        value={formData.documentNo}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.documentNo}
                    />

                    {/* Date of Issue */}
                    <InputFieldComponent
                        type="date"
                        name="dateOfIssue"
                        label="Date of Issue"
                        value={formData.dateOfIssue}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.dateOfIssue}
                    />

                    {/* Date of Expiry */}
                    <InputFieldComponent
                        type="date"
                        name="dateOfExpiry"
                        label="Date of Expiry"
                        value={formData.dateOfExpiry}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.dateOfExpiry}
                    />

                    {/* Sex */}
                    <InputFieldComponent
                        name="sex"
                        label="Sex"
                        value={formData.sex}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.sex}
                    />
                </div>

                {/* Notes */}
                <div className="font-xs t-neutral-main py-2 pt-3">
                    Review and modify the extracted information for future improvements.
                </div>

                {/* Submit Button */}
                <div className="w-100">
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
