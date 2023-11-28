import {Request,Response} from "express";
import { ImageeneModel } from "../database/imageene/model";
//Method GET
//get all images
export const getAllImages = async(req:Request,res:Response) => {
    try{
    const data = await ImageeneModel.find();
    res.status(200).json({status:"200 ok", data});
}catch(error){
    res.json({msg:error});
}};
//Method GET
//get one image by id
export const getOneImage = async(req:Request,res:Response) => {
    const {id} = req.params;
    try{
    const data = await ImageeneModel.findById({_id:id});
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
export const createImage = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const { path } = req.file;
  
      const image = new ImageeneModel({ name, path });
      await image.save();

      console.log(image)
  
      res.json(image);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
//Method DELETE
//Delete an image
export const deleteOneImage = async (req:Request,res:Response) =>{
    const {id} = req.params;
    try{
        const deleteImage = await ImageeneModel.findByIdAndDelete({_id:id});
        res.status(200).json({status:"200 ok", msg:"Image deleted successfully"});
        if(!deleteImage){
            res.status(404).json({error:"Image not found"});
        }else{
            res.json(deleteImage);
        }
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
  
      const image = await ImageeneModel.findByIdAndUpdate(id, { name }, { new: true });
      if (!image) {
        res.status(404).json({ message: 'Image not found' });
        return;
      }
      res.json(image);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  