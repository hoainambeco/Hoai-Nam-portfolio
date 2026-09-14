import { CV_PDF, PROFILE } from '../data/profile';
import { useActiveSection, useScrolledPast } from '../lib/hooks';
import { DownloadIcon, MoonIcon, SunIcon } from './Icons';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Sections without a nav entry are observed too, so passing through them
// clears the highlight instead of leaving the previous item lit.
const OBSERVED = ['top', 'about', 'experience', 'work', 'skills', 'education', 'contact'];

export default function Header({ theme, onToggleTheme }) {
  const scrolled = useScrolledPast(8);
  const active = useActiveSection(OBSERVED);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="wrap site-header__inner">
        <a className="brand" href="#top" lang="vi">
          {PROFILE.nameNative}
        </a>

        <nav className="nav" aria-label="Sections">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="btn btn--sm" href={CV_PDF} download="Nguyen-Hoai-Nam-CV.pdf">
            <DownloadIcon />
            <span>
              <span className="hide-xs">Download </span>CV
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
