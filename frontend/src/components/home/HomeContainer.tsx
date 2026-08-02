/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: HomeContainer.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Home page container.
 * ===============================================================
 */

import { ReactNode } from "react";

interface HomeContainerProps {

    children: ReactNode;

}

function HomeContainer({

    children

}: HomeContainerProps) {

    return (

        <section className="home">

            {children}

        </section>

    );

}

export default HomeContainer;