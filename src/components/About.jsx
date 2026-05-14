import profile from "../assets/images/SK.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <div className="content">
        <p>Hi, i'm Sashank</p>

        <p>
          MERN stack developer passionate about building dynamic web
          applications. I excel at translating user requirements into seamless
          features and collaborating across teams to bring new apps to life.
        </p>

        <a href="#contact">
          <button>Contact Me</button>
        </a>

        <a href="#projects">
          <button className="proj">See Projects</button>
        </a>
      </div>

      <figure className="about-img">
        <img src={profile} alt="profile" />
      </figure>
    </section>
  );
}

export default About;
