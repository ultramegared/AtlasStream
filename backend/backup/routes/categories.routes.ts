import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

const router = Router();

/* ============================================================
   Categorías
============================================================ */

// Obtener todas las categorías
router.get("/", CategoriesController.getAllCategories);

// Obtener una categoría por ID
router.get("/:id", CategoriesController.getCategoryById);

// Obtener contenido de una categoría
router.get("/:id/content", CategoriesController.getCategoryContent);

// Crear categoría
router.post("/", CategoriesController.createCategory);

// Actualizar categoría
router.put("/:id", CategoriesController.updateCategory);

// Actualización parcial
router.patch("/:id", CategoriesController.patchCategory);

// Activar o desactivar categoría
router.patch("/:id/status", CategoriesController.changeCategoryStatus);

// Eliminar categoría
router.delete("/:id", CategoriesController.deleteCategory);

export default router;