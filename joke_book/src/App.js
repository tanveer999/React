import Joke from "./Joke"

function App() {
  return (
    <div className="joke">
      <Joke 
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
        upvotes={10}
        downvotes={20}
        comments={[
          {
            author:"jon",
            body:"comment"
          },
          {
            author:"snow",
            body:"comment"
          }
        ]}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
        isPun={true}
        upvotes={10}
        downvotes={20}
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy." 
        isPun={true}
        upvotes={10}
        downvotes={20}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={false}
        upvotes={10}
        downvotes={20} 
      />

      <Joke
        punchline="No Setup"
        isPun={true}
      />
    </div>
  )
}

export default App