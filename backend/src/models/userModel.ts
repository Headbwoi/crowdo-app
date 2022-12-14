import { Document } from "mongoose"

import mongoose from "mongoose"
export interface IUser extends Document {
  firstName: string
  lastName: string
  email: string
  password: string
  stat: string
  confirmationCode: string
}

const userSchema = new mongoose.Schema<IUser>(
  {
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
    stat: {
      type: String,
      enum: ["pending", "verified"],
      default: "pending",
    },
    confirmationCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model<IUser>("User", userSchema)
