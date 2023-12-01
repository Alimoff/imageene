import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
  email: string;
  // Add other user properties as needed
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  // Add other user properties as needed
});

export const UserModel = mongoose.model<User>('User', userSchema);
