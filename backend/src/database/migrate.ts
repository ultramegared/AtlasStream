/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: migrate.ts
 * Path: backend/src/database/migrate.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Executes all SQL migrations from the project's database folder.
 * ----------------------------------------------------------------
 */

import { promises as fs } from "fs";
import path from "path";

import { pool, logger } from "@/config";

async function runMigrations(): Promise<void> {

    const client = await pool.connect();

    try {

        const migrationsPath = path.resolve(
            process.cwd(),
            "../database/migrations"
        );

        const files = (await fs.readdir(migrationsPath))
            .filter(file => file.endsWith(".sql"))
            .sort();

        logger.info("----------------------------------------");
        logger.info("AtlasStream Database Migration");
        logger.info("----------------------------------------");

        await client.query("BEGIN");

        for (const file of files) {

            logger.info(`Running migration: ${file}`);

            const sql = await fs.readFile(
                path.join(migrationsPath, file),
                "utf8"
            );

            await client.query(sql);

            logger.info(`Completed: ${file}`);

        }

        await client.query("COMMIT");

        logger.info("All migrations executed successfully.");

    } catch (error) {

        await client.query("ROLLBACK");

        logger.error(error, "Migration failed.");

        process.exitCode = 1;

    } finally {

        client.release();

        await pool.end();

    }

}

void runMigrations();