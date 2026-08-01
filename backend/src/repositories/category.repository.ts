/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: category.repository.ts
 * Path: backend/src/repositories/category.repository.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Category repository responsible for database operations.
 * ----------------------------------------------------------------
 */

import { pool } from "@/config/database";

import {
    Category,
    CategoryFilters,
    CreateCategory,
    UpdateCategory
} from "@/models/category.model";

class CategoryRepository {

    public async findById(
        id: string
    ): Promise<Category | null> {

        const result = await pool.query<Category>(
            `
            SELECT *
            FROM categories
            WHERE id = $1
            LIMIT 1;
            `,
            [id]
        );

        return result.rows[0] ?? null;

    }

    public async findBySlug(
        slug: string
    ): Promise<Category | null> {

        const result = await pool.query<Category>(
            `
            SELECT *
            FROM categories
            WHERE slug = $1
            LIMIT 1;
            `,
            [slug]
        );

        return result.rows[0] ?? null;

    }

    public async findAll(
        filters: CategoryFilters
    ): Promise<Category[]> {

        const limit = filters.limit;

        const offset = (filters.page - 1) * filters.limit;

        const result = await pool.query<Category>(
            `
            SELECT *
            FROM categories
            ORDER BY name ASC
            LIMIT $1
            OFFSET $2;
            `,
            [
                limit,
                offset
            ]
        );

        return result.rows;

    }

    public async create(
        category: CreateCategory & {
            slug: string;
        }
    ): Promise<Category> {

        const result = await pool.query<Category>(
            `
            INSERT INTO categories
            (
                name,
                slug,
                description
            )
            VALUES
            (
                $1,
                $2,
                $3
            )
            RETURNING *;
            `,
            [
                category.name,
                category.slug,
                category.description
            ]
        );

        return result.rows[0];

    }

    public async update(
        id: string,
        category: UpdateCategory
    ): Promise<void> {

        await pool.query(
            `
            UPDATE categories
            SET
                name = COALESCE($2, name),
                description = COALESCE($3, description),
                is_active = COALESCE($4, is_active),
                updated_at = NOW()
            WHERE id = $1;
            `,
            [
                id,
                category.name,
                category.description,
                category.isActive
            ]
        );

    }

    public async delete(
        id: string
    ): Promise<void> {

        await pool.query(
            `
            DELETE
            FROM categories
            WHERE id = $1;
            `,
            [id]
        );

    }

}

export default new CategoryRepository();