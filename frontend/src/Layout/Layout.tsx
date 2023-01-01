import { ReactNode } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

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
