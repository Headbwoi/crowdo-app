import React from "react"
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
import {
  About,
  DashBoard,
  Discover,
  GetStarted,
  Product,
  Verify,
} from "./pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
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
        <RouterProvider router={router} />
      </UserContextProvider>
    </AppContextProvider>
  </React.StrictMode>
)
