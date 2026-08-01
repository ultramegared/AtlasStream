/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: movie-id.validator.ts
 * Path: backend/src/validators/movies/movie-id.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Movie ID validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const movieIdSchema = {

    params: z.object({

        id: z
            .uuid("Invalid movie identifier.")

    })

};

export default movieIdSchema;