/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: RegisterForm.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * User registration form.
 * ===============================================================
 */

import SocialLogin from "./SocialLogin";

function RegisterForm() {

    return (

        <form className="register-form">

            <h2>

                Crear tu cuenta

            </h2>

            <p>

                Empieza a disfrutar AtlasStream.

            </p>

            <input
                type="text"
                placeholder="Nombre completo"
            />

            <input
                type="text"
                placeholder="Nombre de usuario"
            />

            <input
                type="email"
                placeholder="Correo electrónico"
            />

            <input
                type="password"
                placeholder="Contraseña"
            />

            <input
                type="password"
                placeholder="Confirmar contraseña"
            />

            <select>

                <option>Español</option>

                <option>English</option>

                <option>Português</option>

                <option>Français</option>

                <option>Deutsch</option>

                <option>Italiano</option>

                <option>日本語</option>

                <option>한국어</option>

                <option>中文</option>

            </select>

            <label className="register-form__checkbox">

                <input type="checkbox" />

                <span>

                    Acepto los términos y condiciones.

                </span>

            </label>

            <button
                type="submit"
                className="register-form__button"
            >

                Continuar

            </button>

            <SocialLogin />

        </form>

    );

}

export default RegisterForm;