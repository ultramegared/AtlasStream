/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: user.model.ts
 * Path: backend/src/models/user.model.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * User domain models.
 * ----------------------------------------------------------------
 */

export interface User {

    id: string;

    username: string;

    email: string;

    firstName: string;

    lastName: string;

    avatarUrl: string | null;

    biography: string | null;

    role: string;

    status: string;

    isVerified: boolean;

    lastLoginAt: Date | null;

    createdAt: Date;

    updatedAt: Date;

}

export interface UpdateUserProfile {

    firstName?: string;

    lastName?: string;

    avatarUrl?: string | null;

    biography?: string | null;

}

export interface UpdateUserRole {

    role: string;

}

export interface UpdateUserStatus {

    status: string;

}

export interface UserFilters {

    search?: string;

    role?: string;

    status?: string;

    page: number;

    limit: number;

}