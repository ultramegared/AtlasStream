/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: auth.model.ts
 * Path: backend/src/models/auth.model.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Authentication domain models.
 * ----------------------------------------------------------------
 */

export interface LoginCredentials {

    email: string;

    password: string;

}

export interface RegisterUser {

    username: string;

    email: string;

    password: string;

    firstName: string;

    lastName: string;

}

export interface AuthUser {

    id: string;

    username: string;

    email: string;

    passwordHash: string;

    role: string;

    status: string;

    isVerified: boolean;

    createdAt: Date;

    updatedAt: Date;

}

export interface AccessTokenResponse {

    accessToken: string;

    refreshToken: string;

    expiresIn: number;

}

export interface AuthResponse {

    user: Omit<AuthUser, "passwordHash">;

    tokens: AccessTokenResponse;

}

export interface RefreshTokenPayload {

    refreshToken: string;

}

export interface ChangePasswordPayload {

    currentPassword: string;

    newPassword: string;

}

export interface ForgotPasswordPayload {

    email: string;

}

export interface ResetPasswordPayload {

    token: string;

    password: string;

}