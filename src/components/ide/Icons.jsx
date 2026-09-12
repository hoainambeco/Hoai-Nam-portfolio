/* Minimal 16px stroke icons — no icon-font dependency. */

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const FilesIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M9 1.8H4.2A1.2 1.2 0 0 0 3 3v10a1.2 1.2 0 0 0 1.2 1.2h7.6A1.2 1.2 0 0 0 13 13V5.8z" />
    <path d="M9 1.8V5.8H13" />
  </svg>
);

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="7.2" cy="7.2" r="4.4" />
    <path d="M10.5 10.5 14 14" />
  </svg>
);

export const GitIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="4.5" cy="3.6" r="1.8" />
    <circle cx="4.5" cy="12.4" r="1.8" />
    <circle cx="11.5" cy="7" r="1.8" />
    <path d="M4.5 5.4v5.2M6.3 4.6c2.6.3 3.4 1.2 3.6 2.4M9.9 8.2c-.5 1.6-2 2.3-4.2 2.6" />
  </svg>
);

export const TerminalIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="1.6" y="2.6" width="12.8" height="10.8" rx="1.4" />
    <path d="M4.4 6.2 6.4 8l-2 1.8M8.4 10.2h3" />
  </svg>
);

export const MailIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="1.6" y="3.2" width="12.8" height="9.6" rx="1.4" />
    <path d="m2.2 4.4 5.8 4 5.8-4" />
  </svg>
);

export const GithubIcon = (p) => (
  <svg {...base} strokeWidth="0" fill="currentColor" {...p}>
    <path d="M8 .8a7.2 7.2 0 0 0-2.28 14.03c.36.07.49-.16.49-.35v-1.22c-2 .44-2.43-.96-2.43-.96-.33-.84-.8-1.06-.8-1.06-.66-.45.05-.44.05-.44.73.05 1.11.75 1.11.75.65 1.1 1.7.79 2.11.6.07-.47.25-.79.46-.97-1.6-.18-3.28-.8-3.28-3.55 0-.79.28-1.43.74-1.93-.07-.19-.32-.92.07-1.91 0 0 .6-.2 1.98.73a6.9 6.9 0 0 1 3.6 0c1.37-.93 1.97-.73 1.97-.73.4.99.15 1.72.07 1.9.47.51.74 1.15.74 1.94 0 2.76-1.68 3.37-3.28 3.55.26.22.49.66.49 1.33v1.97c0 .2.13.42.5.35A7.2 7.2 0 0 0 8 .8Z" />
  </svg>
);

export const LinkedinIcon = (p) => (
  <svg {...base} strokeWidth="0" fill="currentColor" {...p}>
    <path d="M3.1 6.1h2.2V14H3.1zM4.2 2a1.3 1.3 0 1 0 0 2.6A1.3 1.3 0 0 0 4.2 2ZM7 6.1h2.1v1.1a2.3 2.3 0 0 1 2.07-1.14c2.21 0 2.62 1.45 2.62 3.34V14h-2.2v-3.6c0-.86-.02-1.96-1.2-1.96-1.2 0-1.38.94-1.38 1.9V14H7z" />
  </svg>
);

export const ExternalIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6.6 3.2H3.4a1.2 1.2 0 0 0-1.2 1.2v8.2a1.2 1.2 0 0 0 1.2 1.2h8.2a1.2 1.2 0 0 0 1.2-1.2V9.4" />
    <path d="M9.4 2.2H14v4.6M8 8 13.6 2.4" />
  </svg>
);

export const DownloadIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M8 2v8m0 0L5 7m3 3 3-3" />
    <path d="M2.6 11.4v1.4A1.2 1.2 0 0 0 3.8 14h8.4a1.2 1.2 0 0 0 1.2-1.2v-1.4" />
  </svg>
);

export const SunIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="3" />
    <path d="M8 1.2v1.6M8 13.2v1.6M14.8 8h-1.6M2.8 8H1.2M12.8 3.2l-1.1 1.1M4.3 11.7l-1.1 1.1M12.8 12.8l-1.1-1.1M4.3 4.3 3.2 3.2" />
  </svg>
);

export const MoonIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M13.4 9.6A5.8 5.8 0 0 1 6.4 2.6a5.9 5.9 0 1 0 7 7Z" />
  </svg>
);

export const ChevronIcon = (p) => (
  <svg {...base} width="12" height="12" viewBox="0 0 16 16" {...p}>
    <path d="m4 6 4 4 4-4" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} width="12" height="12" viewBox="0 0 16 16" {...p}>
    <path d="m4 4 8 8M12 4l-8 8" />
  </svg>
);

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M2.4 4.2h11.2M2.4 8h11.2M2.4 11.8h11.2" />
  </svg>
);

export const CommandIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M5.6 2.4a1.6 1.6 0 1 0 1.6 1.6v8a1.6 1.6 0 1 1-1.6 1.6 1.6 1.6 0 0 1 1.6-1.6h4.8a1.6 1.6 0 1 1-1.6 1.6V4a1.6 1.6 0 1 0 1.6-1.6A1.6 1.6 0 0 0 10.4 4H5.6a1.6 1.6 0 0 0 0-1.6Z" />
  </svg>
);

export const WarnIcon = (p) => (
  <svg {...base} width="13" height="13" viewBox="0 0 16 16" {...p}>
    <path d="M8 2.6 14.4 13H1.6z" />
    <path d="M8 6.6v3M8 11.4h.01" />
  </svg>
);

export const ErrorIcon = (p) => (
  <svg {...base} width="13" height="13" viewBox="0 0 16 16" {...p}>
    <circle cx="8" cy="8" r="6" />
    <path d="M8 5v3.4M8 10.8h.01" />
  </svg>
);

/** Small colored square standing in for a file-type icon. */
export function FileGlyph({ lang, color }) {
  const label = { Markdown: 'M', TypeScript: 'TS', JSON: '{}', Log: 'L', Shell: '$' }[lang] || '·';
  return (
    <span
      aria-hidden="true"
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: 16,
        height: 16,
        flexShrink: 0,
        fontSize: 9,
        fontWeight: 700,
        lineHeight: 1,
        borderRadius: 3,
        color,
        background: 'color-mix(in srgb, currentColor 14%, transparent)',
        border: '1px solid color-mix(in srgb, currentColor 28%, transparent)',
      }}
    >
      {label}
    </span>
  );
}
