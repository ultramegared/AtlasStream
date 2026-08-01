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

import HeroBanner from "../../components/home/HeroBanner";
import ContentRow from "../../components/home/ContentRow";

function HomePage() {

    return (

        <>

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

        </>

    );

}

export default HomePage;