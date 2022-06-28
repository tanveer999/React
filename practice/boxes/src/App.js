import boxes from "./boxes"
import {useState} from "react"
import Box from "./Box"

function App(props) {
  // console.log(boxes)
   
  const [squares, setSquares] = useState(boxes)

  const squareElements = squares.map(square => (
    <Box on={square.on} id={square.id}/>
  ))
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
