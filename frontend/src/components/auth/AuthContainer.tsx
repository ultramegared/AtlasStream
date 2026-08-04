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

import "../../styles/auth.css";

import AuthHeader from "./AuthHeader";
import AuthLayout from "./AuthLayout";
import ProgressSteps from "../common/ProgressSteps";

interface AuthContainerProps {

    title: string;

    step?: number;

    children: ReactNode;

}

function AuthContainer({

    title,

    step = 1,

    children

}: AuthContainerProps) {

    return (

        <>

            <AuthHeader />

            <AuthLayout>

                <>

                    <ProgressSteps

                        step={step}

                        title={title}

                    />

                    {children}

                </>

            </AuthLayout>

        </>

    );

}

export default AuthContainer;