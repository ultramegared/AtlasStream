/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingPlans.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Landing subscription plans section.
 * ===============================================================
 */

import "../../styles/landing.css";

import { useNavigate } from "react-router-dom";

const plans = [

    {

        id:"basic",

        name:"Básico",

        price:"7.99",

        profiles:2,

        quality:"HD",

        featured:false

    },

    {

        id:"standard",

        name:"Estándar",

        price:"11.99",

        profiles:3,

        quality:"Full HD",

        featured:true

    },

    {

        id:"premium",

        name:"Premium",

        price:"15.99",

        profiles:4,

        quality:"4K Ultra HD",

        featured:false

    }

];

function LandingPlans(){

    const navigate = useNavigate();

    function selectPlan(plan:any){

        localStorage.setItem(

            "selectedPlan",

            JSON.stringify(plan)

        );

        navigate("/register");

    }

    return(

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

            <div

                className="landing-plans__grid"

            >

                {

                    plans.map(

                        (plan)=>(

                            <article

                                key={plan.id}

                                className={`landing-plan ${plan.featured ? "landing-plan--featured" : ""}`}

                            >

                                <h3>

                                    {plan.name}

                                </h3>

                                <h4>

                                    ${plan.price}

                                    <span>

                                        /mes

                                    </span>

                                </h4>

                                <ul>

                                    <li>

                                        ✔ {plan.profiles} perfiles

                                    </li>

                                    <li>

                                        ✔ Calidad {plan.quality}

                                    </li>

                                    <li>

                                        ✔ TV • Android • iPhone • PC

                                    </li>

                                    <li>

                                        ✔ Cancela cuando quieras

                                    </li>

                                </ul>

                                <button

                                    type="button"

                                    onClick={() =>

                                        selectPlan(plan)

                                    }

                                >

                                    Elegir plan

                                </button>

                            </article>

                        )

                    )

                }

            </div>

        </section>

    );

}

export default LandingPlans;