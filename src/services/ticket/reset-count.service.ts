import { saveFileTicketService } from './save-file.service'

export const resetCountTicketsService = () => {
    const result = saveFileTicketService({
        lastTicket: 0,
        today: new Date().getDate()
    })

    return { data: result.data, message: "the system Has been initialized" }
}