import "./style.css";
import { NavbarComponent, HeroComponent } from "components";
export default function HeaderComponent() {
    return (
        // Main Container
        <div className="container-fluid header">
            <NavbarComponent />
            <HeroComponent />
        </div>
    );
}
