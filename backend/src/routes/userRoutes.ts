import { Router } from "express";
import {
  profile,
  update,
  password,
} from "../controllers/userController";

import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/profile", authenticateToken, profile);

router.put("/profile", authenticateToken, update);

router.put("/password", authenticateToken, password);

export default router;