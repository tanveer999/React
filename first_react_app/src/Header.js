function Header() {
    return (
        <header>
            <nav className="flex-nav">
                <img src="logo192.png" alt="React logo" className="nav-logo"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header