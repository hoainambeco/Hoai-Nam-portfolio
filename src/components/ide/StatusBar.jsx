import { useEffect, useState } from 'react';
import { ErrorIcon, GitIcon, TerminalIcon, WarnIcon } from './Icons';
import { PROFILE } from '../../data/profile';

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(t);
  }, []);
  return now.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Ho_Chi_Minh',
  });
}

export default function StatusBar({ file, cursor, onToggleTerminal, onOpenContact }) {
  const time = useClock();

  return (
    <footer className="statusbar">
      <span className="status__item">
        <GitIcon width="13" height="13" /> master
      </span>
      <span className="status__item status__hide-sm">
        <ErrorIcon /> 0 <WarnIcon /> 0
      </span>

      <span className="status__spacer" />

      {PROFILE.available && (
        <button className="status__item" onClick={onOpenContact}>
          <span className="status__dot" /> available
        </button>
      )}
      <span className="status__item status__hide-sm">
        Ln {cursor.line}, Col {cursor.col}
      </span>
      <span className="status__item status__hide-sm">UTF-8</span>
      <span className="status__item status__hide-sm">{file?.lang ?? 'Plain Text'}</span>
      <button className="status__item" onClick={onToggleTerminal} title="Toggle terminal ⌃`">
        <TerminalIcon width="13" height="13" />
      </button>
      <span className="status__item status__hide-sm">{time} ICT</span>
    </footer>
  );
}
