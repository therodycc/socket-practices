import getService from "./get.service"
import saveFileService from "./save-file.service"

export default () => {

    const ticketInfo = getService()

    const result = saveFileService({
        lastTicket: +ticketInfo.data.lastTicket + 1,
        today: new Date().getDate()
    })

    return { result, message: `The next ticket is ${result.data.lastTicket}` }
}