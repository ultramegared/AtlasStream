/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: constants.ts
 * Path: backend/src/utils/constants.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Global application constants.
 * ----------------------------------------------------------------
 */

export const HTTP_STATUS = {

    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,

    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,

    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    SERVICE_UNAVAILABLE: 503

} as const;

export const USER_ROLES = {

    ADMIN: "ADMIN",
    MODERATOR: "MODERATOR",
    USER: "USER"

} as const;

export const USER_STATUS = {

    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    SUSPENDED: "SUSPENDED",
    BANNED: "BANNED"

} as const;

export const TOKEN_TYPES = {

    ACCESS: "ACCESS",
    REFRESH: "REFRESH"

} as const;

export const CONTENT_TYPES = {

    MOVIE: "MOVIE",
    SERIES: "SERIES",
    EPISODE: "EPISODE",
    LIVE: "LIVE"

} as const;

export const DEFAULT_PAGINATION = {

    PAGE: 1,
    LIMIT: 20,
    MAX_LIMIT: 100

} as const;

export const API_MESSAGES = {

    SUCCESS: "Request completed successfully.",
    CREATED: "Resource created successfully.",
    UPDATED: "Resource updated successfully.",
    DELETED: "Resource deleted successfully.",

    UNAUTHORIZED: "Authentication required.",
    FORBIDDEN: "Access denied.",
    NOT_FOUND: "Resource not found.",
    VALIDATION_ERROR: "Validation failed.",
    INTERNAL_ERROR: "Internal server error."

} as const;