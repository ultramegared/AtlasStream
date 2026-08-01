/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: category-id.validator.ts
 * Path: backend/src/validators/categories/category-id.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Category ID validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const categoryIdSchema = {

    params: z.object({

        id: z
            .uuid("Invalid category identifier.")

    })

};

export default categoryIdSchema;