import { Request, Response } from "express";
import { registerUser } from "../services/authService";

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