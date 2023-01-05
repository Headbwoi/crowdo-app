import { Link, useParams } from "react-router-dom"
import { verifyUser } from "../services"
import Layout from "../Layout/Layout"
import { useEffect } from "react"

const Verified = () => {
  const { confirmationCode } = useParams()

  useEffect(() => {
    verifyUser(confirmationCode)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }, [confirmationCode])

  return (
    <>
      <Layout>
        <section className="flex justify-center items-center min-h-screen flex-col container px-5 md:px-7">
          <h1 className="font-bold text-4xl md:text-6xl text-white text-center leading-normal">
            Email <span className="text-green_Text/80">Verified</span>
          </h1>

          <div className="grid place-items-center">
            <p className="text-light_Text font-normal text-center my-10 text-xl ">
              Please Login
            </p>
            <button
              className={`w-32 h-12 lg:w-40 lg:h-14 rounded-full bg-darkCyan text-white font-semibold text-sm md:text-lg hover:bg-moderate_Cyan duration-300`}
            >
              <Link to={"/dashboard"}>Login</Link>
            </button>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Verified
