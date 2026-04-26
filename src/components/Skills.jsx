import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function Skills({ content }) {
  return (
    <section className="section section--alt" id="skills">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical strengths built through hands-on work"
            description="The stack I use most often and the areas where I am steadily leveling up."
          />
        </SectionReveal>

        <div className="skills-grid">
          {content.map((skill, index) => (
            <SectionReveal className="surface-card skill-card" key={skill.title} delay={index * 0.05}>
              <div className="skill-card__header">
                <h3>{skill.title}</h3>
                <span>{skill.level}%</span>
              </div>
              <p>{skill.description}</p>
              <div className="progress-track" aria-hidden="true">
                <span style={{ width: `${skill.level}%` }} />
              </div>
              <ul className="tag-list">
                {skill.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
