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

    return (

        <div className="social-login">

            <div className="social-login__divider">

                <span>

                    O continúa con

                </span>

            </div>

            <button
                className="social-login__button"
            >

                <FaGoogle />

                <span>

                    Continuar con Google

                </span>

            </button>

            <button
                className="social-login__button"
            >

                <FaApple />

                <span>

                    Continuar con Apple

                </span>

            </button>

        </div>

    );

}

export default SocialLogin;