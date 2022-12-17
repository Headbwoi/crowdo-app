"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getAllProducts, createProduct, deleteProduct, updateProduct } = require("../controllers/productController");
const express = require("express");
const router = express.Router();
router.get("/", getAllProducts).post("/", createProduct);
router.delete("/:id", deleteProduct).put("/:id", updateProduct);
module.exports = router;
