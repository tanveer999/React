import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card" 
import CardData from "./data"


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
function App() {

  const cards = CardData.map((item) => {
    return <Card 
      key={item.id}
      {...item}
    />
  })

  console.log(cards)
  return (
    <div>
      <Navbar/>
      <Hero />
      <section className="cards-list">
      {cards}
      </section>
    </div>
  )
}

export default App