// Header component
function Header() {
    return (
        <header>
            <nav className="flex-nav">
                <img src="react_logo.png" className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

// Footer component
function Footer() {
    return (
        <footer className="footer">
            &copy; 2022 Ahmed development. All rights reserved.
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