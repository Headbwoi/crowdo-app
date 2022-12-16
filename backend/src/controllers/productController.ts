import { Request, Response } from "express"
import Product from "../models/productModel"

const getAllProducts = async (req: Request, res: Response) => {
  const products = await Product.find()
  res.status(200).json(products)
}

const createProduct = async (req: Request, res: Response) => {
  const product = new Product(req.body)
  try {
    const newTodo = await product.save()
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(404).json({ error })
  }
}

module.exports = { getAllProducts, createProduct }
