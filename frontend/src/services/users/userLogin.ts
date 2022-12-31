import { makeRequest } from "../makeRequest"

export function userLogin(loginValues: { email: string; password: string }) {
  return makeRequest("/login", { method: "POST", data: loginValues })
}
