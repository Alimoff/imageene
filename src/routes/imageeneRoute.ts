import {Router} from 'express';
import {Imageene} from "../controller/";
// import {upload} from "../middlewares/upload"
import multer from 'multer';
import { ImageModel } from '../database/imageModel';

// const upload = multer({dest:'static/'});

const Storage = multer.diskStorage({
    destination:'../static',
    filename:(req,file,cb) =>{
        cb(null,file.originalname);
    }
});

const upload = multer({
    storage:Storage
}).single('image');

const imageeneRouter = Router();

imageeneRouter.get("/image", Imageene.getAllImages);
imageeneRouter.get("/image/:id", Imageene.getOneImage);
// imageeneRouter.post("/image",upload.single('path'),Imageene.createImage);
imageeneRouter.post("/image",(req,res) =>{
    upload(req,res, (err)=>{
        if(err){
            console.log(err)
        }else{
            const newImage = new ImageModel({
                name:req.body.name,
                image:{
                    data:req.file?.filename,
                    contentType:'image/png'
                },
                userId:req.body.userId
            })
            newImage.save()
            .then(()=> res.send("Successfull")).catch(err =>console.log(err));
        }
    })
} )
imageeneRouter.delete("/image/:id", Imageene.deleteOneImage);
imageeneRouter.put("/image/:id", Imageene.updateImage);

export {imageeneRouter};