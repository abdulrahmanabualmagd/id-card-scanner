import { Link, useLocation } from "react-router-dom";
import "./style.css";

// Breadcrumb Component
export default function BreadcrumbComponent() {
    // Get current location
    const location = useLocation();

    // Get path names from the returned array from the location
    const pathNames = location.pathname.split("/").filter((x) => x);

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>

                {pathNames.map((value, index) => {
                    const to = `/${pathNames.slice(0, index + 1).join("/")}`;

                    return index < pathNames.length - 1 ? (
                        <li key={to} className="breadcrumb-item">
                            <Link to={to}>{value}</Link>
                        </li>
                    ) : (
                        <li key={to} className="breadcrumb-item active">
                            {value}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
