import { useState } from "react"
import { useAuthContext } from "./useAuth"
import { signUpValues } from "./types"
import { userSignUp } from "../services"

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (bodyData: signUpValues) => {
    setLoading(true)
    setError(null)

    await userSignUp(bodyData)
      .then((res) => {
        if (res) {
          dispatch({ type: "LOGIN", payload: res })
          //   navigate("/verify", { replace: true })
          localStorage.setItem("user", JSON.stringify(res))
          console.log(res)
          setLoading(false)
        }
      })
      .catch((error) => {
        console.log(error?.response?.data.message)
        setError(error?.response?.data.message)
      })
  }
  return { signup, error, loading }
}
