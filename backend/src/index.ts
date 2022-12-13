import { Application, Request, Response } from "express"
const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app: Application = express()
const port = process.env.PORT || 5000

app.get("/", (req: Request, res: Response) => res.send("Hello World!"))
app.use("/api/discover", require("./routes/discoverRoutes"))
app.use("/api/getstarted", require("./routes/getStartedRoutes"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
