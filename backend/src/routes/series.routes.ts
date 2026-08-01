/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: series.routes.ts
 * Path: backend/src/routes/series.routes.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Series routes.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import seriesController from "@/controllers/series.controller";

import { validate } from "@/middleware";

import {
    seriesIdSchema,
    seriesSlugSchema,
    seriesListSchema
} from "@/validators/series";

const router = Router();

router.get(
    "/",
    validate(seriesListSchema),
    seriesController.getAll
);

router.get(
    "/slug/:slug",
    validate(seriesSlugSchema),
    seriesController.getBySlug
);

router.get(
    "/:id",
    validate(seriesIdSchema),
    seriesController.getById
);

export default router;