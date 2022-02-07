import saveFileService from './save-file.service'

export default () => {
    const result = saveFileService({
        lastTicket: 0,
        today: new Date().getDate()
    })

    return { data: result.data, message: "the system Has been initialized" }
}