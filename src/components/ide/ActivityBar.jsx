import {
  FilesIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  TerminalIcon,
} from './Icons';
import { PROFILE } from '../../data/profile';

export default function ActivityBar({
  sidebarOpen,
  onToggleSidebar,
  terminalOpen,
  onToggleTerminal,
  onOpenPalette,
  theme,
  onToggleTheme,
}) {
  return (
    <nav className="activitybar" aria-label="Primary">
      <button
        className="activitybar__btn"
        aria-current={sidebarOpen}
        aria-label="Explorer"
        title="Explorer  ⌘B"
        onClick={onToggleSidebar}
      >
        <FilesIcon width="20" height="20" />
      </button>
      <button
        className="activitybar__btn"
        aria-label="Search"
        title="Command palette  ⌘K"
        onClick={onOpenPalette}
      >
        <SearchIcon width="20" height="20" />
      </button>
      <button
        className="activitybar__btn"
        aria-current={terminalOpen}
        aria-label="Terminal"
        title="Terminal  ⌃`"
        onClick={onToggleTerminal}
      >
        <TerminalIcon width="20" height="20" />
      </button>

      <span className="activitybar__spacer" />

      <a
        className="activitybar__btn"
        href="https://github.com/hoainambeco"
        target="_blank"
        rel="noreferrer"
        title="GitHub"
        aria-label="GitHub"
      >
        <GithubIcon width="18" height="18" />
      </a>
      <a
        className="activitybar__btn"
        href="https://www.linkedin.com/in/namnguyen1024/"
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        <LinkedinIcon width="18" height="18" />
      </a>
      <a
        className="activitybar__btn"
        href={`mailto:${PROFILE.email}`}
        title="Email"
        aria-label="Email"
      >
        <MailIcon width="18" height="18" />
      </a>
      <button
        className="activitybar__btn"
        onClick={onToggleTheme}
        title="Toggle theme"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <SunIcon width="18" height="18" /> : <MoonIcon width="18" height="18" />}
      </button>
    </nav>
  );
}
