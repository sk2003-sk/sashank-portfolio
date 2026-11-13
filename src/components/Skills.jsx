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

      <Reveal className="skill-panel" delay={60}>
        {skillGroups.map((group, index) => (
          <div className="skill-row" key={group.title}>
            <div className="skill-row-head">
              <span className="skill-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{group.title}</h3>
              <p>{group.caption}</p>
            </div>

            <ul className="skill-chips">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  {skill.icon ? (
                    <img
                      src={skill.icon}
                      alt=""
                      width="20"
                      height="20"
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
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Skills;
