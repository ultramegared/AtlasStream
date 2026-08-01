/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: category.service.ts
 * Path: backend/src/services/category.service.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Category business logic.
 * ----------------------------------------------------------------
 */

import categoryRepository from "@/repositories/category.repository";

import {
    Category,
    CategoryFilters,
    CreateCategory,
    UpdateCategory
} from "@/models/category.model";

import {
    ApiError,
    HTTP_STATUS,
    slugify
} from "@/utils";

class CategoryService {

    public async getById(
        id: string
    ): Promise<Category> {

        const category = await categoryRepository.findById(id);

        if (!category) {

            throw new ApiError(
                HTTP_STATUS.NOT_FOUND,
                "CATEGORY_NOT_FOUND",
                "Category not found."
            );

        }

        return category;

    }

    public async getAll(
        filters: CategoryFilters
    ): Promise<Category[]> {

        return categoryRepository.findAll(filters);

    }

    public async create(
        payload: CreateCategory
    ): Promise<Category> {

        const slug = slugify(payload.name);

        const existingCategory =
            await categoryRepository.findBySlug(slug);

        if (existingCategory) {

            throw new ApiError(
                HTTP_STATUS.CONFLICT,
                "CATEGORY_ALREADY_EXISTS",
                "Category already exists."
            );

        }

        return categoryRepository.create({

            ...payload,

            slug

        });

    }

    public async update(

        id: string,

        payload: UpdateCategory

    ): Promise<Category> {

        const existingCategory =
            await categoryRepository.findById(id);

        if (!existingCategory) {

            throw new ApiError(

                HTTP_STATUS.NOT_FOUND,

                "CATEGORY_NOT_FOUND",

                "Category not found."

            );

        }

        await categoryRepository.update(

            id,

            payload

        );

        return (await categoryRepository.findById(id)) as Category;

    }

    public async delete(
        id: string
    ): Promise<void> {

        const category =
            await categoryRepository.findById(id);

        if (!category) {

            throw new ApiError(

                HTTP_STATUS.NOT_FOUND,

                "CATEGORY_NOT_FOUND",

                "Category not found."

            );

        }

        await categoryRepository.delete(id);

    }

}

export default new CategoryService();