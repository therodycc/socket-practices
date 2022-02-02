import fs from 'fs'

export default () => {
    let data = {
        lastTicket: 0,
        today: new Date().getDate()
    }

    let jsonDataString = JSON.stringify(data)

    fs.writeFileSync('../../database/ticketDB.json', jsonDataString)

    return { data, message: "the system Has been initialized" }

}