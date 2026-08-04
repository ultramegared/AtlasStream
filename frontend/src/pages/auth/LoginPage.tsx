/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LoginPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * User login page.
 * ===============================================================
 */

import "../../styles/auth.css";

import AuthHeader from "../../components/auth/AuthHeader";
import AuthLayout from "../../components/auth/AuthLayout";

function LoginPage() {

    return (

        <>

            <AuthHeader />

            <AuthLayout>

                <form className="register-form">

                    <h2>

                        Iniciar sesión

                    </h2>

                    <p>

                        Bienvenido nuevamente a AtlasStream.

                    </p>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                    />

                    <button
                        type="submit"
                        className="register-form__button"
                    >

                        Ingresar

                    </button>

                </form>

            </AuthLayout>

        </>

    );

}

export default LoginPage;