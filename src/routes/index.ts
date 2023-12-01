import {Router} from "express";
import {imageeneRouter} from "./imageeneRoute";
import { authRouter } from "./authRoutes";

const router = Router();

router.use("/api", imageeneRouter);
router.use("/api", authRouter);

export {router};