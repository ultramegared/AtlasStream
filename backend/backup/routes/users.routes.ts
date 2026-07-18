import { Router } from "express";
import UsersController from "../controllers/UsersController";

const router = Router();

// Obtener usuarios
router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getUserById);

// Crear usuario
router.post("/", UsersController.createUser);

// Actualizar usuario
router.put("/:id", UsersController.updateUser);

// Actualización parcial
router.patch("/:id", UsersController.patchUser);

// Eliminar usuario
router.delete("/:id", UsersController.deleteUser);

// Estado del usuario
router.patch("/:id/status", UsersController.changeUserStatus);

// Rol del usuario
router.patch("/:id/role", UsersController.changeUserRole);

// Avatar del usuario
router.patch("/:id/avatar", UsersController.updateAvatar);

export default router;