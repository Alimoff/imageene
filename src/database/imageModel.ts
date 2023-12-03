import { model, Schema } from 'mongoose'

const ImageSchema = new Schema({
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

