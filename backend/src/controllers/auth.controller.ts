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
 * Controlador para el registro e inicio de sesión de usuarios.
 * ----------------------------------------------------------------
 */

import { Request, Response } from "express";

import {
  loginUser,
  registerUser,
} from "../services/auth.service";

/**
 * Register a new user.
 */
export async function register(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "Usuario registrado correctamente.",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Error interno del servidor.",
    });
  }
}

/**
 * Authenticate an existing user.
 */
export async function login(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { email, password } = req.body;

    const data = await loginUser(email, password);

    return res.status(200).json({
      success: true,
      message: "Inicio de sesión correcto.",
      data,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Correo electrónico o contraseña incorrectos.",
    });
  }
}