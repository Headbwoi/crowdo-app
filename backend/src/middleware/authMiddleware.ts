import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import { NextFunction, Request, Response } from "express"

export const protectRoute = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        //gets the token
        token = req.headers.authorization.split(" ")[1]
        //verify token
        //@ts-ignore
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decodedToken.id).select("-password")

        next()
      } catch (error) {
        res.status(401)
        throw new Error("Not authorised to access this route")
      }
    }
  }
)
