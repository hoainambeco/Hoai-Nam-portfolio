import { useEffect, useRef } from 'react';
import Stars from '../../components/Stars';
import { DATA } from './data';
import CVHeader from './components/CVHeader';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import './cv.css';

export default function CV() {
  const overlayRef = useRef(null);
  const wrapperRef = useRef(null);
  const blocksRef = useRef([]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (overlayRef.current) {
        overlayRef.current.style.opacity = '0';
        overlayRef.current.style.visibility = 'hidden';
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = '1';
        wrapperRef.current.style.transform = 'scale(1)';
      }
      blocksRef.current.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, i * 110);
      });
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const forceVisible = () => {
      if (overlayRef.current) {
        overlayRef.current.style.display = 'none';
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.opacity = '1';
        wrapperRef.current.style.transform = 'none';
      }
      blocksRef.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    };
    window.addEventListener('beforeprint', forceVisible);
    return () => window.removeEventListener('beforeprint', forceVisible);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        background: 'linear-gradient(180deg,#0C0520 0%,#130A30 35%,#0D1535 100%)',
        color: 'rgba(255,255,255,0.88)',
        minHeight: '100vh',
        fontSize: '14.5px',
        lineHeight: 1.75,
      }}
    >
      {/* Intro overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#030008',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: 'opacity 1s ease, visibility 1s',
        }}
      >
        <Stars count={60} />
        <div className="cv-intro">LOADING CV...</div>
        <div className="cv-scan" />
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 9,
            letterSpacing: '.3em',
            color: 'rgba(0,245,255,.4)',
            marginTop: 22,
          }}
        >
          NGUYEN HOAI NAM ✦ FULL-STACK DEVELOPER
        </div>
      </div>

      {/* Fixed star background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <Stars count={80} />
      </div>

      {/* Top bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(12,5,32,.88)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,245,255,.1)',
          padding: '10px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            letterSpacing: '.25em',
            color: 'rgba(0,245,255,.45)',
          }}
        >
          ✦ CURRICULUM VITAE
        </span>
        <div style={{ display: 'flex', gap: 10 }}>
          <a
            href="src/assets/CV/CV_Full-stack_Developer_Nguyen_Hoai_Nam.pdf"
            download
            className="cv-dl-btn"
          >
            ↓ DOWNLOAD PDF
          </a>
          <button className="cv-dl-btn acc" onClick={() => window.print()}>
            ⎙ PRINT
          </button>
        </div>
      </div>

      {/* Main wrapper */}
      <div
        ref={wrapperRef}
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 1120,
          margin: '0 auto',
          padding: '28px 24px 60px',
          opacity: 0,
          transform: 'scale(0.97)',
          transition: 'all 1.1s cubic-bezier(.1,1,.1,1)',
        }}
      >
        <CVHeader data={DATA} />

        <div
          className="cv-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.9fr', gap: 22 }}
        >
          <LeftColumn data={DATA} blocksRef={blocksRef} />
          <RightColumn data={DATA} blocksRef={blocksRef} />
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 40,
            textAlign: 'center',
            borderTop: '1px solid rgba(0,245,255,.1)',
            paddingTop: 22,
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 9,
              letterSpacing: '.3em',
              color: 'rgba(0,245,255,.3)',
            }}
          >
            ✦ NGUYEN HOAI NAM ✦ FULL-STACK DEVELOPER ✦ HA NOI, VIETNAM ✦
          </div>
        </div>
      </div>
    </div>
  );
}
