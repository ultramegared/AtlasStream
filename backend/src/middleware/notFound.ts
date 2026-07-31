/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: notFound.ts
 * Path: backend/src/middleware/notFound.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Handles requests to unknown routes.
 * ----------------------------------------------------------------
 */

import {
    Request,
    Response,
    NextFunction
} from "express";

import { ApiError } from "@/utils";

export default function notFound(
    _req: Request,
    _res: Response,
    next: NextFunction
): void {

    next(
        new ApiError(
            404,
            "NOT_FOUND",
            "Resource not found."
        )
    );

}