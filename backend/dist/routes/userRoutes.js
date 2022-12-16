"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const { getProductUserData, registerProductOwner, loginProductOwner, } = require("../controllers/userController");
router.get("/me", getProductUserData);
router.post("/register", registerProductOwner);
router.post("/login", loginProductOwner);
module.exports = router;
