function Carousel() {

    const zoroImages = ["zoro1.jpg", "zoro2.jpg", "zoro3.jpg"]
    return (
        <div id="zoro-caraousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                {
                    zoroImages.map((item, index) => {
                        return (

                            <div
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                                key={item}
                            >
                                <img src={`images/${item}`}
                                    className="d-block w-100 carousel-image"
                                    alt="zoro"></img>
                            </div>
                        )
                    })
                }
                <button class="carousel-control-prev" type="button" data-bs-target="#zoro-caraousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#zoro-caraousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel