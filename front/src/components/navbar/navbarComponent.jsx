import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedFade } from "components";
import { capitalizeFirstLetter } from "utils";
import {Logo} from 'svgs'
import "./style.css";

export default function NavbarComponent() {
    // Navbar Menu List
    const list = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Scan",
            path: "/upload",
        },
        {
            name: "My Data",
            path: "/data",
        },
    ];

    // Navbar Menu State
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle Menu
    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        // Main Container
        <AnimatedFade animation="fade-in" className="container-fluid navbar">
            {/* Navbar Wrapper */}
            <div className="container min-height-1 d-flex flex-b-c p-3">
                {/* Logo */}
                <div className="d-flex flex-c-c child-pr-1">
                    <Link to="/" className="font-xxl bold italic">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>

                {/* List */}
                <div className="d-none d-lg-block list">
                    <ul className="child-px-3 italic d-flex">
                        {list.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link to={item.path.toLowerCase()} className="font-lg bottomLineHover colorHover">
                                        {capitalizeFirstLetter(item.name)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Auth Area */}
                <div className="d-none d-lg-block">
                    <Link to="/login" className="bold italic colorHover">
                        Login
                    </Link>
                    <Link to="/register" className="bold italic btn btn-light ml-3 ">
                        Register
                    </Link>
                </div>

                {/* -------------------------------------------------------------------------------- */}

                {/* Menu Button */}
                <div className="d-mobile-block">
                    <button onClick={toggleMenu} className="LoginButton d-mobile-block btn btn-light px-3 font-xxxl">
                        ≡
                    </button>
                </div>

                {/* Hidden Menu */}
                <div className={`hiddenMenu w-full h-full ${isMenuOpen ? "showMenu" : "hideMenu"}`}>
                    {/* Mark */}
                    <div onClick={toggleMenu} className="t-right m-3 font-xxl bold t-white">
                        X
                    </div>
                    {/* List */}
                    <div className="container">
                        <ul className="italic d-flex flex-column child-py-2">
                            <li className="d-flex flex-b-c py-4">
                                <Link to="/login" className="font-xxxl bold btn btn-light">
                                    Login
                                </Link>
                                <Link to="/register" className="font-xxxl bold btn btn-light">
                                    Register
                                </Link>
                            </li>

                            {list.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path.toLowerCase()} className="font-xxxl white bold">
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </AnimatedFade>
    );
}
