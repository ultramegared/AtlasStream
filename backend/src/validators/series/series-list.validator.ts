/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: series-list.validator.ts
 * Path: backend/src/validators/series/series-list.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Series list query validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const seriesListSchema = {

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

        genreId: z
            .uuid("Invalid genre identifier.")
            .optional(),

        categoryId: z
            .uuid("Invalid category identifier.")
            .optional(),

        languageId: z
            .uuid("Invalid language identifier.")
            .optional(),

        countryId: z
            .uuid("Invalid country identifier.")
            .optional(),

        releaseYear: z
            .coerce
            .number()
            .int()
            .min(1888)
            .optional(),

        isPublished: z
            .coerce
            .boolean()
            .optional()

    })

};

export default seriesListSchema;