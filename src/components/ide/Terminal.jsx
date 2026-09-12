import { useCallback, useEffect, useRef, useState } from 'react';
import { CloseIcon } from './Icons';
import { complete, runCommand } from '../../lib/commands';
import { PROFILE } from '../../data/profile';

const BANNER = [
  { text: `${PROFILE.handle}-shell — portfolio build 2026.9`, tone: 'key' },
  { text: 'Type `help` for commands, `ls` for files, `neofetch` for the short story.' },
  { text: '' },
];

const TONE_CLASS = {
  err: 'term__err',
  ok: 'term__ok',
  key: 'term__key',
  dim: 'dim',
};

export default function Terminal({ open, onClose, openFile, setTheme }) {
  const [lines, setLines] = useState(BANNER);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, open]);

  const submit = useCallback(
    (raw) => {
      const value = raw.trim();
      const prompt = { text: `${PROFILE.handle}@portfolio ~ $ ${value}`, tone: 'prompt' };

      const ctx = {
        openFile,
        setTheme,
        openUrl: (url) => window.open(url, '_blank', 'noopener'),
        clear: () => setLines([]),
        close: onClose,
      };

      const output = value ? runCommand(value, ctx) : [];

      setLines((prev) =>
        // `clear` empties the buffer inside ctx — keep only what came after it.
        value.trim().split(/\s+/)[0] === 'clear'
          ? []
          : [...prev, prompt, ...output, { text: '' }],
      );

      if (value) {
        setHistory((h) => [...h, value]);
        setHistIndex(-1);
      }
      setInput('');
    },
    [onClose, openFile, setTheme],
  );

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submit(input);
      return;
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const { input: next, hits } = complete(input);
      setInput(next);
      if (hits.length) setLines((p) => [...p, { text: hits.join('   '), tone: 'dim' }]);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const next = histIndex < 0 ? history.length - 1 : Math.max(0, histIndex - 1);
      setHistIndex(next);
      setInput(history[next]);
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIndex < 0) return;
      const next = histIndex + 1;
      if (next >= history.length) {
        setHistIndex(-1);
        setInput('');
      } else {
        setHistIndex(next);
        setInput(history[next]);
      }
      return;
    }
    if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  if (!open) return null;

  return (
    <section className="panel" aria-label="Terminal">
      <div className="panel__head">
        <span className="panel__tab">Terminal</span>
        <span className="panel__hint">bash — portfolio</span>
        <span style={{ flex: 1 }} />
        <button className="iconbtn" onClick={onClose} aria-label="Close terminal">
          <CloseIcon />
        </button>
      </div>

      <div
        className="term"
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div className={`term__line ${TONE_CLASS[line.tone] || ''}`} key={i}>
            {line.tone === 'prompt' ? <Prompt text={line.text} /> : line.text || ' '}
          </div>
        ))}

        <div className="term__prompt">
          <span className="term__user">{PROFILE.handle}@portfolio</span>
          <span className="term__path">~</span>
          <span className="term__sym">$</span>
          <input
            ref={inputRef}
            className="term__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck="false"
            autoComplete="off"
            autoCapitalize="off"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </section>
  );
}

function Prompt({ text }) {
  const typed = text.slice(`${PROFILE.handle}@portfolio ~ $ `.length);
  return (
    <>
      <span className="term__user">{PROFILE.handle}@portfolio</span>{' '}
      <span className="term__path">~</span> <span className="term__sym">$</span>{' '}
      <span style={{ color: 'var(--fg-strong)' }}>{typed}</span>
    </>
  );
}
