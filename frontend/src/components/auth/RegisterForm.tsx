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

import {

    FormEvent,

    useState

} from "react";

import {

    useNavigate

} from "react-router-dom";

import type {

    User

} from "../../types/User";

import SocialLogin from "./SocialLogin";

function RegisterForm() {

    const navigate = useNavigate();

    const [

        fullName,

        setFullName

    ] = useState("");

    const [

        username,

        setUsername

    ] = useState("");

    const [

        email,

        setEmail

    ] = useState("");

    const [

        password,

        setPassword

    ] = useState("");

    const [

        confirmPassword,

        setConfirmPassword

    ] = useState("");

    const [

        language,

        setLanguage

    ] = useState("English");
        const storedPlan = localStorage.getItem(

        "selectedPlan"

    );

    const selectedPlan = storedPlan

        ? JSON.parse(

            storedPlan

        )

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

        if (

            password !== confirmPassword

        ) {

            alert(

                "Passwords do not match."

            );

            return;

        }

        const storedUsers = localStorage.getItem(

            "users"

        );

        const users: User[] = storedUsers

            ? JSON.parse(

                storedUsers

            )

            : [];

        const emailExists = users.some(

            (

                user

            ) =>

                user.email.toLowerCase() ===

                email.trim().toLowerCase()

        );

        if (

            emailExists

        ) {

            alert(

                "This email is already registered."

            );

            return;

        }

        const usernameExists = users.some(

            (

                user

            ) =>

                user.username.toLowerCase() ===

                username.trim().toLowerCase()

        );

        if (

            usernameExists

        ) {

            alert(

                "This username is already in use."

            );

            return;

        }

        const currentUser: User = {

            id:

                crypto.randomUUID(),

            fullName:

                fullName.trim(),

            username:

                username.trim(),

            email:

                email.trim(),

            password,

            language,

            subscription: null,

            payment: null,

            profiles: [],

            createdAt:

                new Date()

                    .toISOString(),

            updatedAt:

                new Date()

                    .toISOString()

        };

        users.push(

            currentUser

        );

        localStorage.setItem(

            "users",

            JSON.stringify(

                users

            )

        );

        localStorage.setItem(

            "currentUser",

            JSON.stringify(

                currentUser

            )

        );

        navigate(

            "/subscription"

        );

    }

    return (

        <form

            className="register-form"

            onSubmit={handleSubmit}

        >
                    <input

                type="text"

                placeholder="Full Name"

                value={fullName}

                onChange={(event) =>

                    setFullName(

                        event.target.value

                    )

                }

                required

            />

            <input

                type="text"

                placeholder="Username"

                value={username}

                onChange={(event) =>

                    setUsername(

                        event.target.value

                    )

                }

                required

            />

            <input

                type="email"

                placeholder="Email Address"

                value={email}

                onChange={(event) =>

                    setEmail(

                        event.target.value

                    )

                }

                required

            />

            <input

                type="password"

                placeholder="Password"

                value={password}

                onChange={(event) =>

                    setPassword(

                        event.target.value

                    )

                }

                required

            />

            <input

                type="password"

                placeholder="Confirm Password"

                value={confirmPassword}

                onChange={(event) =>

                    setConfirmPassword(

                        event.target.value

                    )

                }

                required

            />

            <select

                value={language}

                onChange={(event) =>

                    setLanguage(

                        event.target.value

                    )

                }

            >

                <option value="English">

                    English

                </option>

                <option value="Español">

                    Español

                </option>

                <option value="Português">

                    Português

                </option>

                <option value="Français">

                    Français

                </option>

                <option value="Deutsch">

                    Deutsch

                </option>

                <option value="Italiano">

                    Italiano

                </option>

                <option value="日本語">

                    日本語

                </option>

                <option value="한국어">

                    한국어

                </option>

                <option value="中文">

                    中文

                </option>

            </select>

            <label

                className="register-form__checkbox"

            >

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