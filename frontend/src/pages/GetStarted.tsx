import { useState } from "react"
import { Layout, Login, Signup } from "../components"

function GetStarted() {
  const [userState, setUserState] = useState("signup")
  const handleChange = () => {
    userState === "signup" ? setUserState("") : setUserState("signup")
  }

  return (
    <Layout>
      <section className="getstarted">
        <div className="heading">
          {userState === "signup" ? "Sign Up" : "Login"}
        </div>
        <form className="flex flex-col gap-3">
          {userState === "signup" ? <Signup /> : <Login />}
          <button type="submit" className="btn bg-dark_green">
            {userState === "signup" ? "Sign Up" : "Login"}
          </button>
        </form>
        <div className="mt-4 flex items-center gap-10 justify-center">
          {userState === "signup" ? (
            <p className="capitalize text-white">already have an account?</p>
          ) : (
            <p className="capitalize text-white">Don't have an account?</p>
          )}

          <button
            className="text-green_Text hover:text-green_Text/50 duration-300"
            onClick={handleChange}
          >
            {userState === "signup" ? "Sign Up Here" : "Login Here"}
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default GetStarted
