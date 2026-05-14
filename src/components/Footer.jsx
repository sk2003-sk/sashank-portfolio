import git from "../assets/images/git-footer.svg";
import linkedin from "../assets/images/linkedin-footer.svg";
import mail from "../assets/images/mail-footer.svg";

function Footer() {
  return (
    <>
      <footer>
        <p>Follow me</p>

        <div className="footer-icons">
          <a href="https://github.com/sk2003-sk" target="_blank">
            <img src={git} alt="" />
          </a>

          <a href="https://linkedin.com" target="_blank">
            <img src={linkedin} alt="" />
          </a>

          <a href="mailto:example@gmail.com">
            <img src={mail} alt="" />
          </a>
        </div>
      </footer>

      <p className="copyright">Sashank © 2026</p>
    </>
  );
}

export default Footer;
