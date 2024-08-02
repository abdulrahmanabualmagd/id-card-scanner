import "./style.css";
import PropTypes from "prop-types";

export default function InputFieldComponent({ type = "text", name, label, value, onChange, onBlur, error }) {
    return (
        <div className="input-container">
            <input
                type={type}
                name={name}
                id={`${name}Input`}
                required
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <label htmlFor={`${name}Input`} className="label">
                {label}
            </label>
            <div className="underline"></div>
            {error && <span className="inputError">{error}</span>}
        </div>
    );
}

// // Prop Types for the InputFieldComponent Props
// InputFieldComponent.propTypes = {
//     type: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     onChange: PropTypes.func.isRequired,
//     onBlur: PropTypes.func,
//     error: PropTypes.string,
// };
