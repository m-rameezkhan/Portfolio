import { useState } from "react";
import { ArrowUpRight, Briefcase, Camera, FolderGit2, Mail, MapPin, Phone, Users } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SectionReveal } from "./SectionReveal";

const socialIcons = {
  GitHub: FolderGit2,
  LinkedIn: Briefcase,
  Instagram: Camera,
  Facebook: Users,
};

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact({ content }) {
  const [formValues, setFormValues] = useState(initialValues);
  const [helperText, setHelperText] = useState(
    "Fill in the form and I will open a pre-filled email draft using your default mail app.",
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(formValues.subject || "Project inquiry from portfolio");
    const body = encodeURIComponent(
      `Name: ${formValues.name}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`,
    );

    window.location.href = `mailto:${content.email}?subject=${subject}&body=${body}`;
    setHelperText(`If your mail app did not open, you can email me directly at ${content.email}.`);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let us build something useful, clean, and memorable"
            description="Reach out for freelance work, collaborative builds, internship opportunities, or product discussions."
          />
        </SectionReveal>

        <div className="contact-grid">
          <SectionReveal className="contact-copy" delay={0.05}>
            <div className="surface-card contact-card">
              <h3>Start a conversation</h3>
              <p>
                I enjoy building polished web experiences and practical full-stack solutions. If you have an idea,
                product, or opportunity in mind, let us talk.
              </p>
              <div className="contact-details">
                <a href={`mailto:${content.email}`}>
                  <Mail size={18} />
                  <span>{content.email}</span>
                </a>
                <a href={`tel:${content.phone.replace(/\s+/g, "")}`}>
                  <Phone size={18} />
                  <span>{content.phone}</span>
                </a>
                <a href={content.mapUrl} target="_blank" rel="noreferrer">
                  <MapPin size={18} />
                  <span>{content.location}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="social-list">
                {content.socials.map((item) => {
                  const Icon = socialIcons[item.label];

                  return (
                    <a key={item.label} href={item.url} target="_blank" rel="noreferrer" aria-label={item.label}>
                      {Icon ? <Icon size={18} /> : null}
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form className="surface-card contact-form" onSubmit={handleSubmit}>
              <div className="field-grid">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <label>
                <span>Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={formValues.subject}
                  onChange={handleChange}
                  placeholder="How can I help?"
                  required
                />
              </label>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  rows="7"
                  value={formValues.message}
                  onChange={handleChange}
                  placeholder="Tell me a little about the project, role, or collaboration."
                  required
                />
              </label>
              <button type="submit" className="button button--primary">
                <Mail size={18} />
                <span>Open Email Draft</span>
              </button>
              <p className="form-helper">{helperText}</p>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
