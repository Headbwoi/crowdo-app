import { Express } from "express"
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
connectDB()
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import { protectRoute } from "./middleware/authMiddleware.js"
import cors, { CorsOptions } from "cors"

const app: Express = express()
const port = process.env.PORT || 5000

const whitelist = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://crowdo-app.vercel.app",
]
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    //@ts-ignore
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/products", protectRoute, productRoutes)
app.use("/api/user", userRoutes)

app.use(errorHandler)
app.listen(port, () => console.log(`app listening on port ${port}!`))
