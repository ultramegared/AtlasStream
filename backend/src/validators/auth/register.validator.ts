/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: register.validator.ts
 * Path: backend/src/validators/auth/register.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * User registration validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const registerSchema = {

    body: z.object({

        username: z
            .string()
            .trim()
            .min(
                3,
                "Username must be at least 3 characters."
            )
            .max(
                30,
                "Username cannot exceed 30 characters."
            )
            .regex(
                /^[a-zA-Z0-9_.]+$/,
                "Username contains invalid characters."
            ),

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
                "Password cannot exceed 128 characters."
            )
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._#-]).+$/,
                "Password must contain uppercase, lowercase, number and special character."
            ),

        firstName: z
            .string()
            .trim()
            .min(
                2,
                "First name must be at least 2 characters."
            )
            .max(
                100,
                "First name cannot exceed 100 characters."
            ),

        lastName: z
            .string()
            .trim()
            .min(
                2,
                "Last name must be at least 2 characters."
            )
            .max(
                100,
                "Last name cannot exceed 100 characters."
            )

    })

};

export default registerSchema;