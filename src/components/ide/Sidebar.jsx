import { useState } from 'react';
import { ChevronIcon, DownloadIcon, ExternalIcon, FileGlyph } from './Icons';
import { FILES, LANG_COLOR } from '../../lib/files';
import { CV_PDF, CV_URL, PROFILE } from '../../data/profile';

export default function Sidebar({ activeId, onOpen, onClose, isCompact }) {
  const [openFolder, setOpenFolder] = useState(true);
  const root = FILES.filter((f) => f.folder === 'root');
  const src = FILES.filter((f) => f.folder === 'src');

  return (
    <aside className="sidebar" aria-label="Explorer">
      <div className="sidebar__head">
        <span>Explorer</span>
        {isCompact && (
          <button className="iconbtn" onClick={onClose} aria-label="Close explorer">
            <ChevronIcon style={{ transform: 'rotate(90deg)' }} />
          </button>
        )}
      </div>

      <div className="tree">
        <button
          className="tree__folder"
          onClick={() => setOpenFolder((o) => !o)}
          aria-expanded={openFolder}
        >
          <ChevronIcon className="tree__chev" data-open={openFolder} />
          <span style={{ fontWeight: 500 }}>portfolio</span>
        </button>

        {openFolder && (
          <>
            {root.map((f) => (
              <FileRow key={f.id} file={f} activeId={activeId} onOpen={onOpen} />
            ))}
            <div
              className="tree__folder"
              style={{ paddingLeft: 20, cursor: 'default', color: 'var(--fg-muted)' }}
            >
              <ChevronIcon className="tree__chev" />
              src
            </div>
            {src.map((f) => (
              <FileRow
                key={f.id}
                file={f}
                activeId={activeId}
                onOpen={onOpen}
                indent={34}
              />
            ))}
          </>
        )}
      </div>

      <div className="sidebar__foot">
        <a href={CV_URL}>
          <ExternalIcon width="12" height="12" /> cv.html
        </a>
        <a href={CV_PDF} download>
          <DownloadIcon width="12" height="12" /> cv.pdf
        </a>
        <span style={{ marginTop: 4 }}>
          {PROFILE.location} · {PROFILE.timezone}
        </span>
      </div>
    </aside>
  );
}

function FileRow({ file, activeId, onOpen, indent }) {
  const color = LANG_COLOR[file.lang] || 'var(--fg-muted)';
  return (
    <button
      className={`file${activeId === file.id ? ' file--active' : ''}`}
      onClick={() => onOpen(file.id)}
      style={indent ? { paddingLeft: indent } : undefined}
      title={file.blurb}
    >
      <FileGlyph lang={file.lang} color={color} />
      <span>{file.name}</span>
    </button>
  );
}
