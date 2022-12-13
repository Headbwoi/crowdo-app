import { Request, Response } from "express"
const getProductUserData = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
const registerProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
const loginProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}

module.exports = { getProductUserData, registerProductOwner, loginProductOwner }
