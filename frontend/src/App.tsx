import {
  BrowserRouter as Router,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom"
import { About, Discover, GetStarted, Product } from "./pages"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/products" element={<Discover />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
        </Routes>
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
      </Router>
    </>
  )
}

export default App
