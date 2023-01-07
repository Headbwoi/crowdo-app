import { createContext, useEffect, useReducer } from "react"
import {
  AuthContextProviderType,
  AuthContextType,
  REDUCER_ACTION_TYPE,
  ReducerAction,
  defaultUser,
  initialState,
} from "./types/authContextTypes"

export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const authReducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.LOGIN:
      return { user: action.payload }
    case REDUCER_ACTION_TYPE.LOGOUT:
      return { user: defaultUser }

    default:
      return state
  }
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const user = JSON.parse(`${localStorage.getItem("user")}`)
    if (user) {
      dispatch({ type: REDUCER_ACTION_TYPE.LOGIN, payload: user })
    }
  }, [state.user?.token, state.user?.stat])

  // console.log("Auth context state", state)
  return (
    <AuthContext.Provider value={{ ...state, dispatch, state }}>
      {children}
    </AuthContext.Provider>
  )
}
