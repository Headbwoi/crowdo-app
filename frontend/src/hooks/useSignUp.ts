import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { signUpValues } from "./types"
import { userSignUp } from "../services"
import { REDUCER_ACTION_TYPE } from "../context/types/authContextTypes"
import { useNavigate } from "react-router-dom"

export const useSignUp = (bodyData: signUpValues) => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const signup = async () => {
    setLoading(true)
    setError(null)

    await userSignUp(bodyData)
      .then((res) => {
        if (res) {
          dispatch({ type: REDUCER_ACTION_TYPE.LOGIN, payload: res })
          navigate("/verify", { replace: true })
          localStorage.setItem("user", JSON.stringify(res))
          // console.log(res)
          setLoading(false)
        }
      })
      .catch((error) => {
        // console.log(error?.response?.data.message)
        setError(error?.response?.data.message)
      })
  }
  return { signup, error, loading }
}
