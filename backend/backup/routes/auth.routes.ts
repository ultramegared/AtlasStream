import { Router } from "express";
import AuthController from "../controllers/AuthController";

const router = Router();

// Autenticación
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);
router.post("/logout", AuthController.logout);

// Tokens
router.post("/refresh-token", AuthController.refreshToken);

// Recuperación de contraseña
router.post("/forgot-password", AuthController.forgotPassword);
router.post("/reset-password", AuthController.resetPassword);

// Verificación
router.get("/verify-email/:token", AuthController.verifyEmail);
router.post("/resend-verification", AuthController.resendVerificationEmail);

export default router;