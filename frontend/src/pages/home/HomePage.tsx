/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: HomePage.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Home page.
 * ===============================================================
 */

import "../../styles/home.css";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import HeroBanner from "../../components/home/HeroBanner";
import ContentRow from "../../components/home/ContentRow";

function HomePage()
{

    return (

        <main className="home">

            <Navbar />

            <HeroBanner />

            <ContentRow
                title="Trending Movies"
            />

            <ContentRow
                title="Trending Series"
            />

            <ContentRow
                title="Continue Watching"
            />

            <Footer />

        </main>

    );

}

export default HomePage;