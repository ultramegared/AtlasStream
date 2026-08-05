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

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContainer from "../../components/auth/AuthContainer";

interface SelectedPlan {
    id: string;
    name: string;
    price: string;
    profiles: number;
    streams: number;
}

const PLANS: SelectedPlan[] = [
    {
        id: "basic",
        name: "Basic",
        price: "S/. XX.XX",
        profiles: 2,
        streams: 1
    },
    {
        id: "platino",
        name: "Platino",
        price: "S/. XX.XX",
        profiles: 3,
        streams: 2
    },
    {
        id: "premium",
        name: "Premium",
        price: "S/. XX.XX",
        profiles: 4,
        streams: 3
    }
];

function SubscriptionPage() {

    const navigate = useNavigate();

    const [selectedPlan, setSelectedPlan] =
        useState<SelectedPlan | null>(null);

    useEffect(() => {

        const storedPlan = localStorage.getItem("selectedPlan");

        if (storedPlan) {

            setSelectedPlan(JSON.parse(storedPlan));

        }

    }, []);

    function selectPlan(planId: string) {

        const plan = PLANS.find(
            (item) => item.id === planId
        );

        if (!plan) {

            return;

        }

        setSelectedPlan(plan);

        localStorage.setItem(
            "selectedPlan",
            JSON.stringify(plan)
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

    {PLANS.map((plan) => (

        <article
            key={plan.id}
            className={`plan-card plan-card--${plan.id}${
                selectedPlan?.id === plan.id
                    ? " plan-card--selected"
                    : ""
            }`}
        >

            <span className="plan-card__badge">

                {plan.id === "platino"
                    ? "MÁS POPULAR"
                    : plan.name.toUpperCase()}

            </span>

            <h2>

                {plan.name}

            </h2>

            <h3>

                {plan.price}

                <small>

                    / mes

                </small>

            </h3>

            <ul>

                <li>

                    ✓ {plan.profiles} perfiles

                </li>

                <li>

                    ✓ {plan.streams} reproducciones simultáneas

                </li>

                <li>

                    ✓ Full HD

                </li>

                {(plan.id === "platino" ||
                    plan.id === "premium") && (

                    <li>

                        ✓ 4K HDR

                    </li>

                )}

                {plan.id === "premium" && (

                    <>
                        <li>

                            ✓ Dolby Vision

                        </li>

                        <li>

                            ✓ Dolby Atmos

                        </li>
                    </>

                )}

            </ul>

            <button
                type="button"
                onClick={() => selectPlan(plan.id)}
            >

                {selectedPlan?.id === plan.id
                    ? "Plan seleccionado"
                    : "Elegir este plan"}

            </button>

        </article>

    ))}

</section>

        </AuthContainer>

    );

}

export default SubscriptionPage;