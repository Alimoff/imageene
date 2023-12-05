import express, { Application } from 'express'
import cors from 'cors'
import cokierPreser from 'cookie-parser'
import morgan from 'morgan'
import { router } from './routes'
import * as path from 'path'

const app: Application = express()
//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
//registretion router
app.use(router) 
app.use('/static', express.static(path.join(__dirname, '../static')));

// //Multer error file handling
// app.use((err,req,res,next) =>{
//     if(err instanceof multer.MulterError){
//         return res.status(418).json({
//             err_code:err.code,
//             err_message:err.message,
//         });
//     }else{
//         return res.status(500).json({
//             err_code:500,
//             err_message:"Something went wrong!"
//         });
//     }
// });

//regiteriation cokies
app.use(cokierPreser())

export { app }
