import { Router } from "express"

import express from "express"
const router: Router = express.Router()

import {
  getUserData,
  registerUser,
  loginUser,
} from "../controllers/userController.js"
router.get("/me", getUserData)
router.post("/register", registerUser)
router.post("/login", loginUser)

const userRoutes = router
export default userRoutes
