/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingFAQ.tsx
 * Module: Frontend
 * ===============================================================
 */

import "../../styles/landing.css";

const questions = [

    {
        question: "¿Puedo cancelar cuando quiera?",
        answer: "Sí. Puedes cancelar tu suscripción en cualquier momento."
    },

    {
        question: "¿Cuántos perfiles puedo crear?",
        answer: "2, 3 o 4 perfiles según el plan que elijas."
    },

    {
        question: "¿En qué dispositivos funciona?",
        answer: "PC • Android • iPhone • Smart TV • Android TV."
    },

    {
        question: "¿Tiene varios idiomas?",
        answer: "Sí. AtlasStream ofrece contenido en varios idiomas y subtítulos."
    }

];

function LandingFAQ() {

    return (

        <section
            id="faq"
            className="landing-faq"
        >

            <h2>

                Preguntas frecuentes

            </h2>

            <div className="landing-faq__list">

                {

                    questions.map((item) => (

                        <article
                            key={item.question}
                            className="landing-faq__item"
                        >

                            <h3>

                                {item.question}

                            </h3>

                            <p>

                                {item.answer}

                            </p>

                        </article>

                    ))

                }

            </div>

        </section>

    );

}

export default LandingFAQ;