import {Router} from 'express';
import {Imageene} from "../controller/";
import {fileUpload} from "../middlewares/upload"

const imageeneRouter = Router();

imageeneRouter.get("/image", Imageene.getAllImages);
imageeneRouter.get("/image/:id", Imageene.getOneImage);
imageeneRouter.post("/image",fileUpload('static'),Imageene.createImage);
imageeneRouter.delete("/image/:id", Imageene.deleteOneImage);
imageeneRouter.put("/image/:id", Imageene.updateImage);
imageeneRouter.get('/static/:imageName',Imageene.getImage);

export {imageeneRouter};