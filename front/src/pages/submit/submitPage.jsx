import "./style.css";
import { FieldsSubmitComponent, AnimatedFade, BreadcrumbComponent } from "components";

export default function SubmitPage() {
    return (
        <div className="h-full d-flex flex-c-c submitPage">
            <AnimatedFade animation="fade-in" className="fieldsSubmitWrapper d-flex flex-column">
                <div className="py-2">
                    <BreadcrumbComponent />
                </div>
                    <FieldsSubmitComponent/>
            </AnimatedFade>
        </div>
    );
}
