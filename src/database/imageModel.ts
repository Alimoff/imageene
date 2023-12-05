import { model, Schema } from 'mongoose'
import { IImage } from './imageene/types'

const ImageSchema = new Schema<Partial<IImage>>({
    name: {
        type: String,
        required: true
    },
    image: {
        type:String,
        required:true
      },
    userId:{
        type:String,
        required:true
    }
})

export const ImageModel = model('Image', ImageSchema)


// const ImageSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     image: {
//         data: Buffer,
//         contentType: String,
//         enum: ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'],
//       },
//     userId:{
//         type:String,
//         required:true
//     }
// })

// export const ImageModel = model('Image', ImageSchema)