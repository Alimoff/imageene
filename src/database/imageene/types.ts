import { Document, ObjectId } from "mongoose";

export interface IIMageene {
    _id:ObjectId | string;
    title:string;
    image_url:string;
    description:string;
}

export type ImageeneDocument = Document & IIMageene;