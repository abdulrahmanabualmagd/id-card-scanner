import { Link } from "react-router-dom";
import { AnimatedFade } from "components";
import {Hero} from 'svgs'
import "./style.css";

export default function HeroComponent() {
    return (
        <div className="hero container d-flex flex-wrap child-col-12 child-col-lg-6 ">
            <AnimatedFade animation="slide-in-left" className="pl-5 d-flex flex-column child-my-3 flex-c-s">
                <div className="title font-xxxl bold italic">Revolutionize ID Data Management</div>
                <div className="text">
                    Unlock the power of your data with our cutting-edge ID scanner. Our tool
                    empowers you to make informed decisions.
                </div>
                <div>
                    <Link to='/upload' className="btn btn-light">Try It Now</Link>
                </div>
            </AnimatedFade>
            <AnimatedFade animation="slide-in-right">
                <img src={Hero} alt="hero_svg" />
            </AnimatedFade>
        </div>
    );
}
