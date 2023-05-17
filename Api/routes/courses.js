import Express  from "express";
import {getCourse} from "../controllers/coursesController.js"

const router = Express.Router()

router.get("/find/:coursesId", getCourse)

export default router