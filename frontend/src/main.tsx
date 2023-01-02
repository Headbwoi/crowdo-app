import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { AppContextProvider, UserContextProvider } from "./context"
import "./index.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom"
import { Product, Verify } from "./pages"
import { NotFound, Spinner } from "./components"
const About = React.lazy(() => wait(1000).then(() => import("./pages/About")))
const DashBoard = React.lazy(() => import("./pages/DashBoard"))
const GetStarted = React.lazy(() => import("./pages/GetStarted"))
const Discover = React.lazy(() => import("./pages/Discover"))

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<NotFound />} />
      <Route path="/discover" element={<Discover />}>
        <Route path="/discover/products/:id" element={<Product />} />
      </Route>
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/about" element={<About />} />
      <Route path="/verify" element={<Verify />} />

      <Route
        element={
          <ScrollRestoration
            getKey={(location, matches) => {
              const paths = ["/products", "/about"]
              return paths.includes(location.pathname)
                ? // home and notifications restore by pathname
                  location.pathname
                : // everything else by location like the browser
                  location.key
            }}
          />
        }
      />
    </>
  )
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <UserContextProvider>
        <Suspense fallback={<Spinner />}>
          <RouterProvider router={router} />
        </Suspense>
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
)

function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
