import dataJson from '../../database/ticketDB.json'

export default () => {
    let data = dataJson
    return { data, message: "Got Successfully" }
}