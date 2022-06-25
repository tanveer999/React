import Contact from "./component/Contact"
import cat1 from "./images/cat1.jpg"
import cat2 from "./images/cat2.jpg"
import cat3 from "./images/cat3.jpg"
import cat4 from "./images/cat4.jpg"

function App() {
  return (
    <div className="contacts">
      <Contact 
        img={cat1}
        name="Whisker"
        phone="(91) 12345678"
        email="whisker@cat.com"
      />
      <Contact
        img={cat2}
        name="Tommy"
        phone="(91) 9876576576"
        email="tommy@cat.com"
      />
      <Contact
        img={cat3}
        name="Jerry"
        phone="(91) 76453657"
        email="jerry@cat.com"
      />
      <Contact
        img={cat4}
        name="Jhonny"
        phone="(91) 98576434"
        email="jhonny@cat.com"
      />
    </div>
  )
}

export default App;
