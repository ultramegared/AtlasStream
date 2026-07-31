/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: database.ts
 * Path: backend/src/config/database.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * PostgreSQL connection pool configuration.
 * ----------------------------------------------------------------
 */

import { Pool } from "pg";

import env from "./env";
import logger from "./logger";

const pool = new Pool({
    host: env.DB_HOST,
    port: env.DB_PORT,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,

    ssl: env.DB_SSL
        ? {
            rejectUnauthorized: false
        }
        : false,

    max: 20,
    min: 2,

    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,

    allowExitOnIdle: true
});

pool.on("connect", () => {
    logger.info("PostgreSQL connection established.");
});

pool.on("error", (error: Error) => {
    logger.error(error, "Unexpected PostgreSQL error.");
});

export async function testDatabaseConnection(): Promise<void> {

    const client = await pool.connect();

    try {

        await client.query("SELECT NOW()");

        logger.info("Database connection test successful.");

    } finally {

        client.release();

    }

}

export default pool;