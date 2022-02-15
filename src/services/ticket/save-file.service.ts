import fs from 'fs'
import dataJson from '../../database/ticketDB.json'

export const saveFileTicketService = (data: any) => {
    let jsonDataString = JSON.stringify({ ...dataJson, ...data })
    const result = fs.writeFileSync('./src/database/ticketDB.json', jsonDataString)
    console.log({result},'Save file service')
    return { data, message: "Saved" }

}