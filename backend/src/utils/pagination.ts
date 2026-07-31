/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: pagination.ts
 * Path: backend/src/utils/pagination.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Pagination helper functions.
 * ----------------------------------------------------------------
 */

import { DEFAULT_PAGINATION } from "./constants";

export interface PaginationOptions {
    page?: number;
    limit?: number;
}

export interface PaginationResult {

    page: number;

    limit: number;

    offset: number;

}

export function paginate(
    options: PaginationOptions = {}
): PaginationResult {

    const page = Math.max(
        DEFAULT_PAGINATION.PAGE,
        Number(options.page) || DEFAULT_PAGINATION.PAGE
    );

    const limit = Math.min(
        DEFAULT_PAGINATION.MAX_LIMIT,
        Math.max(
            1,
            Number(options.limit) || DEFAULT_PAGINATION.LIMIT
        )
    );

    return {
        page,
        limit,
        offset: (page - 1) * limit
    };

}

export function paginationMeta(
    total: number,
    page: number,
    limit: number
) {

    const totalPages = Math.ceil(total / limit);

    return {
        page,
        limit,
        total,
        totalPages,
        hasPreviousPage: page > 1,
        hasNextPage: page < totalPages
    };

}