/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: filters.ts
 * Path: backend/src/utils/filters.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * SQL filter builder utilities.
 * ----------------------------------------------------------------
 */

export interface FilterOptions {
    field: string;
    value: unknown;
    operator?: "=" | ">" | "<" | ">=" | "<=" | "!=" | "ILIKE";
}

export interface QueryFilters {
    where: string;
    values: unknown[];
}

export function buildFilters(
    filters: FilterOptions[]
): QueryFilters {

    const conditions: string[] = [];
    const values: unknown[] = [];

    let index = 1;

    for (const filter of filters) {

        if (
            filter.value === undefined ||
            filter.value === null ||
            filter.value === ""
        ) {
            continue;
        }

        conditions.push(
            `${filter.field} ${filter.operator ?? "="} $${index}`
        );

        values.push(
            filter.operator === "ILIKE"
                ? `%${String(filter.value)}%`
                : filter.value
        );

        index++;

    }

    return {
        where:
            conditions.length > 0
                ? `WHERE ${conditions.join(" AND ")}`
                : "",
        values
    };

}