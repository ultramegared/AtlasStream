/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingFAQ.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Frequently asked questions section.
 * ===============================================================
 */

function LandingFAQ() {

    return (

        <section className="landing-faq">

            <div className="landing-section__header">

                <h2>

                    Preguntas frecuentes

                </h2>

                <p>

                    Resolvemos las dudas más comunes antes de que empieces.

                </p>

            </div>

            <div className="landing-faq__list">

                <article className="faq-card">

                    <h3>

                        ¿Puedo cancelar mi suscripción cuando quiera?

                    </h3>

                    <p>

                        Sí. Puedes cancelar o cambiar de plan en cualquier momento desde tu cuenta.

                    </p>

                </article>

                <article className="faq-card">

                    <h3>

                        ¿Cuántos perfiles puedo crear?

                    </h3>

                    <p>

                        Basic permite crear 2 perfiles, Platino 3 perfiles y Premium hasta 4 perfiles.

                    </p>

                </article>

                <article className="faq-card">

                    <h3>

                        ¿En qué dispositivos funciona AtlasStream?

                    </h3>

                    <p>

                        AtlasStream estará disponible para Web, Windows, macOS, Android, iPhone y iPad, Android TV, Apple TV, Samsung Smart TV, LG Smart TV, Fire TV y futuras versiones para consolas como PlayStation y Xbox.

                    </p>

                </article>

                <article className="faq-card">

                    <h3>

                        ¿AtlasStream estará disponible en varios idiomas?

                    </h3>

                    <p>

                        Sí. Toda la plataforma será multilenguaje, incluyendo la interfaz, los subtítulos, el audio compatible y la configuración del perfil de cada usuario.

                    </p>

                </article>

                <article className="faq-card">

                    <h3>

                        ¿Qué métodos de pago aceptan?

                    </h3>

                    <p>

                        Tarjetas de crédito y débito, Google Pay, Apple Pay y PayPal. En futuras versiones se añadirán más métodos de pago según cada país.

                    </p>

                </article>

            </div>

        </section>

    );

}

export default LandingFAQ;