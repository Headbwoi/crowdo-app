import { Express } from "express"
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app: Express = express()
const port = process.env.PORT || 5000

app.use("/api/discover", require("./routes/discoverRoutes"))
app.use("/api/getstarted", require("./routes/getStartedRoutes"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
