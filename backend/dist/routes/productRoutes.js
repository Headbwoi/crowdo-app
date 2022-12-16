"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getAllProducts } = require("../controllers/productController");
const express = require("express");
const router = express.Router();
router.get("/", getAllProducts);
module.exports = router;
