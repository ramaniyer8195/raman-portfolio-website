import "./contact.css";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaDiscord,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import FormControl from "./form-control/form-control";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get in <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>

          <p className="contact__description">
            Don't hesitate to contact me! Whether it's about new projects,
            collaborations, or just to say hello, I'm open and excited to hear
            from you. Let's connect!
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__description">ramaniyer8195@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__description">+919819289445</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="#" className="contact__social-link">
              <FaGithub />
            </a>
            <a href="#" className="contact__social-link">
              <FaLinkedinIn />
            </a>
            <a href="#" className="contact__social-link">
              <FaXTwitter />
            </a>
            <a href="#" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="#" className="contact__social-link">
              <FaInstagram />
            </a>
            <a href="#" className="contact__social-link">
              <FaDiscord />
            </a>
            <a href="#" className="contact__social-link">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <FormControl placeholder="Your Name" />
            </div>
            <div className="form__input-div">
              <FormControl placeholder="Your Email" />
            </div>
            <div className="form__input-div">
              <FormControl placeholder="Your Subject" />
            </div>
          </div>

          <div className="form__input-div">
            <FormControl placeholder="Your Message" textArea />
          </div>

          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
