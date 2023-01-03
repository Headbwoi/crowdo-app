import { ReactNode } from "react"

type Payload = {
  email: string
  password: string
  token: string
}

export const initialState = {
  user: null,
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
  payload?: Payload
}
