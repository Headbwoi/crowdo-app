import { Mongoose } from "mongoose"

const mongoose: Mongoose = require("mongoose")

mongoose.set("strictQuery", true)
const connectDB = async () => {
  try {
    //@ts-ignore
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI)
    //@ts-ignore
    console.log(`MongoDb connected ${conn.connection.host}`)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
