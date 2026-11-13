import { useState } from "react";
import emailjs from "@emailjs/browser";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./Icons";

const EMAILJS_SERVICE_ID = "service_b7xvg6s";
const EMAILJS_TEMPLATE_ID = "template_pa3o93g";
const EMAILJS_PUBLIC_KEY = "RjTm88vRkVFa_kDfz";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (status === "sending") return;

    if (form.company.value) {
      form.reset();
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      setStatus("success");
      setFeedback("Message sent. Thanks for reaching out — I'll reply soon.");
    } catch {
      setStatus("error");
      setFeedback(
        `Message could not be sent. Please email me directly at ${profile.email}.`,
      );
    }
  };

  return (
    <section className="section contact" id="contact">
      <div className="contact-grid">
        <Reveal className="contact-copy">
          <SectionHeader
            eyebrow="Contact"
            title="Let's work together"
            description="Open to full-time frontend roles and paid internships. Send a message or reach me directly."
          />

          <ul className="contact-list">
            <li>
              <MailIcon />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <LinkedInIcon />
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/b-sashank
              </a>
            </li>
            <li>
              <GitHubIcon />
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/sk2003-sk
              </a>
            </li>
            <li>
              <MapPinIcon />
              <span>{profile.location}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal as="form" className="contact-form" onSubmit={sendEmail}>
          <div className="field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="user_name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="user_email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              minLength="10"
              placeholder="Tell me about the role or project"
              required
            />
          </div>

          <input
            className="honeypot"
            type="text"
            name="company"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <button
            className="btn btn-primary"
            type="submit"
            disabled={status === "sending"}
            aria-busy={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          <p
            className={`form-status is-${status}`}
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
