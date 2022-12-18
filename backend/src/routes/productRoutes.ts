import { Router } from "express"
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js"

import express from "express"
const router: Router = express.Router()

router.get("/", getAllProducts).post("/", createProduct)
router.delete("/:id", deleteProduct).put("/:id", updateProduct)

const productRoutes = router

export default productRoutes
