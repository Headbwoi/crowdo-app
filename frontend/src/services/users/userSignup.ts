import { makeRequest } from "../makeRequest"

export function userSignUp(bodyData: {
  firstName: string
  lastName: string
  email: string
  password: string
}) {
  return makeRequest("/register", { method: "POST", data: bodyData })
}
