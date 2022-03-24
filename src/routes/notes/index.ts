import { Router } from "express";
import { getAllNotesController } from "../../controllers/notes/notes.controller";

const router = Router()

router.get('/notes', getAllNotesController)

export default router