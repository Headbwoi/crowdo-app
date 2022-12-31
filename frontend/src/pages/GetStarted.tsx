import { FormEvent, useContext, useState } from "react"
import {
  Layout,
  Login,
  Signup,
  validateLogin,
  validateSignUp,
} from "../components"
import { UserContext } from "../context"
import { userSignUp } from "../services"

function GetStarted() {
  const {
    initialValues,
    signUpValues,
    setSignUpValues,
    loginValues,
    setErrors,
    checkNoErrors,
    setCheckNoErrors,
  } = useContext(UserContext)
  const [loginState, setLoginState] = useState(false)

  const handleChange = () => {
    loginState ? setLoginState(false) : setLoginState(true)
  }

  const handleSignup = (e: FormEvent) => {
    e.preventDefault()
    setErrors(validateSignUp(signUpValues, setCheckNoErrors))

    if (checkNoErrors) {
      userSignUp(signUpValues).then((res) => console.log(res))
    } else return
    setSignUpValues(initialValues)
  }
  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    setErrors(validateLogin(loginValues, setCheckNoErrors))
    // console.log(errors)
    // console.log(loginValues)
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
