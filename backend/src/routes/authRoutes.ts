import { Router } from "express";
import { register, login } from "../controllers/authController";

const router = Router();

// Registro de usuarios
router.post("/register", register);

// Inicio de sesión
router.post("/login", login);

export default router;