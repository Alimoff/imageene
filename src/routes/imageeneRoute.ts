import {Router} from 'express';
import {Imageene} from "../controller/";
// import {upload} from "../middlewares/upload"
import multer from 'multer';
import { ImageModel } from '../database/imageModel';

// const upload = multer({dest:'static/'});

const imageeneRouter = Router();

imageeneRouter.get("/image", Imageene.getAllImages);
imageeneRouter.get("/image/:id", Imageene.getOneImage);
imageeneRouter.post("/image",Imageene.createImage);
imageeneRouter.delete("/image/:id", Imageene.deleteOneImage);
imageeneRouter.put("/image/:id", Imageene.updateImage);

export {imageeneRouter};