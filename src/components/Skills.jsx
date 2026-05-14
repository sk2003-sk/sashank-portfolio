import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import node from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import bootstrap from "../assets/images/bootstrap.png";
import tailwind from "../assets/images/tailwind.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import vscode from "../assets/images/vscode.png";
import figma from "../assets/images/figma.png";
import mongo from "../assets/images/monogodb.png";
import sql from "../assets/images/sql.png";

function Skills() {
  return (
    <>
      <p className="heading">Technologies</p>

      <section className="skills" id="skills">
        <div className="skill-box">
          <h3>Languages</h3>

          <div className="list">
            <img src={html} alt="" />
            <p>HTML5</p>
          </div>

          <div className="list">
            <img src={css} alt="" />
            <p>CSS3</p>
          </div>

          <div className="list">
            <img src={js} alt="" />
            <p>JavaScript</p>
          </div>
        </div>

        <div className="skill-box">
          <h3>Frameworks</h3>

          <div className="list">
            <img src={react} alt="" />
            <p>React JS</p>
          </div>

          <div className="list">
            <img src={node} alt="" />
            <p>Node JS</p>
          </div>

          <div className="list">
            <img src={express} alt="" />
            <p>Express JS</p>
          </div>
        </div>

        <div className="skill-box">
          <h3>CSS Frameworks</h3>

          <div className="list">
            <img src={bootstrap} alt="" />
            <p>Bootstrap</p>
          </div>

          <div className="list">
            <img src={tailwind} alt="" />
            <p>Tailwind CSS</p>
          </div>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>

          <div className="list">
            <img src={git} alt="" />
            <p>Git</p>
          </div>

          <div className="list">
            <img src={github} alt="" />
            <p>Github</p>
          </div>

          <div className="list">
            <img src={vscode} alt="" />
            <p>VS Code</p>
          </div>

          <div className="list">
            <img src={figma} alt="" />
            <p>Figma</p>
          </div>
        </div>

        <div className="skill-box">
          <h3>Database</h3>

          <div className="list">
            <img src={mongo} alt="" />
            <p>MongoDB</p>
          </div>

          <div className="list">
            <img src={sql} alt="" />
            <p>SQL</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
