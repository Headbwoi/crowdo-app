import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"
import User from "../models/userModel.js"

//@desc     Gets all Products
//@route    GET /api/products
//@access   public
export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const products = await Product.find({ user: req.user.id })
      res.status(200).json(products)
    } catch (error) {
      res.status(404).json(error)
    }
  }
)

//@desc     Creates a Product
//@route    POST /api/products
//@access   private
export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    // const product = new Product(req.body)
    try {
      const newProduct = await Product.create({
        ...req.body,
        user: req.user.id,
      })
      res.status(201).json(newProduct)
    } catch (error) {
      res.status(404).json(error)
    }
  }
)

//@desc     Updates a Product
//@route    PUT /api/products/:id
//@access   private
export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error("Product not found")
    }

    // check fpr user
    if (!req.user) {
      res.status(401)
      throw new Error("user not found")
    }

    // makes sure the logged in user matches the product user
    if (product.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error("user not authorised")
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

//@desc     Deletes a Product
//@route    DELETE /api/products/:id
//@access   private
export const deleteProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const product = await Product.findById(req.params.id)
    if (!product) {
      res.status(404)
      throw new Error("Product not found")
    }

    // check fpr user
    if (!req.user) {
      res.status(401)
      throw new Error("user not found")
    }

    // makes sure the logged in user matches the product user
    if (product.user.toString() !== req.user.id) {
      res.status(401)
      throw new Error("user not authorised")
    }

    await product.deleteOne()
    res.status(200).json({ message: `${req.params.id} deleted successfully` })
  }
)
