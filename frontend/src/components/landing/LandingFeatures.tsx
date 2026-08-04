/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingFeatures.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Landing features section.
 * ===============================================================
 */

import {

    FaFilm,
    FaTv,
    FaGlobe,
    FaUsers

} from "react-icons/fa";

function LandingFeatures() {

    return (

        <section className="landing-features">

            <div className="landing-section__header">

                <h2>

                    ¿Por qué elegir AtlasStream?

                </h2>

                <p>

                    Una plataforma moderna diseñada para toda la familia.

                </p>

            </div>

            <div className="landing-features__grid">

                <article className="feature-card">

                    <FaFilm className="feature-card__icon" />

                    <h3>

                        Películas y Series

                    </h3>

                    <p>

                        Miles de títulos disponibles en cualquier momento.

                    </p>

                </article>

                <article className="feature-card">

                    <FaTv className="feature-card__icon" />

                    <h3>

                        TV en Vivo

                    </h3>

                    <p>

                        Disfruta canales en vivo desde cualquier dispositivo.

                    </p>

                </article>

                <article className="feature-card">

                    <FaGlobe className="feature-card__icon" />

                    <h3>

                        Multi idioma

                    </h3>

                    <p>

                        Disponible en múltiples idiomas para todo el mundo.

                    </p>

                </article>

                <article className="feature-card">

                    <FaUsers className="feature-card__icon" />

                    <h3>

                        Perfiles Familiares

                    </h3>

                    <p>

                        Cada integrante tendrá su propio historial y recomendaciones.

                    </p>

                </article>

            </div>

        </section>

    );

}

export default LandingFeatures;