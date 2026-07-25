/**
 * ----------------------------------------------------------------
 * AtlasStream Backend API
 * ----------------------------------------------------------------
 * Author: ultramegared
 * Project: AtlasStream
 * Programming Language: TypeScript
 * Supported Languages:
 *   - English (en)
 *   - Español (es)
 * License: Proprietary
 * ----------------------------------------------------------------
 * Description:
 * Enrutador principal de la API de AtlasStream.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import movieRoutes from "./movieRoutes";

const router = Router();

/**
 * ----------------------------------------------------------------
 * API Routes
 * ----------------------------------------------------------------
 */

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/movies", movieRoutes);

export default router;