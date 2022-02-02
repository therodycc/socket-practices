import get from '../../services/ticket/get.service'
class TicketController {
    constructor() {
        const dataTicket = get()
        console.log(dataTicket.data);
    }
}

const ticketController = new TicketController()
export default ticketController