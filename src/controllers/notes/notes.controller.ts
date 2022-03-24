import { Request, Response } from "express"
import { getAllNotesService } from "../../services/notes/get-all.service"

export const getAllNotesController = async (req: Request, res: Response) => {
    const data = await getAllNotesService()
    return res.json(data)
}