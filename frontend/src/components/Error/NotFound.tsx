import { useNavigate } from "react-router-dom"
import Layout from "../../Layout/Layout"
import Button from "../Button/Button"

function NotFound() {
  const navigate = useNavigate()
  return (
    <>
      <Layout>
        <section className=" flex items-center justify-center min-h-screen flex-col gap-20 container px-5 md:px-7">
          <h1 className="text-2xl text-dark_green text-center lg:text-4xl leading-[4rem]">
            Epp me Epp me Epp me Epp me 😣 you dey carry me dey go where i no
            know😒😒😒🤣🤣🤣🤣
          </h1>
          <div onClick={() => navigate(-1)}>
            <Button name="help me" />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default NotFound
