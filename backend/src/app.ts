/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Configuración principal de la aplicación Express.
 * ----------------------------------------------------------------
 */

import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

// Seguridad
app.disable("x-powered-by");

// Middlewares
app.use(cors());
app.use(express.json());

// Estado de la API
app.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    name: "AtlasStream API",
    version: "1.0.0",
    status: "online",
  });
});

// Rutas
app.use("/api", routes);

export default app;