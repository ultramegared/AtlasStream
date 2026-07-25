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
 * Punto de entrada principal del servidor.
 * ----------------------------------------------------------------
 */

import dotenv from "dotenv";
import app from "./app";
import pool from "./config/database";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

async function startServer(): Promise<void> {
  try {
    await pool.query("SELECT NOW()");

    console.log("🟢 PostgreSQL conectado correctamente.");

    app.listen(PORT, () => {
      console.log(`🚀 Servidor iniciado en el puerto ${PORT}`);
      console.log(`🌐 API disponible en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("🔴 Error al conectar con PostgreSQL:", error);
    process.exit(1);
  }
}

startServer();