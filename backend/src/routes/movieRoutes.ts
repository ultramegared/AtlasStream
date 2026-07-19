import { Router } from "express";
import {
  index,
  show,
  store,
  update,
  destroy,
} from "../controllers/movieController";

import { authenticateToken } from "../middleware/authMiddleware";

const router = Router();

router.get("/", index);

router.get("/:id", show);

router.post("/", authenticateToken, store);

router.put("/:id", authenticateToken, update);

router.delete("/:id", authenticateToken, destroy);

export default router;