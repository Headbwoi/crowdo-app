import { verificationRequest } from "../makeRequest"

export function verifyUser(confirmationCode: string) {
  return verificationRequest(`/verify/${confirmationCode}`, {
    method: "GET",
  })
}
