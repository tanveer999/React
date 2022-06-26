import phone_icon from "../images/phone_icon.png"
import mail_icon from "../images/mail_icon.png"

function Contact({img, name, email, phone}) {
    return (
        <div className="contact-card">
            <img src={img} alt="cat" />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phone_icon} alt="phone icon" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mail_icon} alt="mail" />
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact