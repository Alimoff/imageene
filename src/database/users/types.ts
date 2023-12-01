import { Document, ObjectId } from "mongoose";

export interface IUser {
    _id:ObjectId | string;
    name:string,
    surname:string,
    email:string,
    password:string
}

export type ImageeneDocument = Document & IUser;