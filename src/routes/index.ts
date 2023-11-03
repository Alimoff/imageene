import {Router} from "express";
import {imageeneRouter} from "./imageeneRoute";

const router = Router();

router.use("/api", imageeneRouter);

export {router};