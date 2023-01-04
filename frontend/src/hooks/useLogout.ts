import { REDUCER_ACTION_TYPE } from "../context/types/authContextTypes"
import { useAuthContext } from "./useAuthContext"

export function useLogout() {
  const { dispatch } = useAuthContext()
  const logout = () => {
    localStorage.removeItem("user")
    dispatch({ type: REDUCER_ACTION_TYPE.LOGOUT })
  }
  return { logout }
}
