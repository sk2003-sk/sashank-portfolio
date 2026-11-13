import learnhub from "../assets/images/learnhub.png";
import sparkBeauty from "../assets/images/spark-beauty.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <p>Projects</p>

      <div className="project-block">
        <div className="proj-list">
          <img src={learnhub} alt="LearnHub learning platform homepage" />

          <p>
            LearnHub — a learning platform with a searchable course catalog,
            featured lessons and progress certificates.
          </p>

          <p>Technologies Used</p>

          <p>React, React Router, Tailwind CSS, JavaScript</p>

          <a href="https://learn-hub-ai-alpha.vercel.app" target="_blank">
            Live Demo
          </a>
        </div>

        <div className="proj-list">
          <img src={sparkBeauty} alt="Spark beauty parlour booking app homepage" />

          <p>
            Spark Beauty Parlour — a MERN salon booking app with service
            categories, booking flow and booking history.
          </p>

          <p>Technologies Used</p>

          <p>React, NodeJS, ExpressJS, MongoDB, REST APIs</p>

          <a href="https://spark-beauty-parlour.vercel.app" target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
