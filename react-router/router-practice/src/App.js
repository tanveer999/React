import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home page basic</div>} />
        <Route path="/testing" element={<h1>test</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
