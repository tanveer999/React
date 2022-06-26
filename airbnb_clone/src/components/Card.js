import star_icon from "../images/star.png"
function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="katie_zaferes" className="card--image"></img>
            <div className="card--stats">
                <img src={star_icon} alt="star icon" className="card--star"></img>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • &nbsp;</span>
                <span className="gray">{props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>

    )
}

export default Card