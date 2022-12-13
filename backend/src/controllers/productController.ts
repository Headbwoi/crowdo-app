import { Request, Response } from "express"

const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}

module.exports = { getAllProducts }
