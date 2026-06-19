import { useRef } from 'react';

export default function Card({ children, accent }) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      style={{
        background: accent ? 'rgba(255,159,67,0.025)' : 'rgba(0,245,255,0.025)',
        border: `1px solid ${accent ? 'rgba(255,159,67,0.14)' : 'rgba(0,245,255,0.14)'}`,
        borderRadius: 12,
        padding: '18px 20px',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent ? 'rgba(255,159,67,0.45)' : 'rgba(0,245,255,0.45)';
        e.currentTarget.style.boxShadow = accent ? '0 0 20px rgba(255,159,67,0.1)' : '0 0 20px rgba(0,245,255,0.1)';
        e.currentTarget.style.transform = 'translateX(4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = accent ? 'rgba(255,159,67,0.14)' : 'rgba(0,245,255,0.14)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      {children}
    </div>
  );
}
