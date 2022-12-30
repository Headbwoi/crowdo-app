import { ChangeEvent, ReactNode, createContext, useState } from "react"

type userContextType = {
  initialValues: {
    firstname: string
    lastname: string
    email: string
    password: string
    cpassword: string
  }
  formValues: {
    firstname: string
    lastname: string
    email: string
    password: string
    cpassword: string
  }
  setFormValues: React.Dispatch<
    React.SetStateAction<{
      firstname: string
      lastname: string
      email: string
      password: string
      cpassword: string
    }>
  >
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
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

export const UserContext = createContext<userContextType>({} as userContextType)

export const UserContextProvider = ({ children }: userContextProviderType) => {
  const [formValues, setFormValues] = useState(initialValues)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    }
    setFormValues(newValues)
  }

  return (
    <UserContext.Provider
      value={{ initialValues, formValues, setFormValues, handleChange }}
    >
      {children}
    </UserContext.Provider>
  )
}
