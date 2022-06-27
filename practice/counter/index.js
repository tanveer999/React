function App() {

    const [count, setCount] = React.useState(0)

    function decreaseCount() {
        setCount(count - 1)
    }

    function increaseCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={decreaseCount}>-</button>
            <h1>{count}</h1>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))