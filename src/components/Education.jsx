import { education } from "../data/education";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Education() {
  return (
    <section className="section" id="education">
      <Reveal>
        <SectionHeader
          eyebrow="Education"
          title="Academic background"
          description="B.Tech graduate, class of 2025."
        />
      </Reveal>

      <div className="education-grid">
        {education.map((item, index) => (
          <Reveal
            as="article"
            key={item.institution}
            className={`edu-card${item.primary ? " is-primary" : ""}`}
            delay={index * 80}
          >
            <img
              src={item.image}
              alt=""
              width="120"
              height="120"
              loading="lazy"
            />

            <p className="edu-qualification">{item.qualification}</p>
            <h3>{item.institution}</h3>

            {(item.location || item.period) && (
              <p className="edu-meta">
                {[item.location, item.period].filter(Boolean).join(" · ")}
              </p>
            )}

            <p className="edu-result">{item.result}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Education;
