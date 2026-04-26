import { Code2, Database, Layers3, LayoutTemplate, Rocket, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

const iconMap = {
  code: Code2,
  database: Database,
  layers: Layers3,
  layout: LayoutTemplate,
  rocket: Rocket,
  spark: Sparkles,
};

export function Services({ content }) {
  return (
    <section className="section" id="services">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Ways I can contribute to a product or project"
            description="These offerings carry forward the service areas from the previous site, now presented in a cleaner product-style layout."
          />
        </SectionReveal>

        <div className="services-grid">
          {content.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <SectionReveal className="surface-card service-card" key={service.title} delay={index * 0.05}>
                <div className="service-icon">{Icon ? <Icon size={20} /> : null}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
