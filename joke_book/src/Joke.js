import { useState } from "react"

function Joke(props) {

    const [isShown, setIsShown] = useState(false)

    function toggleShown() {
        setIsShown(prevIsShown => !isShown)
    }
    console.log(isShown)
    return (
        <div className="joke--item">
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide puncline" : "Show punchline"}</button>
            <hr />
        </div>
    )
}

export default Joke