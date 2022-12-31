import { makeRequest } from "../makeRequest"

export function userSignUp(bodyData: {
  firstname: string
  lastname: string
  email: string
  password: string
  cpassword: string
}) {
  return makeRequest("/user", { method: "POST", data: bodyData })
}
