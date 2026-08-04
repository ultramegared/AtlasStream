/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: SubscriptionPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Subscription plans selection page.
 * ===============================================================
 */

import "../../styles/auth.css";

import { useNavigate } from "react-router-dom";

import AuthContainer from "../../components/auth/AuthContainer";

interface SelectedPlan {

    id: string;

    name: string;

    price: string;

    profiles: number;

    streams: number;

}

function SubscriptionPage() {

    const navigate = useNavigate();

    function selectPlan(planId: string) {

        const plans: Record<string, SelectedPlan> = {

            basic: {

                id: "basic",

                name: "Basic",

                price: "S/. XX.XX",

                profiles: 2,

                streams: 1

            },

            platino: {

                id: "platino",

                name: "Platino",

                price: "S/. XX.XX",

                profiles: 3,

                streams: 2

            },

            premium: {

                id: "premium",

                name: "Premium",

                price: "S/. XX.XX",

                profiles: 4,

                streams: 3

            }

        };

        const selectedPlan = plans[planId];

        localStorage.setItem(

            "selectedPlan",

            JSON.stringify(selectedPlan)

        );

        navigate("/payment");

    }

    return (

        <AuthContainer

            step={2}

            title="Selecciona tu plan"

        >

            <section className="subscription-page">

                <header className="subscription-page__header">

                    <h1>

                        Elige el plan perfecto para ti

                    </h1>

                    <p>

                        Cambia de plan cuando quieras.

                    </p>

                </header>

                <section className="subscription-grid">

                    <article className="plan-card plan-card--basic">

                        <span className="plan-card__badge">

                            BASIC

                        </span>

                        <h2>

                            Basic

                        </h2>

                        <h3>

                            S/. XX.XX

                            <small>

                                / mes

                            </small>

                        </h3>

                        <ul>

                            <li>✓ 2 perfiles</li>

                            <li>✓ 1 reproducción simultánea</li>

                            <li>✓ Full HD</li>

                        </ul>

                        <button

                            type="button"

                            onClick={() => selectPlan("basic")}

                        >

                            Elegir este plan

                        </button>

                    </article>

                    <article className="plan-card plan-card--platino">

                        <span className="plan-card__badge">

                            MÁS POPULAR

                        </span>

                        <h2>

                            Platino

                        </h2>

                        <h3>

                            S/. XX.XX

                            <small>

                                / mes

                            </small>

                        </h3>

                        <ul>

                            <li>✓ 3 perfiles</li>

                            <li>✓ 2 reproducciones simultáneas</li>

                            <li>✓ 4K HDR</li>

                        </ul>

                        <button

                            type="button"

                            onClick={() => selectPlan("platino")}

                        >

                            Elegir este plan

                        </button>

                    </article>

                    <article className="plan-card plan-card--premium">

                        <span className="plan-card__badge">

                            PREMIUM

                        </span>

                        <h2>

                            Premium

                        </h2>

                        <h3>

                            S/. XX.XX

                            <small>

                                / mes

                            </small>

                        </h3>

                        <ul>

                            <li>✓ 4 perfiles</li>

                            <li>✓ 3 reproducciones simultáneas</li>

                            <li>✓ 4K HDR</li>

                            <li>✓ Dolby Vision</li>

                            <li>✓ Dolby Atmos</li>

                        </ul>

                        <button

                            type="button"

                            onClick={() => selectPlan("premium")}

                        >

                            Elegir este plan

                        </button>

                    </article>

                </section>

            </section>

        </AuthContainer>

    );

}

export default SubscriptionPage;