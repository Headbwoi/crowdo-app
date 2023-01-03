import { useContext, useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { userLogin } from "../services"
import { UserContext } from "../context"
import { REDUCER_ACTION_TYPE } from "../context/types/authContextTypes"

export function useLogin() {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const context = useAuthContext()
  const { loginValues } = useContext(UserContext)

  const login = async () => {
    setLoading(true)

    await userLogin(loginValues)
      .then((res) => {
        if (res) {
          context.dispatch({ type: REDUCER_ACTION_TYPE.LOGIN, payload: res })
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
