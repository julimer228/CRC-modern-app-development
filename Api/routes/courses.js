import Express  from "express";
import {getCourse, addCourse} from "../controllers/coursesController.js"

const router = Express.Router()

router.get("/get", getCourse)
router.post("/add", addCourse)

export default router