import { model, Schema } from 'mongoose'
import { IImage } from './types'

const ImageSchema = new Schema<Partial<IImage>>({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String,
        enum: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
      },
    userId:{
        type:String,
        required:true
    }
})

export const ImageModel = model('Image', ImageSchema)
