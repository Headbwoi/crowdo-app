type initialValues = {
  firstName?: string
  lastName?: string
  email: string
  password: string
  cpassword?: string
}
const errors = {
  firstName: "",
  lastName: "",
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

  if (!values.firstName || values.firstName == "") {
    errors.firstName = "Please Enter Your First Name"
  } else if (values.firstName.match(nameRegex)) {
    errors.firstName = "Please Enter Your First Name, No numbers allowed"
  } else {
    errors.firstName = ""
  }

  if (!values.lastName || values.lastName == "") {
    errors.lastName = "Please Enter Your Last Name"
  } else if (values.lastName.match(nameRegex)) {
    errors.lastName = "Please Enter Your Last Name, No numbers allowed"
  } else {
    errors.lastName = ""
  }

  if (!values.email || values.email == "") {
    errors.email = "Please Enter Your Email"
  } else if (!values.email.match(emailRegex)) {
    errors.email = "Please Enter A Valid Email"
  } else {
    errors.email = ""
  }

  if (!values.password || values.password == "") {
    errors.password = "Please Enter Your Password"
  } else if (Number(values.password.length) < 8) {
    errors.password = "Password is too short"
  } else {
    errors.password = ""
  }

  if (!values.cpassword || values.cpassword == "") {
    errors.cpassword = "Please Confirm Your Password"
  } else if (values.password !== values.cpassword) {
    errors.cpassword = "Passwords do not match"
  } else {
    errors.cpassword = ""
  }

  if (
    errors.firstName == "" &&
    errors.lastName == "" &&
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
  if (!values.email || values.email == "") {
    errors.email = "Please Enter Your Email"
  } else if (!values.email.match(emailRegex)) {
    errors.email = "Please Enter A Valid Email"
  } else {
    errors.email = ""
  }

  if (!values.password || values.password == "") {
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
