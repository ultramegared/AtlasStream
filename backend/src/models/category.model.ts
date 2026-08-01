/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: category.model.ts
 * Path: backend/src/models/category.model.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Category domain models.
 * ----------------------------------------------------------------
 */

export interface Category {

    id: string;

    name: string;

    slug: string;

    description: string | null;

    isActive: boolean;

    createdAt: Date;

    updatedAt: Date;

}

export interface CreateCategory {

    name: string;

    description?: string;

}

export interface UpdateCategory {

    name?: string;

    description?: string | null;

    isActive?: boolean;

}

export interface CategoryFilters {

    search?: string;

    isActive?: boolean;

    page: number;

    limit: number;

}