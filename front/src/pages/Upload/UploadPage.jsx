import { UploadIDFormComponent, AnimatedFade, BreadcrumbComponent } from "components";
import "./style.css";

export default function UploadPage() {
    return (
        <div className="uploadPage d-flex flex-c-c h-full">
            <AnimatedFade animation="fade-in">
                <div className="uploadFormWrapper">
                    <div className="w-100 py-2">
                        <BreadcrumbComponent />
                    </div>
                    <UploadIDFormComponent />
                </div>
            </AnimatedFade>
        </div>
    );
}
