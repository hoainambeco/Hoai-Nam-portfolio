import { useMemo } from 'react';

export default function Stars({ count = 90 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
  }, [count]);

  const shootingStars = useMemo(() => {
    return Array.from({ length: 4 }, (_, i) => ({
      id: i,
      top: Math.random() * 40,
      left: Math.random() * 60,
      delay: i * 3 + Math.random() * 2,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            opacity: Math.random() * 0.6 + 0.4,
          }}
        />
      ))}
      {shootingStars.map((s) => (
        <div
          key={`shoot-${s.id}`}
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: '120px',
            height: '2px',
            background:
              'linear-gradient(90deg, rgba(255,255,255,0.9), transparent)',
            boxShadow: '0 0 4px rgba(255,255,255,0.6)',
            animation: `shootingStar ${5 + (s.delay % 3)}s linear ${s.delay}s infinite`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}
