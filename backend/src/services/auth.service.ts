/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: auth.service.ts
 * Path: backend/src/services/auth.service.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Authentication business logic.
 * ----------------------------------------------------------------
 */

import authRepository from "@/repositories/auth.repository";

import {
    ApiError,
    generateAccessToken,
    generateRefreshToken,
    hashPassword,
    HTTP_STATUS,
    USER_STATUS,
    verifyPassword
} from "@/utils";

import {
    AuthResponse,
    LoginCredentials,
    RegisterUser
} from "@/models/auth.model";

class AuthService {

    public async login(
        credentials: LoginCredentials
    ): Promise<AuthResponse> {

        const user = await authRepository.findByEmail(
            credentials.email
        );

        if (!user) {

            throw new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "INVALID_CREDENTIALS",
                "Invalid email or password."
            );

        }

        const validPassword = await verifyPassword(
            credentials.password,
            user.passwordHash
        );

        if (!validPassword) {

            throw new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "INVALID_CREDENTIALS",
                "Invalid email or password."
            );

        }

        if (user.status !== USER_STATUS.ACTIVE) {

            throw new ApiError(
                HTTP_STATUS.FORBIDDEN,
                "ACCOUNT_DISABLED",
                "User account is not active."
            );

        }

        await authRepository.updateLastLogin(
            user.id
        );

        const accessToken = generateAccessToken({

            id: user.id,
            email: user.email,
            role: user.role

        });

        const refreshToken = generateRefreshToken({

            id: user.id,
            email: user.email,
            role: user.role

        });

        const {
            passwordHash,
            ...safeUser
        } = user;

        return {

            user: safeUser,

            tokens: {

                accessToken,

                refreshToken,

                expiresIn: 900

            }

        };

    }

    public async register(
        payload: RegisterUser
    ): Promise<AuthResponse> {

        const existingEmail = await authRepository.findByEmail(
            payload.email
        );

        if (existingEmail) {

            throw new ApiError(
                HTTP_STATUS.CONFLICT,
                "EMAIL_ALREADY_EXISTS",
                "Email already registered."
            );

        }

        const existingUsername = await authRepository.findByUsername(
            payload.username
        );

        if (existingUsername) {

            throw new ApiError(
                HTTP_STATUS.CONFLICT,
                "USERNAME_ALREADY_EXISTS",
                "Username already registered."
            );

        }

        const passwordHash = await hashPassword(
            payload.password
        );

        const user = await authRepository.create({

            ...payload,

            passwordHash

        });

        const accessToken = generateAccessToken({

            id: user.id,
            email: user.email,
            role: user.role

        });

        const refreshToken = generateRefreshToken({

            id: user.id,
            email: user.email,
            role: user.role

        });

        const {
            passwordHash: _,
            ...safeUser
        } = user;

        return {

            user: safeUser,

            tokens: {

                accessToken,

                refreshToken,

                expiresIn: 900

            }

        };

    }

    public async changePassword(

        userId: string,

        currentPassword: string,

        newPassword: string

    ): Promise<void> {

        const user = await authRepository.findById(
            userId
        );

        if (!user) {

            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "USER_NOT_FOUND",
                "User not found."
            );

        }

        const validPassword = await verifyPassword(
            currentPassword,
            user.passwordHash
        );

        if (!validPassword) {

            throw new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "INVALID_PASSWORD",
                "Current password is incorrect."
            );

        }

        const passwordHash = await hashPassword(
            newPassword
        );

        await authRepository.updatePassword(
            user.id,
            passwordHash
        );

    }

}
export default new AuthService();