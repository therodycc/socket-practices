import { Router, Request, Response } from 'express'
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
    }
}

const indexRouter = new IndexRouter()
export default indexRouter.router