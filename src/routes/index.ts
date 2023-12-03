import {Router} from "express";
import {imageeneRouter} from "./imageeneRoute";
import { authRouter } from "./authRoutes";

const router = Router();

const helloText:any = "All images => 'https://imageene-backend.up.railway.app'"
router.use("/api", imageeneRouter);
router.use("/api", authRouter);
router.use('/',helloText)

export {router};