import { Router } from "express";
import notes from "../../controllers/notes";

const router = Router()

const { createNoteController, getAllNotesController, updateNoteController } = notes

router.get('/', getAllNotesController)
router.post('/', createNoteController)
router.patch('/:id', updateNoteController)

export default router