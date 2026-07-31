/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: authorize.ts
 * Path: backend/src/middleware/authorize.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Role-based authorization middleware.
 * ----------------------------------------------------------------
 */

import {
    NextFunction,
    Request,
    Response
} from "express";

import {
    ApiError,
    HTTP_STATUS
} from "@/utils";

export default function authorize(
    ...roles: string[]
) {

    return (
        req: Request,
        _res: Response,
        next: NextFunction
    ): void => {

        if (!req.user) {

            return next(
                new ApiError(
                    HTTP_STATUS.UNAUTHORIZED,
                    "AUTH_REQUIRED",
                    "Authentication required."
                )
            );

        }

        if (!roles.includes(req.user.role)) {

            return next(
                new ApiError(
                    HTTP_STATUS.FORBIDDEN,
                    "ACCESS_DENIED",
                    "Access denied."
                )
            );

        }

        next();

    };

}