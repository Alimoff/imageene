import {Request,Response} from "express";
import { ImageeneModel } from "../database/imageene/model";
//Method GET
//get all images
export const getAllImages = async(req:Request,res:Response) => {
    const data = await ImageeneModel.find();
    res.status(200).json({status:"200 ok", data});
};
//Method GET
//get one image by id
export const getOneImage = async(req:Request,res:Response) => {
    const {id} = req.params;
    const data = await ImageeneModel.findById({_id:id});
    res.status(200).json({status:"200 ok", data});
};
//Method POST
//Add new image
export const addNewImage = async(req:Request, res:Response) => {
    const {title,image_url,description} = req.body;
    try{
        const newImage = new ImageeneModel({
            title,image_url,description
        });
        await newImage.save();
        res.status(201).json({status:"200 ok", newImage});
    }catch(error){
        res.json({msg:error});
    }
};
//Method DELETE
//Delete an image
export const deleteOneImage = async (req:Request,res:Response) =>{
    const {id} = req.params;
    try{
        const deleteImage = await ImageeneModel.findByIdAndDelete({_id:id});
        res.status(200).json({status:"200 ok", msg:"Image deleted successfully"})
    }catch(error){
        res.json({msg:error})
    }
};
