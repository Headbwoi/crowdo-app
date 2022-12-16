import { Request, Response } from "express"
const Product = require("../models/productModel")

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find()
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json(error)
  }
}

const createProduct = async (req: Request, res: Response) => {
  const product = new Product(req.body)
  try {
    const newProduct = await product.save()
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(404).json(error)
  }
}

module.exports = { getAllProducts, createProduct }
