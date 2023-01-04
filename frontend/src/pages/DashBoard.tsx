import { useEffect } from "react"
import Layout from "../Layout/Layout"
import { MainSection } from "../components"
import { useAuthContext } from "../hooks/useAuthContext"
import { useNavigate } from "react-router-dom"

function DashBoard() {
  const { state } = useAuthContext()
  const navigate = useNavigate()

  useEffect(() => {
    state.user?.token == "" ? navigate("/getstarted") : navigate("/dashboard")
  }, [state.user])

  return (
    <Layout>
      <div className="bg-light_Gray">
        <MainSection />
      </div>
    </Layout>
  )
}

export default DashBoard
