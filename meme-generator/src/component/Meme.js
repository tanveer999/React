import memesData from "../memesData"
import React, { useState } from 'react';
function Meme() {
    
    // const [imageUrl, setImageUrl] = useState('http://i.imgflip.com/1bij.jpg')
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        radomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllmeme] = useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const index = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[index].url
        // console.log(url)
        setMeme(prevMeme => {
            return {
            ...prevMeme,
            radomImage: url
            }
        })
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
        <img src={meme.radomImage} alt="meme" className="meme--image"></img>
    </main>
    )
}

export default Meme