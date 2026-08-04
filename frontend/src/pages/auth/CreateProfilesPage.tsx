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

import { useNavigate } from "react-router-dom";

import AuthContainer from "../../components/auth/AuthContainer";

function CreateProfilesPage() {

    const navigate = useNavigate();

    function handleContinue() {

        // Más adelante aquí se guardarán los perfiles
        // en la base de datos.

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

                        Tu plan Premium permite crear hasta 4 perfiles.

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
                        />

                        <label>

                            <input
                                type="checkbox"
                            />

                            Perfil infantil

                        </label>

                        <label>

                            <input
                                type="checkbox"
                            />

                            Proteger con PIN

                        </label>

                    </article>

                    <article className="profile-slot empty">

                        <div className="profile-slot__add">

                            +

                        </div>

                        <span>

                            Agregar perfil

                        </span>

                    </article>

                    <article className="profile-slot empty">

                        <div className="profile-slot__add">

                            +

                        </div>

                        <span>

                            Agregar perfil

                        </span>

                    </article>

                    <article className="profile-slot empty">

                        <div className="profile-slot__add">

                            +

                        </div>

                        <span>

                            Agregar perfil

                        </span>

                    </article>

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