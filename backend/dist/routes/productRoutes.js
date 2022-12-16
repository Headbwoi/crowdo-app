"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getAllProducts, createProduct, } = require("../controllers/productController");
const express = require("express");
const router = express.Router();
router.get("/", getAllProducts);
router.post("/", createProduct);
module.exports = router;
