/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: season.repository.ts
 * Path: backend/src/repositories/season.repository.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Season repository.
 * ----------------------------------------------------------------
 */

import { pool } from "@/database";

import {
    Season
} from "@/models/season.model";

class SeasonRepository {

    public async findByContentId(
        contentId: string
    ): Promise<Season[]> {

        const query = `
            SELECT
                id,
                content_id AS "contentId",
                season_number AS "seasonNumber",
                title,
                synopsis,
                poster_url AS "posterUrl",
                release_date AS "releaseDate",
                created_at AS "createdAt"
            FROM season
            WHERE content_id = $1
            ORDER BY season_number ASC;
        `;

        const { rows } = await pool.query(
            query,
            [contentId]
        );

        return rows;

    }

    public async findById(
        id: string
    ): Promise<Season | null> {

        const query = `
            SELECT
                id,
                content_id AS "contentId",
                season_number AS "seasonNumber",
                title,
                synopsis,
                poster_url AS "posterUrl",
                release_date AS "releaseDate",
                created_at AS "createdAt"
            FROM season
            WHERE id = $1
            LIMIT 1;
        `;

        const { rows } = await pool.query(
            query,
            [id]
        );

        return rows[0] ?? null;

    }

}

export default new SeasonRepository();