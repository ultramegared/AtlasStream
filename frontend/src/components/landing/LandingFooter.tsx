/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingFooter.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Landing page footer.
 * ===============================================================
 */

import {

    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaXTwitter,
    FaLinkedin,
    FaGithub

} from "react-icons/fa6";

function LandingFooter() {

    return (

        <footer className="landing-footer">

            <div className="landing-footer__top">

                <div className="landing-footer__brand">

                    <h2>

                        AtlasStream

                    </h2>

                    <p>

                        Premium Streaming Platform

                    </p>

                    <span>

                        Películas • Series • TV en Vivo • Deportes • Documentales

                    </span>

                </div>

                <div className="landing-footer__links">

                    <h3>

                        Plataforma

                    </h3>

                    <ul>

                        <li>Inicio</li>

                        <li>Películas</li>

                        <li>Series</li>

                        <li>TV en Vivo</li>

                        <li>Planes</li>

                    </ul>

                </div>

                <div className="landing-footer__links">

                    <h3>

                        Soporte

                    </h3>

                    <ul>

                        <li>Centro de ayuda</li>

                        <li>Contáctanos</li>

                        <li>Preguntas frecuentes</li>

                        <li>Estado del servicio</li>

                    </ul>

                </div>

                <div className="landing-footer__links">

                    <h3>

                        Legal

                    </h3>

                    <ul>

                        <li>Términos de uso</li>

                        <li>Privacidad</li>

                        <li>Cookies</li>

                        <li>Licencias</li>

                    </ul>

                </div>

            </div>

            <div className="landing-footer__social">

                <FaFacebook />

                <FaInstagram />

                <FaXTwitter />

                <FaYoutube />

                <FaLinkedin />

                <FaGithub />

            </div>

            <div className="landing-footer__bottom">

                <div>

                    🌎 Español

                </div>

                <div>

                    Version 1.0.0

                </div>

                <div>

                    © 2026 AtlasStream

                </div>

                <div>

                    Designed & Developed by ultramegared

                </div>

            </div>

        </footer>

    );

}

export default LandingFooter;