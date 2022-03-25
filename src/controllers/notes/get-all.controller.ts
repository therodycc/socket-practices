import { Request, Response } from "express"
import { ioServer } from "../.."
import { getAllNotesService } from "../../services/notes/get-all.service"

export const getAllNotesController = async (req: Request, res: Response) => {
    try {
        const result = await getAllNotesService()
        if (result.error) return res.json(result)
        // ioServer.emit('server:load_notes', result)
        return res.json(result)
    } catch (error) {
        return res.json({ error: { message: "Internal server error", error } })
    }
}