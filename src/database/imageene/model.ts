import {model,Schema,SchemaTypes} from 'mongoose';
import { IImageene } from './types';

const imageeneSchema = new Schema<Partial<IImageene>>(
    {
        name:{
        type:String,
        requred:true
            },
        filename:{
            type:String,
            required:true
        },
        path:{
            type:String,
            required:true
        }
}
);

export const ImageeneModel = model("Imageene",imageeneSchema);