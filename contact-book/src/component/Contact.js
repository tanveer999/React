import phone_icon from "../images/phone_icon.png"
import mail_icon from "../images/mail_icon.png"

function Contact(props) {
    return (
        <div className="contact-card">
            <img src={props.img} alt="cat" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phone_icon} alt="phone icon" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mail_icon} alt="mail" />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Contact