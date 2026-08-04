/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: AuthLayout.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Authentication layout component.
 * ===============================================================
 */

import { ReactNode } from "react";

interface AuthLayoutProps {

    children: ReactNode;

}

function AuthLayout({

    children

}: AuthLayoutProps) {

    return (

        <main className="auth-layout">

            <section className="auth-layout__left">

                <h1>

                    Bienvenido a una nueva experiencia

                </h1>

                <p>

                    Miles de películas, series y TV en vivo
                    en una sola plataforma.

                </p>

                <ul className="auth-layout__features">

                    <li>

                        ✓ Calidad hasta 4K HDR

                    </li>

                    <li>

                        ✓ TV en Vivo

                    </li>

                    <li>

                        ✓ Sin anuncios según tu plan

                    </li>

                    <li>

                        ✓ Descargas sin conexión

                    </li>

                </ul>

            </section>

            <section className="auth-layout__right">

                {children}

            </section>

        </main>

    );

}

export default AuthLayout;