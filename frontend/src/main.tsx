import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { AppContextProvider } from "./components"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import { About, DashBoard, Discover, GetStarted, Product } from "./pages"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DashBoard />}>
      <Route path="/products" element={<Discover />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/getstarted" element={<GetStarted />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
)
