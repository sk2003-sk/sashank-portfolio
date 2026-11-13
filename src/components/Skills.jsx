import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

function Skills() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <SectionHeader
          eyebrow="Skills"
          title="Tools I build with"
          description="The stack I use for frontend work, API integration and shipping projects."
        />
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            className="skill-card"
            delay={(index % 3) * 80}
          >
            <div className="skill-card-head">
              <h3>{group.title}</h3>
              <p>{group.caption}</p>
            </div>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt=""
                      width="26"
                      height="26"
                      loading="lazy"
                    />
                  ) : (
                    <span className="skill-glyph" aria-hidden="true">
                      {skill.glyph}
                    </span>
                  )}
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
