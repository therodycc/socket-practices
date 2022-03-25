import { Request, Response } from "express"
import { createNewNoteService } from "../../services/notes/create.service"
import { v4 as uuidV4 } from 'uuid';
export const createNoteController = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body
        const result = await createNewNoteService({
            uuid:uuidV4(),
            title,
            description
        })
        // if (result?.error) return res.json(result)
        return res.json(result)
    } catch (error) {

    }
}