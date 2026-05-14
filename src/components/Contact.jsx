import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b7xvg6s",
        "template_pa3o93g",
        form.current,
        "RjTm88vRkVFa_kDfz",
      )
      .then(
        () => {
          alert("Message Sent Successfully");
        },
        () => {
          alert("Failed to send message");
        },
      );

    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <p>Contact</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Email@gmail.com"
          required
        />

        <textarea
          name="message"
          rows="8"
          placeholder="Send the details"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
