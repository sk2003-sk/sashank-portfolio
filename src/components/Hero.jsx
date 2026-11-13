import profileImage from "../assets/images/SK.webp";
import { profile } from "../data/profile";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "./Icons";

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-copy">
        <p className="hero-eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </p>

        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-summary">{profile.summary}</p>

        <ul className="hero-highlights" aria-label="Core technologies">
          {profile.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            View Projects
            <ArrowUpRightIcon />
          </a>

          <a className="btn btn-ghost" href={profile.resume} download>
            Download Resume
            <DownloadIcon />
          </a>

          <a className="link-arrow" href="#contact">
            Contact me
          </a>
        </div>

        <div className="hero-links">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sashank on GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sashank on LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email Sashank">
            <MailIcon />
          </a>

          <span className="hero-location">
            <MapPinIcon />
            {profile.location}
          </span>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-frame">
          <img
            src={profileImage}
            alt="Portrait of Sashank B"
            width="570"
            height="760"
            fetchPriority="high"
          />
        </div>

        <div className="hero-badge">
          <span className="hero-badge-label">Focus</span>
          <span className="hero-badge-value">React.js · Frontend</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
