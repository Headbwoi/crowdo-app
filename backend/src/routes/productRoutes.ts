import { Router } from "express"
const {
  getAllProducts,
  createProduct,
  deleteProduct,
} = require("../controllers/productController")

const express = require("express")
const router: Router = express.Router()

router.get("/", getAllProducts).post("/", createProduct)
router.delete("/:id", deleteProduct)

module.exports = router
