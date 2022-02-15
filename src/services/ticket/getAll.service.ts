import dataJson from '../../database/ticketDB.json'

export const getAllTicketsService = () => {
    let result = dataJson
    console.log({result},'Get all')
    return { data: result, message: "Got Successfully" }
}

