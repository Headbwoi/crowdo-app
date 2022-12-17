import { Request, Response } from "express"
import Product from "../models/productModel.js"
import asyncHandler from "express-async-handler"

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const products = await Product.find()
      res.status(200).json(products)
    } catch (error) {
      res.status(404).json(error)
    }
  }
)

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = new Product(req.body)
    try {
      const newProduct = await product.save()
      res.status(201).json(newProduct)
    } catch (error) {
      res.status(404).json(error)
    }
  }
)

export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error("Product not found")
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )
    res.status(200).json(updatedProduct)
  }
)

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error("product not found")
    }
    await Product.deleteOne(product._id)
    res.status(200).json({ message: `${req.params.id} deleted successfully` })
  }
)
