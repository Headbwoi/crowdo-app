import { Express } from "express"
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import { errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import { protectRoute } from "./middleware/authMiddleware.js"

const app: Express = express()
const port = process.env.PORT || 5000

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/products", protectRoute, productRoutes)
app.use("/api/user", userRoutes)

app.use(errorHandler)
app.listen(port, () => console.log(`app listening on port ${port}!`))
