import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { userLogin } from "../services"
import { REDUCER_ACTION_TYPE } from "../context/types/authContextTypes"
import { LOGIN_VAL } from "./types"
import { useNavigate } from "react-router-dom"

export function useLogin(values: LOGIN_VAL) {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const context = useAuthContext()
  const navigate = useNavigate()

  const login = async () => {
    setLoading(true)
    setError(null)

    await userLogin(values)
      .then((res) => {
        if (res) {
          context.dispatch({ type: REDUCER_ACTION_TYPE.LOGIN, payload: res })
          localStorage.setItem("user", JSON.stringify(res))
          setLoading(false)
          navigate("/dashboard", { replace: true })
          console.log(res)
        }
      })
      .catch((error) => {
        console.log(error?.response?.data.message)
        setError(error?.response?.data.message)
        setLoading(false)
      })
  }
  return { login, error, loading }
}
