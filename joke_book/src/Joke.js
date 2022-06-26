function Joke(props) {
    console.log(props.isPun)
    console.log(props.comments)
    return (
        <div className="div--joke">
            <div className="div--setup">
                <h3>{props.setup && "Setup:"}</h3>
                <p>{props.setup}</p>
            </div>

            <div className="div--punchline">
                <h3>punchline:</h3>
                <p>{props.punchline}</p>
            </div>
        </div>
    )
}

export default Joke