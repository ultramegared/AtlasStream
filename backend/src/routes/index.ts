import { Router } from "express";

import authRoutes from "./authRoutes";
import userRoutes from "./userRoutes";
import movieRoutes from "./movieRoutes";

const router = Router();

router.use("/auth", authRoutes);

router.use("/users", userRoutes);

router.use("/movies", movieRoutes);

export default router;