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
  'aria-hidden': true,
};

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
  <svg {...base} width="14" height="14" {...p}>
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

export const CopyIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="5.2" y="5.2" width="8.6" height="8.6" rx="1.4" />
    <path d="M10.8 5.2V3.4a1.2 1.2 0 0 0-1.2-1.2H3.4a1.2 1.2 0 0 0-1.2 1.2v6.2a1.2 1.2 0 0 0 1.2 1.2h1.8" />
  </svg>
);

export const CheckIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m3 8.4 3.2 3.2L13 4.8" />
  </svg>
);

export const AwardIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="6" r="4" />
    <path d="m5.6 9.2-1 5.2L8 12.6l3.4 1.8-1-5.2" />
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
