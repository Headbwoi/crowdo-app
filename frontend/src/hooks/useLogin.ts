import { useContext, useState } from "react"
import { useAuth } from "./useAuth"
import { userLogin } from "../services"
import { UserContext } from "../context"

export function useLogin() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const context = useAuth()
  const { loginValues } = useContext(UserContext)

  const login = async () => {
    setLoading(true)

    await userLogin(loginValues)
      .then((res) => {
        if (res) {
          context.dispatch({ type: "LOGIN" }, loginValues)
          setLoading(false)
          setError(false)
          //   navigate("/dashboard", { replace: true })
          console.log(res)
        }
      })
      .catch((error) => {
        console.log(error?.response?.data.message)
        setError(true)
        setLoading(false)
      })
  }
  return { login, error, loading }
}
