import boxes from "./boxes"
import {useState} from "react"
import Box from "./Box"

function App(props) {
  // console.log(boxes)
   
  const [squares, setSquares] = useState(boxes)
  console.log("App component")
  const squareElements = squares.map(square => (
    <Box on={square.on} key={square.id}/>
  ))
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
