import {Request,Response} from "express";
import { ImageeneModel } from "../database/imageene/model";
import { UserModel } from "../database/users/model";
import { ImageModel } from "../database/imageModel";
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

interface AuthenticatedRequest extends Request {
  user: {
    email: string;
  };
  // name:string,
  // image:{
  //   data:Buffer,
  //   contentType:string
  // }
}

// export const createImage = async (req:AuthenticatedRequest & {user:any}, res: Response) => {
//   try {
//      const userId = req.body.userId
//       const { name } = req.body.name;
//       const {image} = req.file?.filename;

//       const user = await UserModel.findById(userId)
      
//       if (!user){
//         return res.status(404).json({message:'User not found'});
//       }
//       else{
//       const newImage = new ImageModel({ 
//       name,
//       image:{data:image.file.filename,contentType:'image/png'}
//       ,userId});
//       await newImage.save();
//       return res.status(200).json({message:"Image uploaded succesfully"})
//       }
//     } catch (error) {
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   };
//Method DELETE
//Delete an image
export const deleteOneImage = async (req:Request,res:Response) =>{
    const {id} = req.params;
    try{
        const deleteImage = await ImageeneModel.findOneAndDelete({_id:id});
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
  