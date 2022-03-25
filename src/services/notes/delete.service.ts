import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export const deleteNoteService = async (id: string) => {
    try {
        const result = await axios.delete(`${process.env.APP_URL_API}/notes/${id}`)
        if (!result) return {
            error: { message: "Error deleting the  note" }
        }
        return { data: result.data, info: { message: "Successfully deleted" } }

    } catch (error) {
        console.table({ error });
        return {
            error: { message: "Internal server error", error }
        }
    }
}