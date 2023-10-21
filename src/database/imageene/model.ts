import {model,Schema,SchemaTypes} from 'mongoose';
import { IIMageene } from './types';

const imageeneSchema = new Schema<Partial<IIMageene>>(
    {
        title:{
        type:String,
        requred:false
            },
        image_url:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:false
        }
}
);

export const ImageeneModel = model("Imageene",imageeneSchema);