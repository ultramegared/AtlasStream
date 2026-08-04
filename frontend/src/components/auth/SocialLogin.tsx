/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: SocialLogin.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Social authentication buttons.
 * ===============================================================
 */

import {

    FaGoogle,
    FaApple

} from "react-icons/fa";

function SocialLogin() {

    function handleProvider(provider: string) {

        alert(

            `${provider} estará disponible próximamente.`

        );

    }

    return (

        <section className="social-login">

            <div className="social-login__divider">

                <span>

                    O continúa con

                </span>

            </div>

            <button

                type="button"

                className="social-login__button social-login__button--google"

                onClick={() => handleProvider("Google")}

            >

                <FaGoogle />

                <span>

                    Continuar con Google

                </span>

            </button>

            <button

                type="button"

                className="social-login__button social-login__button--apple"

                onClick={() => handleProvider("Apple")}

            >

                <FaApple />

                <span>

                    Continuar con Apple

                </span>

            </button>

        </section>

    );

}

export default SocialLogin;