/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: errorHandler.ts
 * Path: backend/src/middleware/errorHandler.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Global Express error handling middleware.
 * ----------------------------------------------------------------
 */

import {
    ErrorRequestHandler
} from "express";

import { env, logger } from "@/config";
import { ApiError } from "@/utils";

const errorHandler: ErrorRequestHandler = (
    error,
    _req,
    res,
    _next
) => {

    logger.error(error);

    if (error instanceof ApiError) {

        return res
            .status(error.statusCode)
            .json(error.toJSON());

    }

    return res.status(500).json({
        success: false,
        error: {
            code: "INTERNAL_SERVER_ERROR",
            message:
                env.NODE_ENV === "production"
                    ? "Internal server error."
                    : error.message
        }
    });

};

export default errorHandler;