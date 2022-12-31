import { ChangeEvent, ReactNode, createContext, useState } from "react"

type userContextType = {
  initialValues: {
    firstname: string
    lastname: string
    email: string
    password: string
    cpassword: string
  }
  handleSignUpValues: (e: ChangeEvent<HTMLInputElement>) => void
  handleLoginValues: (e: ChangeEvent<HTMLInputElement>) => void
  errors: {
    firstname: string
    lastname: string
    email: string
    password: string
    cpassword: string
  }
  setErrors: React.Dispatch<
    React.SetStateAction<{
      firstname: string
      lastname: string
      email: string
      password: string
      cpassword: string
    }>
  >
  checkNoErrors: boolean
  setCheckNoErrors: React.Dispatch<React.SetStateAction<boolean>>
  signUpValues: {
    firstname: string
    lastname: string
    email: string
    password: string
    cpassword: string
  }
  setSignUpValues: React.Dispatch<
    React.SetStateAction<{
      firstname: string
      lastname: string
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
  firstname: "",
  lastname: "",
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
  const [errors, setErrors] = useState(initialValues)
  const [checkNoErrors, setCheckNoErrors] = useState(false)

  const handleSignUpValues = (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = {
      ...signUpValues,
      [e.target.name]: e.target.value,
    }
    setSignUpValues(newValues)
  }

  const handleLoginValues = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const newValues = {
      ...loginValues,
      [name]: value,
    }
    setLoginValues(newValues)
  }

  return (
    <UserContext.Provider
      value={{
        initialValues,
        signUpValues,
        setSignUpValues,
        loginValues,
        setLoginValues,
        handleSignUpValues,
        handleLoginValues,
        errors,
        setErrors,
        checkNoErrors,
        setCheckNoErrors,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
