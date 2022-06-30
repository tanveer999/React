import { useState } from "react"
function App() {
  const [starWarsData, setStarWarsData] = useState({})

  // console.log("app rendered") // runs infinitly
  // 1. GET the data (fetch)
  // 2. Save the data to state
  fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data)) 
        // after setting the state App.js is rerendered and 
        // fetch is called and state is set again and the loop begins

        
  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default App;
