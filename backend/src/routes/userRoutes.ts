import { Router } from "express"

import express from "express"
const router: Router = express.Router()

import {
  getProductUserData,
  registerProductOwner,
  loginProductOwner,
} from "../controllers/userController.js"
router.get("/me", getProductUserData)
router.post("/register", registerProductOwner)
router.post("/login", loginProductOwner)

const userRoutes = router
export default userRoutes
