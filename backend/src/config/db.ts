import mongoose from "mongoose"

mongoose.set("strictQuery", true)
const connectDB = async () => {
  try {
    await mongoose
      //@ts-ignore
      .connect(process.env.MONGO_LOCAL_URI)
      .then(() =>
        console.log(`MongoDb connected ${mongoose.connection.collection.name}`)
      )
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
export default connectDB
