import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke 
    setup={joke.setup}
    punchline={joke.punchline}
    />
  })
  return (
    <div className="joke">
      {jokeElements}
    </div>
  )
}
// function App() {
//   return (
//     <div className="joke">
//       <Joke 
//         setup="I got my daughter a fridge for her birthday."
//         punchline="I can't wait to see her face light up when she opens it."
//         isPun={true}
//         upvotes={10}
//         downvotes={20}
//         comments={[
//           {
//             author:"jon",
//             body:"comment"
//           },
//           {
//             author:"snow",
//             body:"comment"
//           }
//         ]}
//       />
//       <Joke
//         setup="How did the hacker escape the police?"
//         punchline="He just ransomware!"
//         isPun={true}
//         upvotes={10}
//         downvotes={20}
//       />
//       <Joke
//         setup="Why don't pirates travel on mountain roads?"
//         punchline="Scurvy." 
//         isPun={true}
//         upvotes={10}
//         downvotes={20}
//       />
//       <Joke
//         setup="Why do bees stay in the hive in the winter?"
//         punchline="Swarm."
//         isPun={false}
//         upvotes={10}
//         downvotes={20} 
//       />

//       <Joke
//         punchline="No Setup"
//         isPun={true}
//       />
//     </div>
//   )
// }

// function App() {
//   const colors = [
//     <h3>Red</h3>,
//     <h3>Orange</h3>,
//     <h3>Yellow</h3>,
//     <h3>Green</h3>,
//     <h3>Blue</h3>,
//     <h3>Indigo</h3>,
//     <h3>Violet</h3>
//   ]
//   return (
//     <div>
//       {colors}
//     </div>
//   )
// }

export default App