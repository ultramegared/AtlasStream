/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: App.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Main application component.
 * ===============================================================
 */

import {

    Routes,
    Route,
    Navigate

} from "react-router-dom";

import HomePage from "./pages/home/HomePage";

import DetailsPage from "./pages/movies/DetailsPage";

function App()
{

    return (

        <Routes>

            <Route

                path="/"

                element={

                    <HomePage />

                }

            />

            <Route

                path="/movies/:id"

                element={

                    <DetailsPage />

                }

            />

            <Route

                path="*"

                element={

                    <Navigate

                        to="/"

                        replace

                    />

                }

            />

        </Routes>

    );

}

export default App;