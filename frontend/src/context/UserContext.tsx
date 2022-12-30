import { ReactNode, createContext } from "react"

type userContextType = {}
type userContextProviderType = {
  children: ReactNode
}

export const UserContext = createContext<userContextType>({} as userContextType)

export const UserContextProvider = ({ children }: userContextProviderType) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}
