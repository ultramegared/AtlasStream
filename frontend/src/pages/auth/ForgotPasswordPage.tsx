/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: ForgotPasswordPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Forgot password page.
 * ===============================================================
 */

import "../../styles/auth.css";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthLayout from "../../components/auth/AuthLayout";

function ForgotPasswordPage() {

    return (

        <>

            <AuthHeader />

            <AuthLayout>

                <form className="register-form">

                    <h2>

                        Recuperar contraseña

                    </h2>

                    <p>

                        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.

                    </p>

                    <input

                        type="email"

                        placeholder="Correo electrónico"

                    />

                    <button

                        type="submit"

                        className="register-form__button"

                    >

                        Enviar enlace

                    </button>

                </form>

            </AuthLayout>

        </>

    );

}

export default ForgotPasswordPage;