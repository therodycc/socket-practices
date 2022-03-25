import { Request, Response } from "express"
import { deleteNoteService } from "../../services/notes/delete.service"

export const deleteNoteController = async(req: Request, res: Response) => {
    try {
        const result = await deleteNoteService(req.params.id)
        if (result?.error) return res.json(result)
        return res.json(result)
    } catch (error) {
        return res.json({ error: { message: "Interval server error", error } })
    }
}