import { Router } from "express"

const express = require("express")
const router: Router = express.Router()

const {
  getProductUserData,
  registerProductOwner,
  loginProductOwner,
} = require("../controllers/userController")
router.get("/me", getProductUserData)
router.post("/register", registerProductOwner)
router.post("/login", loginProductOwner)

module.exports = router
