import { Router, Request, Response } from 'express'
import { getAllNotesController } from '../controllers/notes/get-all.controller'
import ticketController from '../controllers/ticket/ticket.controller'
class IndexRouter {

    public router: Router = Router()
    constructor() {
        this.routes()
    }

    routes() {
        this.router.get('/', ticketController.getAll)
        this.router.get('/reset-count', ticketController.resetCount)
        this.router.get('/generate', ticketController.generate)
        this.router.get('/notes', getAllNotesController)
    }
}

const indexRouter = new IndexRouter()
export default indexRouter.router