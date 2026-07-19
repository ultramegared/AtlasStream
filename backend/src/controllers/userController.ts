import { Request, Response } from "express";
import {
  getProfile,
  updateProfile,
  changePassword,
} from "../services/userService";

export async function profile(req: Request, res: Response) {
  try {
    const user = await getProfile(req.user!.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error instanceof Error ? error.message : "Usuario no encontrado.",
    });
  }
}

export async function update(req: Request, res: Response) {
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
      message: error instanceof Error ? error.message : "No se pudo actualizar el perfil.",
    });
  }
}

export async function password(req: Request, res: Response) {
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
      message: error instanceof Error ? error.message : "No se pudo cambiar la contraseña.",
    });
  }
}