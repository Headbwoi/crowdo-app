import { Request, Response } from "express"
import { IUser } from "../models/userModel"
const User = require("../models/userModel")

const getProductUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({ message: "get products" })
}
const registerProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
const loginProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}

module.exports = { getProductUserData, registerProductOwner, loginProductOwner }
