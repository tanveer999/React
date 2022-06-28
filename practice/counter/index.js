function Count(props) {
    return (
        <h1>{props.number}</h1> 
    )
}

function App() {

    const [count, setCount] = React.useState(0)

    // function decreaseCount() {
    //     setCount(count - 1)
    // }
    // function decreaseCount() {
    //     setCount(function (oldValue) {
    //         return oldValue - 1
    //     })
    // }
     /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function decreaseCount() {
        setCount(prevCount => {
            return prevCount - 1
        })
    }

    function increaseCount() {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={decreaseCount}>-</button>
            <Count number={count} />
            <button onClick={increaseCount}>+</button>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))