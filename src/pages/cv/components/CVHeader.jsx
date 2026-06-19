import { CV_FS } from '../../../styles/shared';

export default function CVHeader({ data }) {
  return (
    <div
      style={{
        background: 'rgba(0,245,255,.02)',
        border: '1px solid rgba(0,245,255,.18)',
        borderRadius: 16,
        marginBottom: 24,
        overflow: 'hidden',
        boxShadow: '0 0 40px rgba(0,245,255,.06)',
        position: 'relative',
      }}
      className="cv-glare"
    >
      <div className="cv-hdr" style={{ padding: '38px 40px', display: 'flex', alignItems: 'center', gap: 34 }}>
        {/* Text */}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: 'clamp(1.7rem,4vw,2.9rem)',
              fontWeight: 900,
              letterSpacing: '.06em',
              color: '#00F5FF',
              marginBottom: 4,
              textShadow: '0 0 22px rgba(0,245,255,.5)',
            }}
          >
            {data.name}
          </h1>
          <p
            style={{
              fontFamily: "'Space Mono',monospace",
              fontSize: CV_FS.body,
              color: '#FF9F43',
              letterSpacing: '.18em',
              fontWeight: 600,
              marginBottom: 18,
              textTransform: 'uppercase',
            }}
          >
            {data.title}
          </p>
          <div className="cv-contacts" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {data.contact.map((c) => (
              <span key={c.value} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: CV_FS.body, color: 'rgba(255,255,255,.65)' }}>
                <span>{c.icon}</span>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(255,255,255,.65)', textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00F5FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.65)')}
                  >
                    {c.value}
                  </a>
                ) : (
                  <span>{c.value}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,245,255,.28),transparent)' }} />
    </div>
  );
}
