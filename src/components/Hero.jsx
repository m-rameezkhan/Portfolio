import { motion } from "framer-motion";
import { ArrowDownRight, Download, Sparkles } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function Hero({ content, resumeHref }) {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <SectionReveal className="hero-copy">
          <span className="hero-badge">
            <Sparkles size={16} />
            {content.eyebrow}
          </span>
          <div className="hero-title">
            <h1>{content.name}</h1>
            <p className="hero-role">{content.role}</p>
          </div>
          <p>{content.description}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              <span>View Projects</span>
              <ArrowDownRight size={18} />
            </a>
            <a className="button button--secondary" href="#contact">
              <span>Contact Me</span>
            </a>
          </div>

          <div className="hero-subactions">
            <a className="text-link" href={resumeHref} download>
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            <span className="hero-divider" aria-hidden="true" />
            <span className="hero-status">Open to freelance, and collaborations</span>
          </div>

          <ul className="hero-highlights" aria-label="Core strengths">
            {content.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>

          <div className="hero-stats">
            {content.stats.map((item) => (
              <div key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </SectionReveal>
        <motion.div
          className="hero-orb hero-orb--teal"
          animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="hero-orb hero-orb--soft"
          animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
