import movies from "../assets/images/movies.png";
import array from "../assets/images/array-rendering.png";
import todo from "../assets/images/todo-list.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <p>Projects</p>

      <div className="project-block">
        <div className="proj-list">
          <img src={movies} alt="" />

          <p>Developed a secure React-based authentication dashboard app.</p>

          <p>Technologies Used</p>

          <p>React, NodeJS, ExpressJS, CSS, JavaScript</p>

          <a href="https://react-auth-api-app.vercel.app/" target="_blank">
            Live Demo
          </a>
        </div>

        <div className="proj-list">
          <img src={array} alt="" />

          <p>Interactive web app demonstrating efficient array rendering.</p>

          <p>Technologies Used</p>

          <p>React, CSS, JavaScript</p>

          <a href="https://array-rendering.vercel.app/" target="_blank">
            Live Demo
          </a>
        </div>

        <div className="proj-list">
          <img src={todo} alt="" />

          <p>Full-featured Todo list application built with React.</p>

          <p>Technologies Used</p>

          <p>React, CSS, JavaScript</p>

          <a
            href="https://to-do-react-app-amber-sigma.vercel.app/"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
