import { Request, Response } from "express"
import User from "../models/userModel.js"

export const getProductUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({ message: "get products" })
}
export const registerProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
export const loginProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
