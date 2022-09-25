function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <h2 className="navbar-brand">Navbar</h2>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <h4 className="nav-link">Home</h4>
                        </li>

                        <li className="nav-item">
                            <h4 className="nav-link">About</h4>
                        </li>

                        <li className="nav-item">
                            <h4 className="nav-link">Contact us</h4>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar