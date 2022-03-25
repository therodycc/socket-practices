import { Router } from "express";
import notes from "../../controllers/notes";

const router = Router()

const { createNoteController, getAllNotesController } = notes

router.get('/', getAllNotesController)
router.post('/', createNoteController)

export default router