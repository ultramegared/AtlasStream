/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: category-list.validator.ts
 * Path: backend/src/validators/categories/category-list.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Category list query validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const categoryListSchema = {

    query: z.object({

        page: z
            .coerce
            .number()
            .int()
            .min(1)
            .default(1),

        limit: z
            .coerce
            .number()
            .int()
            .min(1)
            .max(100)
            .default(20),

        search: z
            .string()
            .trim()
            .optional(),

        isActive: z
            .coerce
            .boolean()
            .optional()

    })

};

export default categoryListSchema;