import { createContext, useReducer } from "react"
import {
  AuthContextProviderType,
  AuthContextType,
} from "./types/authContextTypes"

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }
    case "LOGOUT":
      return { user: null }

    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  })

  console.log("Auth context state", state)
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
