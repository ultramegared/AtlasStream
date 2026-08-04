/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: RegisterPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * User registration page.
 * ===============================================================
 */

import AuthHeader from "../../components/auth/AuthHeader";
import AuthLayout from "../../components/auth/AuthLayout";
import RegisterForm from "../../components/auth/RegisterForm";
import ProgressSteps from "../../components/common/ProgressSteps";

function RegisterPage() {

    return (

        <>

            <AuthHeader />

            <AuthLayout>

                <>

                    <ProgressSteps
                        step={1}
                        title="Crear tu cuenta"
                    />

                    <RegisterForm />

                </>

            </AuthLayout>

        </>

    );

}

export default RegisterPage;