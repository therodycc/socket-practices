import axios from "axios"
import { NoteI } from "../../interfaces/notes/note.interface"

export const createNewNoteService = async (data: NoteI) => {
    try {
        const result = await axios.post(`${process.env.APP_URL_API}/notes`, data)
        if (!result) return { error: { message: "Error creating new note" } }
        return { data: result.data }
    }
    catch (error) {
        return {
            error: { message: "Internal server error", error }
        }
    }
}