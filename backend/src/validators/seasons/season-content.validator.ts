/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: season-content.validator.ts
 * Path: backend/src/validators/seasons/season-content.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Season content validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const seasonContentSchema = {

    params: z.object({

        contentId: z
            .uuid("Invalid content identifier.")

    })

};

export default seasonContentSchema;