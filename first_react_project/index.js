function Page() {
    return (
        <div>
            <h1>React</h1>
            <ul>
                <li>React is based on Javascript</li>
                <li>React is composable</li>
                <li>React is declarative</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))