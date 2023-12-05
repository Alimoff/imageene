import { Document, ObjectId } from "mongoose";

export interface IImage extends Document {
    name: string;
    image:string;
    userId: string;
  }