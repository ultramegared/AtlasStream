/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: login.validator.ts
 * Path: backend/src/validators/auth/login.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Login request validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const loginSchema = {

    body: z.object({

        email: z
            .email("Invalid email address.")
            .trim()
            .toLowerCase(),

        password: z
            .string()
            .min(
                8,
                "Password must be at least 8 characters."
            )
            .max(
                128,
                "Password is too long."
            )

    })

};

export default loginSchema;