import express from 'express'
import {Request, Response} from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/index'

dotenv.config()

const PORTA = process.env.PORT

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoutes)

server.use((req: Request, res: Response)=>{
    res.send('pages/404')
})

server.listen(PORTA, ()=>{
    console.log(`Servidor rodando na porta: ${PORTA}. Endereço de url: http://localhost:4000`)
})