import Express  from "express";
import {getMyCourses, addMyCourse} from "../controllers/myCoursesController.js"

const router = Express.Router()

router.get("/", getMyCourses)
router.post("/", addMyCourse)

export default router