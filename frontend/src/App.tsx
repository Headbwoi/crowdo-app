import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { About, Discover, GetStarted, Product } from "./pages"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/products" element={<Discover />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
