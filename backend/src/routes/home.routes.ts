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
 * Rutas del módulo Home.
 * ----------------------------------------------------------------
 */

import { Router } from "express";
import { getHomeController } from "../controllers/home.controller";

const router: Router = Router();

/**
 * ----------------------------------------------------------------
 * Home Routes
 * ----------------------------------------------------------------
 */

/**
 * GET /api/home
 * Obtiene el contenido principal de la pantalla Home.
 */
router.get("/", getHomeController);

export default router;