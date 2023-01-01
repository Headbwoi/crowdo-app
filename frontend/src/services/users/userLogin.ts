import { userRequest } from "../makeRequest"

export function userLogin(loginValues: { email: string; password: string }) {
  return userRequest("/login", { method: "POST", data: loginValues })
}
