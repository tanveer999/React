import { useState, useEffect } from "react"
function App() {
  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(0)

  console.log("app rendered") // runs infinitly
  // 1. GET the data (fetch)
  // 2. Save the data to state
  // fetch("https://swapi.dev/api/people/1")
  //       .then(res => res.json())
  //       .then(data => setStarWarsData(data)) 
  // after setting the state App.js is rerendered and 
  // fetch is called and state is set again and the loop begins

  //side effect
  // passing dependency array in useEffect
  // [] or [0] means no dependency (or constant as 0 is hard coded ) so useEffect will be run only once
  //[count] means when count is changed useEffect is called
  useEffect(function () {
    console.log("Effect ran")
    // fetch("https://swapi.dev/api/people/1")
    //     .then(res => res.json())
    //     .then(data => setStarWarsData(data)) 
  }, [count])

  // useEffect code is run after the below return statement i.e after rendering JSX elements
  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>

    </div>
  )
}

export default App;
