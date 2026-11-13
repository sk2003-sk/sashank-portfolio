import { profile } from "../data/profile";
import { ArrowUpIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const FOOTER_LINKS = [
  { href: "#about", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-name">{profile.name}</p>
          <p className="footer-tagline">
            {profile.role} based in {profile.location}.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 {profile.name}. Built with React and Vite.</p>
        <a className="footer-top-link" href="#about">
          Back to top
          <ArrowUpIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
