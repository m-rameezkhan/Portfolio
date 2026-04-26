import { Briefcase, Camera, FolderGit2, Users } from "lucide-react";

const iconMap = {
  GitHub: FolderGit2,
  LinkedIn: Briefcase,
  Instagram: Camera,
  Facebook: Users,
};

export function Footer({ content }) {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <p className="footer-title">Muhammad Rameez Khan</p>
          <p className="footer-copy">
            MERN stack developer focused on thoughtful UI, scalable product builds, and clean execution.
          </p>
        </div>
        <div className="footer-links">
          {content.socials.map((item) => {
            const Icon = iconMap[item.label];

            return (
              <a key={item.label} href={item.url} target="_blank" rel="noreferrer" aria-label={item.label}>
                {Icon ? <Icon size={18} /> : null}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
