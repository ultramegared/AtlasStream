/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: user.repository.ts
 * Path: backend/src/repositories/user.repository.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * User repository responsible for database operations.
 * ----------------------------------------------------------------
 */

import { pool } from "../config/database";
import {
    User,
    UpdateUserProfile,
    UserFilters
} from "../models/user.model";

export class UserRepository {

    async findById(
        id: string
    ): Promise<User | null> {

        const result = await pool.query(
            `
            SELECT *
            FROM users
            WHERE id = $1
            LIMIT 1;
            `,
            [id]
        );

        return result.rows[0] ?? null;

    }

    async findByUsername(
        username: string
    ): Promise<User | null> {

        const result = await pool.query(
            `
            SELECT *
            FROM users
            WHERE username = $1
            LIMIT 1;
            `,
            [username]
        );

        return result.rows[0] ?? null;

    }

    async findByEmail(
        email: string
    ): Promise<User | null> {

        const result = await pool.query(
            `
            SELECT *
            FROM users
            WHERE email = $1
            LIMIT 1;
            `,
            [email]
        );

        return result.rows[0] ?? null;

    }

    async findAll(
        filters: UserFilters
    ): Promise<User[]> {

        const limit = filters.limit;
        const offset = (filters.page - 1) * filters.limit;

        const result = await pool.query(
            `
            SELECT *
            FROM users
            ORDER BY created_at DESC
            LIMIT $1
            OFFSET $2;
            `,
            [limit, offset]
        );

        return result.rows;

    }

    async updateProfile(
        id: string,
        profile: UpdateUserProfile
    ): Promise<void> {

        await pool.query(
            `
            UPDATE users
            SET
                first_name = COALESCE($2, first_name),
                last_name = COALESCE($3, last_name),
                avatar_url = COALESCE($4, avatar_url),
                biography = COALESCE($5, biography),
                updated_at = NOW()
            WHERE id = $1;
            `,
            [
                id,
                profile.firstName,
                profile.lastName,
                profile.avatarUrl,
                profile.biography
            ]
        );

    }

    async delete(
        id: string
    ): Promise<void> {

        await pool.query(
            `
            DELETE
            FROM users
            WHERE id = $1;
            `,
            [id]
        );

    }

}

export default new UserRepository();