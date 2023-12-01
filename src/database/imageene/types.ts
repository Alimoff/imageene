import { Document, ObjectId } from "mongoose";

export interface IImageene {
    _id:ObjectId | string;
    name:string,
    path:string,
    userId:string
}

export type ImageeneDocument = Document & IImageene;