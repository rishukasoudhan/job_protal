import express from "express";
import { loginController, registerController } from "../controllers/authControllers.js";


// router object
const router = express.Router()

//routes

//register || post
router.post('/register',registerController)


// login || post
router.post('/login',loginController)
export default router


