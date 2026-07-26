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
 * Rutas para la gestión de películas.
 * ----------------------------------------------------------------
 */

import { Router } from "express";

import {
  destroy,
  index,
  show,
  store,
  update,
} from "../controllers/movie.controller";

import { authenticateToken } from "../middleware/auth.middleware";

const router: Router = Router();

/**
 * ----------------------------------------------------------------
 * Movie Routes
 * ----------------------------------------------------------------
 */

/**
 * Get all movies.
 */
router.get("/", index);

/**
 * Get a movie by ID.
 */
router.get("/:id", show);

/**
 * Create a new movie.
 */
router.post("/", authenticateToken, store);

/**
 * Update a movie.
 */
router.put("/:id", authenticateToken, update);

/**
 * Delete a movie.
 */
router.delete("/:id", authenticateToken, destroy);

export default router;