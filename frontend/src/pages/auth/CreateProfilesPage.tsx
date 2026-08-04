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

interface UserProfile {

    id: number;

    name: string;

    kids: boolean;

    pin: boolean;

}

function CreateProfilesPage() {

    const navigate = useNavigate();

    const storedPlan = localStorage.getItem(

        "selectedPlan"

    );

    const plan: SelectedPlan = storedPlan

        ? JSON.parse(storedPlan)

        : {

            id: "premium",

            name: "Premium",

            price: "",

            profiles: 4,

            streams: 3

        };

    const storedProfiles = localStorage.getItem(

        "profiles"

    );

    const [

        profiles,

        setProfiles

    ] = useState<UserProfile[]>(

        storedProfiles

            ? JSON.parse(storedProfiles)

            : []

    );

    const [

        profileName,

        setProfileName

    ] = useState("");

    const [

        kids,

        setKids

    ] = useState(false);

    const [

        pin,

        setPin

    ] = useState(false);

    function addProfile() {

        if (

            profileName.trim() === ""

        ) {

            alert(

                "Ingresa el nombre del perfil."

            );

            return;

        }

        if (

            profiles.length >= plan.profiles

        ) {

            alert(

                `Tu plan ${plan.name} solo permite ${plan.profiles} perfiles.`

            );

            return;

        }

        const exists = profiles.some(

            profile =>

                profile.name.toLowerCase() ===

                profileName.toLowerCase()

        );

        if (

            exists

        ) {

            alert(

                "Ya existe un perfil con ese nombre."

            );

            return;

        }

        const updatedProfiles = [

            ...profiles,

            {

                id: Date.now(),

                name: profileName,

                kids,

                pin

            }

        ];

        setProfiles(

            updatedProfiles

        );

        localStorage.setItem(

            "profiles",

            JSON.stringify(

                updatedProfiles

            )

        );

        setProfileName("");

        setKids(false);

        setPin(false);

    }

    function removeProfile(

        id: number

    ) {

        const updatedProfiles =

            profiles.filter(

                profile =>

                    profile.id !== id

            );

        setProfiles(

            updatedProfiles

        );

        localStorage.setItem(

            "profiles",

            JSON.stringify(

                updatedProfiles

            )

        );

    }

    function handleContinue() {

        if (

            profiles.length === 0

        ) {

            alert(

                "Debes crear al menos un perfil."

            );

            return;

        }

        localStorage.setItem(

            "activeProfile",

            profiles[0].name

        );

        navigate(

            "/profiles"

        );

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

                            onChange={(event) =>

                                setProfileName(event.target.value)

                            }

                        />

                        <label>

                            <input

                                type="checkbox"

                                checked={kids}

                                onChange={(event) =>

                                    setKids(event.target.checked)

                                }

                            />

                            Perfil infantil

                        </label>

                        <label>

                            <input

                                type="checkbox"

                                checked={pin}

                                onChange={(event) =>

                                    setPin(event.target.checked)

                                }

                            />

                            Proteger con PIN

                        </label>

                        <button

                            type="button"

                            className="register-form__button"

                            onClick={addProfile}

                        >

                            Agregar perfil

                        </button>

                    </article>

                    {

                        profiles.map(

                            (profile) => (

                                <article

                                    key={profile.id}

                                    className="profile-slot"

                                >

                                    <div className="profile-slot__avatar">

                                        {

                                            profile.kids

                                                ? "🧸"

                                                : profile.name.charAt(0).toUpperCase()

                                        }

                                    </div>

                                    <h3>

                                        {profile.name}

                                    </h3>

                                    <p>

                                        {

                                            profile.kids

                                                ? "Perfil infantil"

                                                : "Perfil estándar"

                                        }

                                    </p>

                                    {

                                        profile.pin && (

                                            <small>

                                                🔒 Protegido con PIN

                                            </small>

                                        )

                                    }

                                    <button

                                        type="button"

                                        onClick={() =>

                                            removeProfile(profile.id)

                                        }

                                    >

                                        Eliminar

                                    </button>

                                </article>

                            )

                        )

                    }

                </section>

                <footer className="profiles-page__footer">

                    <button

                        type="button"

                        onClick={handleContinue}

                    >

                        Continuar

                    </button>

                </footer>

            </section>

        </AuthContainer>

    );

}

export default CreateProfilesPage;