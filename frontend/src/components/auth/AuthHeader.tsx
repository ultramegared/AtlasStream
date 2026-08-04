/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: AuthHeader.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Authentication pages header.
 * ===============================================================
 */

import { Link } from "react-router-dom";

function AuthHeader() {

    return (

        <header className="auth-header">

            <Link
                to="/"
                className="auth-header__logo"
            >

                <span>

                    Atlas

                </span>

                <span>

                    Stream

                </span>

            </Link>

            <Link
                to="/login"
                className="auth-header__login"
            >

                Iniciar sesión

            </Link>

        </header>

    );

}

export default AuthHeader;