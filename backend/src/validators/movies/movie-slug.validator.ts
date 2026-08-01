/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: movie-slug.validator.ts
 * Path: backend/src/validators/movies/movie-slug.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Movie slug validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const movieSlugSchema = {

    params: z.object({

        slug: z
            .string()
            .trim()
            .min(
                2,
                "Movie slug is required."
            )
            .max(
                300,
                "Movie slug is too long."
            )
            .regex(
                /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                "Invalid movie slug."
            )

    })

};

export default movieSlugSchema;