import { Router, Request, Response } from 'express'
class IndexRouter {

    public router: Router = Router()
    constructor() {
        this.routes()
    }

    routes() {
        this.router.get('/', (req: Request, res: Response) => {
            res.status(200).json({
                message: "Index Router"
            })
        })
    }
}

const indexRouter = new IndexRouter()
export default indexRouter.router