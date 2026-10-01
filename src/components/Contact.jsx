import { copyText, useFlash } from '../lib/hooks';
import { useI18n } from '../lib/i18n';
import { CheckIcon, CopyIcon } from './Icons';
import Section from './Section';

export default function Contact() {
  const [copied, flash] = useFlash();
  const { t, data } = useI18n();
  const { PROFILE, SOCIALS } = data;

  const copyEmail = async () => {
    if (await copyText(PROFILE.email)) flash();
  };

  return (
    <Section id="contact" title={t.sections.contact}>
      <div>
        <p className="contact__lead">
          {t.contactLead(PROFILE.location, PROFILE.timezone)}
        </p>

        <div className="contact__email-row">
          <a className="contact__email" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <button
            type="button"
            className="btn btn--sm"
            onClick={copyEmail}
            aria-label={copied ? t.copiedLabel : t.copyLabel}
          >
            {copied ? <CheckIcon /> : <CopyIcon />}
            {copied ? t.copied : t.copy}
          </button>
          <span className="visually-hidden" aria-live="polite">
            {copied ? t.copiedLive : ''}
          </span>
        </div>

        <dl className="contact__list">
          <div>
            <dt>{t.phone}</dt>
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
              <a href={data.cvUrl}>{t.readOnline}</a> {t.or}{' '}
              <a href={data.cvPdf} download={data.cvPdfName}>
                {t.downloadPdf}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
