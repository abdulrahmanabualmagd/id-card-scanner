import { Link } from "react-router-dom";
import {AnimatedFade} from 'components'
import {NotFound} from 'svgs'

export default function NotFoundPage() {
    return (
        <AnimatedFade animation="fade-in" className="h-full d-flex flex-c-c flex-column">
            <div className="h-75 w-100 d-flex flex-c-c">
                <img src={NotFound} alt="not found pic" />
            </div>
            <div className="font-sm t-neutral-main pb-5">The page you are looking for is not exist</div>
            <div className="h-25">
                <Link to="/" className="btn btn-primary">
                    Go Home
                </Link>
            </div>
        </AnimatedFade>
    );
}