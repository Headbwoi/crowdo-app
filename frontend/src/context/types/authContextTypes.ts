import { ReactNode } from "react"

export const defaultUser = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  token: "",
}

export const initialState: {} = {
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    token: "",
  },
}

export type AuthContextType = {
  dispatch: React.Dispatch<ReducerAction>
  state: typeof initialState
}

export type AuthContextProviderType = {
  children: ReactNode
}

export const enum REDUCER_ACTION_TYPE {
  LOGIN,
  LOGOUT,
}

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: typeof defaultUser
}
