import { getAllTicketsService } from "./getAll.service"
import { saveFileTicketService } from "./save-file.service"

export const nextTicketsService = () => {

    const ticketInfo = getAllTicketsService()

    const result = saveFileTicketService({
        lastTicket: +ticketInfo.data.lastTicket + 1,
        today: new Date().getDate()
    })

    console.log({result}, 'Next service')

    return { result, message: `The next ticket is ${result.data.lastTicket}` }
}