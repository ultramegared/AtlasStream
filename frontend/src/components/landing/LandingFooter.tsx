/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingFooter.tsx
 * Module: Frontend
 * ===============================================================
 */

import {

    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaXTwitter

} from "react-icons/fa6";

import "../../styles/landing.css";

function LandingFooter() {

    return (

        <footer className="landing-footer">

            <div className="landing-footer__container">

                <div>

                    <h2>

                        Atlas<span>Stream</span>

                    </h2>

                    <p>

                        La nueva generación del entretenimiento.

                    </p>

                </div>

                <div>

                    <h3>

                        Plataforma

                    </h3>

                    <a href="#home">

                        Inicio

                    </a>

                    <a href="#plans">

                        Planes

                    </a>

                    <a href="#faq">

                        FAQ

                    </a>

                </div>

                <div>

                    <h3>

                        Soporte

                    </h3>

                    <a href="#">

                        Contacto

                    </a>

                    <a href="#">

                        Privacidad

                    </a>

                    <a href="#">

                        Términos

                    </a>

                </div>

                <div>

                    <h3>

                        Síguenos

                    </h3>

                    <div className="landing-footer__social">

                        <FaFacebook />

                        <FaInstagram />

                        <FaXTwitter />

                        <FaYoutube />

                    </div>

                </div>

            </div>

            <div className="landing-footer__bottom">

                ultramegared © 2026 AtlasStream. Todos los derechos reservados.

            </div>

        </footer>

    );

}

export default LandingFooter;