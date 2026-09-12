import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import TitleBar from './components/ide/TitleBar';
import ActivityBar from './components/ide/ActivityBar';
import Sidebar from './components/ide/Sidebar';
import TabBar from './components/ide/TabBar';
import StatusBar from './components/ide/StatusBar';
import Terminal from './components/ide/Terminal';
import CommandPalette from './components/ide/CommandPalette';
import {
  DownloadIcon,
  ExternalIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  TerminalIcon,
} from './components/ide/Icons';
import { FILES, FILE_BY_ID } from './lib/files';
import { copyText, useMediaQuery, useTheme } from './lib/hooks';
import { CV_PDF, CV_URL, PROFILE } from './data/profile';

const LINE_HEIGHT = 24; // px per "line", for the status-bar cursor readout

/** `#projects`, `#contact`, `#terminal`… make every section linkable. */
const hashTarget = () => window.location.hash.replace('#', '').toLowerCase();

export default function App() {
  const { theme, setTheme, toggleTheme } = useTheme();
  const isCompact = useMediaQuery('(max-width: 900px)');

  const [tabs, setTabs] = useState(() => {
    const target = hashTarget();
    return FILE_BY_ID[target] && target !== 'readme' ? ['readme', target] : ['readme'];
  });
  const [activeId, setActiveId] = useState(() =>
    FILE_BY_ID[hashTarget()] ? hashTarget() : 'readme',
  );
  const [sidebarOpen, setSidebarOpen] = useState(() => !isCompact);
  const [terminalOpen, setTerminalOpen] = useState(() => hashTarget() === 'terminal');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [cursor, setCursor] = useState({ line: 1, col: 1 });

  const editorRef = useRef(null);
  const activeFile = FILE_BY_ID[activeId] ?? null;

  // The explorer collapses when the viewport turns narrow, so the content keeps
  // the full width. Derived during render — no effect needed.
  const [wasCompact, setWasCompact] = useState(isCompact);
  if (wasCompact !== isCompact) {
    setWasCompact(isCompact);
    setSidebarOpen(!isCompact);
  }

  const openFile = useCallback(
    (id) => {
      if (!FILE_BY_ID[id]) return;
      setTabs((t) => (t.includes(id) ? t : [...t, id]));
      setActiveId(id);
      setCursor({ line: 1, col: 1 });
      if (editorRef.current) editorRef.current.scrollTop = 0;
      if (isCompact) setSidebarOpen(false);
    },
    [isCompact],
  );

  const closeTab = useCallback(
    (id) => {
      const position = tabs.indexOf(id);
      const remaining = tabs.filter((t) => t !== id);
      setTabs(remaining);
      // Focus the tab that slid into its place, else the last one, else nothing.
      setActiveId((current) =>
        current === id ? (remaining[position] ?? remaining.at(-1) ?? null) : current,
      );
    },
    [tabs],
  );

  const applyTheme = useCallback(
    (next) => {
      const value = next ?? (theme === 'dark' ? 'light' : 'dark');
      setTheme(value);
      return value;
    },
    [setTheme, theme],
  );

  // ── deep links ────────────────────────────────────────────────────────────
  useEffect(() => {
    const onHashChange = () => {
      const target = hashTarget();
      if (target === 'terminal') setTerminalOpen(true);
      else if (FILE_BY_ID[target]) openFile(target);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [openFile]);

  useEffect(() => {
    if (activeId) window.history.replaceState(null, '', `#${activeId}`);
  }, [activeId]);

  // ── keyboard shortcuts ────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      const mod = e.metaKey || e.ctrlKey;
      const typing = ['INPUT', 'TEXTAREA'].includes(e.target.tagName);

      if (mod && (e.key === 'k' || e.key === 'p')) {
        e.preventDefault();
        setPaletteOpen((o) => !o);
        return;
      }
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setTerminalOpen((o) => !o);
        return;
      }
      if (mod && e.key === 'b' && !typing) {
        e.preventDefault();
        setSidebarOpen((o) => !o);
        return;
      }
      if (mod && /^[1-6]$/.test(e.key)) {
        e.preventDefault();
        openFile(FILES[Number(e.key) - 1].id);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openFile]);

  // ── fake-but-honest cursor readout, driven by scroll position ─────────────
  const onEditorScroll = (e) => {
    const line = Math.floor(e.currentTarget.scrollTop / LINE_HEIGHT) + 1;
    setCursor((c) => (c.line === line ? c : { line, col: 1 }));
  };

  const paletteActions = useMemo(
    () => [
      {
        id: 'action:theme',
        group: 'Actions',
        label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
        hint: 'theme',
        icon: theme === 'dark' ? <SunIcon /> : <MoonIcon />,
        run: () => applyTheme(),
      },
      {
        id: 'action:terminal',
        group: 'Actions',
        label: terminalOpen ? 'Close terminal' : 'Open terminal',
        hint: '⌃`',
        icon: <TerminalIcon />,
        run: () => setTerminalOpen((o) => !o),
      },
      {
        id: 'action:copy-email',
        group: 'Actions',
        label: `Copy email — ${PROFILE.email}`,
        icon: <MailIcon />,
        run: () => copyText(PROFILE.email),
      },
      {
        id: 'link:cv',
        group: 'Links',
        label: 'Open CV page',
        hint: 'cv.html',
        icon: <ExternalIcon />,
        run: () => window.open(CV_URL, '_blank', 'noopener'),
      },
      {
        id: 'link:pdf',
        group: 'Links',
        label: 'Download CV as PDF',
        icon: <DownloadIcon />,
        run: () => window.open(CV_PDF, '_blank', 'noopener'),
      },
      {
        id: 'link:github',
        group: 'Links',
        label: 'GitHub — @hoainambeco',
        icon: <GithubIcon />,
        run: () => window.open('https://github.com/hoainambeco', '_blank', 'noopener'),
      },
      {
        id: 'link:linkedin',
        group: 'Links',
        label: 'LinkedIn — in/namnguyen1024',
        icon: <LinkedinIcon />,
        run: () =>
          window.open('https://www.linkedin.com/in/namnguyen1024/', '_blank', 'noopener'),
      },
    ],
    [applyTheme, terminalOpen, theme],
  );

  const View = activeFile?.View;

  return (
    <div className="ide">
      <TitleBar
        activeFile={activeFile}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
        onToggleSidebar={() => setSidebarOpen((o) => !o)}
        isCompact={isCompact}
      />

      <div className="workbench">
        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen((o) => !o)}
          terminalOpen={terminalOpen}
          onToggleTerminal={() => setTerminalOpen((o) => !o)}
          onOpenPalette={() => setPaletteOpen(true)}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {sidebarOpen ? (
          <Sidebar
            activeId={activeId}
            onOpen={openFile}
            onClose={() => setSidebarOpen(false)}
            isCompact={isCompact}
          />
        ) : (
          <div />
        )}

        {isCompact && sidebarOpen && (
          <div className="sidebar-scrim" onClick={() => setSidebarOpen(false)} />
        )}

        <main className="main">
          <TabBar
            tabs={tabs}
            activeId={activeId}
            onSelect={setActiveId}
            onClose={closeTab}
          />

          {activeFile && (
            <div className="breadcrumb">
              <span>portfolio</span>
              <span className="dim">›</span>
              {activeFile.folder === 'src' && (
                <>
                  <span>src</span>
                  <span className="dim">›</span>
                </>
              )}
              <span style={{ color: 'var(--fg)' }}>{activeFile.name}</span>
            </div>
          )}

          <div className="editor" ref={editorRef} onScroll={onEditorScroll}>
            {View ? (
              <div className="editor__inner" key={activeId}>
                <View openFile={openFile} openTerminal={() => setTerminalOpen(true)} />
              </div>
            ) : (
              <EmptyState onOpen={openFile} />
            )}
          </div>

          <Terminal
            open={terminalOpen}
            onClose={() => setTerminalOpen(false)}
            openFile={openFile}
            setTheme={applyTheme}
          />
        </main>
      </div>

      <StatusBar
        file={activeFile}
        cursor={cursor}
        onToggleTerminal={() => setTerminalOpen((o) => !o)}
        onOpenContact={() => openFile('contact')}
      />

      {paletteOpen && (
        <CommandPalette
          onClose={() => setPaletteOpen(false)}
          onOpenFile={openFile}
          actions={paletteActions}
        />
      )}
    </div>
  );
}

function EmptyState({ onOpen }) {
  return (
    <div
      className="editor__inner"
      style={{ display: 'grid', placeItems: 'center', minHeight: '52vh', textAlign: 'center' }}
    >
      <div>
        <p className="dim" style={{ fontSize: 13 }}>
          No file is open.
        </p>
        <div style={{ display: 'grid', gap: 8, marginTop: 18, fontSize: 12.5 }}>
          <Shortcut keys="⌘K" label="Show all commands" />
          <Shortcut keys="⌘B" label="Toggle explorer" />
          <Shortcut keys="⌃`" label="Toggle terminal" />
        </div>
        <button className="btn btn--primary" style={{ marginTop: 22 }} onClick={() => onOpen('readme')}>
          Open readme.md
        </button>
      </div>
    </div>
  );
}

function Shortcut({ keys, label }) {
  return (
    <span style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
      <span className="muted">{label}</span>
      <span className="kbd">{keys}</span>
    </span>
  );
}
