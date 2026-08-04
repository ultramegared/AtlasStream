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

function AuthHeader() {

    return (

        <header className="auth-header">

            <div className="auth-header__logo">

                <span>

                    Atlas

                </span>

                <span>

                    Stream

                </span>

            </div>

            <button
                className="auth-header__login"
            >

                Iniciar sesión

            </button>

        </header>

    );

}

export default AuthHeader;