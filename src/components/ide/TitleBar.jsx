import { CommandIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';
import { PROFILE } from '../../data/profile';

export default function TitleBar({
  activeFile,
  theme,
  onToggleTheme,
  onOpenPalette,
  onToggleSidebar,
  isCompact,
}) {
  return (
    <header className="titlebar">
      {isCompact ? (
        <button
          className="iconbtn"
          onClick={onToggleSidebar}
          aria-label="Toggle explorer"
        >
          <MenuIcon />
        </button>
      ) : (
        <span className="dots" aria-hidden="true">
          <span className="dot dot--r" />
          <span className="dot dot--y" />
          <span className="dot dot--g" />
        </span>
      )}

      <div className="titlebar__title">
        {activeFile ? (
          <>
            <b>{activeFile.name}</b> — {PROFILE.handle}/portfolio
          </>
        ) : (
          <>{PROFILE.handle}/portfolio</>
        )}
      </div>

      <div className="titlebar__right">
        <button
          className="iconbtn iconbtn--wide"
          onClick={onOpenPalette}
          aria-label="Open command palette"
          title="Command palette"
        >
          <CommandIcon />
          {!isCompact && <span className="kbd">⌘K</span>}
        </button>
        <button
          className="iconbtn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
}
