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
 * Centraliza el registro de todos los módulos de rutas.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import authRoutes from "./auth.routes";
import movieRoutes from "./movie.routes";
import userRoutes from "./user.routes";

const router: Router = Router();

/**
 * ----------------------------------------------------------------
 * Authentication Routes
 * ----------------------------------------------------------------
 */
router.use("/auth", authRoutes);

/**
 * ----------------------------------------------------------------
 * User Routes
 * ----------------------------------------------------------------
 */
router.use("/users", userRoutes);

/**
 * ----------------------------------------------------------------
 * Movie Routes
 * ----------------------------------------------------------------
 */
router.use("/movies", movieRoutes);

export default router;