import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card" 
import CardData from "./data"

function App() {

  const cards = CardData.map((item) => {
    return <Card 
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
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