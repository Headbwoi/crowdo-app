import dotenv from "dotenv"
dotenv.config()
import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"
import Mailgen from "mailgen"

const user = process.env.USER_EMAIL
const password = process.env.USER_PASSWORD

let transport: nodemailer.Transporter<SMTPTransport.SentMessageInfo> =
  nodemailer.createTransport({
    //@ts-ignore
    service: "gmail",
    auth: {
      user: user,
      pass: password,
    },
  })

let mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Crowdo App - crowdund your bills",
    link: "https://crowdo-app.vercel.app/",
    logo: "https://crowdo-app.vercel.app/icons/logo.svg",
  },
})

export const sendConfirmationEmail = (
  name: string,
  email: string,
  confirmationCode: string
) => {
  let emailToBeSent = {
    body: {
      name: `${name}`,
      intro: "Welcome to Crowdo App, Please Confirm your Email Addresss",
      action: {
        instructions: "To get started with Crowdo App, please click here:",
        button: {
          color: "#22BC66", // Optional action button color
          text: "Confirm your account",
          link: `${process.env.FRONTEND_URL}/${confirmationCode}`,
          fallback: true,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  }

  // Generate an HTML email with the provided contents
  let emailBody = mailGenerator.generate(emailToBeSent)

  const message = {
    from: user,
    to: email,
    subject: "Please Verify Your Account",
    html: emailBody,
  }

  transport
    .sendMail(message)
    .then(() => {
      console.log("User was registered successfully! Please check your Email")
    })
    .catch((err) => {
      throw new Error(err)
    })
}
