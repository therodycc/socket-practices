import dataJson from '../../database/ticketDB.json'

export const getAllTicketsService = () => {
    let result = dataJson
    return { data: result, message: "Got Successfully" }
}

