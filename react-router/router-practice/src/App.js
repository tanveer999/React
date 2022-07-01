import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import Error from "./components/Error"

function App() {
  return (
    <BrowserRouter>
      <nav>our navbar</nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <footer>our footer</footer>
    </BrowserRouter>
  )
}

export default App;
