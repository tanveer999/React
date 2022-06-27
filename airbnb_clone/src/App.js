import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card" 
import CardData from "./data"

function App() {

  const cards = CardData.map((item) => {
    return <Card 
      key={item.id}
      item={item}
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