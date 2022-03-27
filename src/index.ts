import express, { Application, urlencoded } from 'express'
import cors from 'cors'
import { createServer } from 'http'
import morgan from 'morgan'
import { Server } from 'socket.io'
import indexRouter from './routes'
import { configApp } from './config/server'


class IndexServer {
    private app: Application = express()
    private http = createServer(this.app)
    public io = new Server(this.http)

    constructor() {
        this.config()
        this.routes()
    }

    private config() {
        this.app.set('port', configApp.app.port || 8000)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(urlencoded({ extended: false }))
    }

    private routes() {
        this.app.use('/', indexRouter)
    }

    socketConnection() {
        return this.io.on('connection', (client) => {
            console.table({ clientId: client.id, disconnected: client.disconnected });
            return client
        })
    }

    start() {
        this.http.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        })
    }



}

const indexServer = new IndexServer()
indexServer.start()
const ioConnection = indexServer.socketConnection()
export const ioServer = ioConnection
