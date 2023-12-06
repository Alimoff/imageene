import {Request,Response} from "express";
import { ImageModel } from "../database/imageModel";
import path from "path";
//Method GET
//get all images
export const getAllImages = async(req:Request,res:Response) => {
    try{
    const data = await ImageModel.find();
    res.status(200).json({status:"200 ok", data});
}catch(error){
    res.json({message:error});
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
        res.json({message:error});
    }};
//Method POST
//Add new image
export const createImage = async(req:Request,res:Response)=>{
  const imageName = req.params.imageName;
   const {name,userId} = req.body;
   let image = "";
   if(req.file) image = `${req.file.filename}`
   if (!imageName) {
   try{
    const newImage = new ImageModel({
      name,userId,image
    })
    await newImage.save();
    return res.status(200).json({
      message:"Image created successfully",
      data:newImage,
      userId:userId
    });
  }catch(error){
    res.status(501).json({message:error})
  }
  }else{
    return res.status(501).json({message: 'An error occured'});

  }
}
//Method DELETE
//Delete an image
export const deleteOneImage = async (req:Request,res:Response) =>{
    const {id} = req.params;
    try{
        const deleteImage = await ImageModel.findOneAndDelete({_id:id});
        if(deleteImage){
        await deleteImage.save()

        return  res.status(200).json({status:"200 ok", message:"Image deleted successfully"});
        }
        else{
          res.status(404).json({message: 'Image does not exist'});
        }
    }catch(error){
        res.status(500).json({message:error})
    }
};
//Method PUT
//Update an image
export const updateImage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const updateImage = await ImageModel.findById({_id:id});
    if (!updateImage) {
      res.status(404).json({ message: 'Image not found' });
      return;
    }
    // Update image name in the database
    updateImage.name = name;
    updateImage.image = `${req.file?.filename}`;

    await updateImage.save();

    res.json(updateImage);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

  export const getImage = async (req:Request,res:Response) =>{
    try{
    const {imageName} = req.params;
    const imagePath = path.join(__dirname, '../../static/',imageName);

    res.setHeader('Content-Disposition', 'inline');
    res.setHeader('Content-Type', 'image/jpeg'|| 'image/png' || 'image/jpg'); // Adjust the MIME type based on your image format

    res.sendFile(imagePath);
    }catch(error){
      res.status(500).json({message: 'Internal server error'});
    }
  }