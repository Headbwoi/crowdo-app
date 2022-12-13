import { Router } from "express"

const express = require("express")
const router: Router = express.Router()


router.get("/", getAllProducts)