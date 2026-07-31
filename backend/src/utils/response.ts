/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: response.ts
 * Path: backend/src/utils/response.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Standard API response helpers.
 * ----------------------------------------------------------------
 */

import { Response } from "express";

interface SuccessResponseOptions<T = unknown> {
    statusCode?: number;
    message?: string;
    data?: T;
    meta?: Record<string, unknown>;
}

interface ErrorResponseOptions {
    statusCode?: number;
    code?: string;
    message: string;
    details?: unknown;
}

export function success<T>(
    res: Response,
    options: SuccessResponseOptions<T> = {}
): Response {

    const {
        statusCode = 200,
        message = "Request completed successfully.",
        data = null,
        meta
    } = options;

    return res.status(statusCode).json({
        success: true,
        message,
        data,
        meta,
        timestamp: new Date().toISOString()
    });

}

export function error(
    res: Response,
    options: ErrorResponseOptions
): Response {

    const {
        statusCode = 500,
        code = "INTERNAL_SERVER_ERROR",
        message,
        details
    } = options;

    return res.status(statusCode).json({
        success: false,
        error: {
            code,
            message,
            details
        },
        timestamp: new Date().toISOString()
    });

}