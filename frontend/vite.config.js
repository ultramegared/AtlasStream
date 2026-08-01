/**
 * ===============================================================
 * Author: ultramegared
 * Project: AtlasStream
 * File: vite.config.js
 * Module: Frontend
 * Language: JavaScript
 * Description:
 * Vite configuration.
 * ===============================================================
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({

    plugins: [

        react()

    ]

});