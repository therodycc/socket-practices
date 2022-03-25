import { Router } from "express";
import notes from "../../controllers/notes";

const router = Router()

const { createNoteController, getAllNotesController, updateNoteController, deleteNoteController } = notes

router.get('/', getAllNotesController)
router.post('/', createNoteController)
router.patch('/:id', updateNoteController)
router.delete('/:id', deleteNoteController)

export default router