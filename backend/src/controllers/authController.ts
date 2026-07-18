import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService";

export async function register(req: Request, res: Response) {
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
      message: error instanceof Error ? error.message : "Error interno.",
    });
  }
}

export async function login(req: Request, res: Response) {
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
      message: error instanceof Error ? error.message : "Correo o contraseña incorrectos.",
    });
  }
}