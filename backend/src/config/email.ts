import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"
import dotenv from "dotenv"
dotenv.config()

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

export const sendConfirmationEmail = (
  name: string,
  email: string,
  confirmationCode: string
) => {
  console.log("check if working")

  const message = {
    from: user,
    to: email,
    subject: "Please Verify Your Account",
    html: `
  <h1>Email Confirmation</h1>
  <h2> Hello ${name}</h2>
  <p>Please Confirm Your Email By Clicking on the link below</p>
  <a href="http://localhost:5173/verify/${confirmationCode}">Click Here</a>
  <p>or copy the code</p>
  <p>http://localhost:5173/verify/${confirmationCode}</p>

  `,
  }

  transport
    .sendMail(message)
    .then(() => {
      console.log("User was registered successfully! Please check your Email")
    })
    .catch((err) => {
      console.log(err)
    })
}
