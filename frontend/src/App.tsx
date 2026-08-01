/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: App.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Root application component.
 * ===============================================================
 */

import MainLayout from "./components/layout/MainLayout";

import HomePage from "./pages/home/HomePage";

function App() {

    return (

        <MainLayout>

            <HomePage />

        </MainLayout>

    );

}

export default App;