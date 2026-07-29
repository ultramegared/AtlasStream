/**
 * -----------------------------------------------------------------------------
 * AtlasStream Backend
 * -----------------------------------------------------------------------------
 * File: database/migrate.ts
 * Author: ultramegared
 *
 * Description:
 * Executes all SQL migration files located in the database/migrations folder.
 * This script is intended to initialize the database schema for AtlasStream.
 *
 * Supported Languages:
 * - English (en)
 * - Español (es)
 * -----------------------------------------------------------------------------
 */

import fs from "fs";
import path from "path";
import dotenv from "dotenv";

import { pool } from "../src/config/database";

dotenv.config();

async function runMigrations(): Promise<void> {
    const client = await pool.connect();

    try {
        const migrationsPath = path.join(__dirname, "migrations");

        const files = fs
            .readdirSync(migrationsPath)
            .filter(file => file.endsWith(".sql"))
            .sort();

        console.log("\n====================================");
        console.log(" AtlasStream Database Migrations");
        console.log("====================================\n");

        await client.query("BEGIN");

        for (const file of files) {
            console.log(`Running: ${file}`);

            const sql = fs.readFileSync(
                path.join(migrationsPath, file),
                "utf8"
            );

            await client.query(sql);

            console.log(`✓ Completed: ${file}\n`);
        }

        await client.query("COMMIT");

        console.log("====================================");
        console.log("All migrations completed successfully.");
        console.log("====================================\n");
    } catch (error) {
        await client.query("ROLLBACK");

        console.error("\nMigration failed.\n");
        console.error(error);

        process.exitCode = 1;
    } finally {
        client.release();
        await pool.end();
    }
}

runMigrations();