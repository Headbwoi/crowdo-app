import { ReactNode } from "react"

export type AuthContextType = {
  dispatch: React.DispatchWithoutAction
}

export type AuthContextProviderType = {
  children: ReactNode
}
