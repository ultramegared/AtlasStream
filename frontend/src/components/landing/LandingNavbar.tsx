/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingNavbar.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Public navigation bar.
 * ===============================================================
 */

import { Link } from "react-router-dom";

import "../../styles/landing.css";

function LandingNavbar() {

    return (

        <header className="landing-navbar">

            <div className="landing-navbar__container">

                <div className="landing-navbar__logo">

                    <span className="landing-navbar__atlas">

                        Atlas

                    </span>

                    <span className="landing-navbar__stream">

                        Stream

                    </span>

                </div>

                <nav className="landing-navbar__menu">

                    <a href="#home">

                        Inicio

                    </a>

                    <a href="#movies">

                        Películas

                    </a>

                    <a href="#plans">

                        Planes

                    </a>

                    <a href="#faq">

                        FAQ

                    </a>

                </nav>

                <div className="landing-navbar__actions">

                    <Link
                        to="/login"
                        className="landing-navbar__login"
                    >

                        Iniciar sesión

                    </Link>

                    <Link
                        to="/register"
                        className="landing-navbar__register"
                    >

                        Crear cuenta

                    </Link>

                </div>

            </div>

        </header>

    );

}

export default LandingNavbar;