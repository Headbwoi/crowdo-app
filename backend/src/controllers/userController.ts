import { Request, Response } from "express"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { ObjectId } from "mongoose"
import asyncHandler from "express-async-handler"

const generateToken = (id: ObjectId): String => {
  //@ts-ignore
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
}

//@desc     Gets User Data
//@route    GET /api/user/:userID
//@access   private
export const getUserData = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    res.status(200).json(req.user)
  }
)

//@desc     Registers a User
//@route    POST /api/user/
//@access   public
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
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

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    // creates the user

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    })

    // checks if user was created

    if (newUser) {
      res.status(201).json({
        _id: <ObjectId>newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        token: generateToken(newUser.id),
      })
    } else {
      throw new Error("failed to create user")
    }
  }
)

//@desc     Login a User
//@route    POST /api/user/
//@access   private

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id),
    })
  } else {
    throw new Error("Invalid credentials")
  }
})
