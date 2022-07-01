function Carousel() {
    return (
        <div id="zoro-caraousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="images/zoro1.jpg" className="d-block w-100" alt="zoro"></img>
                </div>
                <div className="carousel-item">
                <img src="images/zoro2.jpg" className="d-block w-100" alt="zoro"></img>
                </div>
                <div className="carousel-item">
                <img src="images/zoro3.jpg" className="d-block w-100" alt="zoro"></img>
                </div>
            </div>
        </div>
    )
}

export default Carousel