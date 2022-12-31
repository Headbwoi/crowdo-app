import { FormEvent, useContext, useState } from "react"
import { Layout, Login, Signup, useValidate } from "../components"
import { UserContext } from "../context"

function GetStarted() {
  const { signUpValues, loginValues, setErrors, errors, setCheckNoErrors } =
    useContext(UserContext)
  const [loginState, setLoginState] = useState(false)

  const handleChange = () => {
    loginState ? setLoginState(false) : setLoginState(true)
  }

  const handleSignup = (e: FormEvent) => {
    e.preventDefault()
    setErrors(useValidate(signUpValues, setCheckNoErrors))
    console.log(errors)
    console.log(signUpValues)
  }
  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    console.log(loginValues)
  }

  return (
    <Layout>
      <section className="getstarted">
        <div className="heading">{loginState ? "Login" : "Sign Up"}</div>
        {loginState ? (
          <Login loginState={loginState} handleLogin={handleLogin} />
        ) : (
          <Signup loginState={loginState} handleSignup={handleSignup} />
        )}
        <div className="mt-4 flex items-center gap-6 justify-center font-normal">
          {loginState ? (
            <p className="capitalize text-white">Don't have an account?</p>
          ) : (
            <p className="capitalize text-white">already have an account?</p>
          )}

          <button
            className="text-green_Text hover:text-green_Text/50 duration-300 font-semibold"
            onClick={handleChange}
          >
            {loginState ? "Sign Up" : "Login"}
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default GetStarted
