import { useEffect, useState } from "react"
import { Login, Signup } from "../components/GettingStartedPage"
import Layout from "../Layout/Layout"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"

function GetStarted() {
  const [loginState, setLoginState] = useState(true)
  const { state } = useAuthContext()
  const navigate = useNavigate()

  const handleChange = () => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" })
    loginState ? setLoginState(false) : setLoginState(true)
  }

  useEffect(() => {
    state.user?.token !== "" && state.user?.stat == "pending"
      ? navigate("/verify")
      : state.user?.stat == "verified" && state.user.token !== ""
      ? navigate("/dashboard")
      : navigate("/getstarted")
  }, [])

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
