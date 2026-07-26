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
 * Controlador para la gestión del Home.
 * ----------------------------------------------------------------
 */

import { Request, Response, NextFunction } from "express";
import { getHome } from "../services/home.service";

/**
 * Obtiene el contenido principal del Home.
 */
export async function getHomeController(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const home = await getHome();

    res.status(200).json({
      success: true,
      data: home,
    });
  } catch (error) {
    next(error);
  }
}