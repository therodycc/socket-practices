import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export const updateNoteService = async (id: string, data: any) => {
    try {
        const result = await axios.patch(`${process.env.APP_URL_API}/notes/${id}`, {
            ...data
        })

        if (!result) return {
            error: { message: "Can't update notes" }
        }

        return { data: result.data, info: { message: "Successfully updated" } }

    } catch (error) {
        console.table({ error });
        return {
            error: { message: "Internal server error", error }
        }
    }
}