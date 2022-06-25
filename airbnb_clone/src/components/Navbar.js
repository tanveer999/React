import airbnb from "../images/airbnb.png"

function Navbar() {
    return (
        <nav className="navbar">
            <img src={airbnb} alt="airbnb logo" className="nav-logo"></img>
        </nav>
    )
}

export default Navbar