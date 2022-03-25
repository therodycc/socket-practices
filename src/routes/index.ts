import { Router, Request, Response } from 'express'
import { createNoteController } from '../controllers/notes/create.controller'
import { getAllNotesController } from '../controllers/notes/get-all.controller'
import ticketController from '../controllers/ticket/ticket.controller'
import routerRoutes from './notes'
class IndexRouter {

    public router: Router = Router()
    constructor() {
        this.routes()
    }

    routes() {
        this.router.get('/', ticketController.getAll)
        this.router.get('/reset-count', ticketController.resetCount)
        this.router.get('/generate', ticketController.generate)
        this.router.use('/notes', routerRoutes)
    }
}

const indexRouter = new IndexRouter()
export default indexRouter.router