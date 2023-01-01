import { userRequest } from "../makeRequest"

export function userSignUp(bodyData: {
  firstName: string
  lastName: string
  email: string
  password: string
}) {
  return userRequest("/register", { method: "POST", data: bodyData })
}
