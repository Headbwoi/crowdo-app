import { Request, Response } from "express"

const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}

const createProduct = async (req: Request, res: Response) => {
  res.status(201).json({ message: "product created" })
}

module.exports = { getAllProducts, createProduct }
