import {Router} from 'express';
import {Imageene} from "../controller/";

const imageeneRouter = Router();

imageeneRouter.get("/image", Imageene.getAllImages);
imageeneRouter.get("/image/:id", Imageene.getOneImage);
imageeneRouter.post("/image",Imageene.createImage);
imageeneRouter.delete("/image/:id", Imageene.deleteOneImage);
imageeneRouter.put("/image/:id", Imageene.updateImage);

export {imageeneRouter};