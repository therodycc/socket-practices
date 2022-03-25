import { Request, Response } from "express"
import { updateNoteService } from "../../services/notes/update.service"

export const updateNoteController = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body
        const result = await updateNoteService(req.params.id, {
            title,
            description
        })
        if (result?.error) return res.json(result)
        return res.json(result)
    } catch (error) {
        return res.json({ error: { message: "Interval server error", error } })
    }
}