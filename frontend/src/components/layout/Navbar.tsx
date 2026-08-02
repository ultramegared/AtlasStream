/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: Navbar.tsx
 * ===============================================================
 */

import { useState } from "react";

import {
    FaSearch,
    FaBell,
    FaBars
} from "react-icons/fa";

import Logo from "../common/Logo";
import MobileMenu from "./MobileMenu";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <>

            <header className="navbar">

                <div className="navbar__left">

                    <Logo />

                    <nav>

                        <ul className="navbar__menu">

                            <li className="active">Home</li>
                            <li>Movies</li>
                            <li>Series</li>
                            <li>TV Live</li>
                            <li>My List</li>

                        </ul>

                    </nav>

                </div>

                <div className="navbar__right">

                    <button className="navbar__icon">

                        <FaSearch />

                    </button>

                    <button className="navbar__icon notification">

                        <FaBell />

                        <span className="notification__badge">

                            3

                        </span>

                    </button>

                    <button className="navbar__profile">

                        U

                    </button>

                    <button
                        className="navbar__hamburger"
                        onClick={() => setMenuOpen(true)}
                    >

                        <FaBars />

                    </button>

                </div>

            </header>

            <MobileMenu

                open={menuOpen}

                onClose={() => setMenuOpen(false)}

            />

        </>

    );

}

export default Navbar;