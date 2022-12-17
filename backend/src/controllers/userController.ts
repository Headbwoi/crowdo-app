import { Request, Response } from "express"
import User from "../models/userModel.js"

//@desc     Gets User Data
//@route    GET /api/user/:userID
//@access   private
export const getProductUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({ message: "get user" })
}
//@desc     Registers a User
//@route    POST /api/user/
//@access   public
export const registerProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
//@desc     Login a User
//@route    POST /api/user/
//@access   private
export const loginProductOwner = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
