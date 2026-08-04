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

    const storedPlan = localStorage.getItem(
        "selectedPlan"
    );

    const selectedPlan = storedPlan
        ? JSON.parse(storedPlan)
        : {

            id: "standard",

            name: "Standard",

            price: "11.99",

            profiles: 3,

            quality: "Full HD"

        };

    function handleSubmit(
        event: FormEvent<HTMLFormElement>
    ) {

        event.preventDefault();

        navigate("/subscription");

    }

    return (

        <form
            className="register-form"
            onSubmit={handleSubmit}
        >

            <h2>

                Create your account

            </h2>

            <p>

                Start enjoying AtlasStream today.

            </p>

            <div className="register-form__plan">

                <span>

                    Selected Plan

                </span>

                <h3>

                    {selectedPlan.name}

                </h3>

                <p>

                    ${selectedPlan.price}/month

                </p>

                <small>

                    {selectedPlan.profiles} Profiles • {selectedPlan.quality}

                </small>

            </div>

            <input
                type="text"
                placeholder="Full Name"
                required
            />

            <input
                type="text"
                placeholder="Username"
                required
            />

            <input
                type="email"
                placeholder="Email Address"
                required
            />

            <input
                type="password"
                placeholder="Password"
                required
            />

            <input
                type="password"
                placeholder="Confirm Password"
                required
            />

            <select
                defaultValue="English"
            >

                <option>English</option>
                <option>Español</option>
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

                    I accept the Terms and Conditions.

                </span>

            </label>

            <button
                type="submit"
                className="register-form__button"
            >

                Continue

            </button>

            <SocialLogin />

        </form>

    );

}

export default RegisterForm;