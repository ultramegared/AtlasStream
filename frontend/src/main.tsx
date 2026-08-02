/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: main.tsx
 * Module: Frontend
 * Language: TypeScript React
 * Description:
 * Application entry point.
 * ===============================================================
 */

import React from "react";
import ReactDOM from "react-dom/client";

import {

    BrowserRouter

} from "react-router-dom";

import App from "./App";

import "./styles/global.css";

ReactDOM.createRoot(

    document.getElementById("app") as HTMLElement

).render(

    <React.StrictMode>

        <BrowserRouter>

            <App />

        </BrowserRouter>

    </React.StrictMode>

);