import { CV_PDF, CV_URL, PROFILE, SOCIALS } from '../data/profile';
import { copyText, useFlash } from '../lib/hooks';
import { CheckIcon, CopyIcon } from './Icons';
import Section from './Section';

export default function Contact() {
  const [copied, flash] = useFlash();

  const copyEmail = async () => {
    if (await copyText(PROFILE.email)) flash();
  };

  return (
    <Section id="contact" title="Contact">
      <div>
        <p className="contact__lead">
          Email is the best way to reach me. I work from {PROFILE.location}, on{' '}
          {PROFILE.timezone}.
        </p>

        <div className="contact__email-row">
          <a className="contact__email" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <button
            type="button"
            className="btn btn--sm"
            onClick={copyEmail}
            aria-label={copied ? 'Copied email address' : 'Copy email address'}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <span className="visually-hidden" aria-live="polite">
            {copied ? 'Email address copied' : ''}
          </span>
        </div>

        <dl className="contact__list">
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
            </dd>
          </div>
          {SOCIALS.filter((s) => s.id !== 'email').map((s) => (
            <div key={s.id}>
              <dt>{s.label}</dt>
              <dd>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.handle}
                </a>
              </dd>
            </div>
          ))}
          <div>
            <dt>CV</dt>
            <dd>
              <a href={CV_URL}>Read online</a> or{' '}
              <a href={CV_PDF} download="Nguyen-Hoai-Nam-CV.pdf">
                download PDF
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
