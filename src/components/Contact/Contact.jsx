import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_1brlmda",
      "template_z880qw7",
      form.current,
      "BoAtUKQsYJpdTQLul"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-icon" />
            <h3>Email</h3>
            <h5>debyansh126@gmail.com</h5>
            <a
              href="mailto:debyansh126@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-icon" />
            <h3>Messenger</h3>
            <h5>Debyansh Shaw</h5>
            <a
              href="https://m.me/debyansh.shaw.9/"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h3>WhatsApp</h3>
            <h5>+91 7980 50 1748</h5>
            <a
              href="https://api.whatsapp.com/send?phone=7980501748"
              rel="noreferrer"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
