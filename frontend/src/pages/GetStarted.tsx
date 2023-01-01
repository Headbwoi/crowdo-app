import { FormEvent, useContext, useState } from "react"
import { Login, Signup } from "../components/GettingStartedPage"
import { UserContext } from "../context"
import { userLogin, userSignUp } from "../services"
import Layout from "../Layout/Layout"

function GetStarted() {
  const {
    initialValues,
    loginVal,
    signUpValues,
    setSignUpValues,
    loginValues,
    setLoginValues,
    checkNoErrors,
    setCheckNoErrors,
  } = useContext(UserContext)
  const [loginState, setLoginState] = useState(false)

  const handleChange = () => {
    scrollTo(0, 0)
    loginState ? setLoginState(false) : setLoginState(true)
  }

  const handleSignup = (e: FormEvent) => {
    e.preventDefault()
    if (checkNoErrors) {
      userSignUp(signUpValues)
        .then((res) => console.log(res))
        .catch((error) => console.log(error?.response?.data.message))
    } else return
    setSignUpValues(initialValues)
    setCheckNoErrors(false)
  }
  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if (checkNoErrors) {
      userLogin(loginValues)
        .then((res) => console.log(res))
        .catch((error) => console.log(error?.response?.data.message))
    } else return
    setLoginValues(loginVal)
    setCheckNoErrors(false)
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
