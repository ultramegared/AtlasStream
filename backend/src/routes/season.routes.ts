/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: season.routes.ts
 * Path: backend/src/routes/season.routes.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Season routes.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import seasonController from "@/controllers/season.controller";

import { validate } from "@/middleware";

import {
    seasonIdSchema,
    seasonContentSchema
} from "@/validators/seasons";

const router = Router();

router.get(
    "/content/:contentId",
    validate(seasonContentSchema),
    seasonController.getByContentId
);

router.get(
    "/:id",
    validate(seasonIdSchema),
    seasonController.getById
);

export default router;