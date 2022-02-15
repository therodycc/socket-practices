import { Request, Response } from 'express';
import { getAllTicketsService } from '../../services/ticket/getAll.service'
import { nextTicketsService } from '../../services/ticket/next.service';
import { resetCountTicketsService } from '../../services/ticket/reset-count.service'
class TicketController {

    getAll(req: Request, res: Response) {
        const dataTicket = getAllTicketsService()
        return res.json(dataTicket.data);
    }

    resetCount(req: Request, res: Response) {
        const result = resetCountTicketsService()
        return res.json(result)
    }

    generate(req: Request, res: Response) {
        const result = nextTicketsService()
        return res.json(result)
    }

}

const ticketController = new TicketController()
export default ticketController