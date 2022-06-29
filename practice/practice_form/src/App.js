import {useState} from "react"


function App() {

  const [formData, setFormData] = useState(
    {
      firstName: "", lastName: "", comments: ""
    }
  )
  console.log(formData)
  // event is passed by the browser and it has lot of information
  // target returns dom element which triggered the event
  function handleChange(event) {
    // console.log(event.target.value)

    setFormData(prevFormData => {
      //[event.target.name] when returning dynamic values enclose with []
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <br></br>
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <br></br>
      <textarea name="comments" 
      placeholder="comments"
      onChange={handleChange} 
      value={formData.comments} />
    </form>
  );
}

export default App;
