import { Router } from "express";
import { getAllNotesController } from "../../controllers/notes/get-all.controller";

const router = Router()

router.get('/notes', getAllNotesController)

export default router