/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingHero.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Public landing hero section.
 * ===============================================================
 */

import { Link } from "react-router-dom";

import "../../styles/landing.css";

function LandingHero() {

    return (

        <section
            id="home"
            className="landing-hero"
        >

            <div className="landing-hero__overlay">

                <div className="landing-hero__content">

                    <span className="landing-hero__badge">

                        Premium Streaming Platform

                    </span>

                    <h1>

                        Todo el entretenimiento
                        <br />
                        en un solo lugar.

                    </h1>

                    <p>

                        Películas, series, TV en vivo, deportes y contenido exclusivo
                        con una experiencia moderna, rápida y disponible en cualquier
                        dispositivo.

                    </p>

                    <div className="landing-hero__buttons">

                        <Link
                            to="/register"
                            className="landing-btn landing-btn--primary"
                        >

                            Crear cuenta

                        </Link>

                        <Link
                            to="/login"
                            className="landing-btn landing-btn--secondary"
                        >

                            Iniciar sesión

                        </Link>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default LandingHero;