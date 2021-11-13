import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'

import router from './routes/deposito.js'
import connect from './db/conexion.js'

const app = express()
dotenv.config()

const port =  process.env.PORT || 3000

app.use(express.json())
app.use(cors('*'))
app.use(morgan('tiny'))

app.use('/deposito', router)

connect()
app.listen(port, console.log('Servidor corriendo en el puerto ' + port))