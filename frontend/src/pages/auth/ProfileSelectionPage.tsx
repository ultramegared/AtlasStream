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

function ProfileSelectionPage() {

    const navigate = useNavigate();

    function openHome(profile: string) {

        // TODO:
        // Guardar el perfil activo
        // antes de ingresar al Home.

        console.log("Perfil seleccionado:", profile);

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

                <article

                    className="viewer-card"

                    onClick={() => openHome("José")}

                >

                    <div className="viewer-card__avatar">

                        👨

                    </div>

                    <h3>

                        José

                    </h3>

                </article>

                <article

                    className="viewer-card"

                    onClick={() => openHome("María")}

                >

                    <div className="viewer-card__avatar">

                        👩

                    </div>

                    <h3>

                        María

                    </h3>

                </article>

                <article

                    className="viewer-card"

                    onClick={() => openHome("Kevin")}

                >

                    <div className="viewer-card__avatar">

                        👦

                    </div>

                    <h3>

                        Kevin

                    </h3>

                </article>

                <article

                    className="viewer-card"

                    onClick={() => openHome("Kids")}

                >

                    <div className="viewer-card__avatar">

                        🧸

                    </div>

                    <h3>

                        Kids

                    </h3>

                </article>

            </section>

            <footer className="profile-selection__footer">

                <button

                    type="button"

                >

                    Administrar perfiles

                </button>

            </footer>

        </main>

    );

}

export default ProfileSelectionPage;