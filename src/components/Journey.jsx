import { Download, GraduationCap, Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

function TimelineBlock({ icon, title, items }) {
  return (
    <div className="surface-card timeline-card">
      <div className="timeline-card__header">
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>
      <div className="timeline-list">
        {items.map((item) => (
          <article key={`${item.title}-${item.place}`} className="timeline-item">
            <div className="timeline-item__meta">
              <strong>{item.place}</strong>
              <span>{item.period}</span>
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            {item.bullets ? (
              <ul className="timeline-bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

export function Journey({ content, resumeHref }) {
  return (
    <section className="section" id="journey">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Journey"
            title="Education, experience, and current momentum"
            description="A focused timeline of how I have been growing as a developer, plus a resume export you can download directly."
          />
        </SectionReveal>

        <div className="journey-grid">
          <SectionReveal delay={0.05}>
            <TimelineBlock icon={<Briefcase size={18} />} title="Experience" items={content.experience} />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <TimelineBlock icon={<GraduationCap size={18} />} title="Education" items={content.education} />
          </SectionReveal>
        </div>

        <SectionReveal className="journey-summary" delay={0.15}>
          <div className="surface-card resume-card">
            <div>
              <span className="card-kicker">Resume</span>
              <h3>Need a quick resume version?</h3>
              <p>
                Download a concise PDF generated from the latest portfolio content, including skills, education,
                experience, and contact details.
              </p>
            </div>
            <ul className="tag-list">
              {content.quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
            <a className="button button--primary" href={resumeHref} download>
              <Download size={18} />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
