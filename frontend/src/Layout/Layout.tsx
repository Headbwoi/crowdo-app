import { ReactNode, useEffect } from "react"
import { Footer, Header } from "../components"

type Layout = {
  children: ReactNode
}
function Layout({ children }: Layout) {
  useEffect(() => {
    scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])

  return (
    <>
      <section className="bg-background min-h-screen">
        <Header />
        {children}
        <Footer />
      </section>
    </>
  )
}

export default Layout
