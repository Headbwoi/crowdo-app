type initialValues = {
  firstname?: string
  lastname?: string
  email: string
  password: string
  cpassword?: string
}
const errors = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  cpassword: "",
}
export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function validateSignUp(
  values: initialValues,
  setCheckNoErrors: React.Dispatch<React.SetStateAction<boolean>>
) {
  const nameRegex = /[0-9]/g

  if (!values.firstname || values.firstname == "") {
    errors.firstname = "Please Enter Your First Name"
  } else if (values.firstname.match(nameRegex)) {
    errors.firstname = "Please Enter Your First Name, No numbers allowed"
  } else {
    errors.firstname = ""
  }

  if (!values.lastname) {
    errors.lastname = "Please Enter Your Last Name"
  } else if (values.lastname.match(nameRegex)) {
    errors.lastname = "Please Enter Your Last Name, No numbers allowed"
  } else {
    errors.lastname = ""
  }

  if (!values.email) {
    errors.email = "Please Enter Your Email"
  } else if (!values.email.match(emailRegex)) {
    errors.email = "Please Enter A Valid Email"
  } else {
    errors.email = ""
  }

  if (!values.password) {
    errors.password = "Please Enter Your Password"
  } else if (Number(values.password.length) < 8) {
    errors.password = "Password is too short"
  } else {
    errors.password = ""
  }

  if (!values.cpassword) {
    errors.cpassword = "Please Confirm Your Password"
  } else if (Number(values.password) !== Number(values.cpassword)) {
    errors.cpassword = "Passwords do not match"
  } else {
    errors.cpassword = ""
  }

  if (
    errors.firstname == "" &&
    errors.lastname == "" &&
    errors.email == "" &&
    errors.password == "" &&
    errors.cpassword == ""
  ) {
    setCheckNoErrors(true)
  } else {
    setCheckNoErrors(false)
  }

  return errors
}

export function validateLogin(
  values: { email: string; password: string },
  setCheckNoErrors: React.Dispatch<React.SetStateAction<boolean>>
) {
  if (!values.email) {
    errors.email = "Please Enter Your Email"
  } else if (!values.email.match(emailRegex)) {
    errors.email = "Please Enter A Valid Email"
  } else {
    errors.email = ""
  }

  if (!values.password) {
    errors.password = "Please Enter Your Password"
  } else if (Number(values.password.length) < 8) {
    errors.password = "Password is too short"
  } else {
    errors.password = ""
  }
  if (errors.email == "" && errors.password == "") {
    setCheckNoErrors(true)
  } else {
    setCheckNoErrors(false)
  }
  return errors
}
