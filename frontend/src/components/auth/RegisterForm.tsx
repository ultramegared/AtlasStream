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

import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import SocialLogin from "./SocialLogin";

function RegisterForm() {

    const navigate = useNavigate();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {

        event.preventDefault();

        // En el futuro aquí irá la validación
        // y la llamada al backend.

        navigate("/subscription");

    }

    return (

        <form
            className="register-form"
            onSubmit={handleSubmit}
        >

            <h2>

                Crear tu cuenta

            </h2>

            <p>

                Empieza a disfrutar AtlasStream.

            </p>

            <input
                type="text"
                placeholder="Nombre completo"
                required
            />

            <input
                type="text"
                placeholder="Nombre de usuario"
                required
            />

            <input
                type="email"
                placeholder="Correo electrónico"
                required
            />

            <input
                type="password"
                placeholder="Contraseña"
                required
            />

            <input
                type="password"
                placeholder="Confirmar contraseña"
                required
            />

            <select
                defaultValue="Español"
            >

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

                <input
                    type="checkbox"
                    required
                />

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