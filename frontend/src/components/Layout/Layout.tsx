import { ReactNode } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

type Layout = {
  children: ReactNode
}
function Layout({ children }: Layout) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout
