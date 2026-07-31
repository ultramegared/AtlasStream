/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: client.ts
 * Path: backend/src/database/client.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Database client abstraction.
 * Provides helper methods for executing queries and transactions.
 * ----------------------------------------------------------------
 */

import {
    PoolClient,
    QueryResult,
    QueryResultRow
} from "pg";

import { pool } from "@/config";

class DatabaseClient {

    public async query<T extends QueryResultRow = QueryResultRow>(
        text: string,
        params: unknown[] = []
    ): Promise<QueryResult<T>> {

        return pool.query<T>(text, params);

    }

    public async transaction<T>(
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

            throw error;

        } finally {

            client.release();

        }

    }

}

const database = new DatabaseClient();

export default database;