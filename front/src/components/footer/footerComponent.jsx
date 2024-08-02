import "./style.css";
import { AnimatedFade } from "components";
import { Facebook, Github, Google, Instagram, LinkedIn } from "svgs";

export default function FooterComponent() {
    return (
        <AnimatedFade animation="fade-in" className="footer container-fluid d-flex flex-column flex-c-b min-height-60">
            {/* Upper */}
            <div className="upper w-100 py-3">
                <div className="container d-flex flex-wrap flex-b-c flex-xl-c-c child-col-12 child-col-xl-6 px-3 py-2">
                    <div className="t-center upperText">Get Connected with us on social networks</div>
                    <div className="list t-center">
                        <ul className="d-flex flex-c-c child-ml-3">
                            <li>
                                <img src={Facebook} alt="Facebook" />
                            </li>
                            <li>
                                <img src={Github} alt="Github" />
                            </li>
                            <li>
                                <img src={Google} alt="Google" />
                            </li>
                            <li>
                                <img src={Instagram} alt="Instagram" />
                            </li>
                            <li>
                                <img src={LinkedIn} alt="LinkedIn" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Middle */}
            <div className="middle w-100 d-flex flex-c-c py-5">
                <div className="container d-flex flex-wrap flex-c-c child-col-12 child-col-lg-6 child-col-xl-3 child-p-3">
                    <div className="companyName">
                        <div>
                            <div className="heading">ABOUT COMPANY</div>
                        </div>
                        <div className="content">
                            <ul>
                                <li className="lh-4">
                                    With a focus on user experience and cutting-edge technology, we deliver efficient
                                    and effective tools to help businesses thrive.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="products">
                        <div>
                            <div className="heading">PRODUCTS</div>
                        </div>
                        <div className="content">
                            <ul>
                                <li>CardScanner</li>
                                <li>PassportScanner</li>
                                <li>LicenseScanner</li>
                                <li>PersonalIDs</li>
                            </ul>
                        </div>
                    </div>

                    <div className="usefulLinks">
                        <div>
                            <div className="heading">USEFUL LINKS</div>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Your Account</li>
                                <li>Become an Affiliate</li>
                                <li>Shipping Rates</li>
                                <li>Help</li>
                            </ul>
                        </div>
                    </div>

                    <div className="contact">
                        <div>
                            <div className="heading">CONTACT</div>
                        </div>
                        <div className="content">
                            <ul>
                                <li>Cairo, Egypt</li>
                                <li>abdulrahmanabualmagd@gmail.com</li>
                                <li>+201000140504</li>
                                <li>+201000140505</li> {/* Updated duplicate phone number */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lower */}
            <div className="lower w-100 py-5 d-flex flex-c-c">
                <div className="d-flex flex-c-c">
                    <div>© 2020 Copyright: AbuAlmagd.com</div>
                </div>
            </div>
        </AnimatedFade>
    );
}
