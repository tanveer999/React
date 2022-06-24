// Header component
function Header() {
    return (
        <header>
            <nav>
                <img src="react_logo.png" width="40px"></img>
            </nav>
        </header>
    )
}

// Footer component
function Footer() {
    return (
        <footer>
            <small>&copy; 2022 Ahmed development. All rights reserved.</small>
        </footer>
    )
}

// MainContent component
function MainContent() {
    return (
        <div>
            <h1>Why React?</h1>
            <ol>
                <li>It's a popular library.</li>
                <li>It's composable</li>
                <li>It's declarative</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))