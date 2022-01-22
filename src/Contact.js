import React from 'react';
import './Contact.css';
import contactImg from "./img/hire-img.jpg"
function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2" >
                    <div className="contact__box" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1500">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p>
                            <p className="hire__text white"><strong>+9113909285</strong> or email <strong>pavanpnaik321@gmail.com</strong></p>
                        </div>
                        <form className="input__box" action="https://formsubmit.co/pavanpnaik321@gmail.com" method="POST">
        <input placeholder="Your name *" className="contact name" type="text" name="name" required />
        <input placeholder="Your Email *" className="contact email" type="email" name="email" required />
        <input placeholder="Write Your message" className="contact message" type="text" name="name"  />

        <button className="btn contact pointer"  type="submit">Send</button>
      </form>
                            </div>
                    </div>
                    <div className="col__2" >
                        <img data-aos="fade-left" data-aos-easing="linear"
                            data-aos-duration="1500" src={contactImg} alt="" className="contact__img" />
                    </div>
                </div>
            </div>
            )
}

            export default Contact
