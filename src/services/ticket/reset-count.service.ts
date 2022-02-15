import { saveFileTicketService } from './save-file.service'

export const resetCountTicketsService = () => {
    const result = saveFileTicketService({
        lastTicket: 0,
        today: new Date().getDate()
    })

    console.log({result}, 'reset service')

    return { data: result.data, message: "the system Has been initialized" }
}