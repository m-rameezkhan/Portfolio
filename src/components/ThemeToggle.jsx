import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      data-theme-mode={theme}
      onClick={onToggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="theme-toggle__icon">{isDark ? <Sun size={16} /> : <Moon size={16} />}</span>
    </button>
  );
}
