import { useState } from "react"
import { Layout, Login, Signup } from "../components"

function GetStarted() {
  const [userState, setUserState] = useState("signup")
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
      </section>
    </Layout>
  )
}

export default GetStarted
