/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: PaymentPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Subscription payment page.
 * ===============================================================
 */

import "../../styles/auth.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContainer from "../../components/auth/AuthContainer";

interface SelectedPlan {

    id: string;

    name: string;

    price: string;

    profiles: number;

    streams: number;

}

function PaymentPage() {

    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("");

    const storedPlan = localStorage.getItem("selectedPlan");

    const plan: SelectedPlan = storedPlan

        ? JSON.parse(storedPlan)

        : {

            id: "premium",

            name: "Premium",

            price: "S/. XX.XX",

            profiles: 4,

            streams: 3

        };

    function handleContinue() {

        if (!paymentMethod) {

            alert("Selecciona un método de pago.");

            return;

        }

        localStorage.setItem(

            "paymentMethod",

            paymentMethod

        );

        navigate("/profiles/create");

    }

    return (

        <AuthContainer

            step={3}

            title="Método de pago"

        >

            <section className="payment-page">

                <header className="payment-page__header">

                    <h1>

                        Finaliza tu suscripción

                    </h1>

                    <p>

                        Selecciona el método de pago que prefieras.

                    </p>

                </header>

                <section className="payment-summary">

                    <h2>

                        Resumen

                    </h2>

                    <div className="payment-summary__card">

                        <span>

                            Plan

                        </span>

                        <strong>

                            {plan.name}

                        </strong>

                    </div>

                    <div className="payment-summary__card">

                        <span>

                            Perfiles

                        </span>

                        <strong>

                            {plan.profiles}

                        </strong>

                    </div>

                    <div className="payment-summary__card">

                        <span>

                            Reproducciones

                        </span>

                        <strong>

                            {plan.streams} simultánea{plan.streams > 1 ? "s" : ""}

                        </strong>

                    </div>

                    <div className="payment-summary__card">

                        <span>

                            Total mensual

                        </span>

                        <strong>

                            {plan.price}

                        </strong>

                    </div>

                </section>

                <section className="payment-methods">

                    <button

                        type="button"

                        onClick={() => setPaymentMethod("Tarjeta")}

                    >

                        💳 Tarjeta de crédito o débito

                    </button>

                    <button

                        type="button"

                        onClick={() => setPaymentMethod("Google Pay")}

                    >

                        Google Pay

                    </button>

                    <button

                        type="button"

                        onClick={() => setPaymentMethod("Apple Pay")}

                    >

                        Apple Pay

                    </button>

                    <button

                        type="button"

                        onClick={() => setPaymentMethod("PayPal")}

                    >

                        PayPal

                    </button>

                </section>

                <footer className="payment-footer">

                    <button

                        type="button"

                        className="payment-footer__button"

                        onClick={handleContinue}

                    >

                        Continuar

                    </button>

                </footer>

            </section>

        </AuthContainer>

    );

}

export default PaymentPage;