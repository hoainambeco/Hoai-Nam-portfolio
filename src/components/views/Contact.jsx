import { useState } from 'react';
import { ExternalIcon, GithubIcon, LinkedinIcon, MailIcon } from '../ide/Icons';
import { copyText, useFlash } from '../../lib/hooks';
import { PROFILE, SOCIALS } from '../../data/profile';

const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
};

export default function Contact() {
  const [form, setForm] = useState({ from: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, flashCopied] = useFlash();

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.from}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const copyEmail = async () => {
    if (await copyText(PROFILE.email)) flashCopied();
  };

  return (
    <>
      <p className="comment">#!/bin/bash — contact.sh</p>
      <h1 className="h1" style={{ fontSize: '1.7rem', marginTop: 6 }}>
        Contact
      </h1>
      <p className="prose" style={{ marginTop: 10 }}>
        Hiring, freelance, or just a question about something on this page — mail
        lands fastest. I usually reply within a day.
      </p>

      <h2 className="h2">channels</h2>
      <div className="link-list">
        {SOCIALS.map((s) => {
          const Icon = ICONS[s.id];
          return (
            <a
              className="link-row"
              key={s.id}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
            >
              <Icon />
              <span className="link-row__key">{s.label}</span>
              <span className="link-row__val">{s.handle}</span>
              <ExternalIcon width="13" height="13" />
            </a>
          );
        })}
      </div>

      <div className="btn-row" style={{ marginTop: 12 }}>
        <button className="btn" onClick={copyEmail}>
          {copied ? '✓ copied' : `copy ${PROFILE.email}`}
        </button>
        <a className="btn" href={`tel:${PROFILE.phone}`}>
          {PROFILE.phone}
        </a>
      </div>

      <h2 className="h2">send a message</h2>

      {sent && (
        <p className="notice" style={{ marginBottom: 14 }}>
          ✓ Your mail client is open with the message ready — hit send there.
        </p>
      )}

      <form className="form" onSubmit={submit}>
        <div className="field">
          <label htmlFor="from">from</label>
          <input
            id="from"
            name="from"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            value={form.from}
            onChange={change}
          />
        </div>
        <div className="field">
          <label htmlFor="subject">subject</label>
          <input
            id="subject"
            name="subject"
            required
            placeholder="Backend role / project idea / question"
            value={form.subject}
            onChange={change}
          />
        </div>
        <div className="field">
          <label htmlFor="message">message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="A few lines about what you are building…"
            value={form.message}
            onChange={change}
          />
        </div>

        <div className="btn-row">
          <button className="btn btn--primary" type="submit">
            <MailIcon /> ./send.sh
          </button>
          <span className="dim" style={{ alignSelf: 'center', fontSize: 11.5 }}>
            opens your mail client — nothing is stored here
          </span>
        </div>
      </form>
    </>
  );
}
