import { FormEvent, useContext } from "react"
import "./formstyle.css"
import { UserContext } from "../../context"
import { useLogin } from "../../hooks/useLogin"

type LOGIN = {
  loginState: boolean
}

function Login({ loginState }: LOGIN) {
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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault()
    if (checkNoErrors) {
      await login()
    } else return
    setLoginValues(loginVal)
    setCheckNoErrors(false)
  }

  return (
    <>
      <form className="flex flex-col gap-3" onSubmit={handleLogin}>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-light_Gray">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="form-input"
            value={loginValues.email}
            onChange={handleLoginValues}
          />
          {<p className="text-error text-xs lg:text-sm">{loginErrors.email}</p>}
        </div>
        {/* password */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="Password" className="text-light_Gray">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="form-input"
            value={loginValues.password}
            onChange={handleLoginValues}
          />
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
