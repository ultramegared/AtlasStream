/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: season-id.validator.ts
 * Path: backend/src/validators/seasons/season-id.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Season ID validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const seasonIdSchema = {

    params: z.object({

        id: z
            .uuid("Invalid season identifier.")

    })

};

export default seasonIdSchema;