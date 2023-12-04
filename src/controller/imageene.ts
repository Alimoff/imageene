import {Request,Response} from "express";
import { UserModel } from "../database/users/model";
import { ImageModel } from "../database/imageModel";
import { upload } from "../middlewares/upload";
import imageType from "image-type";
//Method GET
//get all images
export const getAllImages = async(req:Request,res:Response) => {
    try{
    const data = await ImageModel.find();
    res.status(200).json({status:"200 ok", data});
}catch(error){
    res.json({msg:error});
}};
//Method GET
//get one image by id
export const getOneImage = async(req:Request,res:Response) => {
    const {id} = req.params;
    try{
    const data = await ImageModel.findById({_id:id});
   return  res.status(200).json({status:"200 ok", data});
  
    }catch(error){
        res.json({msg:error});
    }};
//Method POST
//Add new image
export const createImage = async(req:Request,res:Response)=>{
  try{
    upload(req,res, (err)=>{
      if(err){
        res.send(err);
      }else{
        const newImage = new ImageModel({
          name:req.body.name,
          image:{
            data:req.file?.filename,

          },
          userId:req.body.userId
        })
        newImage.save()
        .then(()=> res.send("Image created succesfully"))
        .catch(err =>res.send(err));

      }
    })
  }catch(error){
    res.send(error)
  }
}
//Method DELETE
//Delete an image
export const deleteOneImage = async (req:Request,res:Response) =>{
    const {id} = req.params;
    try{
        const deleteImage = await ImageModel.findOneAndDelete({_id:id});
       return  res.status(200).json({status:"200 ok", msg:"Image deleted successfully"});
        // if(!deleteImage){
        //     return res.status(404).json({error:"Image not found"});
        // }else{
        //     return res.json(deleteImage);
        // }
    }catch(error){
        res.json({msg:error})
    }
};
//Method PUT
//Update an image
export const updateImage = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
  
      const image = await ImageModel.findByIdAndUpdate(id, { name }, { new: true });
      if (!image) {
        res.status(404).json({ message: 'Image not found' });
        return;
      }
      res.json(image);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
