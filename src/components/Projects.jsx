import { useState } from "react";
import { projects } from "../data/projects";
import { ArrowUpRightIcon, CheckIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Projects() {
  const [active, setActive] = useState(0);

  return (
    <section className="section" id="projects">
      <Reveal>
        <SectionHeader
          eyebrow="Projects"
          title="Things I've built"
          description="Three projects, each deployed and open to explore."
        />
      </Reveal>

      <Reveal className="project-showcase">
        <div
          className="project-switch"
          role="group"
          aria-label="Choose a project"
        >
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={`project-tab${index === active ? " is-active" : ""}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <span className="project-tab-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-tab-text">
                <strong>{project.title}</strong>
                <small>{project.subtitle}</small>
              </span>
              <ArrowUpRightIcon size={15} />
            </button>
          ))}
        </div>

        <div className="project-stage">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-panel"
              hidden={index !== active}
            >
              <a
                className="project-media"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site (opens in a new tab)`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width="1100"
                  height="688"
                  loading="lazy"
                  decoding="async"
                />
                <span className="project-media-hint" aria-hidden="true">
                  Visit site
                  <ArrowUpRightIcon />
                </span>
              </a>

              <div className="project-body">
                <div className="project-heading">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <span className="project-period">{project.period}</span>
                </div>

                <p className="project-desc">{project.description}</p>

                <ul className="project-features" aria-label="Key features">
                  {project.features.slice(0, 3).map((feature) => (
                    <li key={feature}>
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="tag-list" aria-label="Tech stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                <div className="project-links">
                  <a
                    className="btn btn-primary btn-small"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live demo
                    <ArrowUpRightIcon />
                  </a>
                  <a
                    className="btn btn-ghost btn-small"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Projects;
