/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: AuthContainer.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Shared layout for authentication pages.
 * ===============================================================
 */

import { ReactNode } from "react";

interface Props {

    title: string;

    step?: number;

    children: ReactNode;

}

function AuthContainer({

    title,

    step,

    children

}: Props) {

    return (

        <main className="auth-container">

            <section className="auth-card">

                {

                    step && (

                        <span className="auth-step">

                            Paso {step}

                        </span>

                    )

                }

                <h1>

                    {title}

                </h1>

                <div className="auth-content">

                    {children}

                </div>

            </section>

        </main>

    );

}

export default AuthContainer;