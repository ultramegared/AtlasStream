/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: update-category.validator.ts
 * Path: backend/src/validators/categories/update-category.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Update category validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const updateCategorySchema = {

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
            )
            .optional(),

        description: z
            .string()
            .trim()
            .max(
                500,
                "Description cannot exceed 500 characters."
            )
            .nullable()
            .optional(),

        isActive: z
            .boolean()
            .optional()

    }).refine(

        data => Object.keys(data).length > 0,

        {
            message: "At least one field must be provided."
        }

    )

};

export default updateCategorySchema;