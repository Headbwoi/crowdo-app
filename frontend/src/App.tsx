import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
const About = lazy(() => import("./pages/About"))
const DashBoard = lazy(() => import("./pages/DashBoard"))
const GetStarted = lazy(() => import("./pages/GetStarted"))
const Discover = lazy(() => import("./pages/Discover"))
const Verify = lazy(() => import("./pages/Verify"))
const Product = lazy(() => import("./pages/Product"))
const Verified = lazy(() => import("./pages/Verified"))
import { NotFound, Spinner } from "./components"
import { useAuthContext } from "./hooks/useAuthContext"

function App() {
  const { state } = useAuthContext()
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<NotFound />} />
          <Route path="/discover" element={<Discover />}>
            <Route path="/discover/products/:id" element={<Product />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              state.user?.token !== "" && state.user?.stat !== "pending" ? (
                <DashBoard />
              ) : (
                <GetStarted />
              )
            }
          />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verify/:confirmationCode" element={<Verified />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
