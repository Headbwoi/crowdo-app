import { Request, Response } from "express"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { ObjectId } from "mongoose"
import asyncHandler from "express-async-handler"
import { sendConfirmationEmail } from "../config/email.js"

type REG_USER = {
  firstName: string
  lastName: string
  email: string
  password: string
}

const generateToken = (id: ObjectId): String => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
}

const generateConfirmationCode = (len: number, characters: string): String => {
  let ans = ""
  for (let i = len; i > 0; i--) {
    ans += characters[Math.floor(Math.random() * characters.length)]
  }
  return ans
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
//@route    POST /api/user/register
//@access   public
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { firstName, lastName, email, password }: REG_USER = req.body
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const passwordRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    )
    const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`

    if (!firstName || !lastName || !email || !password) {
      res.status(400)
      throw new Error("Please Enter All fields")
    }

    //validates inputs
    if (!emailRegex.test(email)) {
      res.status(400)
      throw new Error("Please Enter A Valid Email")
    }
    if (!passwordRegex.test(password)) {
      res.status(400)
      throw new Error("Please Enter A Strong Password")
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

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      confirmationCode: generateConfirmationCode(30, characters),
    })
    // const newUser = await User.create({})

    await newUser.save((err) => {
      // checks if user was created
      if (err) {
        res.status(500)
        throw new Error("Failed To Register User")
      }

      res.status(201).json({
        _id: <ObjectId>newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        status: newUser.status,
        token: generateToken(newUser.id),
      })

      sendConfirmationEmail(
        newUser.firstName,
        newUser.email,
        newUser.confirmationCode
      )
    })
  }
)

//@desc     Login a User
//@route    POST /api/user/login
//@access   private

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    res.status(404)
    throw new Error("user not found")
  }

  if (user.status != "verified") {
    res.status(401)
    throw new Error("Please Verify Your Email")
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      status: user.status,
      token: generateToken(user._id),
    })
  } else {
    res.status(400)
    throw new Error("Password is invalid")
  }
})

//@desc     Verifies a User
//@route    GET /api/user/verify/:confirmationCode
//@access   private

export const verifyUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findOne({
    confirmationCode: req.params.confirmationCode,
  })
  if (!user) {
    res.status(404)
    throw new Error("User not found")
  }

  // user.status = "verified"
  await user
    .updateOne({ status: "verified" })
    .then(() => {
      res.status(200).json({
        message: "Email verified",
      })
    })
    .catch((err) => {
      res.status(500)
      throw new Error(err)
    })
})
