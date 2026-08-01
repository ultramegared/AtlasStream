/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: user-id.validator.ts
 * Path: backend/src/validators/users/user-id.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * User ID validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const userIdSchema = {

    params: z.object({

        id: z
            .uuid("Invalid user identifier.")

    })

};

export default userIdSchema;