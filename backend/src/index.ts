import { Express } from "express"
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")

const app: Express = express()
const port = process.env.PORT || 5000

connectDB()


app.use("/products", require("./routes/productRoutes"))
app.use("/user", require("./routes/userRoutes"))

app.use(errorHandler)
app.listen(port, () => console.log(`app listening on port ${port}!`))
