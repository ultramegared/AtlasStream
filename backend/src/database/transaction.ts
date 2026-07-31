/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: transaction.ts
 * Path: backend/src/database/transaction.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Database transaction helper.
 * ----------------------------------------------------------------
 */

import { PoolClient } from "pg";

import { pool, logger } from "@/config";

export async function transaction<T>(
    callback: (client: PoolClient) => Promise<T>
): Promise<T> {

    const client = await pool.connect();

    try {

        await client.query("BEGIN");

        const result = await callback(client);

        await client.query("COMMIT");

        return result;

    } catch (error) {

        await client.query("ROLLBACK");

        logger.error(error, "Database transaction rolled back.");

        throw error;

    } finally {

        client.release();

    }

}