import Express  from "express";
import {getCourse} from "../controllers/coursesController.js"

const router = Express.Router()

router.get("/", getCourse)

export default router