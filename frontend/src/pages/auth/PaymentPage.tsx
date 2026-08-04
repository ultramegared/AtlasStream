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

import AuthContainer from "../../components/auth/AuthContainer";

function PaymentPage() {

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

                            Premium

                        </strong>

                    </div>

                    <div className="payment-summary__card">

                        <span>

                            Perfiles

                        </span>

                        <strong>

                            4

                        </strong>

                    </div>

                    <div className="payment-summary__card">

                        <span>

                            Reproducciones

                        </span>

                        <strong>

                            3 simultáneas

                        </strong>

                    </div>

                    <div className="payment-summary__card">

                        <span>

                            Total mensual

                        </span>

                        <strong>

                            S/. XX.XX

                        </strong>

                    </div>

                </section>

                <section className="payment-methods">

                    <button>

                        💳 Tarjeta de crédito o débito

                    </button>

                    <button>

                        G Google Pay

                    </button>

                    <button>

                         Apple Pay

                    </button>

                    <button>

                        PayPal

                    </button>

                </section>

                <footer className="payment-footer">

                    <button className="payment-footer__button">

                        Continuar

                    </button>

                </footer>

            </section>

        </AuthContainer>

    );

}

export default PaymentPage;