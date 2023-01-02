import Layout from "../Layout/Layout"
import { Button } from "../components"

function Verify() {
  return (
    <>
      <Layout>
        <section className="flex justify-center items-center min-h-screen ">
          <>
            <h1>Verify your email</h1>
          </>
          <div>
            <p>verification link has been sent to your email 👍👍. </p>
            <Button name="verify your email" />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Verify
