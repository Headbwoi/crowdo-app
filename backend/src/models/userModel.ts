import { Document, Mongoose } from "mongoose"

const mongoose: Mongoose = require("mongoose")
export interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
}

const userSchema = new mongoose.Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model<IUser>("User", userSchema)
