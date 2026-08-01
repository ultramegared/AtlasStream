/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: series-slug.validator.ts
 * Path: backend/src/validators/series/series-slug.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Series slug validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const seriesSlugSchema = {

    params: z.object({

        slug: z
            .string()
            .trim()
            .min(
                2,
                "Series slug is required."
            )
            .max(
                300,
                "Series slug is too long."
            )
            .regex(
                /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                "Invalid series slug."
            )

    })

};

export default seriesSlugSchema;