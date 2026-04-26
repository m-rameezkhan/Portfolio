import { useState } from "react";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

const filters = [
  { id: "all", label: "All work" },
  { id: "featured", label: "Featured" },
  { id: "full-stack", label: "Full stack" },
  { id: "frontend", label: "Front-end" },
  { id: "mini", label: "Mini projects" },
  { id: "ai", label: "AI" },
];

export function Projects({ content }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = content.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work, experiments, and shipped product ideas"
            description="A mix of featured builds and smaller experiments, carrying over the strongest content from the previous portfolio while presenting it with a fresh interface."
          />
        </SectionReveal>

        <SectionReveal className="filter-bar" delay={0.05}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={activeFilter === filter.id ? "filter-pill is-active" : "filter-pill"}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </SectionReveal>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <SectionReveal className="surface-card project-card" key={project.title} delay={index * 0.04}>
              <div className="project-card__media">
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                <div className="project-card__badge-row">
                  <span>{project.featured ? "Featured" : project.category}</span>
                  <span>{project.tech.length} technologies</span>
                </div>
              </div>

              <div className="project-card__body">
                <div className="project-card__copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <ul className="tag-list">
                  {project.tech.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-card__actions">
                  {project.liveUrl ? (
                    <a className="button button--secondary" href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="project-card__note">Source available, public demo not active.</span>
                  )}
                  <a className="button button--ghost" href={project.repoUrl} target="_blank" rel="noreferrer">
                    <FolderGit2 size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
