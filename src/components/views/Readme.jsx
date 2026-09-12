import Code, { Com, Fn, Key, Num, Prop, Punct, Str } from '../ide/Code';
import {
  DownloadIcon,
  ExternalIcon,
  GithubIcon,
  MailIcon,
  TerminalIcon,
} from '../ide/Icons';
import { useTypewriter } from '../../lib/hooks';
import { CV_PDF, CV_URL, PROFILE, STATS } from '../../data/profile';

export default function Readme({ openFile, openTerminal }) {
  const typed = useTypewriter(PROFILE.roles);

  return (
    <>
      <div className="hero__eyebrow">
        <Com># readme.md</Com>
        {PROFILE.available && (
          <span className="badge badge--live">
            <span className="status__dot" /> available for work
          </span>
        )}
      </div>

      <h1 className="h1">{PROFILE.name}</h1>

      <p className="hero__typed">
        {typed}
        <span className="caret">&nbsp;</span>
      </p>

      <p className="prose" style={{ marginTop: 10 }}>
        {PROFILE.headline} Based in {PROFILE.location}, {PROFILE.timezone}.
      </p>

      <div className="btn-row" style={{ marginTop: 22 }}>
        <a className="btn btn--primary" href={CV_URL}>
          <ExternalIcon /> Open CV
        </a>
        <a className="btn" href={CV_PDF} download>
          <DownloadIcon /> Download PDF
        </a>
        <a
          className="btn"
          href={`mailto:${PROFILE.email}`}
        >
          <MailIcon /> Email me
        </a>
        <a
          className="btn"
          href="https://github.com/hoainambeco"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon /> GitHub
        </a>
        <button className="btn" onClick={openTerminal}>
          <TerminalIcon /> Open terminal
        </button>
      </div>

      <div className="stats" style={{ marginTop: 30 }}>
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>

      <h2 className="h2">whoami</h2>

      <div className="snippet">
        <div className="snippet__head">
          <span className="t-type">TS</span> engineer.ts
        </div>
        <div className="snippet__body">
          <Code
            lines={[
              <>
                <Key>const</Key> <Fn>nam</Fn> <Punct>=</Punct> <Punct>{'{'}</Punct>
              </>,
              <>
                {'  '}
                <Prop>role</Prop>
                <Punct>:</Punct> <Str>{PROFILE.role}</Str>
                <Punct>,</Punct>
              </>,
              <>
                {'  '}
                <Prop>company</Prop>
                <Punct>:</Punct> <Str>{PROFILE.company}</Str>
                <Punct>,</Punct>
              </>,
              <>
                {'  '}
                <Prop>location</Prop>
                <Punct>:</Punct> <Str>{PROFILE.location}</Str>
                <Punct>,</Punct>
              </>,
              <>
                {'  '}
                <Prop>stack</Prop>
                <Punct>: [</Punct>
                <Str>NestJS</Str>
                <Punct>, </Punct>
                <Str>Kafka</Str>
                <Punct>, </Punct>
                <Str>PostgreSQL</Str>
                <Punct>, </Punct>
                <Str>React</Str>
                <Punct>, </Punct>
                <Str>Solidity</Str>
                <Punct>],</Punct>
              </>,
              <>
                {'  '}
                <Prop>shipping</Prop>
                <Punct>:</Punct> <Num>true</Num>
                <Punct>,</Punct> <Com>// since {PROFILE.since}</Com>
              </>,
              <>
                <Punct>{'}'}</Punct>
              </>,
            ]}
          />
        </div>
      </div>

      <h2 className="h2">start here</h2>

      <div className="grid-2">
        <NavCard
          file="projects.json"
          title="Projects"
          text="Four production systems — what they do and how they are built."
          onClick={() => openFile('projects')}
        />
        <NavCard
          file="experience.log"
          title="Experience"
          text="Four years across four companies, as a git log."
          onClick={() => openFile('experience')}
        />
        <NavCard
          file="skills.ts"
          title="Skills"
          text="The stack, grouped by layer, with what I actually did with it."
          onClick={() => openFile('skills')}
        />
        <NavCard
          file="contact.sh"
          title="Contact"
          text="Email, LinkedIn, GitHub — or send a message from here."
          onClick={() => openFile('contact')}
        />
      </div>
    </>
  );
}

function NavCard({ file, title, text, onClick }) {
  return (
    <button className="card" onClick={onClick} style={{ textAlign: 'left' }}>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="h3">{title}</span>
          <span className="dim" style={{ fontSize: 11 }}>
            {file}
          </span>
        </div>
        <p className="muted" style={{ fontSize: 12.5, marginTop: 6 }}>
          {text}
        </p>
      </div>
    </button>
  );
}
