/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingFeatures.tsx
 * Module: Frontend
 * ===============================================================
 */

import {

    FaFilm,
    FaTv,
    FaMobileAlt,
    FaGlobe

} from "react-icons/fa";

import "../../styles/landing.css";

function LandingFeatures() {

    return (

        <section
            className="landing-features"
        >

            <h2>

                ¿Por qué elegir AtlasStream?

            </h2>

            <p>

                Una plataforma moderna diseñada para disfrutar del mejor entretenimiento desde cualquier lugar.

            </p>

            <div className="landing-features__grid">

                <article className="landing-feature">

                    <FaFilm className="landing-feature__icon"/>

                    <h3>

                        Miles de películas

                    </h3>

                    <p>

                        Estrenos, clásicos y contenido exclusivo.

                    </p>

                </article>

                <article className="landing-feature">

                    <FaTv className="landing-feature__icon"/>

                    <h3>

                        TV en vivo

                    </h3>

                    <p>

                        Canales nacionales e internacionales.

                    </p>

                </article>

                <article className="landing-feature">

                    <FaMobileAlt className="landing-feature__icon"/>

                    <h3>

                        Todos tus dispositivos

                    </h3>

                    <p>

                        Android, iPhone, Smart TV, PC y Tablet.

                    </p>

                </article>

                <article className="landing-feature">

                    <FaGlobe className="landing-feature__icon"/>

                    <h3>

                        Disponible donde estés

                    </h3>

                    <p>

                        Accede a tu contenido desde cualquier parte.

                    </p>

                </article>

            </div>

        </section>

    );

}

export default LandingFeatures;