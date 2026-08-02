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

        </main>

    );

}

export default HomePage;