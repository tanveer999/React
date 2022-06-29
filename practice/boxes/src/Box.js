import {useState} from "react"
function Box(props) {

    // using props to create state is called as derived state
    const [colorOn, setColorOn] = useState(props.on)

    function toggleColor() {
        setColorOn(prevColorOn => {
           return !prevColorOn
        }) 
    }

    const style = {
        backgroundColor: colorOn? "black" : "transparent"
    }
    console.log("Box component")
    return (
        <div style={style} className="box" onClick={() => props.toggle(props.id)}></div>
    )
}

export default Box