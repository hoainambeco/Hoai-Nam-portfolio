import { useEffect, useMemo, useRef, useState } from 'react';
import { FileGlyph } from './Icons';
import { FILES, LANG_COLOR } from '../../lib/files';

export default function CommandPalette({ onClose, onOpenFile, actions }) {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const listRef = useRef(null);

  const items = useMemo(() => {
    const fileItems = FILES.map((f) => ({
      id: `file:${f.id}`,
      group: 'Files',
      label: f.name,
      hint: f.blurb,
      icon: <FileGlyph lang={f.lang} color={LANG_COLOR[f.lang]} />,
      run: () => onOpenFile(f.id),
    }));
    const all = [...fileItems, ...actions];
    const q = query.trim().toLowerCase();
    if (!q) return all;
    return all.filter((i) =>
      `${i.label} ${i.hint ?? ''} ${i.group}`.toLowerCase().includes(q),
    );
  }, [query, actions, onOpenFile]);

  useEffect(() => {
    listRef.current
      ?.querySelector('[data-active="true"]')
      ?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  const choose = (item) => {
    item?.run();
    onClose();
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((i) => (i + 1) % Math.max(items.length, 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((i) => (i - 1 + items.length) % Math.max(items.length, 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      choose(items[index]);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  let lastGroup = null;

  return (
    <div
      className="overlay"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette">
        <input
          className="palette__input"
          autoFocus
          value={query}
          placeholder="Jump to a file or run an action…"
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          onKeyDown={onKeyDown}
          aria-label="Search commands"
        />

        <div className="palette__list" ref={listRef}>
          {items.length === 0 && (
            <p className="palette__empty">No matches for “{query}”.</p>
          )}
          {items.map((item, i) => {
            const header = item.group !== lastGroup ? item.group : null;
            lastGroup = item.group;
            return (
              <div key={item.id}>
                {header && <div className="palette__group">{header}</div>}
                <button
                  className="palette__item"
                  data-active={i === index}
                  onMouseEnter={() => setIndex(i)}
                  onClick={() => choose(item)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.hint && <span className="palette__hint">{item.hint}</span>}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
