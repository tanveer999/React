import memesData from "../memesData"

function Meme() {

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const index = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[index].url
        console.log(url)
    }
    
    return (
    <main>
        <div className="form">
            <input type="text" placeholder="Top text" className="form--input"></input>
            <input type="text" placeholder="Bottom text" className="form--input"></input>
            <button 
            className="form--button"
            onClick={getMemeImage}
            >
                Get a new meme image  🖼
            </button>
        </div>
    </main>
    )
}

export default Meme