import { Link } from "react-router-dom";
import { AnimatedFade } from "components";
import {Features} from 'svgs'
import "./style.css";
export default function FeatureComponent() {
    return (
        <div className="feature container d-flex flex-wrap child-col-12 child-col-lg-6 min-height-10 py-5">
            <AnimatedFade animation="fade-in" className="d-flex flex-c-c">
                <img src={Features} alt="" />
            </AnimatedFade>
            <AnimatedFade animation="slide-up" className="d-flex flex-column child-my-3 flex-c-s pl-1">
                <div className="title font-xxxl bold italic">Benefits of Using Our ID Scanner</div>
                <div className="text">
                    Experience the difference our ID scanner can make for your organization. Our interface ensure a
                    seamless experience.
                </div>
                <div>
                    <Link className="btn btn-primary">Learn More</Link>
                </div>
            </AnimatedFade>
        </div>
    );
}
