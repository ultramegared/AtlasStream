/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: update-profile.validator.ts
 * Path: backend/src/validators/users/update-profile.validator.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Update user profile validation schema.
 * ----------------------------------------------------------------
 */

import { z } from "zod";

export const updateProfileSchema = {

    body: z.object({

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
            )
            .optional(),

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
            .optional(),

        avatarUrl: z
            .url("Invalid avatar URL.")
            .nullable()
            .optional(),

        biography: z
            .string()
            .trim()
            .max(
                500,
                "Biography cannot exceed 500 characters."
            )
            .nullable()
            .optional()

    }).refine(

        data => Object.keys(data).length > 0,

        {
            message: "At least one field must be provided."
        }

    )

};

export default updateProfileSchema;