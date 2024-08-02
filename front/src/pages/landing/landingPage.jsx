import { FooterComponent, HeaderComponent, FeatureComponent, ContactComponent } from "components";
export default function LandingPage() {
    return (
        <div className="container-fluid min-height-10 d-flex flex-column flex-b-s">
            <HeaderComponent />
            <FeatureComponent />
            <ContactComponent />
            <FooterComponent />
        </div>
    );
}
