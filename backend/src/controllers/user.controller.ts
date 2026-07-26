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
 * Controlador para la gestión del perfil del usuario.
 * ----------------------------------------------------------------
 */

import { Request, Response } from "express";

import {
  changePassword,
  getProfile,
  updateProfile,
} from "../services/user.service";

/**
 * Get the authenticated user's profile.
 */
export async function profile(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const user = await getProfile(req.user!.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Usuario no encontrado.",
    });
  }
}

/**
 * Update the authenticated user's profile.
 */
export async function update(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const user = await updateProfile(req.user!.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Perfil actualizado correctamente.",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "No se pudo actualizar el perfil.",
    });
  }
}

/**
 * Change the authenticated user's password.
 */
export async function password(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { currentPassword, newPassword } = req.body;

    await changePassword(
      req.user!.id,
      currentPassword,
      newPassword
    );

    return res.status(200).json({
      success: true,
      message: "Contraseña actualizada correctamente.",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "No se pudo cambiar la contraseña.",
    });
  }
}