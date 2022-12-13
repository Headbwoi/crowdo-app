import { Router } from "express"
const { getAllProducts } = require("../controllers/productController")

const express = require("express")
const router: Router = express.Router()

router.get("/", getAllProducts)

module.exports = router
