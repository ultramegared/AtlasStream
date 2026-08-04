/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingHero.tsx
 * Module: Frontend
 * Language: TypeScript React
 * ===============================================================
 */

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

                        Películas, series, TV en vivo, deportes y
                        contenido exclusivo con una experiencia
                        moderna, rápida y disponible en cualquier
                        dispositivo.

                    </p>

                    <div className="landing-hero__buttons">

                        <button
                            className="landing-btn landing-btn--primary"
                        >

                            Crear cuenta

                        </button>

                        <button
                            className="landing-btn landing-btn--secondary"
                        >

                            Iniciar sesión

                        </button>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default LandingHero;