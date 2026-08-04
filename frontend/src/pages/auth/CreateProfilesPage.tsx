/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: CreateProfilesPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Create account profiles page.
 * ===============================================================
 */

import "../../styles/auth.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContainer from "../../components/auth/AuthContainer";

interface SelectedPlan {

    id: string;

    name: string;

    price: string;

    profiles: number;

    streams: number;

}

function CreateProfilesPage() {

    const navigate = useNavigate();

    const [profileName, setProfileName] = useState("");

    const [kids, setKids] = useState(false);

    const [pin, setPin] = useState(false);

    const storedPlan = localStorage.getItem("selectedPlan");

    const plan: SelectedPlan = storedPlan

        ? JSON.parse(storedPlan)

        : {

            id: "premium",

            name: "Premium",

            price: "",

            profiles: 4,

            streams: 3

        };

    function handleContinue() {

        if (!profileName.trim()) {

            alert("Ingresa el nombre del perfil.");

            return;

        }

        const profiles = [

            {

                id: Date.now(),

                name: profileName,

                kids,

                pin

            }

        ];

        localStorage.setItem(

            "profiles",

            JSON.stringify(profiles)

        );

        localStorage.setItem(

            "activeProfile",

            profileName

        );

        navigate("/profiles");

    }

    return (

        <AuthContainer

            step={4}

            title="Configura tus perfiles"

        >

            <section className="profiles-page">

                <header className="profiles-page__header">

                    <h1>

                        Crea los perfiles de tu cuenta

                    </h1>

                    <p>

                        Tu plan {plan.name} permite crear hasta {plan.profiles} perfiles.

                    </p>

                </header>

                <section className="profiles-grid">

                    <article className="profile-slot">

                        <div className="profile-slot__avatar">

                            👤

                        </div>

                        <input

                            type="text"

                            placeholder="Nombre del perfil"

                            value={profileName}

                            onChange={(e) => setProfileName(e.target.value)}

                        />

                        <label>

                            <input

                                type="checkbox"

                                checked={kids}

                                onChange={(e) =>

                                    setKids(e.target.checked)

                                }

                            />

                            Perfil infantil

                        </label>

                        <label>

                            <input

                                type="checkbox"

                                checked={pin}

                                onChange={(e) =>

                                    setPin(e.target.checked)

                                }

                            />

                            Proteger con PIN

                        </label>

                    </article>

                </section>

                <footer className="profiles-page__footer">

                    <button

                        type="button"

                        onClick={handleContinue}

                    >

                        Guardar perfil

                    </button>

                </footer>

            </section>

        </AuthContainer>

    );

}

export default CreateProfilesPage;