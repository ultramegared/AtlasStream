/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: authenticate.ts
 * Path: backend/src/middleware/authenticate.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * JWT authentication middleware.
 * ----------------------------------------------------------------
 */

import {
    NextFunction,
    Request,
    Response
} from "express";

import {
    ApiError,
    verifyAccessToken,
    HTTP_STATUS
} from "@/utils";

declare global {

    namespace Express {

        interface Request {

            user?: {
                id: string;
                email: string;
                role: string;
            };

        }

    }

}

export default function authenticate(
    req: Request,
    _res: Response,
    next: NextFunction
): void {

    const authorization = req.headers.authorization;

    if (!authorization) {

        return next(
            new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "AUTH_REQUIRED",
                "Authentication required."
            )
        );

    }

    const [scheme, token] = authorization.split(" ");

    if (
        scheme !== "Bearer" ||
        !token
    ) {

        return next(
            new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "INVALID_TOKEN",
                "Invalid authorization header."
            )
        );

    }

    try {

        const payload = verifyAccessToken(token);

        req.user = {
            id: payload.id,
            email: payload.email,
            role: payload.role
        };

        next();

    } catch {

        next(
            new ApiError(
                HTTP_STATUS.UNAUTHORIZED,
                "TOKEN_EXPIRED",
                "Invalid or expired token."
            )
        );

    }

}