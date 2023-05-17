import Express  from "express";
import {login, register, logout} from "../controllers/authController.js"

const router = Express.Router()

router.get("/login", login)
router.post("/register", register)
router.get("/logout", logout)

export default router