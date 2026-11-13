import git from "../assets/images/git-footer.svg";
import linkedin from "../assets/images/linkedin-footer.svg";
import mail from "../assets/images/mail-footer.svg";

function Footer() {
  return (
    <>
      <footer>
        <p>Follow me</p>

        <div className="footer-icons">
          <a
            href="https://github.com/sk2003-sk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="GitHub" />
          </a>

          <a
            href="https://www.linkedin.com/in/b-sashank/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>

          <a href="mailto:shashankravijay1234@gmail.com">
            <img src={mail} alt="Email" />
          </a>
        </div>
      </footer>

      <p className="copyright">Sashank © 2026</p>
    </>
  );
}

export default Footer;
