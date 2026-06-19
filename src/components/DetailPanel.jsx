import { useIsMobile } from '../hooks/useIsMobile'

const CLOSE_BTN = {
  position: 'absolute', top: 12, right: 14,
  background: 'none', border: 'none', cursor: 'pointer',
  color: 'rgba(255,255,255,0.55)', fontSize: 22, lineHeight: 1,
  padding: '4px 8px', fontFamily: 'sans-serif',
}

export default function DetailPanel({ color, onClose, children }) {
  const mobile = useIsMobile()

  const panelStyle = mobile
    ? {
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '88vw', maxWidth: 420,
        borderRadius: 12,
        maxHeight: '72vh', overflowY: 'auto',
        zIndex: 20,
      }
    : {
        position: 'absolute', right: '3%', top: '50%',
        transform: 'translateY(-50%)',
        maxWidth: 340, width: '90vw',
        zIndex: 20,
      }

  return (
    <>
      {/* Backdrop — tap to close */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0, zIndex: 19,
          background: 'rgba(0,0,0,0.45)',
        }}
      />

      <div style={{ ...panelStyle }}>
        <div style={{
          background: 'rgba(8,8,30,0.97)',
          border: `1px solid ${color}44`,
          backdropFilter: 'blur(16px)',
          boxShadow: `0 0 30px ${color}20`,
          animation: mobile ? 'slideInCenter 0.24s ease-out' : 'slideInRight 0.26s ease-out',
          padding: '20px 24px 28px',
          borderRadius: mobile ? 12 : 0,
          position: 'relative',
        }}>
          <button
            onClick={onClose}
            style={CLOSE_BTN}
            onMouseEnter={e => e.currentTarget.style.color = '#fff'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
          >
            ✕
          </button>

          {children}
        </div>
      </div>
    </>
  )
}
