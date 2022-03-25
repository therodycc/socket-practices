import express, { application, Application, urlencoded } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import indexRouter from './routes'
import { createServer } from 'http'
import { Server } from 'socket.io'


class IndexServer {
    private app: Application = express()
    private http = createServer(this.app)
    public io = new Server(this.http)

    constructor() {
        this.config()
        this.routes()
    }

    private config() {
        this.app.set('port', process.env.PORT || 5000)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(urlencoded({ extended: false }))
    }

    private routes() {
        this.app.use('/', indexRouter)
        this.io.on('connection', (client) => {
            console.log('New user connected', { client });
        })
    }

    socketConnection() {
        return this.io.on('connection', (server) => {
            return server
            console.log('connection backend', server);
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
indexServer.socketConnection()

export const ioServer = indexServer.socketConnection()
