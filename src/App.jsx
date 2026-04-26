import { useEffect, useState } from "react";
import { portfolio } from "./data/portfolio";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Journey } from "./components/Journey";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || "dark");
  const [activeSection, setActiveSection] = useState("home");
  const resumeHref = "/resume/resume.pdf";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-20% 0px -30% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <a className="skip-link" href="#main-content">
        Skip to content
      </a> */}
      <div className="app-shell">
        <Navbar
          activeSection={activeSection}
          sections={sections}
          theme={theme}
          onToggleTheme={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
        />
        <main id="main-content">
          <Hero content={portfolio.hero} resumeHref={resumeHref} />
          <About content={portfolio.about} />
          <Skills content={portfolio.skills} />
          <Journey content={portfolio.journey} resumeHref={resumeHref} />
          <Projects content={portfolio.projects} />
          <Services content={portfolio.services} />
          <FAQ content={portfolio.faqs} />
          <Contact content={portfolio.contact} />
        </main>
        <Footer content={portfolio.contact} />
      </div>
    </>
  );
}

export default App;
