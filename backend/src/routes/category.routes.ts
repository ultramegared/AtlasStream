/**
 * ----------------------------------------------------------------
 * AtlasStream
 * ----------------------------------------------------------------
 * File: category.routes.ts
 * Path: backend/src/routes/category.routes.ts
 * Author: ultramegared
 * Project: AtlasStream
 * Language: TypeScript
 * ----------------------------------------------------------------
 * Description:
 * Category routes.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import categoryController from "@/controllers/category.controller";

import {
    authenticate,
    authorize,
    validate
} from "@/middleware";

import {
    createCategorySchema,
    updateCategorySchema,
    categoryIdSchema,
    categoryListSchema
} from "@/validators/categories";

import { USER_ROLES } from "@/utils";

const router = Router();

router.get(
    "/",
    validate(categoryListSchema),
    categoryController.getAll
);

router.get(
    "/:id",
    validate(categoryIdSchema),
    categoryController.getById
);

router.post(
    "/",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(createCategorySchema),
    categoryController.create
);

router.patch(
    "/:id",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(categoryIdSchema),
    validate(updateCategorySchema),
    categoryController.update
);

router.delete(
    "/:id",
    authenticate,
    authorize(USER_ROLES.ADMIN),
    validate(categoryIdSchema),
    categoryController.delete
);

export default router;