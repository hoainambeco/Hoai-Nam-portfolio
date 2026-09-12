import { FILES, resolveFile } from './files';
import {
  AWARDS,
  CV_URL,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  SOCIALS,
  STATS,
} from '../data/profile';

const out = (text = '', tone) => ({ text, tone });
const err = (text) => ({ text, tone: 'err' });
const key = (text) => ({ text, tone: 'key' });
const dim = (text) => ({ text, tone: 'dim' });

const pad = (s, n) => s.padEnd(n, ' ');

/**
 * Every terminal command. `run(args, ctx)` returns output lines; side effects
 * (opening a file, switching theme…) go through `ctx`.
 */
export const COMMANDS = [
  {
    name: 'help',
    usage: 'help',
    desc: 'list every command',
    run: () => [
      key('Available commands'),
      ...COMMANDS.map((c) => out(`  ${pad(c.usage, 22)} ${c.desc}`)),
      out(),
      dim('Tip: Tab completes, ↑/↓ walks history, ⌃` closes this panel.'),
    ],
  },
  {
    name: 'ls',
    usage: 'ls',
    desc: 'list the files in this portfolio',
    run: () =>
      FILES.map((f) => out(`  ${pad(f.name, 18)} ${f.blurb}`)),
  },
  {
    name: 'open',
    usage: 'open <file>',
    desc: 'open a file in the editor',
    run: (args, ctx) => {
      const file = resolveFile(args[0] || '');
      if (!file) return [err(`open: no such file: ${args[0] || ''}`), dim('Try `ls`.')];
      ctx.openFile(file.id);
      return [out(`Opening ${file.name}…`, 'ok')];
    },
  },
  {
    name: 'cat',
    usage: 'cat <file>',
    desc: 'print a file right here',
    run: (args) => {
      const file = resolveFile(args[0] || '');
      if (!file) return [err(`cat: ${args[0] || ''}: No such file or directory`)];
      return CAT[file.id]();
    },
  },
  {
    name: 'whoami',
    usage: 'whoami',
    desc: 'the short version',
    run: () => [
      key(PROFILE.name),
      out(`${PROFILE.role} @ ${PROFILE.company}`),
      out(`${PROFILE.location} · ${PROFILE.timezone}`),
      out(),
      out(PROFILE.headline),
    ],
  },
  {
    name: 'skills',
    usage: 'skills [layer]',
    desc: 'stack by layer',
    run: (args) => {
      const wanted = (args[0] || '').toLowerCase();
      const groups = wanted
        ? SKILL_GROUPS.filter((g) => g.key === wanted || g.label.toLowerCase() === wanted)
        : SKILL_GROUPS;
      if (!groups.length)
        return [
          err(`skills: unknown layer "${args[0]}"`),
          dim(`Layers: ${SKILL_GROUPS.map((g) => g.key).join(', ')}`),
        ];
      return groups.flatMap((g) => [
        key(`${g.label}`),
        out(`  ${g.items.join(' · ')}`),
        ...(wanted ? [dim(`  ${g.summary}`)] : []),
        out(),
      ]);
    },
  },
  {
    name: 'projects',
    usage: 'projects',
    desc: 'what I have shipped',
    run: () =>
      PROJECTS.flatMap((p) => [
        key(`${p.name} — ${p.sub}`),
        out(`  ${p.period} · ${p.role}${p.link ? ` · ${p.link}` : ''}`),
        out(`  ${p.summary}`),
        out(),
      ]),
  },
  {
    name: 'exp',
    usage: 'exp',
    desc: 'work history',
    run: () =>
      EXPERIENCE.flatMap((e) => [
        key(`${e.role} @ ${e.company}`),
        out(`  ${e.period}`),
        ...e.bullets.map((b) => out(`  - ${b}`)),
        out(),
      ]),
  },
  {
    name: 'edu',
    usage: 'edu',
    desc: 'education and awards',
    run: () => [
      ...EDUCATION.flatMap((e) => [
        key(e.school),
        out(`  ${e.period} · ${e.degree} · ${e.note}`),
      ]),
      out(),
      ...AWARDS.map((a) => out(`🏆 ${a.title} (${a.year})`)),
    ],
  },
  {
    name: 'contact',
    usage: 'contact',
    desc: 'how to reach me',
    run: (_args, ctx) => {
      ctx.openFile('contact');
      return [
        key('Reach me at'),
        ...SOCIALS.map((s) => out(`  ${pad(s.label, 10)} ${s.href}`)),
        out(`  ${pad('Phone', 10)} ${PROFILE.phone}`),
        out(),
        out('Opened contact.sh in the editor.', 'ok'),
      ];
    },
  },
  {
    name: 'cv',
    usage: 'cv',
    desc: 'open the full CV page',
    run: (_args, ctx) => {
      ctx.openUrl(CV_URL);
      return [out('Opening cv.html…', 'ok')];
    },
  },
  {
    name: 'theme',
    usage: 'theme [dark|light]',
    desc: 'switch colour scheme',
    run: (args, ctx) => {
      const next = args[0]?.toLowerCase();
      if (next && next !== 'dark' && next !== 'light')
        return [err(`theme: expected "dark" or "light", got "${args[0]}"`)];
      const applied = ctx.setTheme(next);
      return [out(`Theme set to ${applied}.`, 'ok')];
    },
  },
  {
    name: 'neofetch',
    usage: 'neofetch',
    desc: 'system info, portfolio edition',
    run: () => {
      const info = [
        `${PROFILE.handle}@portfolio`,
        '─────────────────────',
        `Role      ${PROFILE.role}`,
        `Company   ${PROFILE.company}`,
        `Uptime    ${new Date().getFullYear() - PROFILE.since}+ years in production`,
        `Shell     react 19 · vite`,
        `Stack     NestJS · Kafka · PostgreSQL · React · Solidity`,
        ...STATS.map((s) => `${pad(s.label.slice(0, 9), 10)}${s.value}`),
      ];
      const art = [
        '  ╭─────────────╮',
        '  │   < / >     │',
        '  │   N  A  M   │',
        '  ╰─────────────╯',
        '       ▀▀▀▀▀',
      ];
      const rows = Math.max(art.length, info.length);
      return Array.from({ length: rows }, (_, i) =>
        out(`${pad(art[i] || '', 21)}${info[i] || ''}`, i === 0 ? 'key' : undefined),
      );
    },
  },
  {
    name: 'date',
    usage: 'date',
    desc: 'time in Ha Noi',
    run: () => [
      out(
        new Date().toLocaleString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh' }) + ' ICT',
      ),
    ],
  },
  {
    name: 'echo',
    usage: 'echo <text>',
    desc: 'say it back',
    run: (args) => [out(args.join(' '))],
  },
  {
    name: 'pwd',
    usage: 'pwd',
    desc: 'where am I',
    run: () => [out(`/home/${PROFILE.handle}/portfolio`)],
  },
  {
    name: 'sudo',
    usage: 'sudo <cmd>',
    desc: 'nice try',
    run: (args) => [
      err(`${PROFILE.handle} is not in the sudoers file. This incident will be reported.`),
      ...(args.length ? [dim(`(you asked for: ${args.join(' ')})`)] : []),
    ],
  },
  {
    name: 'clear',
    usage: 'clear',
    desc: 'clear the terminal',
    run: (_args, ctx) => {
      ctx.clear();
      return [];
    },
  },
  {
    name: 'exit',
    usage: 'exit',
    desc: 'close the terminal panel',
    run: (_args, ctx) => {
      ctx.close();
      return [];
    },
  },
];

const CAT = {
  readme: () => [
    key(`# ${PROFILE.name}`),
    out(PROFILE.headline),
    out(),
    ...STATS.map((s) => out(`  ${pad(s.value, 12)} ${s.label}`)),
  ],
  about: () => PROFILE.bio.flatMap((p) => [out(p), out()]),
  skills: () =>
    SKILL_GROUPS.flatMap((g) => [key(g.label), out(`  ${g.items.join(' · ')}`), out()]),
  projects: () =>
    PROJECTS.flatMap((p) => [key(p.name), out(`  ${p.summary}`), out()]),
  experience: () =>
    EXPERIENCE.map((e) => out(`${pad(e.period, 20)} ${e.role} @ ${e.company}`)),
  contact: () => [
    ...SOCIALS.map((s) => out(`${pad(s.label, 10)} ${s.href}`)),
    out(`${pad('Phone', 10)} ${PROFILE.phone}`),
  ],
};

const COMMAND_BY_NAME = Object.fromEntries(COMMANDS.map((c) => [c.name, c]));

export const COMMAND_NAMES = COMMANDS.map((c) => c.name);

/** Parses and runs one line of input. Returns the output lines to append. */
export function runCommand(input, ctx) {
  const [name, ...args] = input.trim().split(/\s+/);
  if (!name) return [];
  const cmd = COMMAND_BY_NAME[name.toLowerCase()];
  if (!cmd)
    return [
      err(`command not found: ${name}`),
      dim('Type `help` to see what this shell knows.'),
    ];
  return cmd.run(args, ctx) || [];
}

/** Tab-completion: completes a command name, or a filename after cat/open. */
export function complete(input) {
  const parts = input.split(/\s+/);
  const pool =
    parts.length > 1 && ['cat', 'open'].includes(parts[0])
      ? FILES.map((f) => f.name)
      : COMMAND_NAMES;
  const token = parts[parts.length - 1];
  const hits = pool.filter((c) => c.startsWith(token));
  if (hits.length !== 1) return { input, hits: hits.length > 1 ? hits : [] };
  parts[parts.length - 1] = hits[0];
  return { input: parts.join(' ') + ' ', hits: [] };
}
