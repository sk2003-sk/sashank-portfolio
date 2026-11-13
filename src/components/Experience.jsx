import { experience } from "../data/experience";
import { ArrowUpRightIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Experience() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <SectionHeader
          eyebrow="Experience"
          title="Internship and project work"
          description="Hands-on React development, from guided exercises to production-style applications."
        />
      </Reveal>

      <ol className="timeline">
        {experience.map((item, index) => (
          <Reveal
            as="li"
            key={`${item.company}-${item.role}`}
            className="timeline-item"
            delay={index * 90}
          >
            <span className="timeline-marker" aria-hidden="true" />

            <div className="timeline-card">
              <div className="timeline-top">
                <h3>{item.role}</h3>
                {item.period ? (
                  <span className="timeline-period">{item.period}</span>
                ) : null}
              </div>

              <p className="timeline-company">{item.company}</p>
              <p className="timeline-desc">{item.description}</p>

              {item.link ? (
                <a
                  className="timeline-link"
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.label}
                  <ArrowUpRightIcon size={15} />
                </a>
              ) : null}

              <ul className="tag-list" aria-label="Technologies">
                {item.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
