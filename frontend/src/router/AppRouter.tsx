/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: AppRouter.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Application router.
 * ===============================================================
 */

import {

    Routes,
    Route,
    Navigate

} from "react-router-dom";

import LandingPage from "../pages/LandingPage";

import RegisterPage from "../pages/auth/RegisterPage";
import SubscriptionPage from "../pages/auth/SubscriptionPage";
import PaymentPage from "../pages/auth/PaymentPage";
import CreateProfilesPage from "../pages/auth/CreateProfilesPage";
import ProfileSelectionPage from "../pages/auth/ProfileSelectionPage";

import HomePage from "../pages/home/HomePage";

function AppRouter() {

    return (

        <Routes>

            <Route

                path="/"

                element={<LandingPage />}

            />

            <Route

                path="/register"

                element={<RegisterPage />}

            />

            <Route

                path="/subscription"

                element={<SubscriptionPage />}

            />

            <Route

                path="/payment"

                element={<PaymentPage />}

            />

            <Route

                path="/profiles/create"

                element={<CreateProfilesPage />}

            />

            <Route

                path="/profiles"

                element={<ProfileSelectionPage />}

            />

            <Route

                path="/home"

                element={<HomePage />}

            />

            <Route

                path="*"

                element={<Navigate to="/" replace />}

            />

        </Routes>

    );

}

export default AppRouter;