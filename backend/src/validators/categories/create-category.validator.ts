/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: create-category.validator.ts
 * Path: backend/src/validators/categories/create-category.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Create category validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const createCategorySchema = {

    body: z.object({

        name: z
            .string()
            .trim()
            .min(
                2,
                "Category name must be at least 2 characters."
            )
            .max(
                100,
                "Category name cannot exceed 100 characters."
            ),

        description: z
            .string()
            .trim()
            .max(
                500,
                "Description cannot exceed 500 characters."
            )
            .optional()

    })

};

export default createCategorySchema;