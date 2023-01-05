import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport"

const user = process.env.USER_EMAIL
const password = process.env.USER_PASSWORD

const transport: nodemailer.Transporter<SMTPTransport.SentMessageInfo> =
  nodemailer.createTransport({
    //@ts-ignore
    service: "Gmail",
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

  transport
    .sendMail({
      from: user,
      to: email,
      subject: "Please Verify Your Account",
      html: `
    <h1>Email Confirmation</h1>
    <h2> Hello ${name}</h2>
    <p>Please Confirm Your Email By Clicking on the link below</p>
    <a href="http://localhost:3000/verify/${confirmationCode}">Click Here</a>
    `,
    })
    .catch((error) => {
      console.log(error)
    })
}
