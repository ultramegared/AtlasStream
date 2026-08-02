/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: Navbar.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Premium navigation bar.
 * ===============================================================
 */

import {
    FaSearch,
    FaBell,
    FaChevronDown
} from "react-icons/fa";

import Logo from "../common/Logo";

function Navbar() {

    return (

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

                <button className="navbar__icon">

                    <FaChevronDown />

                </button>

            </div>

        </header>

    );

}

export default Navbar;