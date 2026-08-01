/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: MainLayout.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Main application layout.
 * ===============================================================
 */

import { ReactNode } from "react";

import Navbar from "./Navbar";

interface MainLayoutProps {

    children: ReactNode;

}

function MainLayout({

    children

}: MainLayoutProps) {

    return (

    <>

        <Navbar />

        <main>

            {children}

        </main>

    </>

);

}

export default MainLayout;