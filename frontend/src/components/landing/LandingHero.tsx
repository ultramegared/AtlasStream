/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingHero.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Landing hero section.
 * ===============================================================
 */

function LandingHero() {

    return (

        <section className="landing-hero">

            <div className="landing-hero__overlay" />

            <div className="landing-hero__content">

                <span className="landing-hero__badge">

                    Premium Streaming Platform

                </span>

                <h1>

                    Todo el entretenimiento en un solo lugar.

                </h1>

                <p>

                    Películas, series, TV en vivo, deportes y contenido
                    exclusivo con una experiencia moderna, rápida y
                    disponible en cualquier dispositivo.

                </p>

                <div className="landing-hero__buttons">

                    <button className="btn-primary">

                        Crear cuenta

                    </button>

                    <button className="btn-secondary">

                        Iniciar sesión

                    </button>

                </div>

            </div>

        </section>

    );

}

export default LandingHero;