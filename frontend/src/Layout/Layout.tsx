import { ReactNode, useEffect } from "react"
import { Footer, Header } from "../components"

type Layout = {
  children: ReactNode
}
function Layout({ children }: Layout) {
  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="bg-background min-h-screen">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
