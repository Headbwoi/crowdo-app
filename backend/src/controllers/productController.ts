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

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const product = await Product.findById(req.params.id)
  if (!product) {
    res.status(404).json({ message: "Product not found" })
  }
  await Product.deleteOne(product)
  res.status(200).json({ message: `${req.params.id} deleted successfully` })
}

module.exports = { getAllProducts, createProduct, deleteProduct }
