import { Router } from "express"
const {
  getAllProducts,
  createProduct,
} = require("../controllers/productController")

const express = require("express")
const router: Router = express.Router()

router.get("/", getAllProducts).post("/", createProduct)

module.exports = router
