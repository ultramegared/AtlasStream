/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: LandingPage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Public landing page.
 * ===============================================================
 */

import LandingNavbar from "../components/landing/LandingNavbar";
import LandingHero from "../components/landing/LandingHero";
import LandingTrending from "../components/landing/LandingTrending";
import LandingFeatures from "../components/landing/LandingFeatures";
import LandingPlans from "../components/landing/LandingPlans";
import LandingFAQ from "../components/landing/LandingFAQ";
import LandingFooter from "../components/landing/LandingFooter";

import "../styles/landing.css";

function LandingPage() {

    return (

        <main className="landing-page">

            <LandingNavbar />

            <LandingHero />

            <LandingTrending />

            <LandingFeatures />

            <LandingPlans />

            <LandingFAQ />

            <LandingFooter />

        </main>

    );

}

export default LandingPage;