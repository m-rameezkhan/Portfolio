import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar({ activeSection, sections, theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a className="brand-mark" href="#home" onClick={closeMenu}>
          <span className="brand-mark__dot" />
          <span>
            Muhammad Rameez Khan
            <small>MERN stack developer</small>
          </span>
        </a>

        <nav className={`site-nav ${isOpen ? "site-nav--open" : ""}`} aria-label="Primary navigation">
          <div className="site-nav__panel">
            <div className="site-nav__mobile-head">
              <span>Navigate</span>
              <button type="button" className="icon-button" onClick={closeMenu} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={activeSection === section.id ? "is-active" : ""}
                    onClick={closeMenu}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="nav-controls">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          <button
            type="button"
            className="icon-button menu-button"
            aria-label="Open menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
