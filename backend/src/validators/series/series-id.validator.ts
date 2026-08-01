/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: series-id.validator.ts
 * Path: backend/src/validators/series/series-id.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Series ID validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const seriesIdSchema = {

    params: z.object({

        id: z
            .uuid("Invalid series identifier.")

    })

};

export default seriesIdSchema;