import dataJson from '../../database/ticketDB.json'

export default () => {
    let result = dataJson
    return { data: result, message: "Got Successfully" }
}

