import { useRef, useState, useEffect } from 'react';
import TechTag from './TechTag';

const GAP = 5;

function packByWidth(items, rowWidth) {
  const result = [];
  const pool = [...items];

  while (pool.length) {
    let space = rowWidth;
    const row = [];
    const bySize = [...pool].sort((a, b) => b.w - a.w);

    for (const item of bySize) {
      const cost = item.w + (row.length ? GAP : 0);
      if (cost <= space) {
        row.push(item);
        space -= cost;
        pool.splice(pool.indexOf(item), 1);
      }
    }

    // Fallback: tag quá rộng, cứ lấy cái đầu pool
    if (!row.length) { result.push(pool.shift()); continue; }
    result.push(...row);
  }

  return result.map(i => i.label);
}

export default function PackedTags({ tags, accent }) {
  const wrapperRef = useRef(null);
  const [packed, setPacked] = useState(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const repack = () => {
      const rowWidth = el.getBoundingClientRect().width;
      if (!rowWidth) return;

      // Đo width thực của từng tag từ DOM
      const spans = el.querySelectorAll('[data-tag]');
      const widths = {};
      spans.forEach(s => {
        widths[s.dataset.tag] = s.getBoundingClientRect().width;
      });

      const items = tags.map(label => ({ label, w: widths[label] ?? 60 }));
      setPacked(packByWidth(items, rowWidth));
    };

    // Chờ font load xong mới đo để tránh sai kích thước
    document.fonts.ready.then(repack);

    const ro = new ResizeObserver(repack);
    ro.observe(el);
    return () => ro.disconnect();
  }, [tags]);

  return (
    <div
      ref={wrapperRef}
      className="cv-badges"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: GAP,
        // Ẩn trong lần render đầu để tránh flash thứ tự cũ
        visibility: packed ? 'visible' : 'hidden',
      }}
    >
      {(packed ?? tags).map(t => (
        <TechTag key={t} label={t} accent={accent} data-tag={t} />
      ))}
    </div>
  );
}
