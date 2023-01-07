import { verificationRequest } from "../makeRequest"

export function verifyUser(confirmationCode: string | undefined) {
  return verificationRequest(`/verify/${confirmationCode}`).then((res) => {
    console.log(res)
    localStorage.setItem("user", JSON.stringify(res))
  })
}
