/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingPlans.tsx
 * Module: Frontend
 * ===============================================================
 */

import "../../styles/landing.css";

const plans = [

    {
        name: "Básico",
        price: "$7.99",
        profiles: "2 perfiles",
        quality: "HD",
        featured: false
    },

    {
        name: "Estándar",
        price: "$11.99",
        profiles: "3 perfiles",
        quality: "Full HD",
        featured: true
    },

    {
        name: "Premium",
        price: "$15.99",
        profiles: "4 perfiles",
        quality: "4K Ultra HD",
        featured: false
    }

];

function LandingPlans() {

    return (

        <section
            id="plans"
            className="landing-plans"
        >

            <h2>

                Elige tu plan

            </h2>

            <p>

                Empieza hoy mismo y disfruta del mejor entretenimiento.

            </p>

            <div className="landing-plans__grid">

                {

                    plans.map((plan) => (

                        <article
                            key={plan.name}
                            className={`landing-plan ${plan.featured ? "landing-plan--featured" : ""}`}
                        >

                            <h3>{plan.name}</h3>

                            <h4>{plan.price}<span>/mes</span></h4>

                            <ul>

                                <li>✔ {plan.profiles}</li>

                                <li>✔ Calidad {plan.quality}</li>

                                <li>✔ TV • Android • iPhone • PC</li>

                                <li>✔ Cancela cuando quieras</li>

                            </ul>

                            <button>

                                Elegir plan

                            </button>

                        </article>

                    ))

                }

            </div>

        </section>

    );

}

export default LandingPlans;