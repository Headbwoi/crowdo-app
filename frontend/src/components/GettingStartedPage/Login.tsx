import { FormEvent, useContext, useRef, useState } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"
import { useLogin } from "../../hooks/useLogin"
import EmailIcon from "../../icons/EmailIcon"
import Eye from "../../icons/Eye"
import EyeSlash from "../../icons/EyeSlash"

type LOGIN = {
  loginState: boolean
}

function Login({ loginState }: LOGIN) {
  const [passwordType, setPasswordType] = useState("password")
  const {
    loginVal,
    loginValues,
    setLoginValues,
    handleLoginValues,
    loginErrors,
    checkNoErrors,
    setCheckNoErrors,
  } = useContext(UserContext)

  const { login, error, loading } = useLogin(loginValues)
  const passRef = useRef({} as HTMLInputElement)

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    if (checkNoErrors) {
      await login()
    } else return
    setLoginValues(loginVal)
    setCheckNoErrors(false)
  }

  const handlePass = () => {
    passRef.current.type == "password"
      ? setPasswordType("text")
      : setPasswordType("password")
  }

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-light_Gray">
            Email
          </label>
          <div className="relative flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-input"
              value={loginValues.email}
              onChange={handleLoginValues}
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-5 w-5 h-5">
              <EmailIcon />
            </div>
          </div>
          {<p className="text-error text-xs lg:text-sm">{loginErrors.email}</p>}
        </div>
        {/* password */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="Password" className="text-light_Gray">
            Password
          </label>
          <div className="relative flex flex-col">
            <input
              type={passwordType}
              name="password"
              placeholder="Enter Your Password"
              className="form-input"
              value={loginValues.password}
              onChange={handleLoginValues}
              ref={passRef}
            />
            <div
              className="absolute top-1/2 -translate-y-1/2 right-5 w-5 h-5"
              onClick={handlePass}
            >
              {passwordType === "password" ? <EyeSlash /> : <Eye />}
            </div>
          </div>
          {
            <p className="text-error text-xs lg:text-sm">
              {loginErrors.password}
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

export default Login
