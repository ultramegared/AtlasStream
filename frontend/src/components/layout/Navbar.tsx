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

function Navbar() {

    return (

        <nav className="navbar">

            <div className="navbar__logo">

                AtlasStream

            </div>

            <ul className="navbar__menu">

                <li>Home</li>

                <li>Movies</li>

                <li>Series</li>

                <li>TV Live</li>

                <li>My List</li>

            </ul>

            <div className="navbar__actions">

                🔍

                🔔

                👤

            </div>

        </nav>

    );

}

export default Navbar;