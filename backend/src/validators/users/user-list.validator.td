/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: user-list.validator.ts
 * Path: backend/src/validators/users/user-list.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * User list query validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

import {
    USER_ROLES,
    USER_STATUS
} from "@/utils";

export const userListSchema = {

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

        role: z
            .enum([
                USER_ROLES.ADMIN,
                USER_ROLES.MODERATOR,
                USER_ROLES.USER
            ])
            .optional(),

        status: z
            .enum([
                USER_STATUS.ACTIVE,
                USER_STATUS.INACTIVE,
                USER_STATUS.SUSPENDED,
                USER_STATUS.BANNED
            ])
            .optional()

    })

};

export default userListSchema;