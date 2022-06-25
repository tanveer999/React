import katie_zaferes from "../images/katie_zaferes.jpg"
import star_icon from "../images/star.png"
function Card() {
    return (
        <div className="card">
            <img src={katie_zaferes} alt="katie_zaferes" className="card--image"></img>
            <div className="card--stats">
                <img src={star_icon} alt="star icon" className="card--star"></img>
                <span>5.0</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>

    )
}

export default Card