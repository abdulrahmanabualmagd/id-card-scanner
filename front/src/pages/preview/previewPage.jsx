import "./style.css";
import { AnimatedFade, BreadcrumbComponent, PreviewIDFormComponent } from "components";

export default function PreviewPage() {
    return (
        <div className="previewPage d-flex flex-c-c h-full">
            <AnimatedFade animation="fade-in">
                <div className="previewFormWrapper">
                    <div className="w-100 py-2">
                        <BreadcrumbComponent />
                    </div>
                    {/* component Preview Form here  */}
                    <PreviewIDFormComponent />
                </div>
            </AnimatedFade>
        </div>
    );
}
