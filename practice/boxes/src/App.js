import boxes from "./boxes"
import {useState} from "react"

function App(props) {
  // console.log(boxes)
   
  const [squares, setSquares] = useState(boxes)

  const style = {
    backgroundColor: props.darkMode ?  "#222222" : "#cccccc"
  }

  const squareElements = squares.map(square => (
    <div 
    style={style}
    className="box" key={square.id}></div>
  ))
  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App;
