import { Document, ObjectId } from "mongoose";

export interface IImageene {
    _id:ObjectId | string;
    name:string,
    filename:string,
    path:string
}

export type ImageeneDocument = Document & IImageene;