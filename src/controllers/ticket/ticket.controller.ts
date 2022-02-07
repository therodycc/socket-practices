import { Request, Response } from 'express';
import getService from '../../services/ticket/get.service'
import nextService from '../../services/ticket/next.service';
import resetCountService from '../../services/ticket/reset-count.service'
class TicketController {
    constructor() {

    }

    get(req: Request, res: Response) {
        const dataTicket = getService()
        return res.json(dataTicket.data);
    }

    resetCount(req: Request, res: Response) {
        const result = resetCountService()
        return res.json(result)
    }

    generate(req: Request, res: Response) {
        const result = nextService()
        return res.json(result)
    }



}

const ticketController = new TicketController()
export default ticketController