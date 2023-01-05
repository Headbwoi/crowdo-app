import Layout from "../Layout/Layout"
import { Button } from "../components"

function Verify() {
  return (
    <>
      <Layout>
        <section className="flex justify-center items-center min-h-screen flex-col container px-5 md:px-7">
          <h1 className="font-bold text-4xl md:text-6xl text-white text-center leading-normal">
            Verify <span className="text-green_Text/80">Your Email</span>
          </h1>

          <div className="grid place-items-center">
            <p className="text-light_Text font-normal text-center my-10 text-xl ">
              verification link has been sent to your email 👍👍.{" "}
            </p>
            <p className="text-light_Gray my-5">Did not receive an email?</p>
            <Button name="Resend link" width="w-40" lgwidth="lg:w-48" />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Verify
