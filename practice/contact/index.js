function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    //
    let image = contact.isFavorite ? "star_filled.png" : "star.png"
    function toggleFavorite() {
        setContact(prevContact => {
            console.log(prevContact)
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
        }
        })
    }
    console.log(image)
    // 
    return (
        <main>
            <article className="card">
                {/* <img src="./images/user.png" className="card--image" /> */}
                <div className="card--info">
                    <img 
                        src={`${image}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {`${contact.firstName} ${contact.lastName}`}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))