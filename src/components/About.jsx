import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

export function About({ content }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="About"
            title={content.title}
            description="A quick overview of who I am, what I build, and how I approach product-focused development."
          />
        </SectionReveal>

        <div className="about-grid">
          <SectionReveal className="about-copy" delay={0.05}>
            <p className="lead-text">{content.intro}</p>
            <p>{content.body}</p>
            <div className="about-focus-grid">
              {content.focusAreas.map((item) => (
                <article key={item.title} className="surface-card about-focus-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className="about-facts" delay={0.12}>
            <div className="surface-card about-facts-card">
              <span className="card-kicker">Snapshot</span>
              <h3>Developer profile</h3>
              <dl className="facts-list">
                {content.facts.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
