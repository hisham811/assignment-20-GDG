import "../Styles/Contact.css"

const Contact = () => {

    return(
        <div className="all">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <form className="contact-form" action="#" method="post">
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Contact