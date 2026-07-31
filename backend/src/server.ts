/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: server.ts
 * Path: backend/src/server.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Backend entry point.
 * Initializes the HTTP server and verifies the database connection.
 * ----------------------------------------------------------------
 */

import dotenv from "dotenv";
import { Server } from "http";

import app from "./app";
import pool from "./config/database";
import logger from "./config/logger";

dotenv.config();

const PORT = Number(process.env.PORT ?? 3000);

let server: Server;

async function startServer(): Promise<void> {
    try {
        await pool.query("SELECT NOW()");

        logger.info("PostgreSQL connection established.");

        server = app.listen(PORT, () => {
            logger.info(`AtlasStream Backend running on port ${PORT}`);
            logger.info(`API: http://localhost:${PORT}`);
        });

        registerShutdownHandlers();

    } catch (error) {
        logger.fatal(error, "Unable to start AtlasStream Backend.");
        process.exit(1);
    }
}

function registerShutdownHandlers(): void {

    const shutdown = async (signal: string): Promise<void> => {

        logger.info(`${signal} received. Shutting down...`);

        try {

            if (server) {
                server.close();
            }

            await pool.end();

            logger.info("Shutdown completed.");

            process.exit(0);

        } catch (error) {

            logger.error(error, "Error during shutdown.");

            process.exit(1);

        }

    };

    process.on("SIGINT", () => void shutdown("SIGINT"));
    process.on("SIGTERM", () => void shutdown("SIGTERM"));

}

void startServer();