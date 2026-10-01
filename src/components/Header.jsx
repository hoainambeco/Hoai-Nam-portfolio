import { useActiveSection, useScrolledPast } from '../lib/hooks';
import { useI18n } from '../lib/i18n';
import { DownloadIcon, MoonIcon, SunIcon } from './Icons';

const NAV = ['about', 'experience', 'work', 'skills', 'contact'];

// Sections without a nav entry are observed too, so passing through them
// clears the highlight instead of leaving the previous item lit.
const OBSERVED = ['top', 'about', 'experience', 'work', 'skills', 'education', 'contact'];

export default function Header({ theme, onToggleTheme }) {
  const scrolled = useScrolledPast(8);
  const active = useActiveSection(OBSERVED);
  const { t, data, toggleLang } = useI18n();
  const themeLabel = t.themeTo[theme === 'dark' ? 'light' : 'dark'];

  return (
    <header className="site-header" data-scrolled={scrolled}>
      <div className="wrap site-header__inner">
        <a className="brand" href="#top" lang="vi">
          {data.PROFILE.nameNative}
        </a>

        <nav className="nav" aria-label={t.navLabel}>
          {NAV.map((id) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <button
            type="button"
            className="icon-btn lang-btn"
            onClick={toggleLang}
            lang={t.langSwitch.to}
            aria-label={t.langSwitch.title}
            title={t.langSwitch.title}
          >
            {t.langSwitch.to.toUpperCase()}
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="btn btn--sm" href={data.cvPdf} download={data.cvPdfName}>
            <DownloadIcon />
            <span>
              <span className="hide-xs">{t.download} </span>CV
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
