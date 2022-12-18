import { Request, Response } from "express"
import User from "../models/userModel.js"

//@desc     Gets User Data
//@route    GET /api/user/:userID
//@access   private
export const getUserData = async (
  req: Request,
  res: Response
): Promise<void> => {
  res.status(200).json({ message: "get user" })
}
//@desc     Registers a User
//@route    POST /api/user/
//@access   public
export const registerUser = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body

  if (!firstName || !lastName || !email || !password) {
    res.status(400)
    throw new Error("Please Enter All fields")
  }

  // checks if user exists
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User Already Exists")
  }

  
  // res.status(200).json({ message: "get products" })
}
//@desc     Login a User
//@route    POST /api/user/
//@access   private
export const loginUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "get products" })
}
