/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: ApiError.ts
 * Path: backend/src/utils/ApiError.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Custom application error.
 * ----------------------------------------------------------------
 */

export default class ApiError extends Error {

    public readonly statusCode: number;

    public readonly code: string;

    public readonly details?: unknown;

    constructor(
        statusCode: number,
        code: string,
        message: string,
        details?: unknown
    ) {

        super(message);

        this.name = "ApiError";
        this.statusCode = statusCode;
        this.code = code;
        this.details = details;

        Error.captureStackTrace(this, this.constructor);

    }

    public toJSON() {

        return {
            success: false,
            error: {
                code: this.code,
                message: this.message,
                details: this.details
            }
        };

    }

}