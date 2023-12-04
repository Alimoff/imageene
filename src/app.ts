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

// app.use("../static",express.static('static'));
app.use(express.static(path.join(__dirname, "../../",'/static')));
//regiteriation cokies
app.use(cokierPreser())

export { app }
