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

                    <a href="#series">

                        Series

                    </a>

                    <a href="#plans">

                        Planes

                    </a>

                    <a href="#faq">

                        FAQ

                    </a>

                </nav>

                <div className="landing-navbar__actions">

                    <button
                        className="landing-navbar__login"
                    >

                        Iniciar sesión

                    </button>

                    <button
                        className="landing-navbar__register"
                    >

                        Crear cuenta

                    </button>

                </div>

            </div>

        </header>

    );

}

export default LandingNavbar;