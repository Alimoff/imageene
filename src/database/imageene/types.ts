import { Document, ObjectId } from "mongoose";

export interface IImage extends Document {
    name: string;
    image: {
      data: Buffer;
      contentType: string;
    };
    userId: string;
  }