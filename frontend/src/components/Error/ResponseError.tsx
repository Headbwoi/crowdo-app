import Layout from "../../Layout/Layout"

function ResponseError() {
  return (
    <Layout>
      <div className="w-20 h-20 rounded-lg bg-light_Gray shadow-2xl">
        Failed to send request to server try again
      </div>
    </Layout>
  )
}

export default ResponseError
