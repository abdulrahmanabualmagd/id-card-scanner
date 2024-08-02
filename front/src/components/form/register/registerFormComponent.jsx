import { Link } from "react-router-dom";
import { useState } from "react";
import { isEmail, isStrongPassword } from "validator";
import { InputFieldComponent } from "components";
import { Google, Facebook } from "svgs";

export default function RegisterFormComponent() {
    // Form Input Data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });

    // Field Errors
    const [errors, setErrors] = useState({
        email: null,
        password: null,
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

        if (name === "email" && !isEmail(value)) {
            error = "Invalid email format!";
        }

        if (name === "password" && !isStrongPassword(value)) {
            error = "Password must be strong!";
        }

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
        <div className="d-flex flex-c-c form-container">
            <form onSubmit={handleFormSubmit} className="form w-100">
                {/* Upper Text */}
                <div className="uppertext pt-3">
                    <div className="font-xxxl bold t-primary-main">Register</div>
                    <div className="neutral-main">
                        Already have an account?{" "}
                        <Link to="/login" className="link">
                            Login
                        </Link>
                    </div>
                </div>

                {/* Inputs Container */}
                <div className="child-my-5">
                    {/* Email Input */}
                    <InputFieldComponent
                        type="text"
                        name="email"
                        label="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.email}
                    />

                    {/* Password Input */}
                    <InputFieldComponent
                        type="password"
                        name="password"
                        label="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        error={errors.password}
                    />

                    {/* Checkbox Input */}
                    <div className="d-flex flex-s-c child-px-2">
                        <input
                            type="checkbox"
                            id="remember-me-check"
                            name="rememberMe"
                            onChange={handleInputChange}
                            checked={formData.rememberMe}
                        />
                        <label htmlFor="remember-me-check">Remember me</label>
                    </div>

                    {/* Forget Password */}
                    <div>
                        <Link className="link">Forget Password?</Link>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <Link to="/soon" className="btn btn-primary w-100 d-block t-center">
                            Register
                        </Link>
                    </div>

                    {/* Divider OR */}
                    <div>
                        <div className="h-lines d-flex flex-c-c w-100 neutral-main">Or Sign Up With</div>
                    </div>

                    {/* OAuth Buttons */}
                    <div className="d-flex flex-b-c child-mr-3 ">
                        <div>
                            <button className="btn btn-primary d-flex flex-c-c py-1">
                                <img src={Google} alt="Google" />
                                Google
                            </button>
                        </div>
                        <div>
                            <button className="btn btn-primary d-flex flex-c-c py-1">
                                <img src={Facebook} alt="Facebook" />
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
