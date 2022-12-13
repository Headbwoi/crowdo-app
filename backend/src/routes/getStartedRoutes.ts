import { Router } from "express"

const express = require("express")
const router: Router = express.Router()

const {
  getProductUserData,
  registerProductOwner,
  loginProductOwner,
} = require("../controllers/getstartedController")
router.get("/", getProductUserData)
router.post("/", registerProductOwner)
router.post("/", loginProductOwner)
