import Mail from "nodemailer/lib/mailer"

export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string
      MONGO_LOCAL_URI: string
      PORT: Number
      NODE_ENV: string
      JWT_SECRET: string
      USER_EMAIL: string | Mail.Address | undefined
      USER_PASSWORD: string
      FRONTEND_URL: string
    }
  }
}
