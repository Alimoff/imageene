import {Request,Response} from "express";
import { UserModel } from "../database/users/model";
import { ImageModel } from "../database/imageModel";
import imageType from "image-type";
import path from "path";
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
    res.status(200).json({status:"200 ok", data});
    if(!data){
        res.status(404).json({error:"Image not found"});
    }else{
        res.json(data);
    }}catch(error){
        res.json({msg:error});
    }};
//Method POST
//Add new image
export const createImage = async(req:Request,res:Response)=>{
 
   const {name,userId} = req.body;
   let image = "";
   if(req.file) image = `../static/${req.file.fieldname}`

   try{
    const newImage = new ImageModel({
      name,userId,image
    })
    await newImage.save();
    return res.status(200).json({
      code:200,message:"Image created successfully",
      data:newImage,
    });
  }catch(error){
    res.status(501).json({
      code:501,message:error.message,error:true
    })
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
  