import { ReactNode } from "react"
import { Footer, Header } from "../components"

type Layout = {
  children: ReactNode
}
function Layout({ children }: Layout) {
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
