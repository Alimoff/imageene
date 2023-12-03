import { model, Schema } from 'mongoose'

const ImageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    userId:{
        type:String,
        required:true
    }
})

export const ImageModel = model('Image', ImageSchema)

