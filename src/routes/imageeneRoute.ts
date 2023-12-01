import {Router} from 'express';
import {Imageene} from "../controller/";
// import {upload} from "../middlewares/upload"
import multer from 'multer';

const upload = multer({dest:'static/'});
const imageeneRouter = Router();

imageeneRouter.get("/image", Imageene.getAllImages);
imageeneRouter.get("/image/:id", Imageene.getOneImage);
imageeneRouter.post("/image",upload.single('path'),Imageene.createImage);
imageeneRouter.delete("/image/:id", Imageene.deleteOneImage);
imageeneRouter.put("/image/:id", Imageene.updateImage);

export {imageeneRouter};