import {model,Schema,SchemaTypes} from 'mongoose';
import { IUser } from './types';

const userSchema = new Schema<Partial<IUser>>(
    {
        name:{
        type:String,
        requred:true
            },
        surname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
}
);

export const UserModel = model("Users",userSchema);
