import "./style.css";
import { LoginFormComponent, AnimatedFade, BreadcrumbComponent } from "components";
import {Login} from 'svgs'
export default function LoginPage() {
    return (
        <div className="container-fluid loginPage  d-flex flex-column">
            <div className="h-full child-px-2 d-flex flex-wrap flex-b-c child-col-12 child-col-xl-6">
                <div className="W-100 d-flex flex-c-c">
                    <AnimatedFade animation="slide-in-left" className="d-flex flex-column loginFormWrapper">
                        <div className="py-2">
                            <BreadcrumbComponent />
                        </div>
                        <LoginFormComponent />
                    </AnimatedFade>
                </div>
                <AnimatedFade animation="slide-in-right" className="d-xl-block d-none">
                    <img src={Login} alt="" />
                </AnimatedFade>
            </div>
        </div>
    );
}
