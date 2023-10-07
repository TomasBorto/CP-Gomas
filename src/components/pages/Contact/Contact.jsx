import { ContactUs } from "./Form/Form";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa"
import './Contact.css'

export default function Contact() {
    return (
        <section id="contactanos" className="section-contact">
            <h1>Contactanos</h1>
            <div className="div-contact">
                <div className="div-form">
                    <ContactUs />
                </div>
                <div className="div-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.7651351620893!2d-58.56100752422973!3d-34.61010005783526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9ebb008b6ed%3A0x8d20ddb3160dd5f3!2sDunlop%20CP%20Goma!5e0!3m2!1ses-419!2sar!4v1695299433619!5m2!1ses-419!2sar" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="contact-datos">
                        <div className="contact-dato"><span><FaPhone/></span>4750-3063</div>
                        <div className="contact-dato"><span><FaMapMarkerAlt/></span>Av. Mitre 4461, Caseros</div>
                    </div>
                </div>
            </div>
        </section>
    )
}