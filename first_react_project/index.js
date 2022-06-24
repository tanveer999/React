function Page() {
    return (
        <div>
            <header>
                <nav>
                    <img src="react_logo.png" width="40px"></img>
                </nav>
            </header>
            <h1>Why React?</h1>
            <ol>
                <li>It's a popular library.</li>
                <li>It's composable</li>
                <li>It's declarative</li>
            </ol>

            <footer>
                <small>"&copy; 2022 Ahmed development. All rights reserved."</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))