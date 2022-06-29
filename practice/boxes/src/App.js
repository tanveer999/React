import boxes from "./boxes"
import {useState} from "react"
import Box from "./Box"

function App(props) {
  // console.log(boxes)
   
  const [squares, setSquares] = useState(boxes)
  console.log("App component")

  function toggle(id) {
      console.log(id)
      setSquares(prevSquares => {
        const newSquares = []
        for(let i = 0; i < prevSquares.length; i++) {
            const currentSquare = prevSquares[i]
            if(currentSquare.id === id) {
                const updatedSquare = {
                    ...currentSquare,
                    on: !currentSquare.on
                }
                newSquares.push(updatedSquare)
            } else {
                newSquares.push(currentSquare)
            }
        }
        return newSquares
    })
  }

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
