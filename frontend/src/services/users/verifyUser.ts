import { verificationRequest } from "../makeRequest"

export function verifyUser(confirmationCode: string | undefined) {
  return verificationRequest(`/verify/${confirmationCode}`).then((res) =>
    localStorage.setItem("user", JSON.stringify(res))
  )
}
