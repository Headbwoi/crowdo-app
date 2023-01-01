import { CorsOptions } from "cors"
const whitelist = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://crowdo-app.vercel.app",
]
export const corsOptions: CorsOptions = {
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
