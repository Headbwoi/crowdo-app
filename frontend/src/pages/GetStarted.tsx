import { useState } from "react"
import { Layout, Login, Signup } from "../components"

function GetStarted() {
  const [userState, setUserState] = useState("signup")
  const handleChange = () => {
    userState === "signup" ? setUserState("") : setUserState("signup")
  }
  const handleInfo = () => {
    return userState === "signup" ? "Sign Up" : "Login"
  }

  return (
    <Layout>
      <section className="getstarted">
        <div className="heading">{handleInfo()}</div>
        <form className="flex flex-col gap-3">
          {userState === "signup" ? <Signup /> : <Login />}
          <button type="submit" className="btn bg-dark_green">
            {handleInfo()}
          </button>
        </form>
        <div className="mt-4 flex items-center gap-6 justify-center font-normal">
          {userState === "signup" ? (
            <p className="capitalize text-white">already have an account?</p>
          ) : (
            <p className="capitalize text-white">Don't have an account?</p>
          )}

          <button
            className="text-green_Text hover:text-green_Text/50 duration-300 font-semibold"
            onClick={handleChange}
          >
            {handleInfo()}
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default GetStarted
