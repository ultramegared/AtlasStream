/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: jwt.ts
 * Path: backend/src/utils/jwt.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * JWT generation and verification utilities.
 * ----------------------------------------------------------------
 */

import jwt, {
    JwtPayload,
    SignOptions
} from "jsonwebtoken";

import { env } from "@/config";

export interface TokenPayload extends JwtPayload {
    id: string;
    email: string;
    role: string;
}

export function generateAccessToken(
    payload: TokenPayload
): string {

    const options: SignOptions = {
        expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"]
    };

    return jwt.sign(
        payload,
        env.JWT_SECRET,
        options
    );

}

export function generateRefreshToken(
    payload: TokenPayload
): string {

    const options: SignOptions = {
        expiresIn: env.JWT_REFRESH_EXPIRES_IN as SignOptions["expiresIn"]
    };

    return jwt.sign(
        payload,
        env.JWT_REFRESH_SECRET,
        options
    );

}

export function verifyAccessToken(
    token: string
): TokenPayload {

    return jwt.verify(
        token,
        env.JWT_SECRET
    ) as TokenPayload;

}

export function verifyRefreshToken(
    token: string
): TokenPayload {

    return jwt.verify(
        token,
        env.JWT_REFRESH_SECRET
    ) as TokenPayload;

}

export function decodeToken(
    token: string
): JwtPayload | string | null {

    return jwt.decode(token);

}