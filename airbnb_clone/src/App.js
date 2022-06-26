import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card" 
import CardData from "./data"

function App() {

  const cards = CardData.map((item) => {
    return <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
    />
  })

  console.log(cards)
  return (
    <div>
      <Navbar/>
      <Hero />
      {cards}
    </div>
  )
}

export default App