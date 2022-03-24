import dotenv from 'dotenv'
import fetch from "node-fetch";
dotenv.config()

export const getAllNotesService = async () => {
    fetch(`${process.env.APP_URL}/notes`)
        .then(data => { return { data } })
        .catch(error => {
            return {
                error: { message: "Internal server error", error }
            }
        })
}