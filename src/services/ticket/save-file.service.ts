import fs from 'fs'

export default (data: any) => {

    let jsonDataString = JSON.stringify(data)

    fs.writeFileSync('./src/database/ticketDB.json', jsonDataString)

    return { data, message: "Saved" }

}