import { CloseIcon, FileGlyph } from './Icons';
import { FILE_BY_ID, LANG_COLOR } from '../../lib/files';

export default function TabBar({ tabs, activeId, onSelect, onClose }) {
  return (
    <div className="tabbar" role="tablist" aria-label="Open files">
      {tabs.map((id) => {
        const file = FILE_BY_ID[id];
        const active = id === activeId;
        return (
          <div
            key={id}
            className={`tab${active ? ' tab--active' : ''}`}
            role="tab"
            aria-selected={active}
            tabIndex={-1}
          >
            <button
              onClick={() => onSelect(id)}
              style={{ display: 'flex', alignItems: 'center', gap: 8 }}
            >
              <FileGlyph lang={file.lang} color={LANG_COLOR[file.lang]} />
              {file.name}
            </button>
            <button
              className="tab__close"
              onClick={() => onClose(id)}
              aria-label={`Close ${file.name}`}
            >
              <CloseIcon />
            </button>
          </div>
        );
      })}
    </div>
  );
}
