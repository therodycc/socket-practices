import axios from "axios"
import { configApp } from "../../config/server"
import { NoteI } from "../../interfaces/notes/note.interface"

export const createNewNoteService = async (data: NoteI) => {
    try {
        const result = await axios.post(`${configApp.app.url.api_notes}/notes`, data)
        if (!result) return { error: { message: "Error creating new note" } }
        return { data: result.data }
    }
    catch (error) {
        return {
            error: { message: "Internal server error", error }
        }
    }
}