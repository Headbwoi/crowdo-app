import {
  ChangeEvent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react"
import { validateLogin, validateSignUp } from "../components/GettingStartedPage"

type userContextType = {
  initialValues: {
    firstName: string
    lastName: string
    email: string
    password: string
    cpassword: string
  }
  loginVal: {
    email: string
    password: string
  }
  handleSignUpValues: (e: ChangeEvent<HTMLInputElement>) => void
  handleLoginValues: (e: ChangeEvent<HTMLInputElement>) => void
  signUpErrors: {
    firstName: string
    lastName: string
    email: string
    password: string
    cpassword: string
  }
  setSignUpErrors: React.Dispatch<
    React.SetStateAction<{
      firstName: string
      lastName: string
      email: string
      password: string
      cpassword: string
    }>
  >
  loginErrors: {
    email: string
    password: string
  }
  setLoginErrors: React.Dispatch<
    React.SetStateAction<{
      email: string
      password: string
    }>
  >
  checkNoErrors: boolean
  setCheckNoErrors: React.Dispatch<React.SetStateAction<boolean>>
  signUpValues: {
    firstName: string
    lastName: string
    email: string
    password: string
    cpassword: string
  }
  setSignUpValues: React.Dispatch<
    React.SetStateAction<{
      firstName: string
      lastName: string
      email: string
      password: string
      cpassword: string
    }>
  >
  loginValues: {
    email: string
    password: string
  }
  setLoginValues: React.Dispatch<
    React.SetStateAction<{
      email: string
      password: string
    }>
  >
}

type userContextProviderType = {
  children: ReactNode
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cpassword: "",
}
const signUpVal = initialValues
const loginVal = { email: "", password: "" }

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
