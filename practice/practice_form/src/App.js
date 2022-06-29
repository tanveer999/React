import {useState} from "react"


function App() {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  // event is passed by the browser and it has lot of information
  // target returns dom element which triggered the event
  function handleChange(event) {
    // console.log(event.target.value)

    setFirstName(prevFirstName => event.target.value)
  }

  function handleLastName(event) {
    setLastName(prev => event.target.value)
  }


  console.log(lastName)
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleLastName}
      />
    </form>
  );
}

export default App;
