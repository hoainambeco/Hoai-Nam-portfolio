import { CV_FS } from '../../../styles/shared';

export default function TechTag({ label, accent, ...rest }) {
  return (
    <span
      {...rest}
      style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: CV_FS.tag,
        fontWeight: 600,
        padding: '3px 9px',
        borderRadius: 2,
        letterSpacing: '0.05em',
        color: accent ? '#FF9F43' : '#00F5FF',
        border: `1px solid ${accent ? 'rgba(255,159,67,0.28)' : 'rgba(0,245,255,0.28)'}`,
        background: accent ? 'rgba(255,159,67,0.04)' : 'rgba(0,245,255,0.04)',
      }}
    >
      {label}
    </span>
  );
}
