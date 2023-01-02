import { ChangeEvent, createContext, useState } from "react"
import { validateLogin, validateSignUp } from "../components/GettingStartedPage"
import {
  initialValues,
  loginVal,
  signUpVal,
  userContextProviderType,
  userContextType,
} from "./types/contextTypes"

export const UserContext = createContext<userContextType>({} as userContextType)

export const UserContextProvider = ({ children }: userContextProviderType) => {
  const [signUpValues, setSignUpValues] = useState(signUpVal)
  const [loginValues, setLoginValues] = useState(loginVal)
  const [signUpErrors, setSignUpErrors] = useState(initialValues)
  const [loginErrors, setLoginErrors] = useState(loginVal)
  const [checkNoErrors, setCheckNoErrors] = useState(false)

  const handleSignUpValues = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = {
      ...signUpValues,
      [e.target.name]: e.target.value,
    }
    setSignUpValues(newValues)
    setSignUpErrors(validateSignUp(newValues, setCheckNoErrors))
  }

  const handleLoginValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newValues = {
      ...loginValues,
      [name]: value,
    }
    setLoginValues(newValues)
    setLoginErrors(validateLogin(newValues, setCheckNoErrors))
  }

  return (
    <UserContext.Provider
      value={{
        initialValues,
        loginVal,
        signUpValues,
        setSignUpValues,
        loginValues,
        setLoginValues,
        handleSignUpValues,
        handleLoginValues,
        signUpErrors,
        setSignUpErrors,
        loginErrors,
        setLoginErrors,
        checkNoErrors,
        setCheckNoErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
