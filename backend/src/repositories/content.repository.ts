/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: content.repository.ts
 * Path: backend/src/repositories/content.repository.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Content repository responsible for all catalog database operations.
 * ----------------------------------------------------------------
 */

import { pool } from "@/config/database";

import {
    Content,
    ContentFilters,
    CreateContent,
    UpdateContent
} from "@/models/content.model";

class ContentRepository {

    public async findById(
        id: string
    ): Promise<Content | null> {

        const result = await pool.query<Content>(
            `
            SELECT
                id,
                content_type AS "contentType",
                title,
                original_title AS "originalTitle",
                slug,
                synopsis,
                release_date AS "releaseDate",
                release_year AS "releaseYear",
                runtime_minutes AS "runtimeMinutes",
                poster_url AS "posterUrl",
                backdrop_url AS "backdropUrl",
                trailer_url AS "trailerUrl",
                imdb_id AS "imdbId",
                tmdb_id AS "tmdbId",
                language_id AS "languageId",
                country_id AS "countryId",
                age_rating_id AS "ageRatingId",
                studio_id AS "studioId",
                is_published AS "isPublished",
                created_at AS "createdAt",
                updated_at AS "updatedAt",
                deleted_at AS "deletedAt"
            FROM content
            WHERE id = $1
            LIMIT 1;
            `,
            [id]
        );

        return result.rows[0] ?? null;

    }

    public async findBySlug(
        slug: string
    ): Promise<Content | null> {

        const result = await pool.query<Content>(
            `
            SELECT *
            FROM content
            WHERE slug = $1
            LIMIT 1;
            `,
            [slug]
        );

        return result.rows[0] ?? null;

    }

    public async findAll(
        filters: ContentFilters
    ): Promise<Content[]> {

        const limit = filters.limit;

        const offset =
            (filters.page - 1) * filters.limit;

        const result = await pool.query<Content>(
            `
            SELECT *
            FROM content
            WHERE
                ($1::varchar IS NULL OR content_type = $1)
            ORDER BY release_date DESC
            LIMIT $2
            OFFSET $3;
            `,
            [
                filters.contentType ?? null,
                limit,
                offset
            ]
        );

        return result.rows;

    }

    public async create(
        content: CreateContent & {
            slug: string;
        }
    ): Promise<Content> {

        // Se implementará cuando construyamos
        // el panel de administración.

        throw new Error("Not implemented.");

    }

    public async update(
        id: string,
        content: UpdateContent
    ): Promise<void> {

        // Se implementará cuando construyamos
        // el panel de administración.

        throw new Error("Not implemented.");

    }

    public async delete(
        id: string
    ): Promise<void> {

        await pool.query(

            `
            UPDATE content
            SET
                deleted_at = NOW()
            WHERE id = $1;
            `,

            [id]

        );

    }

}

export default new ContentRepository();