import { useContext } from "react"
import { AuthContext } from "../context"

export function useAuthContext() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("context not found balablu")
  }
  return context
}
