import { TITLE_STYLE, CV_FS } from '../../../styles/shared';

export default function SectionTitle({ children, accent }) {
  return (
    <div className="cv-section-title" style={{ marginBottom: 18 }}>
      <div
        style={{
          ...TITLE_STYLE,
          fontFamily: "'Space Mono', monospace",
          borderColor: accent ? 'rgba(255,159,67,0.6)' : 'rgba(0,245,255,0.6)',
          color: accent ? '#FF9F43' : '#00F5FF',
          background: accent ? 'rgba(255,159,67,0.04)' : 'rgba(0,245,255,0.04)',
          boxShadow: accent ? '0 0 18px rgba(255,159,67,0.08)' : '0 0 18px rgba(0,245,255,0.08)',
          fontSize: CV_FS.title,
          padding: '6px 24px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
