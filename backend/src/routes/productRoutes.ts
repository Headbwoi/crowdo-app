import { Router } from "express"
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js"

import express from "express"
import { protectRoute } from "../middleware/authMiddleware.js"
const router: Router = express.Router()

router
  .get("/", protectRoute, getAllProducts)
  .post("/", protectRoute, createProduct)
router
  .delete("/:id", protectRoute, deleteProduct)
  .put("/:id", protectRoute, updateProduct)

const productRoutes = router

export default productRoutes
