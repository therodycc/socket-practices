import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export const getAllNotesService = async () => {
    try {
        const result = await axios.get(`${process.env.APP_URL_API}/notes`)

        if (!result) return {
            error: { message: "Can't get notes" }
        }
        
        return { data: result.data }
    } catch (error) {
        console.log({error});
        return {
            error: { message: "Internal server error", error }
        }
    }
}