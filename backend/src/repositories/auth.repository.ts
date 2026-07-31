/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: auth.repository.ts
 * Path: backend/src/repositories/auth.repository.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Authentication repository.
 * Handles all authentication related database operations.
 * ----------------------------------------------------------------
 */

import { database } from "@/database";
import {
    AuthUser,
    RegisterUser
} from "@/models/auth.model";

class AuthRepository {

    public async findById(
        id: string
    ): Promise<AuthUser | null> {

        const result = await database.query<AuthUser>(
            `
                SELECT
                    id,
                    username,
                    email,
                    password_hash AS "passwordHash",
                    role,
                    status,
                    is_verified AS "isVerified",
                    created_at AS "createdAt",
                    updated_at AS "updatedAt"
                FROM users
                WHERE id = $1
                LIMIT 1
            `,
            [id]
        );

        return result.rows[0] ?? null;

    }

    public async findByEmail(
        email: string
    ): Promise<AuthUser | null> {

        const result = await database.query<AuthUser>(
            `
                SELECT
                    id,
                    username,
                    email,
                    password_hash AS "passwordHash",
                    role,
                    status,
                    is_verified AS "isVerified",
                    created_at AS "createdAt",
                    updated_at AS "updatedAt"
                FROM users
                WHERE email = $1
                LIMIT 1
            `,
            [email]
        );

        return result.rows[0] ?? null;

    }

    public async findByUsername(
        username: string
    ): Promise<AuthUser | null> {

        const result = await database.query<AuthUser>(
            `
                SELECT
                    id,
                    username,
                    email,
                    password_hash AS "passwordHash",
                    role,
                    status,
                    is_verified AS "isVerified",
                    created_at AS "createdAt",
                    updated_at AS "updatedAt"
                FROM users
                WHERE username = $1
                LIMIT 1
            `,
            [username]
        );

        return result.rows[0] ?? null;

    }

    public async create(
        user: RegisterUser & {
            passwordHash: string;
        }
    ): Promise<AuthUser> {

        const result = await database.query<AuthUser>(
            `
                INSERT INTO users (
                    username,
                    email,
                    password_hash,
                    first_name,
                    last_name
                )
                VALUES (
                    $1,
                    $2,
                    $3,
                    $4,
                    $5
                )
                RETURNING
                    id,
                    username,
                    email,
                    password_hash AS "passwordHash",
                    role,
                    status,
                    is_verified AS "isVerified",
                    created_at AS "createdAt",
                    updated_at AS "updatedAt"
            `,
            [
                user.username,
                user.email,
                user.passwordHash,
                user.firstName,
                user.lastName
            ]
        );

        return result.rows[0];

    }

    public async updatePassword(
        userId: string,
        passwordHash: string
    ): Promise<void> {

        await database.query(
            `
                UPDATE users
                SET
                    password_hash = $2,
                    updated_at = NOW()
                WHERE id = $1
            `,
            [
                userId,
                passwordHash
            ]
        );

    }

    public async updateLastLogin(
        userId: string
    ): Promise<void> {

        await database.query(
            `
                UPDATE users
                SET
                    last_login_at = NOW()
                WHERE id = $1
            `,
            [userId]
        );

    }

}

export default new AuthRepository();