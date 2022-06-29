import {useState} from "react"


function App() {

  const [formData, setFormData] = useState(
    {
      firstName: "", 
      lastName: "", 
      comments: "",
      isFriendly: true,
      employment: "",
      favColor: ""
    }
  )
  // console.log(formData)
  // event is passed by the browser and it has lot of information
  // target returns dom element which triggered the event
  function handleChange(event) {
    
    const {name, value, type, checked} = event.target

    setFormData(prevFormData => {
      //[event.target.name] when returning dynamic values enclose with []
      return {
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault() // dosen't refresh the page data will be present after clicking submit
    // if preventDefault() is commented page will refresh and inputs will be cleared and data will be passed in url querystring
    console.log(formData)
}

  return (
    <form onSubmit={handleSubmit}>
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
      <br></br>

      <input
      type="checkbox"
      name="isFriendly"
      id="isFriendly"
      checked={formData.isFriendly}
      onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br></br>
      <br></br>
      <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
    </form>
  );
}
// state and dom name value should be same
export default App;
