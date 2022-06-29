import boxes from "./boxes"
import {useState} from "react"
import Box from "./Box"

function App(props) {
  // console.log(boxes)

  function toggle(id) {
    console.log(id)
  }
   
  const [squares, setSquares] = useState(boxes)
  console.log("App component")
  const squareElements = squares.map(square => (
    <Box on={square.on} key={square.id} id={square.id} toggle={toggle}/>
  ))
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
