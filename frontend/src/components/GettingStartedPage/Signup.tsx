import { FormEvent, useContext, useRef, useState } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"
import { useSignUp } from "../../hooks/useSignUp"
import EmailIcon from "../../icons/EmailIcon"
import Eye from "../../icons/Eye"
import EyeSlash from "../../icons/EyeSlash"
import User from "../../icons/User"

type SIGNUP = {
  loginState: boolean
}

function Signup({ loginState }: SIGNUP) {
  const [passwordType, setPasswordType] = useState("password")
  const [confirmPasswordType, setConfirmPasswordType] = useState("password")

  const {
    initialValues,
    signUpValues,
    setSignUpValues,
    handleSignUpValues,
    signUpErrors,
    checkNoErrors,
    setCheckNoErrors,
  } = useContext(UserContext)
  const { signup, error, loading } = useSignUp(signUpValues)

  // const confirmpasswordRef = useRef({} as HTMLInputElement)

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault()
    if (checkNoErrors) {
      await signup()
    } else return
    setSignUpValues(initialValues)
    setCheckNoErrors(false)
  }

  const togglePassword = () => {
    passwordType == "password"
      ? setPasswordType("text")
      : setPasswordType("password")
  }
  const toggleConfirmPassword = () => {
    confirmPasswordType == "password"
      ? setConfirmPasswordType("text")
      : setConfirmPasswordType("password")
  }

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleSignup}>
        {/* first name */}
        <div className="flex flex-col">
          <label htmlFor="firstName" className="text-light_Gray mb-1">
            First Name
          </label>
          <div className="relative flex flex-col">
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              className="form-input"
              value={signUpValues?.firstName}
              onChange={handleSignUpValues}
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-5 w-5 h-5">
              <User />
            </div>
          </div>
          {
            <p className="text-error text-xs lg:text-sm italic">
              {signUpErrors.firstName}
            </p>
          }
        </div>
        {/* last name */}
        <div className="flex flex-col">
          <label htmlFor="lastName" className="text-light_Gray mb-1">
            Last Name
          </label>
          <div className="relative flex flex-col">
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              className="form-input"
              value={signUpValues?.lastName}
              onChange={handleSignUpValues}
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-5 w-5 h-5">
              <User />
            </div>
          </div>
          {
            <p className="text-error text-xs lg:text-sm italic">
              {signUpErrors.lastName}
            </p>
          }
        </div>
        {/* email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-light_Gray mb-1">
            Email
          </label>
          <div className="relative flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-input"
              value={signUpValues?.email}
              onChange={handleSignUpValues}
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-5 w-5 h-5">
              <EmailIcon />
            </div>
          </div>
          {
            <p className="text-error text-xs lg:text-sm italic">
              {signUpErrors.email}
            </p>
          }
        </div>
        {/* password */}
        <div className="flex flex-col">
          <label htmlFor="Password" className="text-light_Gray mb-1">
            Password
          </label>
          <div className="relative flex flex-col">
            <input
              type={passwordType}
              name="password"
              placeholder="Enter Your Password"
              className="form-input"
              value={signUpValues?.password}
              onChange={handleSignUpValues}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-5 w-5 h-5"
              onClick={togglePassword}
            >
              {passwordType == "password" ? <EyeSlash /> : <Eye />}
            </div>
          </div>
          {
            <p className="text-error text-xs lg:text-sm italic">
              {signUpErrors.password}
            </p>
          }
        </div>
        {/* confirm password */}
        <div className="flex flex-col">
          <label htmlFor="cPassword" className="text-light_Gray mb-1">
            Confirm Password
          </label>
          <div className="relative flex flex-col">
            <input
              type={confirmPasswordType}
              name="cpassword"
              placeholder="Re-enter your Password"
              className="form-input"
              value={signUpValues?.cpassword}
              onChange={handleSignUpValues}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-5 w-5 h-5"
              onClick={toggleConfirmPassword}
            >
              {confirmPasswordType == "password" ? <EyeSlash /> : <Eye />}
            </div>
          </div>
          {
            <p className="text-error text-xs lg:text-sm italic">
              {signUpErrors.cpassword}
            </p>
          }
        </div>

        <button
          className="btn bg-dark_green"
          disabled={!checkNoErrors && !loading}
        >
          {loginState ? "Login" : "Sign Up"}
        </button>
      </form>
      {error && <p className="text-error">{error}</p>}
    </>
  )
}

export default Signup
