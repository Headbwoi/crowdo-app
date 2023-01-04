import { useState } from "react"
import { Login, Signup } from "../components/GettingStartedPage"
import Layout from "../Layout/Layout"

function GetStarted() {
  const [loginState, setLoginState] = useState(false)

  const handleChange = () => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" })
    loginState ? setLoginState(false) : setLoginState(true)
  }

  return (
    <Layout>
      <section className="getstarted">
        <div className="heading">{loginState ? "Login" : "Sign Up"}</div>
        {loginState ? (
          <Login loginState={loginState} />
        ) : (
          <Signup loginState={loginState} />
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
