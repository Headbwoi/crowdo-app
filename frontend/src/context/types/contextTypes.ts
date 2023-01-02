import { ChangeEvent, ReactNode } from "react"

export type userContextType = {
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

export type userContextProviderType = {
  children: ReactNode
}

export const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  cpassword: "",
}
export const signUpVal = initialValues
export const loginVal = { email: "", password: "" }
