import { ReactNode } from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import { UserContextProvider } from "../../context"

type Layout = {
  children: ReactNode
}
function Layout({ children }: Layout) {
  return (
    <UserContextProvider>
      <section className="bg-background min-h-screen">
        <Header />
        {children}
        <Footer />
      </section>
    </UserContextProvider>
  )
}

export default Layout
