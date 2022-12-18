import { ObjectId } from "mongoose"

export {}

declare global {
  namespace Express {
    export interface Request {
      user?: (IUser & { _id: ObjectId }) | null
    }
  }
}
