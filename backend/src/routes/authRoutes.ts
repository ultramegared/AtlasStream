import { Router } from "express";
import { register } from "../controllers/authController";

const router = Router();

// Registro de usuarios
router.post("/register", register);

export default router;