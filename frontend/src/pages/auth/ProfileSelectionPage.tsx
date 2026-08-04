/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: ProfileSelectionPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Profile selection page.
 * ===============================================================
 */

import "../../styles/auth.css";

import { useNavigate } from "react-router-dom";

interface UserProfile {

    id: number;

    name: string;

    kids: boolean;

    pin: boolean;

}

function ProfileSelectionPage() {

    const navigate = useNavigate();

    const storedProfiles = localStorage.getItem("profiles");

    const profiles: UserProfile[] = storedProfiles

        ? JSON.parse(storedProfiles)

        : [];

    function openHome(profile: UserProfile) {

        localStorage.setItem(

            "activeProfile",

            profile.name

        );

        navigate("/home");

    }

    return (

        <main className="profile-selection">

            <section className="profile-selection__header">

                <h1>

                    ¿Quién está viendo AtlasStream?

                </h1>

                <p>

                    Selecciona un perfil para continuar.

                </p>

            </section>

            <section className="profile-selection__grid">

                {

                    profiles.length > 0 ? (

                        profiles.map((profile) => (

                            <article

                                key={profile.id}

                                className="viewer-card"

                                onClick={() => openHome(profile)}

                            >

                                <div className="viewer-card__avatar">

                                    {

                                        profile.kids

                                            ? "🧸"

                                            : profile.name.charAt(0).toUpperCase()

                                    }

                                </div>

                                <h3>

                                    {profile.name}

                                </h3>

                            </article>

                        ))

                    ) : (

                        <p

                            style={{

                                color: "white",

                                textAlign: "center",

                                gridColumn: "1 / -1"

                            }}

                        >

                            No hay perfiles creados.

                        </p>

                    )

                }

            </section>

            <footer className="profile-selection__footer">

                <button

                    type="button"

                    onClick={() => navigate("/profiles/create")}

                >

                    Administrar perfiles

                </button>

            </footer>

        </main>

    );

}

export default ProfileSelectionPage;