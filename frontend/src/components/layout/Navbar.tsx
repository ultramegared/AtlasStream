/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: Navbar.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Main navigation bar.
 * ===============================================================
 */

import Logo from "../common/Logo";

function Navbar() {

    return (

        <header className="navbar">

            <div className="navbar__left">

                <Logo />

                <nav>

                    <ul className="navbar__menu">

                        <li>Home</li>

                        <li>Movies</li>

                        <li>Series</li>

                        <li>TV Live</li>

                        <li>My List</li>

                    </ul>

                </nav>

            </div>

            <div className="navbar__right">

                <button className="navbar__icon">

                    Search

                </button>

                <button className="navbar__icon">

                    Notifications

                </button>

                <button className="navbar__profile">

                    U

                </button>

            </div>

        </header>

    );

}

export default Navbar;  