import { Router } from "express"
const {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct
} = require("../controllers/productController")

const express = require("express")
const router: Router = express.Router()

router.get("/", getAllProducts).post("/", createProduct)
router.delete("/:id", deleteProduct).put("/:id", updateProduct)

module.exports = router
